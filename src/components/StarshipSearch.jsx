import React, { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);  
  };

  return (
    <>
    <h3>Search</h3>
    <form onSubmit={handleSubmit}>
      <h5>Search Term:</h5>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
    </>
  );
};

export default StarshipSearch;