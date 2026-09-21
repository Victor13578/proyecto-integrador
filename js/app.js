const API_URL = "https://rickandmortyapi.com/api/character";

const charactersContainer = document.querySelector("#characters");

const nameFilter = document.querySelector("#nameFilter");
const statusFilter = document.querySelector("#statusFilter");
const speciesFilter = document.querySelector("#speciesFilter");

let characters = [];

function renderCharacters(charactersToRender) {
    const cards = charactersToRender.map(character => {
        return `
            <article class="card">
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            </article>
        `;
    });

    charactersContainer.innerHTML = cards.join("");
}

function filterCharacters() {
    const name = nameFilter.value.toLowerCase();
    const status = statusFilter.value;
    const species = speciesFilter.value;

    const filteredCharacters = characters.filter(character => {
        const matchesName = character.name
            .toLowerCase()
            .includes(name);

        const matchesStatus =
            status === "" || character.status === status;

        const matchesSpecies =
            species === "" || character.species === species;

        return matchesName && matchesStatus && matchesSpecies;
    });

    renderCharacters(filteredCharacters);
}

nameFilter.addEventListener("input", filterCharacters);
statusFilter.addEventListener("change", filterCharacters);
speciesFilter.addEventListener("change", filterCharacters);

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        characters = data.results;

        renderCharacters(characters);
    })
    .catch(error => {
        console.error("Error:", error);
    });