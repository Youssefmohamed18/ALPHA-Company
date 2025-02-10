AOS.init();/*المكتبخ بتاعت تحريك العناصر اثناء التمرير*/ 
$(window).bind("load",function(){/*هنا بنستخدم ج كويري عشان تراقب ال لود و لما هتكتمل تحميل الصفحه هيختفي الكلاس بتاع لودنج*/ 
    $(".loading").css('display','none'); /*اخفاء العنصر بتغيير خاصيه العرض ل نون*/ 
});



const TypingText = document.querySelector(".TypedText");/*هنا بنحدد العنصر اللي هيظهر فيه النص اللي هيتكتب تلقائيا */ 
const AutoTyping = document.querySelector(".TypeCursor");/*بنحدد الالمنت اللي هيكون فيه المؤشر اللي بينور و يطفي اللي بيظهر جنب النص اثناء الكتابه*/ 
 
const textArray = ["Photo Editor","Video Editor","Web Designer"];/*ديه الليست اللي بيظهر فيها الكلام اللي بيظهر واحده واحده */ 
const typingDelay = 200;/*تأخير الكتابه بين كل حرف 200 ملي ثانيه */ 
const erasingDelay = 100; /*تأخير مسح الحروف بين كل حرف 100 ملي ثانيه */ 
const newTextDelay = 2000; /*تأخير بين كتابه كل كلمه 2 ثانيه */ 
let textArrayIndex = 0;/*بيحدد اي نص من الليست اللي هيبدأ يكتب*/ 
let charIndex = 0;/*هيبدأمن اول حرف*/ 

document.addEventListener("DOMContentLoaded", function() { /*الايفنت ده بيتنفذ عندما يتم تحميل العناصر داخل الصفحه كلها*/ 
    setTimeout(type, newTextDelay + 250);/*بيأجل تنفيذ الوظيفه تايب اللي هو مسؤال عن كتابه النص بعد 250 ملي ثانيه + اللي بيأخر الكلمه*/ 
});
 
function type() {/*اللي مسؤاله عن كتابه النص حرف حرف*/ 
  if (charIndex < textArray[textArrayIndex].length) {/*لو الحرف اللي موجود اصغر من طول النص هيكتب الحرف في العنصر تايبدتيكست*/ 
    TypingText.innerHTML += textArray[textArrayIndex].charAt(charIndex);/*دي بتضيف الحرف الحالي للنص داخل العنصر*/ 
    charIndex++;/*بعد لما يكتب اول حرف بيذود و بيودي للحرف اللي بعده*/ 
    setTimeout(type, typingDelay);/*بيعمل تأخير بين كل حرف*/ 
  } 
  else {
    setTimeout(erase, newTextDelay);/*لما يخلص النص بيبدأ يسمح النص بعد التأخير*/ 
  }
}
 
function erase() {/*ديه اللي مسؤاله عن حذف الحروف*/ 
 if (charIndex > 0) {/*لو في حروف لسه بيبدأ يسمحها */ 
    TypingText.innerHTML = textArray[textArrayIndex].substring(0, charIndex-1);/*ده بيحذف الحرف الاخير اللي ظهر في النص*/ 
    charIndex--;/*بعد المسح بيقلل و يمسح اللي قبله*/ 
    setTimeout(erase, erasingDelay);/*بعد لما يمسح الحرف بيعمل تأخير بين كل حرف و التاني*/ 
  } 
  else {
    textArrayIndex++;/*بيزيد مؤشر النص عشان يبدأ النص التاني*/ 
    if(textArrayIndex>=textArray.length) textArrayIndex=0;/*لو  خلص النصوص كلها بيرجع من الاول تاني*/ 
    
    setTimeout(type, typingDelay + 1100);/*بيبدأ كتابه النص التاني بعج التأخير*/ 
  }
}


$(".who_are_we").click(function(){/*هنا في كود ج كويري لما بيضغط علي عنصر */
    $(".nav ul a").removeClass('active');/*بيشيل الكلاس اكتف من كل الروابط في الناف*/
    $(".who_are_we").addClass('active');/*بيضيف كلاس للعنصر اللي تم الضغط عليه*/
    $('html , body').animate({scrollTop: $("#who_are_we_text").offset().top},1000);/*بيحرك الصفحه ل هو ام ا  باستخدام السكرول انيماشن لمده 1 ثانيه*/
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
$(document).scroll(function() {/*هنا بيستمع للتمرير داهل الصفحه*/
    var y = $(this).scrollTop();/*بياخد قيمه التمرير الحالي*/
    if (y >= 120) {
      $('#scroll_top').css("bottom","40px");/*لو تم تمريم لاسف اكتر من 120 بيكسل بيظهر الزرار سكرول توب فوقه ب 40 بيكسل*/
        
    } else {
        $('#scroll_top').css("bottom","-100px");
        $(".nav ul a").removeClass('active');
        $(".who_are_we").addClass('active');/*لو رجع التمرير لاعلي بيخفي الزرار*/
    }
  });

$("#scroll_top").click(function(){
    $("html").scrollTop(0);/*عند الضغط علي زر السكرول توب الصفحه هترجع لاعلي باستخدام سكرول توب 0*/
});





