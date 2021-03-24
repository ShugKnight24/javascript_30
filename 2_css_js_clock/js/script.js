'use strict';

const digitalClock = document.querySelector('.digital-clock .time');

function setTime(){
	const currentTime = new Date();
	const day = currentTime.getDay();
	const date = currentTime.getDate();
	const month = currentTime.getMonth();
	const year = currentTime.getFullYear();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	let dayOfWeek = days[day];

	let formattedDate = date;

	if (formattedDate === 1 || formattedDate === 21 || formattedDate === 31){
		formattedDate += 'st';
	} else if (formattedDate === 2 || formattedDate === 22){
		formattedDate += 'nd';
	} else if (formattedDate === 3 || formattedDate === 23){
		formattedDate += 'rd';
	} else if (formattedDate >= 4 && formattedDate <= 20){
		formattedDate += 'th';
	} else {
		formattedDate += 'th';
	}

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	let formattedMonth = months[month];

	let formattedHours = hours;
	let dayOrNight = (formattedHours < 12) ? 'A.M.' : 'P.M.';

	if (formattedHours === 0){
		formattedHours = 12;
		dayOrNight = 'A.M.';
	}
	if (formattedHours > 12){
		formattedHours -= 12;
	}

	formattedHours = (formattedHours < 10) ? '0' + formattedHours : formattedHours;
	let formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
	let formattedSeconds = (seconds < 10) ? '0' + seconds : seconds;

	const time = {
		day: dayOfWeek,
		month: formattedMonth,
		date: formattedDate,
		year: year,
		hour: formattedHours,
		minute: formattedMinutes,
		second: formattedSeconds,
		dayOrNight: dayOrNight
	}

	return time;
}

// Digital clock
function setDigitalTime(){
	const { hour, minute, second, dayOrNight } = setTime();

	const digitalTime = `${ hour }:${ minute }:${ second } ${ dayOrNight }`;

	digitalClock.innerHTML = digitalTime;
	setInterval(setDigitalTime, 1000);
}

function setDayOfWeek(){
	const time = setTime();
	const day = document.querySelector(`.day.${(time.day).toLowerCase()}`);
	day.classList.add('active');
}

function setDate(){
	const { month, date, year  } = setTime();

	const monthElement = document.querySelector('.month');
	monthElement.innerHTML = month;

	const dateElement = document.querySelector('.date');
	dateElement.innerHTML = date;

	const yearElement = document.querySelector('.year');
	yearElement.innerHTML = year;
}

// Analog clock
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setAnalogClock(){
	const { second, minute, hour} = setTime();

	const secondsDegrees = ((second / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${ secondsDegrees }deg)`;

	const minutesDegrees = ((minute / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${ minutesDegrees }deg)`;

	const hoursDegrees = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${ hoursDegrees }deg)`;

	setInterval(setAnalogClock, 1000);
}

function init(){
	setDigitalTime();
	setDayOfWeek();
	setDate();
	setAnalogClock();
}
init();
