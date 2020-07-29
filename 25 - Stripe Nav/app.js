const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
    this.classList.add("trigger-enter");
    setTimeout(() => {
        if (this.classList.contains("trigger-enter")) {
            this.classList.add("trigger-enter-active")
        }
    }, 150);

    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");
    const dropdownCoordinates = dropdown.getBoundingClientRect();
    const navCoordinates = nav.getBoundingClientRect();

    const coordinates = {
        height: dropdownCoordinates.height,
        width: dropdownCoordinates.width,
        top: dropdownCoordinates.top - navCoordinates.top,
        left: dropdownCoordinates.left - navCoordinates.left
    };

    background.style.setProperty("width", `${coordinates.width}px`);
    background.style.setProperty("height", `${coordinates.height}px`);  
    background.style.setProperty("transform", `translate(${coordinates.left}px, ${coordinates.top}px)`); 

}

function handleLeave() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));