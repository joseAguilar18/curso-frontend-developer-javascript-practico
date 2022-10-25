const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

console.log(desktopMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
}