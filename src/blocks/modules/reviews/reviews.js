
import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper(".reviews_swiper", {
    slidesPerView: 2,
    simulateTouch: true,
    spaceBetween: 30,
    modules: [Navigation, Pagination],
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30,

        },

        680: {
            slidesPerView: 2,
            spaceBetween: 46,


        },
    }
});
