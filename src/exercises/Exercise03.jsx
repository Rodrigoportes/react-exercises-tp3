import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import img from '../img/tecnologia.jpg';
import '../css/exercise03.css'

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
          <img src={img} alt="tecnologias" className="imagem" />
        </div>
        <div className="container-textos">
          <h1 className="titulo">O novo mundo Tech</h1>
          <p className="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in aspernatur veritatis sunt corporis repellendus, non voluptates quam quisquam laborum illo dignissimos ipsa autem tempore voluptatum facilis maxime. 
          Explicabo, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, veritatis quae quod deleniti quisquam dolorum veniam voluptatem molestiae esse! 
          Veniam eius quo in omnis voluptates libero numquam placeat non tempora? Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Corporis error minus enim! Quaerat fugiat, esse asperiores ullam cum laudantium illo vel ex, quis minima assumenda ipsam dicta perspiciatis natus corrupti.
          </p>
        </div>
      </section>
      <footer className="rodape">
        
        <form class="formulario">
          <h2>Fale Conosco</h2>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <button type="submit" class="botao">Enviar</button>
        </form>
        <div class="informacoes">
          <p class="assinatura">© 2024 HOMCO. Todos os direitos reservados.</p>
          <p class="emaill-empresa">contato@homco.com</p>
        </div>
      </footer>
    </>
  );
};

export default Exercise03;
