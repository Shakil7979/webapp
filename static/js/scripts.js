$(document).ready(function(){
    $(".user_click").click(function(){
      $('.user_click ul').hide();
    });
    $(".user_click").click(function(){
      $('.chat_popup_area').show(300);
    });
    $(".show_hide").click(function(){
      $('.chat_popup_area').hide(300);
    });
    $(".show_hide").click(function(){
      $('.user_click ul').show(300);
    });
  });