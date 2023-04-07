import $ from "jquery";
import "slick-carousel";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
Swiper.use([Pagination]);


var swiper = new Swiper(".projects_swiper", {
    speed: 800,

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


$('.projects_slider').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    responsive: [

        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
        },

    ]
});

