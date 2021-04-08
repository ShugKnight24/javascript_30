const screamoBands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog', 'Fall of Troy', 'Chiodos'];

const screamoArray = [];

const edmDjs = ['Alan Walker', 'MarshMello', 'Gryffn ', 'Robin Hustin', 'Desmeon', 'Tritonal', 'Tiesto', 'Porter Robinson', 'Insan3Lik3', 'Armin Van Buuren', 'Galantis', 'Braken', 'Vicetone'];

const edmArray = [];


const rappers = ['Eminem', 'Kendrick Lamar', 'JCole', 'Joyner Lucas', 'NF', 'Hopsin'];

const rapperArray = [];

function buildGenreArray(artistArray, newArray, genreString){
	for (let i = 0; i < artistArray.length; i++){
		newArray.push({
			artistName: artistArray[i],
			genre: genreString
		});
	}
}

buildGenreArray(screamoBands, screamoArray, 'Screamo');
buildGenreArray(edmDjs, edmArray, 'EDM');
buildGenreArray(rappers, rapperArray, 'Rap');

const allMusicActs = [...screamoArray, ...edmArray, ...rapperArray];

console.log(allMusicActs);

function remove(artistName){
	return artistName.replace(/^(a |the |an )/i, '').trim();
}

const sortedArtists = allMusicActs.sort(({ artistName: artistOneName }, { artistName: artistTwoName }) => (remove(artistOneName) > remove(artistTwoName)) ? 1 : -1 );

const bandsList = document.getElementById('bands');

function buildList(sortedArtists){
	bandsList.innerHTML = sortedArtists.map(({ artistName, genre }, index) => `
		<li class="band-name band-${ index + 1 }">
			${ artistName } - ${ genre }
		</li>
	`).join('');
}

buildList(allMusicActs);