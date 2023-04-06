import $ from "jquery";
// import "slick-carousel";
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

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
    speed: 800,
    slidesPerView: 1,
    autoHeight: true,
    // fadeEffect: true,
    loop: true,
    // fadeEffect: {
    //     crossFade: true
    // },
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

