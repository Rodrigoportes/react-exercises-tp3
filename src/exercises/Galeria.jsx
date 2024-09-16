import React from 'react';
import Imagem from './Imagem'; 
import '../css/Galeria.css'; 
import praia from '../img/praia.jpg';
import tecnologia from '../img/tecnologia.jpg';
import arvore from '../img/arvore.jpg';

const imagens = [
  { src: praia, alt: 'Praia' },
  { src: tecnologia, alt: 'Tecnologia' },
  { src: arvore, alt: 'Árvore' },
];

const Galeria = () => {
  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <Imagem key={index} src={imagem.src} alt={imagem.alt} />
      ))}
    </div>
  );
};

export default Galeria;






