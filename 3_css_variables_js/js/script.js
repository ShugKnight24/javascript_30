'use strict';

function getId(element){
	return document.getElementById(element);
}

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	let inputValue = this.value;

	if (this.id === 'base'){
		const colorInput = getId('base-input');
		colorInput.value = this.value.toUpperCase();
	}

	if (this.id === 'base-input'){
		const colorValidator = /^#([0-9A-F]{3}){1,2}$/i.test(inputValue);

		if (!colorValidator) return;
	
		if (inputValue.length === 4){
			inputValue = '#' + inputValue[1] + inputValue[1] + inputValue[2] + inputValue[2] + inputValue[3] + inputValue[3];
		}

		const base = getId('base');
		const colorInput = getId('base-input');
		base.value = inputValue;
		colorInput.value = inputValue;
	}

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const sideInputs = document.querySelectorAll('.side-controls input');

sideInputs.forEach(input => input.addEventListener('change', handleUpdate));
sideInputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// side controls Logic
function openControls() {
	document.querySelector('.side-controls').classList.add('open');
}

const openControlButton = document.querySelector('.open-controls');

openControlButton.addEventListener('click', openControls);

function closeControls() {
	document.querySelector('.side-controls').classList.remove('open');
}

const closeControlButton = document.querySelector('.close-button');

closeControlButton.addEventListener('click', closeControls);
