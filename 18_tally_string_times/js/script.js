'use strict';

const timeNodes = document.querySelectorAll('li[data-time');

const timeNodesArray = Array.from(timeNodes);
let total = 0;

timeNodesArray.map((timeNode) => {
	const time = timeNode.dataset.time;
	const [mins, secs] = time.split(':');
	const timeInSeconds = (parseFloat(mins) * 60) + parseFloat(secs);
	total += timeInSeconds;
	const videoTitle = timeNode.textContent.trim();

	timeNode.textContent = `${ videoTitle } - ${ time } - ${ timeInSeconds } seconds`;
});

const totalTimeTitle = document.querySelector('.total-video-time');

let secondsRemaining = total;
const timeInHours = Math.floor(secondsRemaining / 3600);
secondsRemaining = secondsRemaining % 3600;
const miutesRemaining = Math.floor(secondsRemaining / 60);
secondsRemaining = secondsRemaining % 60;

totalTimeTitle.textContent = `${ timeInHours } : ${ miutesRemaining } : ${ secondsRemaining } H:m:s`;