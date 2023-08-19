import React from 'react';
import { useParams } from 'react-router-dom';
import './CityDetails.css';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id, 10));

  if (!city) {
    return <div className="city-details-error">City not found</div>;
  }

  return (
    <div className="city-details-container">
      <h2 className="city-details-title">{city.name} Details</h2>
      <div className="city-details-item">
        <span className="city-details-label">Country:</span>
        <span className="city-details-value">{city.country}</span>
      </div>
      <div className="city-details-item">
        <span className="city-details-label">Population:</span>
        <span className="city-details-value">{city.population.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default CityDetails;
