import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({ onAddCity }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      id: Date.now(),
      name,
      country,
      population: parseInt(population)
    };
    onAddCity(newCity);
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <label>Population:</label>
        <input
          type="number"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
