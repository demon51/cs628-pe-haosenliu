import React from 'react';
import { Link } from 'react-router-dom';
import './CitiesList.css';

const CitiesList = ({ cities }) => {
  return (
    <div className="cities-list-container">
      <h2 className="cities-list-title">Cities List</h2>
      <ul className="cities-list">
        {cities.map(city => (
          <li key={city.id} className="cities-list-item">
            <Link to={`/city/${city.id}`} className="cities-list-link">
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
