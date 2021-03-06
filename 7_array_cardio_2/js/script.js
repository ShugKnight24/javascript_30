'use strict';

// ## Array Cardio Day 2
const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// .some() checks to see if at least one things matches the criteria
// Array.prototype.some() // is at least one person 19 or older?

const isAdult = people.some(({ year }) => ((new Date()).getFullYear()) - year >= 19);

console.log({ isAdult });

// .everye() checks to see if all the things match the criteria
// Array.prototype.every() // is everyone 19 or older?

const isEveryoneAnAdult = people.every(({ year }) => ((new Date()).getFullYear()) - year >= 19);

console.log({ isEveryoneAnAdult });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const desiredComment = comments.find(({ id }) => (id === 823423));

console.log({ desiredComment });

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexOfComment = comments.findIndex(({ id }) => id === 823423);

console.log({ indexOfComment });

// using splice
// comments.splice(indexOfComment, 1);
//
// console.table(comments);

// Creating a new array of comments
const newComments = [
	...comments.slice(0, indexOfComment),
	...comments.slice(indexOfComment + 1)
];

console.table(newComments);

// This keeps the old comments array intact

console.table(comments);
