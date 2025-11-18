import React from 'react';
import SimpleHeader from '../components/SimpleHeader';

const Sobre = () => {
  return (
    <>
      <SimpleHeader />
      <main className="container">
        <div className="card-container">
          <div className="card-text">
            <div className="page-image-container">
              <img 
                src="/eu.png" 
                alt="Adalberto Ribeiro" 
                className="page-image"
              />
            </div>
            <h2>Sobre Mim</h2>
            <p>
              Controlador de Qualidade em desenvolvimento de IA na Scale AI e gerente comercial na Atual Informática. Inglês Avançado.
            </p>

            <h3>Empresas</h3>
            <p>Ericsson, Claro, Rosenberger Domex e Scale AI.</p>

            <h3>Graduações</h3>
            <ul>
              <li>Técnico em Eletrônica pela E.T.E. (Santa Rita do Sapucaí/MG)</li>
              <li>Cientista da Computação pela UNINCOR (Três Corações, MG)</li>
              <li>Bootcamp Trybe (Mais de 1500 horas)</li>
            </ul>

            <h3>Tecnologias e Experiência</h3>
            
            <p><b>Ferramentas:</b> CSS3, HTML5, JavaScript, Git, GitHub, Ubuntu, VS Code, ESLint, Bash</p>
            
            <p><b>Front-end:</b> React, Redux - Componentes, Eventos e Estados, Controle de Componentes, Ciclo de Vida, Roteador, Testes RTL, API de Contexto e React Hooks.</p>
            
            <p><b>Back-end:</b> Node.js, Express.js, Heroku, MySQL, MongoDB, npm, Docker, Sequelize, Mongoose, TypeScript, Python - MVC, API REST, Upload de Arquivos, SOLID, ORM e Sockets.</p>
            
            <p><b>Testes:</b> Jest, Mocha, Chai, Sinon, Testing Library</p>

            <h3>Certificações</h3>
            <p>AWS Certified Cloud Practitioner (CLF-C02)</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sobre;
