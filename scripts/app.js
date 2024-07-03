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

// scroolup
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)