(function () {
  const light = document.querySelector('.light-anim');
  const cards = document.querySelector('.anim-cards');

  if (!light) return;

  // --- Налаштування ---
  const SCALE_MIN = 0.8;
  const SCALE_MAX = 1;
  const MOVE_Y_MIN = 30;  // px (коли далеко)
  const MOVE_Y_MAX = 0;   // px (коли по центру)
  const EASE = 0.08;

  let currentScale = SCALE_MIN;
  let targetScale = SCALE_MIN;

  let currentY = MOVE_Y_MIN;
  let targetY = MOVE_Y_MIN;

  // --- Helpers ---
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const lerp = (a, b, t) => a + (b - a) * t;

  function updateTarget() {
    const rect = light.getBoundingClientRect();
    const vh = window.innerHeight;

    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = vh / 2;

    const distance = Math.abs(viewportCenter - elementCenter);
    const maxDistance = vh / 2 + rect.height / 2;

    const progress = clamp(1 - distance / maxDistance, 0, 1);

    // Scale
    targetScale = lerp(SCALE_MIN, SCALE_MAX, progress);

    // Y offset for cards (привʼязка до прогресу)
    targetY = lerp(MOVE_Y_MIN, MOVE_Y_MAX, progress);
  }

  function animate() {
    currentScale = lerp(currentScale, targetScale, EASE);
    currentY = lerp(currentY, targetY, EASE);

    light.style.transform = `scale(${currentScale})`;

    if (cards) {
      cards.style.transform = `translateY(${currentY}px)`;
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('scroll', updateTarget, { passive: true });
  window.addEventListener('resize', updateTarget);

  updateTarget();
  animate();
})();
