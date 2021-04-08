//Display nav

const openNav = ()=>{
    const menu = document.getElementById('menu');
    menu.style.width = "250px";
    menu.style.display = "block";
    menu.style.color = "white";
    menu.style.textDecoration ="none";
    menu.style.fontSize = "25px";
    menu.style.padding = "8px 8px 8px 32px";
    menu.style.transition = "0.3s";
}

export{openNav}