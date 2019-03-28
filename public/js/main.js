$(document).ready(function() {

  //disable scrolling with wheel or mousepad
  // $("body").css("overflow", "hidden");

  //scroll with mouse movement
  $(document).mousemove(function(e) {
      $("html, body").scrollTop(function(i, v) {
          var h = $(window).height();
          var y = e.clientY - h / 2;
          return v + y * 0.1;
      });
  });

  // making pictures draggable
  $(".container").mouseover(function(){
  $('.pic1').draggable();
  $('.pic2').draggable();
  $('.pic3').draggable();
  $('.pic4').draggable();
  $('.pic5').draggable();
  $('.pic13').draggable();
  $('.pic14').draggable();
  $('.pic15').draggable();
  $('.pic16').draggable();
  $('.pic17').draggable();
  $('.pic18').draggable();
  $('.pic19').draggable();
  $('.pic20').draggable();
  $('.pic21').draggable();
  $('.pic22').draggable();
  });

  // menu hovering code
  // show portrait images, hide others
  $( ".menu_port" ).mouseover(function() {
    jQuery('.pic18').css('opacity', '1.0');
    jQuery('.pic22').css('opacity', '1.0');
    $(".pic2").css("visibility", "hidden");
    $(".pic3").css("visibility", "hidden");
    $(".pic5").css("visibility", "hidden");
    $(".pic6").css("visibility", "hidden");
    $(".pic7").css("visibility", "hidden");
    $(".pic8").css("visibility", "hidden");
    $(".pic9").css("visibility", "hidden");
    $(".pic10").css("visibility", "hidden");
    $(".pic11").css("visibility", "hidden");
    $(".pic12").css("visibility", "hidden");
    $(".pic19").css("visibility", "hidden");
  }).mouseout(function() {
    jQuery('.pic18').css('opacity', '');
    jQuery('.pic22').css('opacity', '');
    $(".pic1").css("visibility", "visible");
    $(".pic2").css("visibility", "visible");
    $(".pic3").css("visibility", "visible");
    $(".pic4").css("visibility", "visible");
    $(".pic5").css("visibility", "visible");
    $(".pic6").css("visibility", "visible");
    $(".pic7").css("visibility", "visible");
    $(".pic8").css("visibility", "visible");
    $(".pic9").css("visibility", "visible");
    $(".pic10").css("visibility", "visible");
    $(".pic11").css("visibility", "visible");
    $(".pic12").css("visibility", "visible");
    $(".pic13").css("visibility", "visible");
    $(".pic14").css("visibility", "visible");
    $(".pic15").css("visibility", "visible");
    $(".pic16").css("visibility", "visible");
    $(".pic17").css("visibility", "visible");
    $(".pic18").css("visibility", "visible");
    $(".pic19").css("visibility", "visible");
    $(".pic20").css("visibility", "visible");
    $(".pic21").css("visibility", "visible");
    $(".pic22").css("visibility", "visible");
  });

  // show oneminute gifs, hide others
  $( ".menu_onemin" ).mouseover(function() {
    jQuery('.pic6').css('opacity', '1.0');
    jQuery('.pic7').css('opacity', '1.0');
    jQuery('.pic8').css('opacity', '1.0');
    $(".pic1").css("visibility", "hidden");
    $(".pic2").css("visibility", "hidden");
    $(".pic3").css("visibility", "hidden");
    $(".pic4").css("visibility", "hidden");
    $(".pic5").css("visibility", "hidden");
    $(".pic9").css("visibility", "hidden");
    $(".pic10").css("visibility", "hidden");
    $(".pic11").css("visibility", "hidden");
    $(".pic12").css("visibility", "hidden");
    $(".pic13").css("visibility", "hidden");
    $(".pic14").css("visibility", "hidden");
    $(".pic15").css("visibility", "hidden");
    $(".pic16").css("visibility", "hidden");
    $(".pic17").css("visibility", "hidden");
    $(".pic18").css("visibility", "hidden");
    $(".pic19").css("visibility", "hidden");
    $(".pic20").css("visibility", "hidden");
    $(".pic21").css("visibility", "hidden");
    $(".pic22").css("visibility", "hidden");
  }).mouseout(function() {
    jQuery('.pic6').css('opacity', '');
    jQuery('.pic7').css('opacity', '');
    jQuery('.pic8').css('opacity', '');
    $(".pic1").css("visibility", "visible");
    $(".pic2").css("visibility", "visible");
    $(".pic3").css("visibility", "visible");
    $(".pic4").css("visibility", "visible");
    $(".pic5").css("visibility", "visible");
    $(".pic6").css("visibility", "visible");
    $(".pic7").css("visibility", "visible");
    $(".pic8").css("visibility", "visible");
    $(".pic9").css("visibility", "visible");
    $(".pic10").css("visibility", "visible");
    $(".pic11").css("visibility", "visible");
    $(".pic12").css("visibility", "visible");
    $(".pic13").css("visibility", "visible");
    $(".pic14").css("visibility", "visible");
    $(".pic15").css("visibility", "visible");
    $(".pic16").css("visibility", "visible");
    $(".pic17").css("visibility", "visible");
    $(".pic18").css("visibility", "visible");
    $(".pic19").css("visibility", "visible");
    $(".pic20").css("visibility", "visible");
    $(".pic21").css("visibility", "visible");
    $(".pic22").css("visibility", "visible");
  });

  // show birthdayedit gifs, hide others
  $( ".menu_birthday" ).mouseover(function() {
    jQuery('.pic11').css('opacity', '1.0');
    jQuery('.pic9').css('opacity', '1.0');
    jQuery('.pic10').css('opacity', '1.0');
    jQuery('.pic12').css('opacity', '1.0');
    $(".pic1").css("visibility", "hidden");
    $(".pic2").css("visibility", "hidden");
    $(".pic3").css("visibility", "hidden");
    $(".pic4").css("visibility", "hidden");
    $(".pic5").css("visibility", "hidden");
    $(".pic6").css("visibility", "hidden");
    $(".pic7").css("visibility", "hidden");
    $(".pic8").css("visibility", "hidden");
    $(".pic13").css("visibility", "hidden");
    $(".pic14").css("visibility", "hidden");
    $(".pic15").css("visibility", "hidden");
    $(".pic16").css("visibility", "hidden");
    $(".pic17").css("visibility", "hidden");
    $(".pic18").css("visibility", "hidden");
    $(".pic19").css("visibility", "hidden");
    $(".pic20").css("visibility", "hidden");
    $(".pic21").css("visibility", "hidden");
    $(".pic22").css("visibility", "hidden");
  }).mouseout(function() {
    jQuery('.pic11').css('opacity', '');
    jQuery('.pic9').css('opacity', '');
    jQuery('.pic10').css('opacity', '');
    jQuery('.pic12').css('opacity', '');
    $(".pic1").css("visibility", "visible");
    $(".pic2").css("visibility", "visible");
    $(".pic3").css("visibility", "visible");
    $(".pic4").css("visibility", "visible");
    $(".pic5").css("visibility", "visible");
    $(".pic6").css("visibility", "visible");
    $(".pic7").css("visibility", "visible");
    $(".pic8").css("visibility", "visible");
    $(".pic9").css("visibility", "visible");
    $(".pic10").css("visibility", "visible");
    $(".pic11").css("visibility", "visible");
    $(".pic12").css("visibility", "visible");
    $(".pic13").css("visibility", "visible");
    $(".pic14").css("visibility", "visible");
    $(".pic15").css("visibility", "visible");
    $(".pic16").css("visibility", "visible");
    $(".pic17").css("visibility", "visible");
    $(".pic18").css("visibility", "visible");
    $(".pic19").css("visibility", "visible");
    $(".pic20").css("visibility", "visible");
    $(".pic21").css("visibility", "visible");
    $(".pic22").css("visibility", "visible");
  });

  // show automotive images, hide others
  $( ".menu_snow" ).mouseover(function() {
      jQuery('.pic19').css('opacity', '1.0');
      $(".pic1").css("visibility", "hidden");
      $(".pic6").css("visibility", "hidden");
      $(".pic7").css("visibility", "hidden");
      $(".pic8").css("visibility", "hidden");
      $(".pic9").css("visibility", "hidden");
      $(".pic10").css("visibility", "hidden");
      $(".pic11").css("visibility", "hidden");
      $(".pic12").css("visibility", "hidden");
      $(".pic13").css("visibility", "hidden");
      $(".pic14").css("visibility", "hidden");
      $(".pic15").css("visibility", "hidden");
      $(".pic16").css("visibility", "hidden");
      $(".pic17").css("visibility", "hidden");
      $(".pic18").css("visibility", "hidden");
      $(".pic21").css("visibility", "hidden");
      $(".pic22").css("visibility", "hidden");
    }).mouseout(function() {
      jQuery('.pic19').css('opacity', '');
      $(".pic1").css("visibility", "visible");
      $(".pic2").css("visibility", "visible");
      $(".pic3").css("visibility", "visible");
      $(".pic4").css("visibility", "visible");
      $(".pic5").css("visibility", "visible");
      $(".pic6").css("visibility", "visible");
      $(".pic7").css("visibility", "visible");
      $(".pic8").css("visibility", "visible");
      $(".pic9").css("visibility", "visible");
      $(".pic10").css("visibility", "visible");
      $(".pic11").css("visibility", "visible");
      $(".pic12").css("visibility", "visible");
      $(".pic13").css("visibility", "visible");
      $(".pic14").css("visibility", "visible");
      $(".pic15").css("visibility", "visible");
      $(".pic16").css("visibility", "visible");
      $(".pic17").css("visibility", "visible");
      $(".pic18").css("visibility", "visible");
      $(".pic19").css("visibility", "visible");
      $(".pic20").css("visibility", "visible");
      $(".pic21").css("visibility", "visible");
      $(".pic22").css("visibility", "visible");
    });
});
