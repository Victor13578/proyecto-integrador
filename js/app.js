const API_URL = "https://rickandmortyapi.com/api/character";

const charactersContainer = document.querySelector("#characters");

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const characters = data.results;

        const cards = characters.map(character => {
            return `
                <article class="card">
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                    <p>${character.status}</p>
                    <p>${character.species}</p>
                </article>
            `;
        });

        charactersContainer.innerHTML = cards.join("");
    })
    .catch(error => {
        console.error("Error:", error);
    });