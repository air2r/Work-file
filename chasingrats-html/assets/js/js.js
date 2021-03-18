(function ($) {
    
        //    Preloader  ======================

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });

    
$(document).ready(function() {
  $('.tabs a').click(function(){
     $('.panel').hide();
     var panel = $(this).attr('href');
     $(panel).show(); 
     return false; 
  });
     $('.tabs li:first a').click(); 

        $('.mobile-menu ul li a').click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $('.mobile-menu li a.active').removeClass('active');
                $(this).addClass('active');
            }
            
        });

      
  $(".mobile-menu-icon").click(function () {
            $('body').toggleClass('change');
        });  
  $(".mobile-menu ul li a").click(function () {
            $('body').removeClass('change');
        });

});
    
})(jQuery);





