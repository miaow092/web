//키 554ae9d07ac78ae8534bc6998305d288

//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

//버디 아이콘 http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg

//flickr.interestingness.getList

//https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

const body = document.querySelector("body"); 
const frame = document.querySelector("section"); 
const input = document.querySelector("#search"); 
const btnSearch = document.querySelector(".btnSearch"); 
const loading = document.querySelector(".loading");
const main = document.querySelector('.content');
const base = 'https://www.flickr.com/services/rest/?';
const method = 'flickr.interestingness.getList';
const key = '554ae9d07ac78ae8534bc6998305d288';
const per_page = 100;
const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

callData(url); 

btnSearch.addEventListener("click", e=>{
    let tag = input.value; 
    const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;
    
    callData(url);
});

input.addEventListener("keyup", e=>{
    if(e.key === "Enter"){
        let tag = input.value; 
        const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;
        
        callData(url);
    }
})

frame.addEventListener("click", e=>{
    e.preventDefault(); 
    let target = e.target.closest(".item").querySelector(".pic img"); 
    if(e.target === target){
        let imgSrc = e.target.parentElement.getAttribute("href"); 
        let pop = document.createElement("aside"); 
        pop.classList.add("pop"); 
        let pops = `
                    <div class="con">
                        <img src="${imgSrc}">
                    </div>
                    <span class="close">close</span>
        `; 
        pop.innerHTML = pops; 
        body.append(pop);
        body.style.overflow = "hidden"; 
    }   
});
body.addEventListener("click", e=>{
    let pop = body.querySelector(".pop"); 
    if(pop){
        let close = pop.querySelector(".close"); 
        if(e.target == close){
            pop.remove(); 
            body.style.overflow = "auto"; 
        }
    }
    
})
function callData(url){
    fetch(url)
    .then(data=>{   
        return data.json();    
    })
    .then(json=>{
        const items = json.photos.photo; 
        console.log(items); 
        createList(items);
        imgLoaded(); 
    })
}
function createList(items){
    let htmls =""; 
    items.forEach(data=>{
        htmls +=`
                <article class="item">
                    <div>
                        <a class="pic" href="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                            <img src="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg">
                        </a>
                        <p>${data.title}</p>
                        <div class="profile">
                            <img src="http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg">
                            <span>${data.owner}</span>
                        </div>
                    </div>
                </article>
        `; 
    })
    frame.innerHTML = htmls;     
}
function imgLoaded(){     
    const thumbs = document.querySelectorAll(".pic img"); 
    const len = thumbs.length; 
    let count = 0; 
    thumbs.forEach(thumb =>{
        thumb.onerror = ()=>{
            thumb.setAttribute("src", "img/k1.jpg");
        }
        thumb.onload =()=>{
            count++; 
            if(count === len){
                new Isotope(frame,{
                    itemSelector :".item", 
                    columnWidth : ".item", 
                    transitionDuration :"0.8s"
                })
            }
        }
    });
    
    const buddies = document.querySelectorAll(".profile img"); 
    buddies.forEach(buddy=>{
        buddy.onerror=()=>{
            buddy.setAttribute("src", "https://www.flickr.com/images/buddyicon.gif"); 
        }
    })
}