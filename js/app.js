document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".asksContainer-item");
  
  items.forEach((item) => {
    const top = item.querySelector(".asksContainer-item-top");
    const bottom = item.querySelector(".asksContainer-item-bottom");
    const label = item.querySelector(".label");

    bottom.style.maxHeight = "0";
    bottom.style.overflow = "hidden";
    bottom.style.transition = "max-height 0.4s ease";

    top.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".asksContainer-item-bottom").style.maxHeight = "0";
        el.querySelector(".label").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        label.textContent = "–";
      }
    });
  });

  const baners = document.querySelectorAll(".section-3-baners-item");

  baners.forEach((item) => {
    const top = item.querySelector(".banner-item");
    const bottom = item.querySelector(".banner-bottom");
    const label = item.querySelector(".section-3-baners-item-img-plus");

    if (!top || !bottom || !label) return; // null-перевірка

    bottom.style.maxHeight = "0";
    bottom.style.overflow = "hidden";
    bottom.style.transition = "max-height 0.4s ease";

    top.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      baners.forEach((el) => {
        const elBottom = el.querySelector(".banner-bottom");
        const elLabel = el.querySelector(".section-3-baners-item-img-plus");
        if (!elBottom || !elLabel) return;

        el.classList.remove("active");
        elBottom.style.maxHeight = "0";
        elLabel.style.transform = "rotate(0deg)";
      });

      if (!isActive) {
        item.classList.add("active");
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        label.style.transform = "rotate(45deg)";
      }
    });
  });



  const banersTogle = document.querySelectorAll(".section-4-baners-item");
  
  banersTogle.forEach((item) => {
  const top = item.querySelector(".section-4-baners-item-title");
  const bottom = item.querySelector(".section-4-baners-item-content");
  const label = item.querySelector(".section-4-arrow");

  bottom.style.maxHeight = "0";
  bottom.style.overflow = "hidden";
  bottom.style.transition = "max-height 0.4s ease";

  top.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Закриваємо всі інші елементи
    banersTogle.forEach((el) => {
      if (el === item) return; // пропускаємо цей елемент
      const elBottom = el.querySelector(".section-4-baners-item-content");
      const elLabel = el.querySelector(".section-4-arrow");
      el.classList.remove("active");
      elBottom.style.maxHeight = "0";
      elLabel.style.transform = "rotate(0deg)";
    });

    // Тепер toggle для цього елемента
    if (isActive) {
      // Закриваємо, якщо вже активний
      item.classList.remove("active");
      bottom.style.maxHeight = "0";
      label.style.transform = "rotate(0deg)";
    } else {
      // Відкриваємо
      item.classList.add("active");
      bottom.style.maxHeight = bottom.scrollHeight + "px";
      label.style.transform = "rotate(180deg)";
    }
  });
});


  function startConcrete24hTimer(timerSelector, valueSelector, storageKey) {
    const timer = document.querySelector(timerSelector);
    if (!timer) return;
    const values = timer.querySelectorAll(valueSelector);
    const TOTAL_TIME = 24 * 60 * 60 * 1000;

    let startTime = localStorage.getItem(storageKey);

    // Перевіряємо реальне значення з кешу
    const hoursFromCache = values[0].textContent || "";
    if (!startTime || hoursFromCache.startsWith("+")) {
      // Якщо в кеші є + або немає значення — очищаємо і стартуємо заново
      localStorage.removeItem(storageKey);
      startTime = Date.now();
      localStorage.setItem(storageKey, startTime);
    } else {
      startTime = parseInt(startTime, 10);
    }

    function updateTimer() {
      const now = Date.now();
      let elapsed = now - startTime;

      if (elapsed >= TOTAL_TIME || elapsed < 0) {
        startTime = now;
        localStorage.setItem(storageKey, startTime);
        elapsed = 0;
      }

      const remaining = TOTAL_TIME - elapsed;
      const hours = Math.floor(remaining / 3600000);
      const minutes = Math.floor((remaining % 3600000) / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);

      // Примусово переписуємо значення, щоб ніякого + не було
      values[0].textContent = String(hours).padStart(2, "0");
      values[1].textContent = String(minutes).padStart(2, "0");
      values[2].textContent = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  startConcrete24hTimer(
    ".footer-timer",
    ".footer-timer-value",
    "timerStartTime"
  );
  startConcrete24hTimer(
    ".what-content-time",
    ".what-content-time-item-title",
    "whatContentTimerStartTime"
  );
});