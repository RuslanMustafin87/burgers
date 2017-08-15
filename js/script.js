document.addEventListener('DOMContentLoaded', function(){

document.querySelector('.hamburger-menu').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'block';
});

document.querySelector('.fullscreen-menu__close').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'none';
});

});