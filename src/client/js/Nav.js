//Display nav

const openNav = ()=>{
    const burger = document.getElementById('burger');
    burger.classList.toggle("change");
    burger.classList.remove("burger_menu");
   const menu = document.getElementById('menu');
    menu.style.width = "300px";
    menu.style.display = "block";
    menu.style.color = "white";
    menu.style.textDecoration ="none";
    menu.style.fontSize = "25px";
    menu.style.padding = "8px 8px 8px 32px";
    menu.style.transition = "0.4s";
    menu.style.transitionTimingFunction = "ease-in-out";
   
}

export{openNav}