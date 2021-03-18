(function ($) {
    "use strict";

    //    Preloader  ======================
//    var preloader = $('#preloader');
//    $(window).on('load', function () {
//        preloader.fadeOut('slow', function () {
//            $(this).remove();
//        });
//    });

    
    
    $(document).ready(function(){
  $(".src-btn,.search-bar-close").click(function(){
    $(".search-bar-area").slideToggle("slow");
  });
});
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 110) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });  
            
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical',
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 0,
            thumbs: {
                swiper: galleryThumbs
            }
        });


        var swiper = new Swiper('.product-item-area.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        var swiper = new Swiper('.product-item-area.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                1040: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                },
            }

        });





})(jQuery);
