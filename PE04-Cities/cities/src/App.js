import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route as RoutedRoute, NavLink } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Shanghai', country: 'China', population: 24281400 },
    { id: 2, name: 'Beijing', country: 'China', population: 18650000 },
    { id: 3, name: 'Shenzhen', country: 'China', population: 13438800 },
    { id: 4, name: 'Tianjin', country: 'China', population: 13038400 },
    { id: 5, name: 'Harbin', country: 'China', population: 4151800 }
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
