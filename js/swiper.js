//swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -700,
      depth: 800,
      modifier: 1,
      slideShadows: false,
    },
    allowTouchMove: false,
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    speed:700,
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiepr-button-prev",
    },
  });
  