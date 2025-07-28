AOS.init();
$(window).bind("load",function(){
    $(".loading").css('display','none');
});



const TypingText = document.querySelector(".TypedText");
const AutoTyping = document.querySelector(".TypeCursor");
 
const textArray = ["Photo Editor","Video Editor","Web Designer"];
// const textArray = ["Web Developer","Web Designer","Full Stack Web Developer"];
const typingDelay = 200;
const erasingDelay = 100; 
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", function() { 
    setTimeout(type, newTextDelay + 250);
});
 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    TypingText.innerHTML += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    setTimeout(erase, newTextDelay);
  }
}
 
function erase() {
 if (charIndex > 0) {
    TypingText.innerHTML = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}


$(".who_am_i").click(function(){
    $(".nav ul a").removeClass('active');
    $(".who_am_i").addClass('active');
    $('html , body').animate({scrollTop: $("#who_am_i_text").offset().top},1000);
});
$(".services").click(function(){
    $(".nav ul a").removeClass('active');
    $(".services").addClass('active');
    $('html , body').animate({scrollTop: $("#services_text").offset().top},1000);
});
$(".features").click(function(){
    $(".nav ul a").removeClass('active');
    $(".features").addClass('active');
    $('html , body').animate({scrollTop: $("#features_text").offset().top},1000);
});
$(".contact").click(function(){
    $(".nav ul a").removeClass('active');
    $(".contact").addClass('active');
    $('html , body').animate({scrollTop: $("#contact_text").offset().top},1000);
});
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 120) {
      $('#scroll_top').css("bottom","40px");
        
    } else {
        $('#scroll_top').css("bottom","-100px");
        $(".nav ul a").removeClass('active');
        $(".who_am_i").addClass('active');
    }
  });

$("#scroll_top").click(function(){
    $("html").scrollTop(0);
});





