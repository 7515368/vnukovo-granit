import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper(".hero_swiper", {
    slidesPerView: 'auto',
    simulateTouch: true,
    modules: [Navigation, Pagination],

    scrollbar: {
        draggable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

