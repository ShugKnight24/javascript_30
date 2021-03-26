'use strict';

const panels = document.querySelectorAll('.panel');

function toggleOpen(){
	if (this.classList.contains('open')){
		this.classList.toggle('open');
	} else {
		resetPanels();
		this.classList.toggle('open');
	}
}

function resetPanels(){
	panels.forEach(panel => panel.classList.remove('open'))
}

function toggleActive(event){
	if (event.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
