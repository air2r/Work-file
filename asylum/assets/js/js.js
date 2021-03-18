        jQuery(document).ready(function ($) {

            // Mobile Menu
            $(".mobile-menu").click(function () {
                $('body').toggleClass('mo-mu-active');
            });

            // Sticky Header
            $(window).scroll(function () {
                if ($(window).scrollTop() > 30) {
                    $('body').addClass('sticky');
                } else {
                    $('body').removeClass('sticky');
                }
            });

            // File Upload
            $('#chooseFile').bind('change', function () {
                var filename = $("#chooseFile").val();
                if (/^\s*$/.test(filename)) {
                    $(".file-upload").removeClass('active');
                    $("#noFile").text("ss");
                } else {
                    $(".file-upload").addClass('active');
                    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
                }
            });

            // Tabs menu
            $('ul.tabs li').click(function () {
                var tab_id = $(this).attr('data-tab');
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })
    

            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".tab-items #tab-1").remove();
                $(".tab-items #tab-2").remove();
                $(".tab-items #tab-3").remove();
                $(".tab-items #tab-4").remove();
                $(".tab-items #tab-5").remove();
                $(".tab-items #tab-6").remove();
                $(".tab-items #tab-7").remove();
            }

            if (window.matchMedia("(max-width: 991px)").matches) {
                $(".tab-content-pc #tab-1").remove();
                $(".tab-content-pc #tab-2").remove();
                $(".tab-content-pc #tab-3").remove();
                $(".tab-content-pc #tab-4").remove();
                $(".tab-content-pc #tab-5").remove();
                $(".tab-content-pc #tab-6").remove();
                $(".tab-content-pc #tab-7").remove();
            }

            if (window.matchMedia("(max-width: 991px)").matches) {
                $("#fore-foreground").remove();
                $(".mouse-bg").remove();

            }


        });






        // Menu icon Change
        function myFunction(x) {
            x.classList.toggle("change");
        }
