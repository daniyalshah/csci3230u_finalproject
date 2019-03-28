$(document).ready(function() {
  //hover for menu (not on main page)
  $(".list").hover(function(){
        $(".mainmenu").hide();
  });

  $(".card").hover(function(){
        $(".mainmenu").hide();
  });

  $(".logo").hover(function(){
      $(".mainmenu").show();
  });
});
