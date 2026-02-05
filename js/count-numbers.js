(function () {
  const span = document.getElementById('spots-count');
  if (!span) return;

  const START_VALUE = 22;
  const HOURS_STEP = 3;

  // ⚠️ Місяці в JS: 0–11
  const START_DATE = new Date(Date.UTC(2026, 0, 16, 9, 0, 0));

  function updateValue() {
    const now = new Date();

    const diffMs = now - START_DATE;
    if (diffMs < 0) {
      span.textContent = START_VALUE;
      return;
    }

    const diffHours = diffMs / (1000 * 60 * 60);
    const decrease = Math.floor(diffHours / HOURS_STEP);

    const value = Math.max(START_VALUE - decrease, 0);
    span.textContent = value;
  }

  updateValue();

  // Оновлюємо раз на хвилину (достатньо)
  setInterval(updateValue, 60 * 1000);
})();
