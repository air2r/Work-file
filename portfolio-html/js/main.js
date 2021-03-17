
///======== menu js ========= /

var app = function () {
   var body = undefined;
   var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav-item');
        applyListeners();
    };
    var applyListeners = function applyListeners() {
       menu.addEventListener('click', function () {
            return toggleClass(body, 'nav-active');
        });
    };
   var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
       else element.classList.add(stringClass);
    };
   init();
}();

/*================= Cursor Area =====================*/

document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}

function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

/*================= Cursor Area  End =====================*/

/*================= TxtType =====================*/

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 80 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
/*================= TxtType End =====================*/



(function ($) {
    "use strict";
    /*==================== 1. Load Function =========================*/

    $(window).on('load', function () {
        prealoaderSetup();

    });
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');

    function prealoaderSetup() {
        if (!isMobile) {
            setTimeout(function () {
                preloader.addClass('preloaded');
            }, 800);
            setTimeout(function () {
                preloader.remove();
            }, 2000);

        } else {
            preloader.remove();
        }
    }


    /*================ Smooth Scroll==================*/
    var links = $(".nav-content ul li a[href^='#']");
    var topGap = 70;

    links.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });

    /* ================= Active menu item =============== */
    $(window).on("scroll", function () {
        activeMenuItem($(".nav-content"));
    });

    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            home = nav.find(" > ul > li:first");

        sections.each(function () {
            var top = $(this).offset().top - 92,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active-nav");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active-nav");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active-nav");
                home.addClass("active-nav");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active-nav");
            }
        });
    }

/*================= Remove Class  =====================*/
    
    $(".nav li a").click(function(){
  $('body').removeClass("nav-active");
});


    /*================= Portfolio Area  =====================*/
    $('.portfolio').owlCarousel({
        slideSpeed: 1000,
        loop: true,
        autoplay: false,
        dots: false,
        nav: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 2,
                loop: true,
            },
            1000: {
                items: 3,
                loop: true,
            }
        }
    });

    /*================= Client Area  =====================*/
    var owl = $('.client');
    owl.owlCarousel({
        slideSpeed: 1000,
        autoplay: false,
        loop: true,
        nav: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    /*================= Blog Area  =====================*/

    $('.blog-cards').owlCarousel({
        slideSpeed: 1000,
        loop: true,
        autoplay: false,
        dots: false,
        nav: false,
        margin: 30,
        items: 3,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            767: {
                items: 2,
                loop: true,
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*================= Wow Js  =====================*/
    new WOW().init();
    
    /*================= scrollify  =====================*/

          $.scrollify({
              section: "section",
           });


}(jQuery));
