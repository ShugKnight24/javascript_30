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

	let dayOfWeek = day;

	if (dayOfWeek === 0){
		dayOfWeek = 'Sunday';
	} else if (dayOfWeek === 1){
		dayOfWeek = 'Monday';
	} else if (dayOfWeek === 2){
		dayOfWeek = 'Tuesday';
	} else if (dayOfWeek === 3){
		dayOfWeek = 'Wednesday';
	} else if (dayOfWeek === 4){
		dayOfWeek = 'Thursday';
	} else if (dayOfWeek === 5){
		dayOfWeek = 'Friday';
	} else if (dayOfWeek === 6){
		dayOfWeek = 'Saturday';
	}

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

	let formattedMonth = month;

	if (formattedMonth === 0){
		formattedMonth = 'January';
	} else if (formattedMonth === 1){
		formattedMonth = 'February';
	} else if (formattedMonth === 2){
		formattedMonth = 'March';
	} else if (formattedMonth === 3){
		formattedMonth = 'April';
	} else if (formattedMonth === 4){
		formattedMonth = 'May';
	} else if (formattedMonth === 5){
		formattedMonth = 'June';
	} else if (formattedMonth === 6){
		formattedMonth = 'July';
	} else if (formattedMonth === 7){
		formattedMonth = 'August';
	} else if (formattedMonth === 8){
		formattedMonth = 'September';
	} else if (formattedMonth === 9){
		formattedMonth = 'October';
	} else if (formattedMonth === 10){
		formattedMonth = 'November';
	} else if (formattedMonth === 11){
		formattedMonth = 'December';
	}

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
	const time = setTime();

	const digitalTime = time.hour + ':' + time.minute + ':' + time.second + ' ' + time.dayOrNight;

	digitalClock.innerHTML = digitalTime;
	setInterval(setDigitalTime, 1000);
}
setDigitalTime();

function setDayOfWeek(){
	const time = setTime();
	const day = document.querySelector(`.day.${(time.day).toLowerCase()}`);
	day.classList.add('active');
}
setDayOfWeek();

function setDate(){
	const time = setTime();

	const month = document.querySelector('.month');
	month.innerHTML = time.month;

	const date = document.querySelector('.date');
	date.innerHTML = time.date;

	const year = document.querySelector('.year');
	year.innerHTML = time.year;
}
setDate();

// Analog clock
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setAnalogClock(){
	const time = setTime();

	const secondsDegrees = ((time.second / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutesDegrees = ((time.minute / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hoursDegrees = ((time.hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	setInterval(setAnalogClock, 1000);
}
setAnalogClock();
