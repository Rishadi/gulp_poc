$(document).ready(function (){
    $(".safarilink").click(function (){
        $('html, body').animate({
            scrollTop: $(".heading").offset().top
        }, 2000);
    });

    $(".recipeslink").click(function (){
        $('html, body').animate({
            scrollTop: $(".section2").offset().top
        }, 2000);
    });
    $(".contactlink").click(function (){
        $('html, body').animate({
            scrollTop: $(".section3").offset().top
        }, 2000);
    });

    // zoom images
    $('.mycol img')
    .wrap('<span class="zoomspan" style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
  
});