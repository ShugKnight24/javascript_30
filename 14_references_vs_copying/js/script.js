'use strict';

// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
//
// console.log({age}, {age2}); // 100 100
//
// age = 200;
//
// console.log({age}, {age2}); // 200 100
//
// let name = 'shug';
// let name2 = name;
//
// console.log({name}, {name2}); // shug shug
//
// name = 'ShugKnight';
//
// console.log({name}, {name2}); // ShugKnight shug

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log({players}, {team}); // ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
// team[3] = 'Shug';
console.log({players}, {team}); // ['Wes', 'Sarah', 'Ryan', 'Shug'] ['Wes', 'Sarah', 'Ryan', 'Shug']

// however what happens when we update that array?
	// since team is a reference to players, both arrays 3rd index get rewritten to 'shug'

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
team2[3] = 'Shug';
console.log({players}, {team2}); // ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Shug']

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Dat Guy';

console.log({players}, {team4});

const team5 = Array.from(players);
team5[3] = 'Dat Other Guy';

console.log({players}, {team5});

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: 'Shugmi Shumunov',
	age: 27
}

// and think we make a copy:

// const newGuy = person;
//
// newGuy.job = 'developer';
//
// console.log({person}, {newGuy});

	// Since newGuy is a reference to person, both objects get the key value pair of job: 'developer' added

// how do we take a copy instead?

const newGuy2 = Object.assign({}, person, {job: 'developer'});

console.log({person}, {newGuy2});

	// Essentially, create a blank object, add the person object to it, then add a new key/value pair.

// We will hopefully soon see the object ...spread

	// Pretty cool that as of using this tutorial, object spread is now implemented when it didn't work when Wes was using it locally

const newGuy3 = {...person}

console.log({newGuy3});

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const shug = {
	name: 'Shugmi Shumunov',
	age: 27,
	social: {
		twitter: '@shugmeshugyou',
		github: 'ShugKnight24'
	}
}

console.log({shug});

const newDev = Object.assign({}, shug);

newDev.name = 'ShugKnight';

// doesn't overwrite shug.name

newDev.social.twitter = 'Dat Dude';

// overwrites shug.social.twitter

console.log({shug}, {newDev});

// Object.assign() only goes one level deep
	// need to use cloneDeep as mentioned above

// Trick to cloning deeper i.e Poor Man's deep clone

const newDev2 = JSON.parse(JSON.stringify(shug));

newDev2.social.twitter = 'This is a test';

console.log({shug}, {newDev2});
