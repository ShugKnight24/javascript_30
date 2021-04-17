'use strict';

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
		.then(localMediaStream => {
			video.srcObject = localMediaStream;
			video.play();
		})
		.catch(err => {
			console.error('Error', err);
		})
}

function paintToCanvas(){
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height);

		// pixels = redFilter(pixels);
		
		// pixels = rgbSplitFilter(pixels);
		// ctx.globalAlpha = 0.1;
		
		pixels = greenScreen(pixels);
		ctx.putImageData(pixels, 0, 0);
	}, 150)
}

let totalImages = 0;

function takePhoto(){
	playCameraSnapAudio();

	const data = canvas.toDataURL('image/jpeg');

	++totalImages;

	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', `yourSexyFace_${ totalImages }`);
	link.innerHTML = `<img src="${ data }" alt="Your Webcam Photo#${ totalImages }" />`
	strip.insertBefore(link, strip.firstChild);
}

function playCameraSnapAudio(){
	snap.currentTime = 0;
	snap.play();
}

function redFilter(pixels){
	for (let i = 0; i < pixels.data.length; i+=4){
		pixels.data[i] = pixels.data[i] + 150 // r
		pixels.data[i + 1] = pixels.data[i + 1] - 50 // g
		pixels.data[i + 2] = pixels.data[i + 2] - 50 // b
	}

	return pixels;
}

function rgbSplitFilter(pixels){
	for (let i = 0; i < pixels.data.length; i+=4){
		pixels.data[i - 150] = pixels.data[i] // r
		pixels.data[i + 500] = pixels.data[i + 1] // g
		pixels.data[i - 550] = pixels.data[i + 2] // b
	}

	return pixels;
}

function greenScreen(pixels){
	const levels = {};

	document.querySelectorAll('.rgb input').forEach((input) => {
		levels[input.name] = input.value;
	});

	for (i = 0; i < pixels.data.length; i = i + 4) {
		red = pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];

		if (red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
			&& green <= levels.gmax
			&& blue <= levels.bmax) {
			// take it out!
			pixels.data[i + 3] = 0;
		}
	}

	return pixels;
}

video.addEventListener('canplay', paintToCanvas);

getVideo();