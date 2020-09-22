const ENDPOINT = "https://www.breakingbadapi.com/api";
const charactersDropdown = document.getElementById("characters");
const characterImage = document.querySelector(".image img");
const characterName = document.querySelector(".name");
const characterNickname = document.querySelector(".nickname");
const characterPortrayedBy = document.querySelector(".portrayed");
const characterAppearances = document.querySelector(".appearances");
const error = document.querySelector(".error");

async function retrieve() {
    try {
        const response = await fetch(`${ENDPOINT}/characters`);
        const data = await response.json();
        renderCharacterList(data);
    } catch {
        displayError("Sorry, we can't display the information right now.");
    }
}

function renderCharacterList(characterList) {
    charactersDropdown.innerHTML = `
        <select onchange="loadSelected(this.value)">
            <option>Choose a character</option>
            ${characterList.map(character => {
                return `<option>${character.name}</option>`
            })}
        </select>
    `;
}

async function loadSelected(character) {
    if (character != "Choose a character") {
        try {
            const response = await fetch(`${ENDPOINT}/characters?name=${character}`);
            const data = await response.json();

            displayRetrievedData(data);
        } catch {
            displayError("Sorry, there was an error loading the page, please try again later.");
        }
    }
}

function displayRetrievedData(data) {
    data.forEach(d => {
        characterImage.src = d.img;
        characterName.textContent = d.name;
        characterNickname.textContent = `Nickname: ${d.nickname}`;
        characterPortrayedBy.textContent = `Portrayed by: ${d.portrayed}`;
        characterAppearances.textContent = `Appears in seasons: ${d.appearance}`;

        const dddd = d.appearance;
        console.log(dddd);
    });
}

characterImage.addEventListener("error", () => {
    characterImage.src = "default_image.jpg";
    characterName.textContent = "Image of the Show";
    characterNickname.textContent = "";
    characterPortrayedBy.textContent = "";
    characterAppearances.textContent = "";
    displayError("Sorry, the image you requested couldn't be displayed, please try again later.");
});

function displayError(message) {
    error.textContent = message;
    setTimeout(() => error.textContent = "", 4000);
}

retrieve();