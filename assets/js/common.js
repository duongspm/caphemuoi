// Include
$(document).ready(function () {
    function parts(rootDir, File) {
        $.ajax({
            url: rootDir + "library/" + File,
            cache: false,
            async: false,
            dataType: "html",
            success: function (html) {
                html = html.replace(/\{\$root\}/g, rootDir);
                document.write(html);
            },
        });
    }
});

$(document).ready(function () {
    let url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

    let dir = url.substring(0, url.lastIndexOf('/')),
        dirRegExp = new RegExp(dir.replace(/\/$/, '') + "$");

    if ($('body').hasClass("top")) {
        $('.menu li a.top').addClass('isActive');
    } else {
        $('.menu  li  a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
            if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
        });
    }
});

$(function () {
    var header;
    if ($(window).width() < 768) {
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $("main").css("margin-top", header);
});
$(window).resize(function () {
    var header;
    if ($(window).width() < 768) {
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $("main").css("margin-top", header);
});

/* SETTING for Smart Phone Menu Display */
$(function () {
    spMenuDisplay();
});
function spMenuDisplay() {
    const menu = $(".gNav");
    const btn = $("#navBtn");
    const header = $("#header");
    btn.on("click", function (e) {
        e.preventDefault();
        menu.toggleClass("active");
        btn.toggleClass("active");
        header.toggleClass("active");
        $("html,body").toggleClass("noScroll");
    });
}

// Set header - footer active menu
$(function () {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
    if (urlRegExp.test("/")) {
        $(".gNav > ul > li:first-of-type a").addClass("active");
    } else {
        $("header .gNav > ul > li > a").each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
                $(this).addClass("active");
            }
        });
        $("header .gNav > ul > li ul li a").each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
                $(this).addClass("active");
            }
        });
    }
});

// Pagetop
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#pagetop").fadeIn();
        } else {
            $("#pagetop").fadeOut();
        }
    });

    $("#pagetop").on("click", function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            400
        );
        return false;
    });
});

$(function () {
    $(".slider-slick").slick({
        fade: true,
        arrows: false,
    });
});
// Menu
$(document).ready(function () {
    $open = false;

    function menuMb() {
        if ($open == false) {
            $open = true;
            $(".ham").addClass("active");
            $(".menu__nav").addClass("active");
            $(".menu").addClass("active");
            $(".menu__btn").addClass("active");
        } else {
            $open = false;
            $(".ham").removeClass("active");
            $(".menu__nav").removeClass("active");
            $(".menu").removeClass("active");
            $(".menu__btn").removeClass("active");
        }
    }

    $("#js-menu-btn").on("click", function () {
        menuMb();
    });
});
// $(document).ready(function () {
//     var api = $(".peShiner").peShiner({ api: true, paused: true, reverse: true, repeat: 1, color: 'oceanHL'}); //mã màu đặc biệt: monoHL, oceanHL, fireHL
//     api.resume();
// });
$(function () {
    $(".js-slickbs-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".js-slickbs-nav",
        lazyLoad: 'progressive', 
        infinite: true,
        autoplay: false,
        speed: 600,
        cssEase: "linear",
        rtl: false, //right to left
        accessibility: true,
        arrows: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        focusOnSelect: false,
        draggable: false,
        useTransform: true,
        
        draggable: true,
        verticalSwiping: false,
        autoplaySpeed: 2000, 
        speed: 1000, 
        centerMode: false, 
        dots: false, 
        responsive: [
        ]
    });
    $(".js-slickbs-nav").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: ".js-slickbs-for",
        arrows: false,

        lazyLoad: 'progressive', 
        infinite: true, 
        accessibility: true, 
        vertical: true, 
        verticalSwiping: true,
        autoplay: true, 
        autoplaySpeed: 2000, 
        speed: 1000, 
        focusOnSelect: true,
		centerMode: false, 
        dots: false, 
        draggable: true, 
        responsive: [
		]
    });
});

$(document).ready(function(){
    Fancybox.bind('[data-fancybox="gallery"]', {
        //
    });   
});

$(document).ready(function() {
	Fancybox.bind('[data-fancybox="video"]', {
        //
    });   
});

$(document).ready(function() {
	Fancybox.bind('[data-fancybox="ggmap"]', {
        //
    });   
});

$(document).ready(function(){
    AOS.init(); 
});

$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000, 
        speed: 1000,
        focusOnSelect: true
    });
});

/* Anchorlink trong 1 trang */
$(function () {
    setTimeout(function () {
        $('a.anchor').on('click', function (e) {
            var thisHref = $(this).attr("href");            
            var navH = $('header').innerHeight();
            var speed = 800;
            var target = $(thisHref == "#" || thisHref == "" ? 'html' : thisHref);
            var position = target.offset().top - navH + 1;
            $("html, body").animate({
                scrollTop: position
            }, speed, "swing");
            return false;
        });                
        
    }, 1000);
});

$(function () {
    $(".js-slick-feedback").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1000, 
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

