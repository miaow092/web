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

//favItme hover
const items = document.querySelectorAll('#favorite .favItem img');

for(let el of items){

  el.addEventListener('mouseenter', e => {
    
    new Anime(el,{
      prop: "opacity",
      value: 1,
      duration: 200,
    })
    
  })
  el.addEventListener('mouseout', e => {
    
    new Anime(el,{
      prop: "opacity",
      value: 0.5,
      duration: 200,
    })
    
  })

}
