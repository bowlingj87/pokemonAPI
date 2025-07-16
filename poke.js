
const searchButton = document.getElementById("search-button"); //Linking JS to button in HTML 
const pokemonInput = document.getElementById("pokemon-input"); //Link to input field in HTML
const pokemonInfoContainer = document.getElementById("pokemon-info-container"); //Link to display Pokemon info in HTML

async function getPokemonData() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}/`); //Fetch data from the Pokemon API
        if (!response.ok) {
            throw new Error("Pokemon not found"); //If data is not found,display error 
        } 
        const data = await response.json(); //converts response into JSON format
              
        pokemonInfoContainer.innerHTML = ""; //Clear previous image (if any)


        const name = document.createElement("div");//creates a new element for Pokemon name.
        name.textContent = data.name; 
        pokemonInfoContainer.appendChild(name); //Appends element into the info container for display.

        const img = document.createElement("img"); //creates image element.
        img.src = data.sprites.front_default; 
        pokemonInfoContainer.appendChild(img); //appends the image to the info container. 


    }
    catch (error) {
        pokemonInfoContainer.innerHTML = `<p>${error.message}</p>`; //Displays the error message inside the container.
    }
}
searchButton.addEventListener("click", getPokemonData); //Adds click listner to the button.







