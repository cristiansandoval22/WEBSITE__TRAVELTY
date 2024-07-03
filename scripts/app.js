const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("open-nav");
const navClose = document.getElementById("close-nav");

/**
 * agregando la clase de .show__menu con js
*/
if(navOpen){
    navOpen.addEventListener("click", () =>{
        navMenu.classList.add("show__menu");
    })
}

/**
 * quitando la clase de .show__menu con js
*/

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show__menu")
    })
};

/**
 * remove show__menu al hacer click en un link
 */
const navLinks= document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show__menu");
};


navLinks.forEach(link => link.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)