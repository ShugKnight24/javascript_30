'use strict';

const example = [];
const pressed = [];
const konamiCode = [];

const exampleCode = 'test';
const secretCode = 'shugmishumunov';
const konamiSecret = 'upupdowndownleftrightleftrightab';

window.addEventListener('keyup', (event) => {
	const pressedKey = event.key;
	const pressedArrowKey = pressedKey.includes('Arrow');

	example.push(pressedKey);
	example.splice(-exampleCode .length - 1, (example.length - exampleCode.length));

	if (example.join('').includes(exampleCode)){
		alert('First secret code discovered! Try to guess some others');
		cornify_add();
	}

	if (pressedKey !== 'Shift' || pressedKey !== 'CapsLock'){
		pressed.push(pressedKey);
	}
	pressed.splice(-secretCode.length - 1, (pressed.length - secretCode.length));

	if (pressed.join('').toLowerCase().includes(secretCode)){
		console.log('Congrats for finding the Easter Egg');
		cornify_add();
	}

	let trimmedKey = pressedArrowKey 
		? pressedKey.replace('Arrow', '').toLowerCase()
		: pressedKey;
	
	konamiCode.push(trimmedKey);
	konamiCode.splice(-konamiSecret.length - 1, (konamiCode.length - konamiSecret.length));

	if (konamiCode.join('').includes(konamiSecret)){
		console.log('You remember the code!');
		showKonamiSecret();
	}
});

function showKonamiSecret(){
	const konamiContainer = document.querySelector('.konami-secret');
	konamiContainer.classList.remove('hidden');
}