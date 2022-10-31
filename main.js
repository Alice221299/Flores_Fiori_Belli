const appearMenu = document.querySelector (".header--menu-bar");
const menuMobile = document.querySelector ('.header--menu-mobile');

appearMenu.addEventListener('click', toggleMenu);
function toggleMenu () {
menuMobile.classList.toggle('inactive');
}