//select Elements
const WRAPPER = document.querySelector(".wrapper");
const ROOT = document.querySelector(":root");
const GRID_SIZE = document.querySelector("select#grid-size");
const COLOR_MODE = document.querySelector("select#color-mode");

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
function generateHue() {
	const hue = Math.round(Math.random() * 360);
	return hue;
}

function generateLightness() {
	const lightness = Math.round(Math.random() * 50);
	return lightness;
}

//add random color to square on hover
function addColor(e) {
	const hue = generateHue();
	const lightness = generateLightness();
	const mode = COLOR_MODE.value;
	switch (mode) {
		case "dark":
			e.target.style.backgroundColor = "#121212";
			break;
		case "rainbow":
			e.target.style.backgroundColor = `hsl(${hue},100%,50%)`;
			break;
		case "fun-dark":
			e.target.style.backgroundColor = `hsl(0,0%,${lightness}%)`;
			break;
		default:
			e.target.style.backgroundColor = "#121212";
			break;
	}
}

//resize grid
function resize() {
	clearSquares();
	generateSquares(GRID_SIZE.value);
}

//change grid size when select
GRID_SIZE.addEventListener("click", resize);

//default 16x16 squares
generateSquares(16);
