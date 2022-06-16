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