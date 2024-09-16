import React from 'react';
import '../css/Card.css';


const Card = ({ titulo, subtitulo, conteudo }) => {
  return (
    <div className="card"> 
      <h1 className="title">{titulo}</h1>
      <h2 className="subtitle">{subtitulo}</h2>
      <p className="content">{conteudo}</p>
    </div>
  );
};

export default Card;