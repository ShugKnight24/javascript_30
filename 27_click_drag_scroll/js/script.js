'use strict';

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
	isDown = true;
	slider.classList.add('active');
	startX = event.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (event) => {
	if (!isDown) return;
	event.preventDefault();
	const currentX = event.pageX - slider.offsetLeft;
	const offset = currentX - startX;

	slider.scrollLeft = scrollLeft - offset;
});