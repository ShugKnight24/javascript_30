'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

const clickToMakeGreen = document.querySelector('#make-green');

clickToMakeGreen.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'test');

// Styled
console.log('%c I am some styled console text', 'font-size: 24px; color: gold; background-color: blue; text-shadow: 10px 10px 0 rgba(0, 0, 0, .5)');

// warning!
console.warn('Ooopps. This is a warning!');

// Error :|
console.error('I\'m an error!');

// Info
console.info('Banging your head against a wall burns 150 calories an hour.');

// Testing
console.assert(1 === 1, 'This won\'t fire');

console.assert(1 === 2, 'This will fire!');

const p = document.querySelector('p');

console.assert(p.classList.contains('make-green'), 'You did not properly select this element.');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
	// console.group(`${dog.name}`);
	// .groupCollapsed() makes the grouping collapsed initially
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old.`);
	console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Shug');
console.count('Shug');
console.count('Shug');
console.count('Shug');

// timing
console.time('fetching Shug\'s Github data');

fetch('https://api.github.com/users/shugknight24')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching Shug\'s Github data');
		console.log(data)
	});

// table

console.table(dogs);
