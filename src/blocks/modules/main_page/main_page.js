import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
Swiper.use([Pagination]);


var swiper = new Swiper(".hero_swiper", {
    speed: 800,
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
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

