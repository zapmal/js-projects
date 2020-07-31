const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function rngTime(minimun, maximum) {
    return Math.round(Math.random() * (maximum - minimun) + minimun);
}

function rngHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole) {
        return rngHole(holes);
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = rngTime(200, 1000);
    const hole = rngHole(holes);
    hole.classList.add("up");

    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();

    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));