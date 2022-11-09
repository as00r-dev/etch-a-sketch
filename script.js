//select Elements
const WRAPPER = document.querySelector(".wrapper");
const ROOT = document.querySelector(":root");
const SELECT = document.querySelector("select");
const BUTTON = document.querySelector("button");

//Generate Squares
function generateSquares(gridWidth) {
	for (let i = 0; i < Math.pow(gridWidth, 2); i++) {
		const SQUARE = document.createElement("div");
		SQUARE.classList.add("square");
		WRAPPER.appendChild(SQUARE);
		WRAPPER.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
		WRAPPER.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
		//add event listeners to squares
		SQUARE.addEventListener("mouseover", addColor);
	}
}

//clear squares
function clearSquares() {
	WRAPPER.innerHTML = "";
}
//generate a random color
function generateColor() {
	const hue = Math.round(Math.random() * 360);
	return hue;
}

//add random color to square on hover
function addColor(e) {
	const hue = generateColor();
	e.target.style.backgroundColor = `hsl(${hue},100%,50%)`;
}

//handle click
function clickHandler() {
	clearSquares();
	generateSquares(SELECT.value);
}

//change grid size when button clicked
BUTTON.addEventListener("click", clickHandler);

//default 16x16 squares
generateSquares(16);
