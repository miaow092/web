//swiper
var swiper = new Swiper('.mySwiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	speed: 700,
	coverflowEffect: {
		rotate: 0,
		stretch: -1000,
		depth: 800,
		modifier: 1,
		slideShadows: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
