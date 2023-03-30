import $ from "jquery";
import "slick-carousel";

$('.gallery_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [

        {
            breakpoint: 680,
            settings: {
                // arrows: false
            }
        },

    ]
});
