(function () {
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('popupVideo');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.video-trigger');
    if (!trigger) return;

    const src = trigger.dataset.videoSrc;
    if (!src) return;

    video.src = src;
    video.currentTime = 0;
    video.play();

    popup.classList.add('active');
  });

  function closePopup() {
    video.pause();
    video.removeAttribute('src');
    video.load();

    popup.classList.remove('active');
  }

  popup.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('video-popup-overlay') ||
      e.target.classList.contains('video-popup-close')
    ) {
      closePopup();
    }
  });
})();
