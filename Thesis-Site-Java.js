document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1, // Show 4 cards per slide
        spaceBetween: 10, // Space between cards
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
    });
});
