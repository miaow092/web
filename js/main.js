//figure 배경색 바꾸기
const figure = document.querySelector('#figure');
const next = document.querySelector('.swiper-button-next');
const prev = document.querySelector('.swiper-button-prev');
const bgColors = ['royalblue', 'mediumseagreen', 'coral', 'deeppink'];

figure.style.backgroundColor = bgColors[0];

next.addEventListener('click', ()=>{
  
  color = figure.style.backgroundColor;

  if(figure.style.backgroundColor = bgColors[0]){
    figure.style.backgroundColor = bgColors[1]
  }else if(figure.style.backgroundColor = bgColors[1]){
    figure.style.backgroundColor = bgColors[2]
  }
  //왜 안 될까....
})