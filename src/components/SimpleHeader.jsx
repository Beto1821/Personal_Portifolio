import React from 'react';
import { Link } from 'react-router-dom';

const SimpleHeader = () => {
  const closeMenu = () => {
    const toggle = document.getElementById('toggle');
    if (toggle) {
      toggle.checked = false;
    }
  };

  return (
    <div className="header">
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input type="checkbox" id="toggle" />
          <label className="checkbox" htmlFor="toggle">
            <div className="trace"></div>
            <div className="trace"></div>
            <div className="trace"></div>
          </label>
          <div className="menu"></div>
          <nav className="menu-items">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
              </li>
              <li>
                <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SimpleHeader;
