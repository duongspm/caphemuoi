// Include
function parts(rootDir, File) {
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}


$(function () {
    var header;
    if ($(window).width() < 768) {
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $('main').css('margin-top', header);
})
$(window).resize(function () {
    var header;
    if ($(window).width() < 768) {
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $('main').css('margin-top', header);
});



/* SETTING for Smart Phone Menu Display */
$(function () {
    spMenuDisplay();
});
function spMenuDisplay() {
    const menu = $('.gNav');
    const btn = $('#navBtn');
    const header = $('#header');
    btn.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('active');
        btn.toggleClass('active');
        header.toggleClass('active');
        $('html,body').toggleClass('noScroll');
    });
}



// Set header - footer active menu
$(function () {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
    if (urlRegExp.test('/')) {
        $('.gNav > ul > li:first-of-type a').addClass('active');
    } else {
        $('header .gNav > ul > li > a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('active');
            }
        });
        $('header .gNav > ul > li ul li a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('active');
            }
        });
    }

});



// Pagetop
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }
    });

    $('#pagetop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(function(){
    $('.slider-slick').slick(
        {
            fade: true,
        }
    );
})
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
