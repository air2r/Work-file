        jQuery(document).ready(function ($) {

            jQuery(document).ready(function ($) {
                $(".mobile-menu").click(function () {
                    $("body").toggleClass("activemenu");
                });
                $(".mo-filter-btn,.filter-ovelay").click(function () {
                    $("body").toggleClass("activefilter");
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

                //                $("span.menu_icon").click(function () {
                //                    $('body').toggleClass('dropdo');
                //                });

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


            // Sticky Header
            $(window).scroll(function () {
                if ($(window).scrollTop() > 30) {
                    $("body").addClass("sticky");
                } else {
                    $("body").removeClass("sticky");
                }
            });


            $(".modal-toggle").on("click", function (e) {
                e.preventDefault();
                $(".modal").toggleClass("is-visible");
            });

            $('.sliter-items').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 1,
                //    navText: ["<img src='assets/image/prev.png'>","<img src='assets/image/next.png'>"]

            })

            $('.bst-cb-prod').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 2,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2,
                        margin: 50,
                    },

                }

            })

            $('.cbd-items').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                //    navText: ["<img src='assets/image/prev-black.png'>","<img src='assets/image/next-black.png'>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2,
                        margin: 10,
                    },
                    1000: {
                        items: 3
                    }
                }

            })

            $(function () {
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: 500,
                    values: [10, 130],
                    slide: function (event, ui) {
                        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
                $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                    " - $" + $("#slider-range").slider("values", 1));
            });

            $("#accordion").accordion({
                heightStyle: "content",
                active: false,
                collapsible: true,
                header: "div.accordianheader"
            });

        });



        function openSearch() {
            document.getElementById("myOverlay").style.display = "block";
        }

        function closeSearch() {
            document.getElementById("myOverlay").style.display = "none";
        }
