$(document).ready(function () {
//    navbar scroll& logo

    if (scrollY > 100) {
        $("header").css("background-color", "white");
        $(".navbar-brand").attr("style", "color: black !important");
        $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
        $("header").css("background-color", "");
        $(".navbar-brand").attr("style", "");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function () {
        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $(".navbar-brand").attr("style", "color: black !important");
            $(".navbar-nav .nav-link ").attr("style", "color: black !important");
            $(".navbar img").attr("src","img/logo-black.png")

        } else {
            $("header").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
            $(".navbar img").attr("src","img/brand.png")
        }

       
    })

    $(".about").click(scrollDown);

    function scrollDown(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        })
    }

    $(".navbar-brand").click(function () {
        $("html,body").animate({
            scrollTop: 0
        })
    })
   
   
//    home page counter
   
    $(window).scroll(function () {



if(scrollY>3100){
  var count=setInterval(function(){
var linecode= $("#results .lines-code h1").text();
var cofe=$("#results .cofe h1").text();
var finish=$("#results .finish-project h1").text();
var clients=$("#results .satisfied-clients h1").text();
if(linecode<12416){
    linecode++
    $("#results .lines-code h1").text(linecode)
} 

if(cofe<365){
    cofe++
    $("#results .cofe h1").text(cofe)
}
if(finish<114){
    finish++
    $("#results .finish-project h1").text(finish)
}
if(clients<14825){
    clients++
    $("#results .satisfied-clients h1").text(clients)
}



      },50)
    
    
}
 })
 /////

//accordion 
    $("#accordion h6").click(function () {
        $(this).next().slideToggle();
        $(this).children().children().toggleClass("fas fa-plus").toggleClass("fas fa-minus");

    })
    ///

    // scroll animate
   $(window).scroll(function(){
if(scrollY>100){
    $("#slider ")
}

if(scrollY>580){

$("#welcome .title").animate({top:'0'},700);
   }

   if(scrollY>680){
       $("#welcome .container .welcome-image").animate({top:'0'},700);
   }

   if(scrollY>1400){
$("#we-do .what-do").animate({top:'0'},700)
$("#we-do .what-do").next().animate({top:'0'},900)
$("#we-do .what-do").next().next().animate({top:'0'},1000)
$("#we-do .what-do").next().next().next().animate({top:'0'},1200)
$("#we-do .what-do").next().next().next().next().animate({top:'0'},1400)
$("#we-do .what-do").next().next().next().next().next().animate({top:'0'},1600)

   
   }
if(scrollY>2500){
    $("#services .service").animate({top:'0'},700)
    $("#services .service").next().animate({top:'0'},900)
    $("#services .service").next().next().animate({top:'0'},1000)
    $("#services .service").next().next().next().animate({top:'0'},1200)
    $("#services .service").next().next().next().next().animate({top:'0'},1400)
    $("#services .service").next().next().next().next().next().animate({top:'0'},1600)
    $("#services .service").next().next().next().next().next().next().animate({top:'0'},1900)
    $("#services .service").next().next().next().next().next().next().next().animate({top:'0'},1900)
    $("#services .service").next().next().next().next().next().next().next().next().animate({top:'0'},2000)
}

})      
           
////


    


    
  


})