'use strict';

const pressed = [];

const secretCode = 'shugmishumunov';

window.addEventListener('keyup', (event) => {
	pressed.push(event.key);
	pressed.splice(-secretCode.length - 1, (pressed.length - secretCode.length));

	if (pressed.join('').includes(secretCode)){
		console.log('Congrats for finding the Easter Egg');
		cornify_add();
	}

	// console.log(event.key);
	// console.log(pressed);
});
