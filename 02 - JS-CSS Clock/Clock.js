const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondsInDegrees = ((seconds / 60) * 360) + 90;
    const minutesInDegrees = ((minutes / 60) * 360) + 90;
    const hoursInDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

    fixTransitionGlitch(secondsInDegrees, secondHand);
    fixTransitionGlitch(minutesInDegrees, minuteHand);

    console.log(`H: ${hours}, M: ${minutes}, S: ${seconds}`);
}

function fixTransitionGlitch(timeInDegrees, hand) {
    if (timeInDegrees === 90) {
        hand.style.transition = "all 0s";
    } else {
        hand.style.transition = "all 0.05s";
    }
}

setInterval(setDate, 1000);