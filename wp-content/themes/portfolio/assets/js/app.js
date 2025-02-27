//Menu
let burger = document.querySelector('.nav-toggle');
let menu = document.querySelector('.menu');
let page = document.querySelector('body');

function doToggle() {
    menu.classList.toggle('open');
    burger.classList.toggle('active');
    page.classList.toggle('noscroll');
}

burger.addEventListener("click", doToggle);

//Apparition des élements au scroll
ScrollReveal({
    distance: '60px',
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    reset: false
});

let entreeGauche = {
    origin: 'left',
    duration: 1300,
    distance: '500px',
}
let entreeDroite = {
    origin: 'right',
    duration: 1300,
    distance: '500px'
}
let entreeBas = {
    origin: 'bottom',
    duration: 1300,
    distance: '500px',
}
let entreeHaut = {
    origin: 'top',
    duration: 1300,
    distance: '300px',
}

//Toutes les pages
ScrollReveal().reveal('header', {
    origin: 'top',
    duration: 1000,
    distance: '100px',
});

//Page accueil 
let titres = document.querySelectorAll('h2');

ScrollReveal().reveal(titres, entreeGauche);

ScrollReveal().reveal('.carte-id', entreeGauche);

ScrollReveal().reveal('.p-droite', entreeDroite);
ScrollReveal().reveal('.p-gauche', entreeGauche);

ScrollReveal().reveal('#contact', entreeGauche);

//Un projet
// ScrollReveal().reveal('.projet-intro', entreeHaut);
ScrollReveal().reveal('.projet-infos', entreeBas);

ScrollReveal().reveal('#le-projet', entreeGauche);
ScrollReveal().reveal('.infos-projet', entreeGauche);
ScrollReveal().reveal('.images-projet img:nth-of-type(2n + 1)', entreeGauche);
ScrollReveal().reveal('.images-projet img:nth-of-type(2n)', entreeDroite);

if (screen.width <= 992)
{
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(2n + 1)', entreeGauche);
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(2n)', entreeDroite);
}
else
{
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(1)', entreeGauche);
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(2)', entreeGauche);
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(3)', entreeDroite);
    ScrollReveal().reveal('.images-projet-mobile img:nth-of-type(4)', entreeDroite);
}

//Logo mouvement
const logo = document.querySelector('.logo-home');

if (logo) {
    logo.addEventListener("mousemove", (e) => {
        logo.style.backgroundPositionX = -e.offsetX / 12 + "px";
        logo.style.backgroundPositionY = -e.offsetY / 12 + "px";
    });

    const handleMouseMove = (e) => {
        setTimeout(function () {
            logo.classList.add("stop-slide");
            logo.removeEventListener("mouseenter", handleMouseMove);
        }, 250);
    };
    logo.addEventListener("mouseenter", handleMouseMove);
}