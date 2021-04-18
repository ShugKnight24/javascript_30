const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let clickedDown = false;

function updateSpeed(event){
	if (!clickedDown) return;
	event.preventDefault();
	const currentY = event.pageY - this.offsetTop;
	const percentage = currentY / this.offsetHeight;
	const min = 0.25;
	const max = 4.5;
	const height = `${ Math.round(percentage * 100) }%`;
	const playbackRate = percentage * (max - min) + min;
	bar.style.height = height;
	bar.textContent = `${ playbackRate.toFixed(2) }x`;
	video.playbackRate = playbackRate;
	if (event.type === 'mouseup') clickedDown = false;
}

speed.addEventListener('mousedown', () => clickedDown = true);
speed.addEventListener('mousemove', updateSpeed);
speed.addEventListener('mouseup', updateSpeed);
speed.addEventListener('mouseleave', () => clickedDown = false);