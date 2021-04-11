window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', ({ results }) => {

	const transcript = Array.from(results)
		.map(result => {return result[0]})
		.map(({ transcript }) => transcript)
		.join('')
	
	p.textContent = transcript;

	if (results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
	}
})

recognition.addEventListener('end', recognition.start)

recognition.start();