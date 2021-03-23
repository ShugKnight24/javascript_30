'use strict';

function playSound(event){
	const audio = document.querySelector(`audio[data-key="${ event.keyCode }"]`);
	const key = document.querySelector(`.key[data-key="${ event.keyCode }"]`);

	if (!audio) return;
	
	resetAndPlayAudioFile(audio);
	key.classList.add('playing');
}

document.addEventListener('keydown', playSound)
document.addEventListener('keyup', function(event){
	const key = document.querySelector(`.key[data-key="${ event.keyCode }"]`)
	if(key && key.classList.contains('playing')) key.classList.remove('playing');
})

function removeTransition(event){
	if (event.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
});

function playSoundOnClick(){
	const data = this.dataset.key;
	const audio = document.querySelector(`audio[data-key="${ data }"]`);
	
	resetAndPlayAudioFile(audio);
	this.classList.add('playing');
}

keys.forEach(key => key.addEventListener('click', playSoundOnClick));

function resetAndPlayAudioFile(audioElement){
	// reseting to 0 allows multiple keypresses in quick succession
	audioElement.currentTime = 0;
	audioElement.play();
}

