const body = document.querySelector('body');
const main = document.querySelector(".youtube .content_sub .inner main");
const key = "AIzaSyC6QtD-1n1UHsw8dD64nAkoS8BVKV5AV5M";
const playListId = "PL-Cr7h7IRk-tDu8QdvcVP3-P-deQflV9v";
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxesRults=${num}`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json => {
    let items = json.items;
    console.log(items);

    let result = '';

    items.forEach((item, index) =>{
        
        result += `
            <article>
                <div class="con">
            
                    <span class="number">0${index + 1}</span>
                    <a class="pic" href="#" data-vid="${item.snippet.resourceId.videoId}">
                        <img src="${item.snippet.thumbnails.medium.url}">
                    </a>
                    <h2 data-vid="${item.snippet.resourceId.videoId}"> ${item.snippet.title}</h2>         
                </div>
            </article>
        `;
    })

    main.innerHTML = result;
});

    main.addEventListener('click', e=>{
        e.preventDefault();

        if(!e.target.closest('a')) return;
        const vidId = e.target.closest('a').getAttribute('data-vid');

        let pop = document.createElement("aside");
        pop.innerHTML = `
            <iframe src='https://youtube.com/embed/${vidId}' frameborder='0' width='100%' height='100%' allowfullscreen>
            </iframe>
            <span class='btnClose'>CLOSE</span>
            `;
            
        body.prepend(pop);
    })

    body.addEventListener('click', e=>{
        const pop = document.querySelector('aside');
        if(pop == null) return;
        const close = pop.querySelector('span');
        if(e.target == close) e.target.closest('aside').remove();
    })



