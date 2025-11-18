import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      {/* Conteúdo Principal */}
      <div className="header-content">
        <img 
          src="/futuro.png" 
          alt="Adalberto Ribeiro" 
          className="profile-photo"
        />
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
