import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const Exercise03 = () => {
  return (
    <>
    <header className="cabecalho" >
      <div className="container-icone">
      <FontAwesomeIcon icon={faDesktop} size="3x" color="#000" />
      </div>
      <div className="menu">
        <h1 className="titulo">MegaInfoJobs</h1>
      </div>
    </header>
    <section className="home" >
      <div className="container-img">
          <img src="tecnologia.jpg" alt="tecnologias" className="imagem" />
      </div>
      <div className="container-textos">
        <h1 className="titulo"></h1>
        <p className="paragrafo"></p>
      </div>
    </section>
    <footer className="rodape">
      <div className="contato" />
      <div className="sobre-nos" />
      <h1 className="registro"></h1>
    </footer>
    </>
  );
};

export default Exercise03;
