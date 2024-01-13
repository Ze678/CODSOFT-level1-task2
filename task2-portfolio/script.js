var headerHeight = $('header').outerHeight(),
tabs_navHeight = $('.tabs_nav').outerHeight(),
tabs_navOffsetTop = $('.tabs_nav').offset().top;
$('.header_height').css({"height":headerHeight});

$(window).scroll(function(){
    if($(window).scrollTop() > tabs_navOffsetTop){
        $('.tabs_nav').addClass('fixed');
        $('.tabs_nav').css({"top":headerHeight});
        $('.tab_nav_height').css({"height":tabs_navHeight});
       
    }else{
        $('.tabs_nav').removeClass('fixed');
        $('.tabs_nav').css({"top":0});
        $('.tabs_nav_height').css({"height":0});
    }
})

$('.scroll_section').each(function(index,el){
    if($(window).scrollTop()> $(this).offset().top - headerHeight - tabs_navHeight){
        $('.scroll_section').removeClass('selected');
        $(this) .addClass('selected');
        thisIndex = $(this).addClass('selected').index();
        $('.tabs_nav ul li').removeClass('active');
        $('.tabs_nav ul li').eq(thisIndex).addClass('active');
    }
})

$(".tabs_nav ul li").click(function(event){
    var triggerIndex = $(this).index();
    var triggerIndexOffset = $(".scroll_section").eq(triggerIndex).offset().top;
    $(".tabs_nav ul li").removeClass('active')
    $(this).addClass('active');
    $('body,html').animate({scrollTop:triggerIndexOffset - headerHeight - tabs_nav_height - 5})
});



