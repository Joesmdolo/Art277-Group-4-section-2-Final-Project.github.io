$(function() {
   
})


$('.ham').click(function() {

   $(".container").stop().slideToggle();
   $(".school-head-text").toggle("hide");
   $(".logo").toggle("hide");

   })





$('.headings-text-2').click(function () { 
    $('.welcome-paragraph-2').stop().slideToggle();
 })


 $(".other-card1").hover(function(){
    $(".our-classes-text").slideDown();
    $(".design-text").fadeTo(200, 0);
 })

 $(".other-card1").mouseleave(function(){
    $(".our-classes-text").slideUp();
    $(".design-text").fadeTo(100, 10);
 })


 $(".other-card2").hover(function(){
    $(".science-lab-text").slideDown();
    $(".design-text").fadeTo(200, 0);
 })

 $(".other-card2").mouseleave(function(){
    $(".science-lab-text").slideUp();
    $(".design-text").fadeTo(100, 10);
 })

 $(".clouds").hover(function () {
    $(".cloud-pop").fadeIn();
   })

$(".cloud-pop").click(function () {
    $(this).fadeOut();
})




//  Class.css

$(".head-image-class").hover(function(){
   $('.image-effect-class').stop().slideUp();
   $(".edu-text-class").fadeIn(1000).text("Sign up Now!");
})

$(".head-image-class").mouseleave(function(){
   $('.image-effect-class').slideDown();
   $(".edu-text-class").text("Welcome To Class");
})




// Lab.css
$(".apply-link-lab-2").click(function (){
   $('.p-2').slideToggle();
})

$(".apply-link-lab-1").click(function (){
   $('.p-1').slideToggle();
})