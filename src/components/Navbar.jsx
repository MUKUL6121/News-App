// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('war');
  const [isSwitchChecked, setIsSwitchChecked] = useState(false); // Manage switch state

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  const handleSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Today News</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link" 
                type="button" 
                id="newsDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                News
              </button>
              <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                <li><Link className="dropdown-item" to="/">Today's</Link></li>
                <li><Link className="dropdown-item" to="/">Yesterday's</Link></li>
                <li><Link className="dropdown-item" to="/"><span className="status-dot online"></span> Live</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link" 
                type="button" 
                id="countryDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Country
              </button>
              <ul className="dropdown-menu" aria-labelledby="countryDropdown">
                <li><Link className="dropdown-item" to="/">India</Link></li>
                <li><Link className="dropdown-item" to="/">America</Link></li>
                <li><Link className="dropdown-item" to="/">China</Link></li>
                <li><Link className="dropdown-item" to="/">Australia</Link></li>
                <li><Link className="dropdown-item" to="/">Russia</Link></li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch ms-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckChecked" 
              checked={isSwitchChecked} // Use state value here
              onChange={handleSwitchChange} // Handle state change
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label>
          </div>
          <form className="d-flex ms-3" onSubmit={handleSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search News" 
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
