window.addEventListener('load', ()=>{
    const grid = new Isotope("section", {
        itemSelector : "article",
        columnWidth: "article",
        transitionDuration :"0.8s"
    });


    const btns = document.querySelectorAll(".shop .content_sub_shop ul li"); 
    
    for(let el of btns){
        el.addEventListener("click", e=>{
            e.preventDefault(); 

            const sort = e.currentTarget.querySelector("a").getAttribute("href"); 

            grid.arrange({
                filter:sort
            });

            for(let el of btns){
                el.classList.remove("on"); 
            }
            e.currentTarget.classList.add("on"); 

        })
    }
})

