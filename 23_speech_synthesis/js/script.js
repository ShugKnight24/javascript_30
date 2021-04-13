const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
// const languageDropdown = document.querySelector('[name="language"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


msg.text = document.querySelector('[name="text"]').value;

function changeLanguage(){
	// TODO filter by language
	// Add input for all possible langs
	// const currentLang = this.value;
	// voicesDropdown.innerHTML = voices.filter(voice => voice.lang.includes('${ currentLang }'))
	//.map(({name, lang}) => {
	// 	return `<option value="${ name }">${ name } - ${ lang }</option>`
	// }).join('');
}

// function populateLanguages(){
	// add reset back to all
// 	voices = this.getVoices();
// 	languageDropdown.innerHTML = voices.map(({lang}) => {
// 		return `<option value="${ lang }">${ lang }</option>`
// 	}).join('');
// }

function populateVoices(){
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices.map(({name, lang}) => {
		return `<option value="${ name }">${ name } - ${ lang }</option>`
	}).join('');
}

function changeVoice(){
	currentVoice = voices.find(({ name }) => name === this.value);
	msg.voice = currentVoice;
	restartVoice();
}

function restartVoice(restartSpeech = true){
	speechSynthesis.cancel();
	if (restartSpeech){
		speechSynthesis.speak(msg);
	}
}

function setOption(){
	msg[this.name] = this.value;
	restartVoice();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', changeVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', restartVoice);
stopButton.addEventListener('click', () => restartVoice(false));

// languageDropdown.addEventListener('change', changeLanguage);
