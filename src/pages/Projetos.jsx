import React from 'react';
import SimpleHeader from '../components/SimpleHeader';

const Projetos = () => {
  const projetos = [
    {
      titulo: 'Hotel Management App',
      descricao: 'Aplicação para gerenciamento de hotéis.',
      github: 'https://github.com/Beto1821/hotel-management-app',
      demo: 'https://plataformahotel.online/login'
    },
    {
      titulo: 'Monitoring Analyst Test',
      descricao: 'Projeto de teste para analista de monitoramento.',
      github: 'https://github.com/Beto1821/monitoring-analyst-test',
      demo: 'https://monitoring-analyst.streamlit.app/'
    },
    {
      titulo: 'App Pesquisa Licitações',
      descricao: 'Aplicação para pesquisa de licitações.',
      github: 'https://github.com/Beto1821/app_pesquisa_licitacoes',
      demo: 'https://app-pesquisa-licitacoes.onrender.com/'
    },
    {
      titulo: 'Trivia React Redux',
      descricao: 'Jogo de trivia desenvolvido com React e Redux.',
      github: 'https://github.com/Beto1821/trivia-react-redux',
      demo: 'http://trivia-react-redux-three.vercel.app/'
    },
    {
      titulo: 'TFC (Trybe Futebol Clube)',
      descricao: 'Projeto de um placar de futebol para o curso da Trybe.',
      github: 'https://github.com/Beto1821/TFC',
      demo: null
    },
    {
      titulo: '20 App de Receitas',
      descricao: 'Aplicação de receitas com diversas funcionalidades.',
      github: 'https://github.com/Beto1821/20-app-de-receitas',
      demo: 'https://20-app-de-receitas.vercel.app/'
    }
  ];

  return (
    <>
      <SimpleHeader />
      <main className="container">
        <div className="card-container">
          <div className="card-text">
            <div className="page-image-container">
              <img 
                src="/old.png" 
                alt="Projetos" 
                className="page-image"
              />
            </div>
            <h2>Meus Projetos</h2>
            
            {projetos.map((projeto, index) => (
              <div key={index}>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <p>
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {projeto.demo && (
                    <>
                      {' | '}
                      <a href={projeto.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projetos;
