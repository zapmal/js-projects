const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleVideoSpeed(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const minimun = 0.4;
    const maximum = 4;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (maximum - minimun) + minimun;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleVideoSpeed);
