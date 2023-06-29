// Include
function parts(rootDir,File){
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}


$(function(){
    var header;
    if($(window).width()<768){
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $('main').css('margin-top',header);
})
$(window).resize(function(){
    var header;
    if($(window).width()<768){
        header = 0;
    } else {
        header = $("header").outerHeight();
    }
    $('main').css('margin-top',header);
});



/* SETTING for Smart Phone Menu Display */
$(function(){
  spMenuDisplay();
});
function spMenuDisplay() {
  const menu = $('.gNav');
  const btn = $('#navBtn');
    const header = $('#header');
  btn.on('click',function(e){
        e.preventDefault();
    menu.toggleClass('active');
    btn.toggleClass('active');
        header.toggleClass('active');
        $('html,body').toggleClass('noScroll');
  });
}



// Set header - footer active menu
$(function(){
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
        if(urlRegExp.test('/')) {
            $('.gNav > ul > li:first-of-type a').addClass('active');
        } else {
            $('header .gNav > ul > li > a').each(function(){
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(this).addClass('active');
                }
            });
            $('header .gNav > ul > li ul li a').each(function(){
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(this).addClass('active');
                }
            });    
        }
        
});



// Pagetop
$(function(){
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