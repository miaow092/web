/**
 * 키 554ae9d07ac78ae8534bc6998305d288
 * 
 * 
 * https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
 * url : https://www.flickr.com/services/rest/?
 * 
 * 버디 아이콘
모든 flickr 사용자는 자신을 표시하는 데 사용하는 48x48 픽셀의 버디 아이콘이 있습니다.

사진을 지도로 끌어다 놓아서(사진관리 사용) 사진 촬영지를 표시하거나 세계 지도를 찾아서 다른 사람들이 어디에 갔다 왔고 무엇을 보았는지를 볼 수 있습니다.

아이콘 서버가 0보다 크면 url은 다음 형식입니다.

http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg
그렇지 않은 경우에는 다음 url이 사용되어야 합니다.

https://www.flickr.com/images/buddyicon.gif
*/

const section = document.querySelector('.gallery .content_sub .inner section');
const loading = document.querySelector('.loading');
const base = 'https://www.flickr.com/services/rest/?';
const method_interest = 'flickr.interestingness.getList';
const key = '554ae9d07ac78ae8534bc6998305d288';
const per_page = 50;
const url = `${base}method=${method_interest}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    const items = json.photos.photo;
    creatLine(items);
    imgLoaded();
    
})

function creatLine(items){
    let gallery = '';
    
    items.forEach(data=>{
        
        gallery += `
            <article class="item">
                <div>
                    <a class='pic' href="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                        <img src='https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg'>
                        <p>${data.title}</p>
                    </a>
                </div>
            </article>
        `;
    })

    section.innerHTML = gallery;
}

section.addEventListener("click", e=>{
    e.preventDefault(); 

    let imgSrc = e.target.parentElement.getAttribute("href"); 

    let pop = document.createElement("aside"); 
    pop.classList.add("pop"); 
    let pops =`
                <div class="con">
                    <img src="${imgSrc}">
                </div>
                <span class="close">close</span>
    `;
    pop.innerHTML = pops; 
    body.append(pop); 
})

function imgLoaded(){
    const thumbs = document.querySelectorAll('.pic img');
    const len = thumbs.length;
    let count = 0;

    thumbs.forEach(thumb => {
        //엑박 이미지 대체
        thumb.onerror = () => {
            thumb.setAttribute('src', 'img/error.jpg');
        }
        //이미지 로딩 후  isotope적용
        thumb.onload = () => {
            count++;
            if(count === len){
                new Isotope(section,{
                    itemSelector : ".item",
                    columnWidth : ".itme",
                    transitionDuration : "0.8s"
                })

                section.classList.add('on');
                loading.classList.add('off');
            }
        }

    });

}