'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(res => res.json())
	.then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
	return cities.filter(({ city, state }) => {
		// Figure out if the city or state matches the entered text
		const regex = new RegExp(wordToMatch, 'gi'); // global & case insensitive
		return city.match(regex) || state.match(regex);
	});
}

function numberWithCommas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
	const matchArray = findMatches(this.value, cities);
	const {latitude, longitude, city, state } = matchArray[0];
	buildMap([latitude, longitude], city, state);

	const html = matchArray.map(({ city, state, population, latitude, longitude }) => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = city.replace(regex, `<span class="hl">${ this.value }</span>` );
		const stateName = state.replace(regex, `<span class="hl">${ this.value }</span>`)
		const latLong = [latitude, longitude];
		return `
			<li>
				<a class="build-map" onClick="buildMap([${ latLong }], '${ city }', '${ state }')">
					<span class="name">${ cityName }, ${ stateName }</span> -
					<span class="population-text">Pop:</span>
					<span class="population">${ numberWithCommas(population) }</span>
				</a>
			</li>
		`
	}).join('');
	suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

const mapContainer = document.querySelector('.map-container');

function buildMap(latLong, city, state, mapZoom = 12){
	if (mapContainer.classList.contains('hidden')){
		console.log('hidden')
		mapContainer.classList.toggle('hidden')
	}
	myMap.setView(latLong, mapZoom);
	addCityAndState(city, state);
}

function addCityAndState(city, state){
	document.querySelector('.map-title').innerHTML = `Map of ${ city }, ${ state }`;
}

// Setup BaseMap - OpenStreetMap & Leaflet
const myMap = L.map('map');

// basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

myBasemap.addTo(myMap);

let markers = L.layerGroup().addTo(myMap);