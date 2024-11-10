// App.jsx
import React, { useState, useEffect } from 'react';
import { fetchStarships } from './services/starshipService';
//import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch default starship data('CR90 corvette')
  useEffect(() => {
    const fetchDefaultData = async () => {
      const starshipData = await fetchStarships('');  // Empty search to fetch all
      setStarships(starshipData);  // Set the results directly
    };
    fetchDefaultData();
  }, []);

  // Fetch data based on search query
  const fetchData = async (query) => {
    const starshipData = await fetchStarships(query);  // Pass query to the API
    setStarships(starshipData);  // Update state with results
  };

    // Handle search query change
    const handleSearch = (query) => {
      setSearchQuery(query);
      fetchData(query);
    };
    
  return (
    <>
      <h1>Star Wars Starships</h1>
      <StarshipSearch onSearch={handleSearch} />
      {starships.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={starships} />
      )}
    </>
  );
};

export default App;
