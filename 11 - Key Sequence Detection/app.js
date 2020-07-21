// konami code, basically a keylogger
const pressed = [];
// caesar cipher of "code"
const secretCode = "frgh";

window.addEventListener("keyup", e => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if (pressed.join("").includes(secretCode)) {
        console.log("DING DING DING");
    }
});