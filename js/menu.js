$(document).ready(function() {
  $( ".menu_port" ).mouseover(function() {
    $('.pic2').show();
    $('.pic1').hide();
  }).mouseout(function() {
    $('.pic1').show();
  });

  $( ".menu_onemin" ).mouseover(function() {
    $('.pic1').show();
    $('.pic2').hide();
  }).mouseout(function() {
    $('.pic2').show();
  });

  $( ".menu_birthday" ).mouseover(function() {
    $('.pic2').show();
    $('.pic1').hide();
  }).mouseout(function() {
    $('.pic1').show();
  });

  $( ".menu_snow" ).mouseover(function() {
      $('.pic1').show();
      $('.pic2').hide();
    }).mouseout(function() {
      $('.pic2').show();
    });
});
