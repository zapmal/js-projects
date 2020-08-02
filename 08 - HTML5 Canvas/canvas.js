const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
const clearCanvas = document.querySelector(".options button");
const color = document.querySelector("#color");
const lineWidth = document.querySelector("#line");
const turnDynamic = document.querySelector("#dynamicLine");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADASS";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = lineWidth.value;
// context.globalCompositeOperation = "multiply";

let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;
// pun intended
let theChoosenColor;
let isChecked = false;

function draw(e) {
    if (!isDrawing) return;

    if (!isChecked) {
        context.strokeStyle = theChoosenColor;
    } else {
        makeLineAndColorDynamic();
    }

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeColor() {
    theChoosenColor = this.value;
}

function changeLineWidth() {
    context.lineWidth = this.value;
}

function makeLineAndColorDynamic() {
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;

    if (hue >= 360) {
        hue = 0;
    }

    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }

    direction ? context.lineWidth++ : context.lineWidth--;
}

canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
clearCanvas.addEventListener("click", clear);
color.addEventListener("change", changeColor);
color.addEventListener("click", changeColor);
lineWidth.addEventListener("change", changeLineWidth);
turnDynamic.addEventListener("click", () => isChecked = !isChecked);