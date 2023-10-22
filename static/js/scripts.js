$(document).ready(function(){
    $(".user_click").click(function(){
      $('.user_click ul').hide();
    });
    $(".user_click").click(function(){
      $('.chat_popup_area').show(300);
      $('.user_control_left ul li img').css({'transform':'rotate(180deg)'}); 
    });
    $(".show_hide").click(function(){
      $('.chat_popup_area').hide(300);
      $('.user_control_left ul li img').css({'transform':'rotate(0deg)'}); 
    });
    $(".show_hide").click(function(){
      $('.user_click ul').show(300);
    });
    $(".settings_btn").click(function(){
      $('.strim_setting_area').show();
    });
    $(".cencel_popup").click(function(){
      $('.strim_setting_area').hide();
    });
  });