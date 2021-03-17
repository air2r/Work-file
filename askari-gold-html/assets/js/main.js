(function ($) {
    "use strict";

    //    Preloader  ======================
    //    var preloader = $('#preloader');
    //    $(window).on('load', function () {
    //        preloader.fadeOut('slow', function () {
    //            $(this).remove();
    //        });
    //    });



    $(document).ready(function () {
        $(".src-btn,.search-bar-close").click(function () {
            $(".search-bar-area").slideToggle("slow");
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

        $(document).ready(function() {
            $('.investors-items').owlCarousel({
                loop: true,
                nav: true,
                items: 2,
                navText: ["<img src='assets/image/arrow-left.png'>", "<img src='assets/image/arrow-right.png'>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 2,
                    }
                }
            })
        });
        // SmartMenus init
        $(function() {
            $('#main-menu').smartmenus({
                mainMenuSubOffsetX: -1,
                mainMenuSubOffsetY: 4,
                subMenusSubOffsetX: 6,
                subMenusSubOffsetY: -6
            });
        });

        // SmartMenus mobile menu toggle button
        $(function() {
            var $mainMenuState = $('#main-menu-state');
            if ($mainMenuState.length) {
                // animate mobile menu
                $mainMenuState.change(function(e) {
                    var $menu = $('#main-menu');
                    if (this.checked) {
                        $menu.hide().slideDown(250, function() {
                            $menu.css('display', '');
                        });
                    } else {
                        $menu.show().slideUp(250, function() {
                            $menu.css('display', '');
                        });
                    }
                });
                // hide mobile menu beforeunload
                $(window).bind('beforeunload unload', function() {
                    if ($mainMenuState[0].checked) {
                        $mainMenuState[0].click();
                    }
                });
            }
        });



})(jQuery);
