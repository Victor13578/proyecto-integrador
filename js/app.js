const API_URL = "https://rickandmortyapi.com/api/character";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });