'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const shadowOffset = 250; // in px

function makeShadow(event){
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y, target } = event;

	if (this !== target){
		x = x + target.offsetLeft;
		y = y + target.offsetTop;
	}

	const xShadowOffset = Math.round((x / width * shadowOffset) - ( shadowOffset / 2));
	const yShadowOffset = Math.round((y / height * shadowOffset) - ( shadowOffset / 2));

	text.style.textShadow = `
		${ xShadowOffset }px ${ yShadowOffset }px 0 rgba(255, 0, 255, 0.7),
		${ xShadowOffset * -1 }px ${ yShadowOffset }px 0 rgba(0, 255, 255, 0.7),
		${ yShadowOffset }px ${ xShadowOffset }px 0 rgba(0, 255, 0, 0.7),
		${ yShadowOffset * -1 }px ${ xShadowOffset }px 0 rgba(0, 0, 255, 0.7)
	`;
}

hero.addEventListener('mousemove', makeShadow);