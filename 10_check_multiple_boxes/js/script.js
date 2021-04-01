'use strict';

const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let allChecked = false;

function handleCheck(event){

	let inBetween = false;

	if (event.shiftKey && this.checked) {
		checkBoxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
	updateCheckAllState();
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Check All Logic
const checkAllButton = document.querySelector('.check-all');
const checkAllText = document.querySelector('.check-uncheck p');

checkAllButton.addEventListener('click', checkUncheckAll);

function checkUncheckAll(){
	if (allChecked){
		checkBoxes.forEach(checkbox => checkbox.checked = false);
		setCheckButton();
	} else {
		checkBoxes.forEach(checkbox => checkbox.checked = true);
		setUncheckButton();
	}
}

function updateCheckAllState(){
	checkBoxes.forEach(checkbox => {
		if (checkbox.checked === false){
			setCheckButton();
		} else {
			setUncheckButton();
		}
	});
}

function setUncheckButton(){
	checkAllButton.classList.add('uncheck');
	checkAllText.textContent = 'Uncheck All';
	allChecked = true;
}

function setCheckButton(){
	checkAllButton.classList.remove('uncheck');
	checkAllText.textContent = 'Select All';
	allChecked = false;
}