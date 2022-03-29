//swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop: true,
  speed: 700,
  coverflowEffect: {
  rotate: 0,
  stretch: -700,
  depth: 800,
  modifier: 1,
  slideShadows: false
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});