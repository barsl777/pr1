$(document).ready(function() {
    $('.item2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        accessibility: true,
        respondTo: 'window',
        arrows: true,
        autoplay: true,
        asNavFor: '.item1'
    });
    $('.item1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.item2',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});