'use strict';

const player = document.querySelector('.player');

const video = player.querySelector('.viewer');

const progressBar = player.querySelector('.progress');

const progressBarFilled = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');

const skipButtons = player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){

	const method = video.paused ? 'play' : 'pause';

	video[method]();

}

function updateButton(){

	const icon = this.paused ? '►' : '❚ ❚';

	toggle.textContent = icon;

}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){

	video[this.name] = this.value;

}

function handleProgress(){

	const percent = (video.currentTime / video.duration) * 100;

	progressBarFilled.style.flexBasis = `${percent}%`;

}

function scrub(event){
	const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration;

	video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (event) => mousedown && scrub(event));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);