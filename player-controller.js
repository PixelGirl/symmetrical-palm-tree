var musicPlayer = document.getElementById("musicPlayer");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");
var songSeeker = document.getElementById("songSeeker");
var currentTime = document.getElementById("currentTime");
var remainingTime = document.getElementById("remainingTime");

var lastSeekPosition;

window.onload = function() {
	setInterval(update, 1);
};

musicPlayer.oncanplay = initSong;

musicPlayer.onplay = function() {
	playIcon.style.display = 'none';
	pauseIcon.style.display = 'inline';
}

musicPlayer.onpause = function() {
	playIcon.style.display = 'inline';
	pauseIcon.style.display = 'none';
}

musicPlayer.ontimeupdate = playTimeUpdate;

musicPlayer.ondurationchange = function() {
    songSeeker.max = musicPlayer.duration;
    lastSeekPosition = musicPlayer.currentTime;
};

function initSong() {
}

function previousSong() {
	
}

function playPause() {
	if(musicPlayer.paused) {
		musicPlayer.play();
	} else {
		musicPlayer.pause();
	}
}

function nextSong() {
	
}

function update() {
	if(songSeeker.value !== lastSeekPosition){
		musicPlayer.currentTime = songSeeker.value;
	}
	songSeeker.value = musicPlayer.currentTime;
	lastSeekPosition = songSeeker.value;
}

function playTimeUpdate() {
	var currentMinute = Math.round(musicPlayer.currentTime / 60);
	var currentSecond = Math.floor(musicPlayer.currentTime % 60);
	var remainingMinute = Math.round((musicPlayer.duration - musicPlayer.currentTime) / 60);
	var remainingSecond = Math.floor((musicPlayer.duration - musicPlayer.currentTime) % 60);
	
	if(String(currentSecond).length === 1) {
		currentSecond = `0${currentSecond}`;
	}
	if(String(remainingSecond).length === 1) {
		remainingSecond = `0${remainingSecond}`;
	}
	currentTime.innerHTML = `${currentMinute}:${currentSecond}`;
	remainingTime.innerHTML = `-${remainingMinute}:${remainingSecond}`;
}

