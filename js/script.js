$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.promo_nav').toggleClass('promo_nav_active');
        $(this).toggleClass('hamburger_active');
    });

    $('.promo_menu a[href^="#"]').on('click', function() {
        $('.promo_nav').removeClass('promo_nav_active');
        $('.hamburger').removeClass('hamburger_active');
    });


    //scroll 
    $("a[href^='#'").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop:$(_href).offset().top + "px"});
        return false;
    });

    
    //mask phone
    $('input[name=phone]').mask("+7(999)-999-99-99")
});