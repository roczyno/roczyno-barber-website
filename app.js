const sideNav = document.querySelector('.side-nav');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
const loader = document.querySelector('.loader');
sideNav.style.right = '-250px';
    
menuBtn.addEventListener('click', () => {
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0px';
        menu.src = 'images/close.png'
    }
    else {
        sideNav.style.right = '-250px';
        menu.src = 'images/menu.png'
    }
   
})


window.addEventListener('load', function(){
    loader.classList.add('disappear');
})