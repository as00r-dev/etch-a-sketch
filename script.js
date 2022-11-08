//select Elements
const WRAPPER = document.querySelector(".wrapper");
const ROOT = document.querySelector(":root");

//256 squares
for (let i = 0; i < 256; i++) {
	const SQUARE = document.createElement("div");
	SQUARE.classList.add("square");
	WRAPPER.appendChild(SQUARE);
	//add event listeners to squares
	SQUARE.addEventListener("mouseover", addColor);
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
