const body = document.querySelector('body');
const section = document.querySelector('.gallery .content_sub .inner section');
const input = document.querySelector('#search');
const btnSearch = document.querySelector('.btnSearch');
const loading = document.querySelector('.loading');
const base = 'https://www.flickr.com/services/rest/?';
const method_interest = 'flickr.interestingness.getList';
const method_search = 'flickr.photos.search';
const key = '554ae9d07ac78ae8534bc6998305d288';
const per_page = 50;
const url = `${base}method=${method_interest}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

callDate(url);

btnSearch.addEventListener('click', e=>{
    let tag = input.value;
    const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;

    callDate(url)
})

section.addEventListener('click', e=>{
    e.preventDefault();
    
    let target = e.target.closest('.item').querySelector('.pic img');

    if(e.target == target){
        let imgSrc = e.target.parentElement.getAttribute('href');

        let pop = document.createElement('aside');
        pop.classList.add('pop');
        let pops =`
            <div class='con'>
                <img src=${imgSrc}>
            </div>
            <span class='close'>Close</span>
        `;
        pop.innerHTML = pops;
        body.append(pop);    
        body.style.overflow = 'hidden';    
    }
});

body.addEventListener('click', e=>{
    let pop = body.querySelector('.pop');
    
    if(pop){
        let close = pop.querySelector('.close');
        if(e. target == close){
            pop.remove();
            body.style.overflow = 'auto';
        }
    }
})



/*fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    const items = json.photos.photo;
    console.log(items);
    creatLine(items);
    imgLoaded();
    
})*/

function callDate(url){
    fetch(url)
    .then(data=>{
        return data.json();
    })
    .then(json=>{
        const items = json.photos.photo;
        console.log(items);
        creatLine(items);
        imgLoaded();
    })
} 

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