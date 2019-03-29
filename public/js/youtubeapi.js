// video for pages using youtube api
var player,
		pic  = document.querySelector( '.pic' ),
		play  = document.querySelector( '.pic-play' ),
		video = document.querySelector( '.pic-video' );


// bright grey effect
pic.onmousemove = function (e) {
	const x = e.pageX - pic.offsetLeft;
	const y = e.pageY - pic.offsetTop;

	pic.style.setProperty( '--x', x + 'px' );
	pic.style.setProperty( '--y', y + 'px' );
}


// api
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}


// when player is ready
function onPlayerReady(event) {
	play.addEventListener( 'click', function() {
		pic.classList.add( 'video-is-open' );
		setTimeout(function() {
			video.style.display = 'block';
			player.playVideo();
		}, 500);
	});
}


// youTube api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
