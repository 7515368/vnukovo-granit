import $ from "jquery";
import "slick-carousel";

$('.hero_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [

        {
            breakpoint: 680,
            settings: {
                arrows: false
            }
        },

    ]
});
