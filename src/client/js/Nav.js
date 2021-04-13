//Display nav

const openNav = ()=>{
    const burger = document.getElementById('burger');
    burger.classList.toggle("change");
    burger.classList.remove("burger_menu");
   const menu = document.getElementById('menu');
   menu.classList.toggle("menu_out");
 
   
}

export{openNav}