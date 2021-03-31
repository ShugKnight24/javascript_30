'use strict';

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 75; // account for padding
canvas.height = window.innerHeight - 175; // account for padding

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// blending
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let manualStroke = false;
let eraseMode = false;

function draw(event){

	// Stop drawing if not clicking mouse down
	if (!isDrawing) return;

	// console.log(event);
	ctx.strokeStyle = eraseMode ? '#FFF' : `hsl(${ hue }, 100%, 50%)`;
	ctx.beginPath();

	// Start line from
	ctx.moveTo(lastX, lastY);

	// End line
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	[lastX, lastY] = [event.offsetX, event.offsetY];

	hue++;
	if (hue >= 360) hue = 0;
	
	if (!manualStroke){
		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
		direction ? ctx.lineWidth++ : ctx.lineWidth--;
	}

}

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', (event) => {
	isDrawing = true;
	[lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Canvas Settings
const clearCanvasButton = document.querySelector('.clear-canvas');

clearCanvasButton.addEventListener('click', clearCanvas);

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// stroke size
const strokeSizeButtons = document.querySelectorAll('.stroke-tools button');

strokeSizeButtons.forEach(strokeButton => {
	strokeButton.addEventListener('click', resizeStroke);
})

function resizeStroke(){
	const strokeSize = this.dataset.strokeSize;

	if (strokeSize === 'random' && ctx.lineWidth === 100){
		manualStroke = false;
		direction = !direction;
		return;
	}

	if (strokeSize === 'random') return manualStroke = false;

	if (strokeSize === 'small') ctx.lineWidth = 25;
	if (strokeSize === 'medium') ctx.lineWidth = 50;
	if (strokeSize === 'large') ctx.lineWidth = 100;

	manualStroke = true;
}

// Eraser
const eraserButton = document.querySelector('.eraser');

eraserButton.addEventListener('click', eraser);

function eraser(){
	eraseMode = true;
}

// Draw Mode
const drawButton = document.querySelector('.draw-mode');

drawButton.addEventListener('click', drawMode);

function drawMode(){
	eraseMode = false;
}

// Save Image
const saveButton = document.querySelector('.save-canvas')

saveButton.addEventListener('click', saveImageToPNG);

function saveImageToPNG(){
	// IE
	if ( window.navigator.msSaveBlob ){
		window.navigator.msSaveBlob(canvas.msToBlong(), 'canvas_drawing.png');
	} else { // Google / FF / Safari
		const newImage = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
		const downloadButton = document.createElement('a');

		document.body.appendChild(downloadButton);
		downloadButton.href = newImage;
		downloadButton.download = 'canvas_drawing.png';
		downloadButton.click();
		document.body.removeChild(downloadButton);
	}
}