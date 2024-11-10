import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
  return (
    <section>
      <h2>Starships</h2>
      <h5>Number of result: {props.starships.length}</h5>
      <ul>
        {props.starships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
