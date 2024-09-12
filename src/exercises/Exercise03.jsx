import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import img from '../img/tecnologia.jpg';
import '../css/exercise03.css'
import Exercise04 from './Exercise04'

const Exercise03 = () => {
  return (
    <>
      <header className="cabecalho" >
        <div className="container-icone">
          <FontAwesomeIcon icon={faDesktop} size="3x" color="#000" />
        </div>
        <div className="menu">
          <h1 className="titulo">MegaInfo</h1>
        </div>
      </header>
      <section className="home" >
        <div className="container-img">
          <img src={img} alt="tecnologias" className="imagem" />
        </div>
        <div className="container-textos">
          <h1 className="titulo">Por que escolher a Mega Info</h1>
          <Exercise04/>
        </div>
      </section>
      <footer className="rodape">
        
        <form class="formulario">
          <h2>Fale Conosco</h2>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <button type="submit" class="botao">Enviar</button>
        </form>
        <div className="informacoes">
          <p className="assinatura">© 2024 MegaInfo. Todos os direitos reservados.</p>
          <p className="emaill-empresa">MegaInfo@email.com</p>
        </div>
      </footer>
    </>
  );
};

export default Exercise03;
