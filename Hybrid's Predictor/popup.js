document.addEventListener("DOMContentLoaded", function () {
  const v = document.getElementById("submitBtn");
  const v2 = document.getElementById("button1");
  const v3 = document.getElementById("username");
  const v4 = document.getElementById("loginDiv");
  const v5 = document.getElementById("loginForm");
  const v6 = document.getElementById("buttonsDiv");
  const v7 = document.getElementById("message");
  const v8 = document.getElementById("countdown");
  const v9 = document.getElementById("imageContainer");
  const v10 = document.getElementById("image1");
  const v11 = document.getElementById("image2");
  const vO = {
    JGXYnoiAOzxFutpjKOHcHtAcw: {
      duration: 3600000
    },
    kZMOWWqPOtTMUkVoYFVKGkWce: {
      duration: 86400000
    },
    bVdOJWjKxlGYVvtVcraEYmhyw: {
      duration: 86400000
    },
    mtledFbFrhfYrfKDqqhHzfeCo: {
      duration: 604800000
    },
    kzTNPeknlmFeMyjLqBLZVOojP: {
      duration: 604800000
    },
    ouVrNFxBvQQZeIcPMTbZyYuvh: {
      duration: 604800000
    },
    xIaVwHyAUoPqhmReiTVRjvquH: {
      duration: 2592000000
    },
    xhHcHmlvsunqCOUNzNIlSFuwx: {
      duration: 2592000000
    },
    hhrTEaNujfBoIeLkIxmvxdBJW: {
      duration: 2592000000
    },
    WqwpVQkHwbSgdECJGJOHzxFyU: {
      duration: Infinity
    }
  };
  v.addEventListener("click", function () {
    const v12 = v3.value.trim();
    const v13 = vO[v12];
    if (v13) {
      const v14 = v13.duration === Infinity ? Infinity : Date.now() + v13.duration;
      localStorage.setItem("keyExpiration", v14);
      v5.classList.add("hidden");
      v6.classList.remove("hidden");
      v7.textContent = "";
      f(v14);
    } else {
      v7.textContent = "Wrong Key!";
      v7.className = "error";
    }
  });
  v2.addEventListener("click", function () {
    v2.disabled = true;
    v2.textContent = "Calculating just wait";
    const v15 = Math.floor(Math.random() * 3000) + 2000;
    
    setTimeout(function () {
      v2.textContent = "Found!";
      v9.style.animation = "rotateCoin 5s";

      // --- RASTGELE GÖRSEL SEÇİMİ ---
      // v10 veya v11 üzerinden ya da rastgele bir dizi mantığıyla:
      const secim = Math.random() < 0.5 ? "mavi" : "kırmızı";
      
      if (secim === "mavi") {
        v10.style.display = "block";
        v11.style.display = "none";
      } else {
        v10.style.display = "none";
        v11.style.display = "block";
      }
      // -----------------------------

      setTimeout(function () {
        v9.style.animation = "";
      }, 5000);
      
      setTimeout(function () {
        v2.textContent = "Start";
        v2.disabled = false;
      }, 5000);
    }, v15);
  });
  function f(p) {
    const vSetInterval = setInterval(() => {
      if (p === Infinity) {
        v8.textContent = "Lifetime Subscription";
        clearInterval(vSetInterval);
        return;
      }
      const v16 = p - Date.now();
      if (v16 <= 0) {
        clearInterval(vSetInterval);
        v8.textContent = "Key expired!";
        v6.classList.add("hidden");
        v5.classList.remove("hidden");
      } else {
        const v17 = Math.floor(v16 / 86400000);
        const v18 = Math.floor(v16 % 86400000 / 3600000);
        const v19 = Math.floor(v16 % 3600000 / 60000);
        const v20 = Math.floor(v16 % 60000 / 1000);
        v8.textContent = "Remaining time: " + v17 + "d " + v18 + "h " + v19 + "m " + v20 + "s";
      }
    }, 1000);
  }
  const v21 = localStorage.getItem("keyExpiration");
  if (v21 && (v21 === "Infinity" || Date.now() < v21)) {
    v5.classList.add("hidden");
    v6.classList.remove("hidden");
    f(v21 === "Infinity" ? Infinity : Number(v21));
  } else {
    localStorage.removeItem("keyExpiration");
  }
});
