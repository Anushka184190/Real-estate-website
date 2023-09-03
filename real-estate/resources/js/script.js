$(document).ready(function(){

    $('.js--scroll-to-home').click(function(){
        $('html,body').animate({scrollTop: $('.js--home').offset().top},1000)
       })
       $('.js--scroll-search-around').click(function(){
        $('html,body').animate({scrollTop: $('.js--search-around').offset().top},1000)
       })
       $('.js--scroll-home-loan').click(function(){
        $('html,body').animate({scrollTop: $('.js--home-loan').offset().top},1000)
       })
       $('.js--scroll-collection').click(function(){
        $('html,body').animate({scrollTop: $('.js--collection').offset().top},1000)
       })
       $('.js--scroll-recently-added').click(function(){
        $('html,body').animate({scrollTop: $('.js--recently-added').offset().top},1000)
       })
       $('.js--scroll-forum').click(function(){
        $('html,body').animate({scrollTop: $('.js--forum').offset().top},1000)
       })
       $('.js--scroll-connect-with-us').click(function(){
        $('html,body').animate({scrollTop: $('.js--connect-with-us').offset().top},1000)
       })


       $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn')
  },{offset:'50%'})

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated animate__fadeInUp')
},{offset:'50%'})
$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animated animate__fadeIn')
},{offset:'50%'})
$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animated animate__pulse')
},{offset:'50%'})
})