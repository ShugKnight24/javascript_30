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
let customColor = false;
let customStroke = '';

function draw(event){

	// Stop drawing if not clicking mouse down
	if (!isDrawing) return;

	if (customColor) {
		ctx.strokeStyle = customStroke;
	} else {
		ctx.strokeStyle = eraseMode ? '#FFF' : `hsl(${ hue }, 100%, 50%)`;
	}

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

	if (strokeSize === 'random'){
		if (ctx.lineWidth = 100){
			ctx.lineWidth = 99;
		}
		manualStroke = false;
		direction = !direction;
		setButtonActive(this);
		return;
	}

	if (strokeSize === 'random') return manualStroke = false;

	if (strokeSize === 'small') ctx.lineWidth = 25;
	if (strokeSize === 'medium') ctx.lineWidth = 50;
	if (strokeSize === 'large') ctx.lineWidth = 100;

	manualStroke = true;
	setButtonActive(this);
}

// Eraser
const eraserButton = document.querySelector('.eraser');

eraserButton.addEventListener('click', eraser);

function eraser(){
	eraseMode = true;
	setButtonActive(this);
}

// Draw Mode
const drawButton = document.querySelector('.draw-mode');

drawButton.addEventListener('click', drawMode);

function drawMode(){
	eraseMode = false;
	setButtonActive(this);
}

// Save Image
const saveButton = document.querySelector('.save-canvas');

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

// Button Active States
function setButtonActive(element){
	const siblings = element.parentNode.children;
	
	Array.from(siblings).forEach(function(element) {
		element.classList.remove('active');
	});
	element.classList.add('active');	
}

// Color Logic
const colorPicker = document.querySelector('.color-picker');
const colorInput = document.querySelector('.color-input');
const randomizeColorButton = document.querySelector('.randomize-color');

colorPicker.addEventListener('input', updateColor);
colorPicker.addEventListener('propertychange', updateColor);
colorInput.addEventListener('input', updateColor);
colorInput.addEventListener('propertychange', updateColor);

function updateColor(){
	const isInput = this.classList.contains('color-input');

	isInput ? validateInputColor(this.value) : setColor(this.value);
}

function setColor(selectedColor){
	colorInput.value = selectedColor.toUpperCase();
	customStroke = selectedColor;
	customColor = true;
	randomizeColorButton.classList.remove('active');
}

function validateInputColor(selectedColor){
	const colorValidator = /^#([0-9A-F]{3}){1,2}$/i.test(selectedColor);

	if (!colorValidator) return;

	if (selectedColor.length === 4){
		selectedColor = '#' + selectedColor[1] + selectedColor[1] + selectedColor[2] + selectedColor[2] + selectedColor[3] + selectedColor[3];
	}

	colorPicker.value = selectedColor;
	customStroke = selectedColor;
	customColor = true;
	randomizeColorButton.classList.remove('active');
}

randomizeColorButton.addEventListener('click', randomizeColor);

function randomizeColor(){
	this.classList.add('active');
	customColor = false;
}