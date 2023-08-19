import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route as RoutedRoute, NavLink } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Mumbai', country: 'India', population: 36400068 },
    { id: 2, name: 'Delhi', country: 'India', population: 30771000 },
    { id: 3, name: 'Pune', country: 'India', population: 21516000 },
    { id: 4, name: 'Nagpur', country: 'India', population: 17125000 },
    { id: 5, name: 'Karnataka', country: 'India', population: 11893000 }
  ]);

  const handleAddCity = (newCity) => {
    setCities(prevCities => [...prevCities, newCity]);
  };

  return (
    <Router>
      <header className="app-header">
        <h1 className="app-title">Cities Application</h1>
        <nav className="app-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active">Cities List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" activeClassName="active">Add City</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="app-content">
        <Routes>
          <RoutedRoute path="/" element={<CitiesList cities={cities} />} />
          <RoutedRoute path="/add" element={<AddCity onAddCity={handleAddCity} />} />
          <RoutedRoute path="/city/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
