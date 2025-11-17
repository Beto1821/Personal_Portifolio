import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const closeMenu = () => {
    const toggle = document.getElementById('toggle');
    if (toggle) {
      toggle.checked = false;
    }
  };

  return (
    <header className="header-container">
      {/* Menu Hambúrguer */}
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
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Conteúdo Principal */}
      <div className="header-content">
        <h1>Adalberto Ribeiro</h1>
        <h2>Dev Full Stack</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/adalberto-ribeiro-344092107/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href="https://github.com/Beto1821" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
