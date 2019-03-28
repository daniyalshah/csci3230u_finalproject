// video card for video pages
var player,
		card  = document.querySelector( '.card' ),
		play  = document.querySelector( '.card-play' ),
		video = document.querySelector( '.card-video' );


// bright grey effect
card.onmousemove = function (e) {
	const x = e.pageX - card.offsetLeft;
	const y = e.pageY - card.offsetTop;

	card.style.setProperty( '--x', x + 'px' );
	card.style.setProperty( '--y', y + 'px' );
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
		card.classList.add( 'video-is-open' );
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
