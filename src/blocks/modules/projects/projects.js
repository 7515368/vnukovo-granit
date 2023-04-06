import $ from "jquery";
import "slick-carousel";

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

$(".toggle_link").click(function () {
    $('.projects_nav-tabs').slideToggle(300, function () {
        if ($(this).is(':hidden')) {
            $('.toggle_link').html('Показать фильтры');
            $('.toggle_link').removeClass('open');
        } else {
            $('.toggle_link').html('Скрыть фильтры');
            $('.toggle_link').addClass('open');
        }
    });
    return false;
});
