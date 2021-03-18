(function ($) {
    "use strict";

    //    Preloader  ======================
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });

    ////// Mobile Menu

    jQuery(document).ready(function ($) {
        $(".mobile-menu").click(function () {
            $("body").toggleClass("active_menu");
        });

        $("#menu-main-menu li.menu-item-has-children").click(function () {
            $(this).toggleClass("sub-menu-active");
        });

            ////// tabs Area
            $('.tabs a').click(function () {
                $('.panel').hide();
                $('.tabs a.active').removeClass('active');
                $(this).addClass('active');

                var panel = $(this).attr('href');
                $(panel).fadeIn(1000);
                return false; // prevents link action
            }); // end click 

            $('.tabs li:first a').click();

        ////// Staff Slider
        $('.staff-items').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: true,
            items: 1,
            dots:false,
            navText: ["<img src='assets/image/arrow-left.png'>", "<img src='assets/image/arrow-right.png'>"],

        });
    });
 
/////// WOW Js
     new WOW().init();
    
})(jQuery);

// Hamburger  menu
function myFunction(x) {
    x.classList.toggle("change");
}
