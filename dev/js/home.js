$(document).ready(function() {
    //TODO
});
$(function() {
    var $menu_inner = $('.menu_inner');

    $(".menu-triger").click(function() {
        $('body').addClass('body_pointer');
        $menu_inner.show(0);
        $menu_inner.animate({ right: parseInt($menu_inner.css('left'), 10) == 0 ? -$menu_inner.outerWidth() : 0 },
            300
        );
        return false;
    });

    $(".menu-close").click(function() {
        $('body').removeClass('body_pointer');
        $menu_inner.animate({ right: parseInt($menu_inner.css('right'), 10) == 0 ? -$menu_inner.outerWidth() : 0 },
            300,
            function() {
                $menu_inner.hide(0);
            }
        );
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.menu_inner').length) {
            $('body').removeClass('body_pointer');
            $menu_inner.animate({ right: parseInt($menu_inner.css('right'), 10) == 0 ? -$menu_inner.outerWidth() : 0 },
                300,
                function() {
                    $menu_inner.hide(0);
                }
            );
        }
    });
});

window.onscroll = function() { myFunction() };

let header = document.getElementByClassName("header");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}