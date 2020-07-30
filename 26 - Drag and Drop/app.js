const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add("active");
}

function handleMouseLeave() {
    isDown = false;
    slider.classList.remove("active");
}

function handleMouseUp() {
    isDown = false;
    slider.classList.remove("active");
}

function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener("mousedown", handleMouseDown);
slider.addEventListener("mouseleave", handleMouseLeave);
slider.addEventListener("mouseup", handleMouseUp); 
slider.addEventListener("mousemove", handleMouseMove);