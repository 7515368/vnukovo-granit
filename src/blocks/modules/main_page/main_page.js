import $ from "jquery";
// import "slick-carousel";
import Swiper from 'swiper';

// $('.hero_slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     responsive: [

//         {
//             breakpoint: 680,
//             settings: {
//                 arrows: false
//             }
//         },

//     ]
// });

var swiper = new Swiper(".hero_swiper", {
    speed: 1000,
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    // noSwiping: true,
    // noSwipingClass: 'no-swiping',
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.hero_swiper .swiper-button-next',
        prevEl: '.hero_swiper .swiper-button-prev',
    },
});

