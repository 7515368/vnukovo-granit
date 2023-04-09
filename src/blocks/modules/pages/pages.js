import $ from "jquery";
import "slick-carousel";

$('.about_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,

});

$('.img_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});

$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
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

$(".toggle_link").click(function () {
    $('.portfolio_filtr').slideToggle(300, function () {
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
