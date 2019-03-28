// var api_key = 'e0469497030cd4d3f2ce9dd77e3fcf9d';
// var gall_jpg_id = '170578595-72157679529447478';
// var gall_gif_id = '170578595-72157679531144098';
// var gall_com_id = '170578595-72157679533210698';

$(document).ready(function() {
  loadPhotos();

  function loadPhotos() {
    $.getJSON('photos.json', function(data) {
        var photosDiv = $('<div>');

        $.each(data.photos.photo, function( i, gp ) {
          var photoDiv = $('<div>');

          var farmId = gp.farm;
          var serverId = gp.server;
          var id = gp.id;
          var secret = gp.secret;
          var fileURL = gp.url;

          //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
          //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

          $(photoDiv).append($('<img>').attr({
                                          'src': fileURL,
                                          'class': 'pic' + (i+1)
                                          }));

          // console.log(farmId + ", " + serverId + ", " + id + ", " + secret + ", class: pic" + (i+1));
          // console.log(fileURL);

          photosDiv.append(photoDiv);
      });
      $('#images').append(photosDiv);
    });
  };

  //Using PIXI library to add movement to images via mouse movement
  $(".container").mousemove(function(e) {
    wigly(e, ".logo", -50);
    wigly(e, ".pic1", -130);
    wigly(e, ".pic2", -200);
    wigly(e, ".pic3", -100);
    wiglyS(e, ".pic4", -100);
    wigly(e, ".pic5", -150);
    wigly(e, ".pic6", -10);
    wiglyS(e, ".pic7", -10);
    wigly(e, ".pic8", -10);
    wigly(e, ".pic9", -10);
    wigly(e, ".pic10", -10);
    wigly(e, ".pic11", -10);
    wigly(e, ".pic12", -10);
    wigly(e, ".pic13", -140);
    wigly(e, ".pic14", -170);
    wiglyS(e, ".pic15", -200);
    wigly(e, ".pic16", -190);
    wiglyS(e, ".pic17", -90);
    wigly(e, ".pic18", -40);
    wigly(e, ".pic19", -130);
    wigly(e, ".pic20", -160);
    wigly(e, ".pic21", -120);
    wiglyS(e, ".pic22", -120);
  });

  function wigly(e, target, movement) {
    var $this = $(".container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

   function wiglyS(e, target, movement) {
      var $this = $(".container");
      var relY = e.pageX - $this.offset().left;
      var relX = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
  }
});
