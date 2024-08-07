// script.js

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const loadingScreen = document.getElementById('loadingScreen');

// Change these values to match the visible amounts in CSS
const headerVisibleAmount = '30px'; 
const footerVisibleAmount = '30px';

document.body.addEventListener('mousemove', (e) => {
    if (e.clientY < 100) {
        header.style.top = '0'; // Header fully visible
    } else {
        header.style.top = `-${headerVisibleAmount}`; // Adjusted for partial visibility
    }

    if (window.innerHeight - e.clientY < 100) {
        footer.style.bottom = '0'; // Footer fully visible
    } else {
        footer.style.bottom = `-${footerVisibleAmount}`; // Adjusted for partial visibility
    }
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Loading screen logic
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});