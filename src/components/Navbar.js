import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => props.setCurrentPage('home')}>{props.title}</a>
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
              <a className="nav-link active" aria-current="page" href="#" onClick={() => props.setCurrentPage('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.setCurrentPage('about')}>
                About
              </a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              onClick={props.toggleMode} 
              type="checkbox" 
              id="flexSwitchCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  switchToGreenMode: PropTypes.func,
  switchToOriginalMode: PropTypes.func,
  setCurrentPage: PropTypes.func.isRequired  // New prop for switching pages
};

Navbar.defaultProps = {
  title: "TextUtils"
};
