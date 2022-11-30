const appearMenu = document.querySelector (".header_menu-bar");
const menuMobile = document.querySelector ('.header_menu-mobile');
const ordenMenu = document.querySelector (".por-defecto");
const options = document.querySelector ('.opening-menu');

appearMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu () {
    menuMobile.classList.toggle('inactive');
}

ordenMenu.addEventListener('click', toggleMenu);
function toggleMenu () {
    options.classList.toggle('inactive-orden');
}