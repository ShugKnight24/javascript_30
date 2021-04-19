let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	const minutes = Math.floor(seconds / 60);
	let remainingSeconds = seconds % 60;
	remainingSeconds = remainingSeconds >= 10 ? remainingSeconds : `0${ remainingSeconds }`;
	const time = `${ minutes }:${ remainingSeconds }`;
	
	timerDisplay.textContent = time;
	document.title = time;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	let hour = end.getHours();
	hour = hour > 12 ? hour % 12 : hour;
	let minutes = end.getMinutes();
	minutes = minutes >= 10 ? minutes : `0${ minutes }`;

	endTime.textContent = `Be back at ${ hour }:${ minutes }`;
}

function startTimer(){
	const timeInSeconds = parseInt(this.dataset.time);

	timer(timeInSeconds);
}

buttons.forEach( button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(event){
	event.preventDefault();
	const mins = this.minutes.value;
	// if (typeof parseInt(mins) !== 'number') return;
	timer(mins * 60);
	this.reset();
})