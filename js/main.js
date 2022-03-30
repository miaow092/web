//popup창

const popup = document.querySelector('#figure .popup');
const btnClose = popup.querySelector('.close');
const isCookie = document.cookie.indexOf('today=cookie');


if(isCookie == -1){
    popup.style.display = 'block';
    //function lineDrawing(popup);
}else{
    popup.style.display = 'none';
}

btnClose.addEventListener('click', e => {
    e.preventDefault();
    let isChecked = popup.querySelector('input[type=checkbox]').checked;
    if(isChecked) setCookie("today", "cookie", 1);

    popup.style.display = 'none';
})

function setCookie(name, value, due){
    const today = new Date();
    const day = today.getDate();
    today.setDate(day + due);
    const dueDate = today.toGMTString();
    document.cookie = `${name}=${value}; path=/; expirse=${dueDate};`;
}

function lineDrawing(popup){
const popup_top = popup.querySelector('.top');
const popup_right = popup.querySelector('.right');
const popup_bottom = popup.querySelector('.bottom');
const popup_left = popup.querySelector('.left');
const popup_inner = popup.querySelector('.inner');

    popup.style.display = 'block';

    new Anime(popup_top,{
        prop:"width", 
        value: "100%", 
        duration: 500, 
        callback :()=>{
            new Anime(popup_right,{
                prop: "height", 
                value :"100%", 
                duration: 500, 
                callback :()=>{
                    new Anime(popup_bottom,{
                        prop:"width", 
                        value:"100%", 
                        duration:500, 
                        callback:()=>{
                            new Anime(popup_left, {
                                prop:"height", 
                                value:"100%", 
                                duration:500, 
                                callback :()=>{
                                    new Anime(popup_inner,{
                                        prop:"opacity",
                                        value:1, 
                                        duration:500
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}