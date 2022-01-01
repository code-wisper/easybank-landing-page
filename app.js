const hamburger = document.getElementById('menuOpen');
const exit = document.getElementById('menuExit');
const body = document.querySelector('body');
const navMenu = document.getElementById('nav-mobile-menu');
const overlay = document.getElementById('overlay');
const fadeElements = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navMenu.classList.add('fade-in');
    overlay.classList.add('fade-in');
    fadeElements.forEach(element => {
        if(element.style.animation) {
            element.style.animation = '';
        } else {
            element.style.animation = `fade-in .5s ease-in-out forwards`
        }
    })

    body.classList.add('noScroll');
    hamburger.style.display = 'none';
    exit.style.display = 'block';
})

exit.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navMenu.classList.add('fade-out');
    overlay.classList.add('fade-out');
    fadeElements.forEach(element => {
        if(element.style.animation) {
            element.style.animation = '';
        } else {
            element.style.animation = `fade-out .5s ease-in-out forwards`
        }
    })

    body.classList.remove('noScroll')
    exit.style.display = 'none';
    hamburger.style.display = 'block';
})