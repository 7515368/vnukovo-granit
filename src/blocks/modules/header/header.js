import $ from "jquery";

$(function () {
    let header = $('.header');
    let hederHeight = header.height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            header.addClass('fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px'
            });
            header.css({

                'background': '#fff',
                'transition': '.3s'
            });

        } else {
            header.removeClass('fixed');
            $('body').css({
                'paddingTop': 0
            });
            header.css({
                'background': 'transparent',
                'transition': '.3s'
            });
        }
    });
});