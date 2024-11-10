const BASE_URL = 'https://swapi.dev/api/starships/';

// Function to fetch starships
const fetchStarships = async starship => {
  try {
    const queryString = `?search=${starship}`;
    const response = await fetch(BASE_URL+ queryString);
    const data = await response.json();
    return data.results;  
  } catch (error) {
    console.error(error);
  }
};

export { fetchStarships };