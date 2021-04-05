'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
let isItems = (items.length > 0) ? true : false;

function addItem(event){

	event.preventDefault();

	const text = (this.querySelector('[name="item"]')).value;
	const item = {
		text,
		done: false
	};

	items.push(item);
	isItems = (items.length > 0) ? true : false;
	showHideActions();
	buildAndSave();
	this.reset();
}

function toggleDone(event){
	if (!event.target.matches('input')) return;

	const element = event.target;
	const index = element.dataset.index;

	items[index].done = !items[index].done;
	
	buildAndSave();
}

function populateList(plates = [], platesList){

	platesList.innerHTML = plates.map(({done, text}, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${ i } id="item${ i }" ${ done ? 'checked' : '' } />
				<label for="item${ i }">${ text }</label>
				<i class="far fa-trash-alt delete-plate" data-index=${ i }></i>
			</li>
		`;
	}).join('');
}

addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

function buildAndSave(){
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
}

document.addEventListener('click', function(event){
	let target = event.target;
	let index = target.dataset.index;
	if (!target.classList.contains('delete-plate')) return;

	deletePlate(index);
	isItems = (items.length > 0) ? true : false;
	showHideActions();
	buildAndSave();
});

function deletePlate(currentIndex){
	items.splice(currentIndex, 1);
}

const actions = document.querySelector('.actions');

function showHideActions(){
	if (isItems){
		actions.classList.add('active');
	} else {
		actions.classList.remove('active');
	}
}

// run if there are items in localStorage
showHideActions();

const checkAll = document.querySelector('.check-all');
const deleteAll = document.querySelector('.delete-all');

checkAll.addEventListener('click', checkUncheckAll);
deleteAll.addEventListener('click', deleteAllItems);

let allChecked = false;

function checkUncheckAll(){
	items.forEach(item => {
		allChecked ? item.done = false :item.done = true;
	});
	allChecked = !allChecked;
	buildAndSave();
}

function deleteAllItems(){
	items.splice(0);
	buildAndSave();
	isItems = false;
	showHideActions();
}