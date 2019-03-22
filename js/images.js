$(document).ready(function() {
  loadImage();

  function loadImage() {
    var image_url = 'https://drive.google.com/uc?id=';

    $.getJSON('testing.json', function(data) {
      var names = [];
      var id = [];
      var drive = [];
      var folder = [];

      var imagesDiv = $('<div>');

      $(data.mainpage.images).each(function(i) {
        names.push(data.mainpage.images[i].name);
        id.push(data.mainpage.images[i].id);
        drive.push(data.mainpage.images[i].driveurl);
        folder.push(data.mainpage.images[i].folderurl);
      });

      $(data.mainpage.images).each(function(i) {
        var imageDiv = $('<div>');

        // imageDiv.append($('<img>').attr('src','https://drive.google.com/uc?id=' + images[i]));
        // imageDiv.append($('<img>').attr('src','images' + folder[i]));
        imageDiv.append($('<img>').attr({
                                        'src': drive[i],
                                        'class': 'pic' + (i+1)
                                        }));
        imagesDiv.append(imageDiv);
      });


      $('#images').append(imagesDiv);
    });
  };

  $(".container").mousemove(function(e) {
    parallaxIt(e, ".container", -10);
    //parallaxIt(e, "#images", -100);
    parallaxIt(e, ".pic1", -130);
    parallaxIt(e, ".pic2", -200);
    parallaxIt(e, ".pic3", -100);
    parallaxIts(e, ".pic4", -100);
    parallaxIt(e, ".pic5", -150);
    parallaxIt(e, ".logo", -50);
  });

  function parallaxIt(e, target, movement) {
    var $this = $(".container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

   function parallaxIts(e, target, movement) {
      var $this = $(".container");
      var relY = e.pageX - $this.offset().left;
      var relX = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
  }
});
