import $ from "jquery";
import "slick-carousel";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
Swiper.use([Pagination]);


new Swiper(".projects_swiper", {
    speed: 800,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 30,

        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,

        },

        680: {
            slidesPerView: 3,
            spaceBetween: 46,


        },
    }

});


