'use strict';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdown-background');
const nav = document.querySelector('.top');

function handleEnter(){
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
	background.classList.add('open');

	const currentDropdown = this.querySelector('.dropdown');
	const dropdownCoords = currentDropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left
	}

	background.style.setProperty('width', `${ coords.width }px`);
	background.style.setProperty('height', `${ coords.height }px`);
	background.style.setProperty('transform', `translate(${ coords.left }px, ${ coords.top }px)`);
}

function handleLeave(){
	this.classList.remove('trigger-enter-active');
	setTimeout(() => this.classList.remove('trigger-enter'), 150);
	background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

const coolHeader = document.querySelector('.cool-header');
const headerButton = document.querySelector('.button-container button');
let isHidden = false;

function toggleHeader(){
	coolHeader.classList.toggle('hidden');
	isHidden = !isHidden;

	headerButton.textContent = isHidden ? 'Add Header' : 'Remove Header';
}

headerButton.addEventListener('click', toggleHeader);