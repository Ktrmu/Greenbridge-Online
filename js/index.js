$(document).ready(function(){
   $('.message').click(function(){
      $(".register-form").show();
      $(".login-form").hide().animate("slow");
   });
    $('.message2').click(function(){
       $(".login-form").show();
       $(".register-form").hide();

   
   });
});
