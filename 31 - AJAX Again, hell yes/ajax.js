const button = document.getElementById("btn");
const error = document.getElementById("error");
const animalList = document.getElementById("animal-info");
const request = new XMLHttpRequest();
let pageCounter = 1;

async function fetchData() {
    const endpoint = `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`;
    const response = await fetch(endpoint);
    const data = await response.json();

    checkPageCounter();
    return data;
}

function checkPageCounter() {
    if (pageCounter >= 3) {
        button.disabled = true;
        button.classList.add("hide-me");
    } else {
        pageCounter++;
    }
}

function renderHTML(data) {
    data.forEach(d => {
        animalList.innerHTML += `
        <p><strong>${d.name}</strong> 
        is a <strong>${d.species}</strong> that likes 
        to eat <strong>${d.foods.likes.join(" and ")}</strong>
        but dislikes <strong>${d.foods.dislikes.join(" and ")}</strong></p>`
    });

    animalList.innerHTML += "<br>";
}

function renderErrorMessage(err) {
    error.innerHTML = `Hello! Something went wrong, please try refreshing the page. <strong>ERROR: ${err}</strong></strong>`;
}

button.addEventListener("click", () => {
    fetchData()
        .then(data => renderHTML(data))
        .catch(err => renderErrorMessage(err));
});