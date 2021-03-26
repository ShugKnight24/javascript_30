'use strict';

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornInFifteen = inventors.filter( ({ born }) => ( born >= 1500 && born < 1600 ));
console.table(bornInFifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const fullNames = inventors.map(({ first: firstName, last: lastName }) => (`${ firstName } ${ lastName }`));
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const orderedInventors = inventors.sort(({ born: firstBorn }, { born: nextBorn }) => firstBorn > nextBorn ? 1 : -1);
console.table(orderedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYearsLived = inventors.reduce((total, { born, passed: passedAway }) => {
	return total + (passedAway - born);
}, 0);
console.log(totalYearsLived);

// 5. Sort the inventors by years lived

const oldestInventors = inventors.map(inventor => {
	inventor.age = (inventor.passed - inventor.born);
	return inventor;
}).sort(function({ age: firstAge }, { age: nextAge }){
	return firstAge > nextAge ? -1 : 1;
});
console.table(oldestInventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const boulevardContainer = document.querySelector('.mw-category');
// const boulevardLinks = Array.from(boulevardContainer.querySelectorAll('a'));
//
// const de = boulevardLinks
// 	.map(({ textContent: linkText }) => linkText)
// 	.filter(streetName => streetName.includes('de'));
//
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

const alphabetically = people.sort((lastOne, nextOne) => {
	const [aLast, aFirst] = lastOne.split(', ');
	const [bLast, bFirst] = nextOne.split(', ');
	return aLast > bLast ? 1 : -1;
});

console.log(alphabetically);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportationInstances = data.reduce((obj, item) => {
	if (!obj[item]) obj[item] = 0;
	obj[item]++;
	return obj;
}, {});

console.log(transportationInstances);
