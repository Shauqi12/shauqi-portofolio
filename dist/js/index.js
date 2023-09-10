//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navfix = header.offsetTop;

    if(window.pageYOffset > navfix){
        header.classList.add('navbar-fix');
    }else{
        header.classList.remove('navbar-fix');
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})