const listElements = document.querySelectorAll(".list__bottom--click");

const iconMenu = document.querySelector(".icon__menu");

const navMenu = document.querySelector(".list");

iconMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("visible");
})

listElements.forEach(listElements =>{
    listElements.addEventListener("click", ()=>{
        listElements.classList.toggle("arrow")
        let height = 0;
        let menu = listElements.nextElementSibling;
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
})
