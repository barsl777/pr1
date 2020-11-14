$(document).ready(function() {
    $('.item2').slick({
        slidesToShow: 1,
        slidesToScroll: 5,
        fade: true,
        asNavFor: '.item1'
    });
    $('.item1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.item2',
        respondTo: 'window',
        autoplay: true,
        arrows: false,
        focusOnSelect: true
    });
});