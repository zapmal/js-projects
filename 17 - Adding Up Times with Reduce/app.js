const timeNodes = [...document.querySelectorAll("[data-time]")];
const totalTime = document.querySelector(".total");

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [minutes, seconds] = timeCode.split(":").map(parseFloat);

        return (minutes * 60) + seconds;
    })
    .reduce((total, videoSeconds) => total + videoSeconds);

const hours = Math.floor(seconds / 3600);
let secondsLeft = seconds % 3600;

const minutes = Math.floor(seconds / 60);
secondsLeft = seconds % 60;

// totalTime.innerHTML = `<span>Total time <strong>${hours}</strong>:<strong>${minutes}</strong>:<strong>${secondsLeft}</strong></span>`;