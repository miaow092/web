//swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -300,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  speed:500,
  pagination: {
    el: ".swiper-pagination",
  },
});