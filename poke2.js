
async function fetchPokemonData(pokemonNameOrId) { // Define an asynchronous function to fetch Pokemon data by name or ID
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);  // Send a GET request to the PokeAPI using the pokemon name or ID 
    if (!response.ok) { // If the response is not OK throw an error
    throw new Error('Pokemon not found');
    }
    
    const data = await response.json();
    displayPokemonData(data);   // Call the function to display the Pokemon data on the web page
  } catch (error) {
    displayError(error.message);  // If an error occurs display an error message
  }
}


function displayPokemonData(data) { // Function to display Pokémon data on the page
 const pokemonInfo = document.getElementById('pokemon-info'); // Get the element where Pokémon info will be displayed
  
  const name = data.name; // Extract the Pokémon's name from the data
  const image = data.sprites.front_default; 
  const types = data.types.map(t => t.type.name).join(', '); // Get the URL of the default front-facing sprite image

  pokemonInfo.innerHTML = `
    <h2 class="text-capitalize">${name}</h2>
    <img src="${image}" alt="${name}" class="mb-2">
    <p><strong>Type:</strong> ${types}</p>
  `;
}

function displayError(message) { // Function to display an error message 
   const pokemonInfo = document.getElementById('pokemon-info'); // Get the DOM element where the Pokemon info or error should be shown
   pokemonInfo.innerHTML = `<p class="text-danger">${message}</p>`; // Set the inner HTML to show the error message styled with Bootstrap text-danger class
}


document.getElementById('search-button').addEventListener('click', () => { // Attach a click event listener to the search button
  const input = document.getElementById('pokemon-input').value.trim(); // Get and trim the value from the input field
  if (input) { // If the input is not empty, fetch the Pokemon data
    fetchPokemonData(input);
  } else {
    displayError('Please enter a Pokemon name or ID.'); // If input is empty, display an error asking the user to enter something
  }
});