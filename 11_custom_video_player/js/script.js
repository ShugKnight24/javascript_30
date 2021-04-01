'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress');
const progressBarFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const resize = player.querySelector('.resize');

function togglePlay(){
	const method = video.paused ? 'play' : 'pause';

	video[method]();
}

function updateButton(){
	const icon = this.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';

	toggle.innerHTML = icon;
}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;

	progressBarFilled.style.flexBasis = `${ percent }%`;
}

function handleSpeedChange() {
	const currentSpeed = video.playbackRate;
	const speedIcon = player.querySelector('.video-speed-icon');
	const currentSpeedText = player.querySelector('.current-speed span');

	if (currentSpeed < 0.5){
		speedIcon.innerHTML = '<i class="fal fa-tachometer-slowest"></i>';
	} else if (currentSpeed >= 0.5 && currentSpeed < 1){
		speedIcon.innerHTML = '<i class="fal fa-tachometer-slow"></i>';
	} else if (currentSpeed >= 1 && currentSpeed < 1.5){
		speedIcon.innerHTML = '<i class="fal fa-tachometer-average"></i>';
	} else if (currentSpeed >= 1.5 && currentSpeed < 2.5){
		speedIcon.innerHTML = '<i class="fal fa-tachometer-fast"></i>';
	} else if (currentSpeed > 2.5){
		speedIcon.innerHTML = '<i class="fal fa-tachometer-fastest"></i>';
	}

	currentSpeedText.textContent = `x${ currentSpeed }`;
}

function scrub(event){
	const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration;

	video.currentTime = scrubTime;
}

function resizePlayer(){
	if (video.requestFullscreen) {
		video.requestFullscreen();
	}	else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	} else if (video.msRequestFullScreen) {
		video.msRequestFullScreen();
	}
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('ratechange', handleSpeedChange);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (event) => mousedown && scrub(event));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);

resize.addEventListener('click', resizePlayer);