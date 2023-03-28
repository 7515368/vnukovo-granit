import $ from "jquery";
import "slick-carousel";

$('.reviews_slider').slick({
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [

        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },

    ]
});
