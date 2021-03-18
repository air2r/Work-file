        jQuery(document).ready(function ($) {

            jQuery(document).ready(function ($) {
                $(".mobile-menu").click(function () {
                    $("body").toggleClass("activemenu");
                });

                $(".mobile-menu").click(function () {
                    $(".mobile-menu").toggleClass("change");
                });
                $(".mobile-menu").click(function () {
                    $(".menu_overlay").toggleClass("closs-overlay");
                });
                $(".menu_overlay").click(function () {
                    $(".mobile-menu").toggleClass("change");
                });
                $(".menu_overlay").click(function () {
                    $(".menu_overlay").removeClass("closs-overlay");
                });
                $(".menu_overlay").click(function () {
                    $("body").removeClass("activemenu");
                });


                // Dropdown Menu 
                $(".menu-item-type-post_type > a").click(function () {
                    $(".sub-menu").slideUp(200);
                    if (
                        $(this)
                        .parent()
                        .hasClass("active")
                    ) {
                        $(".menu-item-type-post_type").removeClass("active");
                        $(this)
                            .parent()
                            .removeClass("active");
                    } else {
                        $(".menu-item-type-post_type").removeClass("active");
                        $(this)
                            .next(".sub-menu")
                            .slideDown(200);
                        $(this).parent()
                            .addClass("active");
                    }
                });
                //        // Dropdown Menu  
            });
            // Mobile Menu
            $(".close-btn").click(function () {
                $(this).parent().hide();
            });

//            $(window).scroll(function () {
//                if ($(window).scrollTop() > 30) {
//                    $("body").addClass("sticky");
//                } else {
//                    $("body").removeClass("sticky");
//                }
//            });

        });

  
