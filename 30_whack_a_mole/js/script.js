const moleHills = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let previousMoleHill;
let gameOver = false;
let score = 0;

function randomTime(min, max){
	return Math.round(Math.random() * max  -min + min);
}

function randomMoleHill(holes){
	const index = Math.floor(Math.random() * holes.length);
	const currentMoleHill = moleHills[index];
	if (currentMoleHill === previousMoleHill){
		return randomMoleHill(moleHills);
	}
	previousMoleHill = currentMoleHill;
	return currentMoleHill;
}

function popUp(){
	const time = randomTime(200, 1000);
	const hole = randomMoleHill(moleHills);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!gameOver) popUp();
	}, time);
}

function startGame(){
	score = 0;
	scoreBoard.textContent = score;
	gameOver = false;
	popUp();
	setTimeout(() => gameOver = true, 10000); // Todo set time via input using a flag 
}

function hitMole(event){
	if (!event.isTrusted) return; // todo - alert... cheater cheater pumpkin eater
	score++;
	this.classList.remove('up');
	scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', hitMole));
