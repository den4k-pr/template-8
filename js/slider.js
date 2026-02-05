$(document).ready(function () {
  initSlider('.section-2-slider', '.section-2-buttons-prev', '.section-2-buttons-next');
  initSlider('.section-7-slider', '.section-7-buttons-prev', '.section-7-buttons-next');
  initSlider('.section-8-slider', '.section-8-buttons-prev', '.section-8-buttons-next');
});

function initSlider(slider, prev, next) {
  $(slider).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(prev),
    nextArrow: $(next),

    autoplay: true, 
    autoplaySpeed: 3000,

    pauseOnHover: true,
    pauseOnFocus: true,

    fade: false,
    cssEase: 'ease-in-out',
    speed: 500
  });
}
