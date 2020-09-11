const ENDPOINT = "https://www.breakingbadapi.com/api";
const charactersDropdown = document.getElementById("characters");
const characterImage = document.querySelector(".image img");
const characterName = document.querySelector(".name");
const characterNickname = document.querySelector(".nickname");

async function retrieve() {
    const response = await fetch(`${ENDPOINT}/characters`);
    const data = await response.json();

    renderCharacterList(data);
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
        const response = await fetch(`${ENDPOINT}/characters?name=${character}`);
        const data = await response.json();

        data.forEach(d => {
            characterImage.src = d.img;
            characterName.textContent = d.name;
            characterNickname.textContent = d.nickname;
        });
    }
}

function displayRetrievedData(data) {
    
}

retrieve();