import $ from "jquery";
import "slick-carousel";

$('.projects_slider').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
