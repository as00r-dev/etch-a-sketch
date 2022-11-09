# Etch-A-Sketch

## Description

This was made as a supplementary project for The Odin Project. This is a
simple tool to create pixelated art.

## Usage

### Installing

In order to use, just clone this repo, and run `index.html`
on any browser or just go to this link to check live version:- https://as00r-dev.github.io/rock-paper-scissor-odin/

### Folder structure

Here's a folder structure:

```
etch-a-sketch/               # Root directory.
|- index.html                # Index
|- script.js                 # Script
|- style.css                 # Style
```

### script.js details

`generateSquares(gridWidth)`: This function generates a grid of
`SQUARE` of `gridWidth`x`gridWidth` dimension. This function runs once
at start, without user input so as to generate a default 16x16 grid.

`clearSquares()`: This functions clears the grid so that a new grid
can be made.

`generateHue()` & `generateLightness()`: To generate random colors,
we are using HSL values where H is hue, S is saturation and L is
lightness. For our use case, To generate rainbow colors, we generate
random hue values. And for fun-dark mode we generate a random value
of lightness between 0 and 50.

`addColor()`: This function adds color to the hovered `SQUARE` according
to the selected coloring mode.

`resizeGrid()`: This function is an intermediate function to clear grid and
generate a new grid according to selection value on dropdown.
