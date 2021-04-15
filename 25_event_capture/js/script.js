const divs = document.querySelectorAll('div');

function logText(event){
	// event.stopPropagation();
	console.log(this.classList.value);
}

divs.forEach(div => {
	div.addEventListener('click', logText, {
		capture: false,
	});
});

// document.body.addEventListener('click', logText);

const button = document.querySelector('button');

button.addEventListener('click', () => {
	console.log('Button Clicked once and only once!');
	alert('This button will only fire this event once... Go Ahead... I dare you')
}, {
	once: true // same as .removeEventListener
});