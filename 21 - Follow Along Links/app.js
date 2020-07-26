const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
    const linkCoordinates = this.getBoundingClientRect();

    const coordinates = {
        width: linkCoordinates.width,
        height: linkCoordinates.height,
        top: linkCoordinates.top + window.scrollY,
        left: linkCoordinates.left + window.scrollX
    }

    highlight.style.width = `${coordinates.width}px`;
    highlight.style.height = `${coordinates.height}px`;
    highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`;
}

const initialCoordinate = document.querySelector("li").firstChild.getBoundingClientRect();
const initStart = {
    left: initialCoordinate.left + window.scrollX,
    top: initialCoordinate.top + window.scrollY
};

highlight.style.transform = `translate(${initStart.left}px, ${initStart.top}px)`;

triggers.forEach(link => link.addEventListener("mouseenter", highlightLink));