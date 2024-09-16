import React from "react";
import ImagemLink from './ImagemLink'; // Corrigida a sintaxe da importação
import praia from '../img/praia.jpg';

const Exercise08 = () => {
  return (
    <div>
      <ImagemLink
        imagem={praia}
        descricao="Melhores praias do Rio de Janeiro"
        link="https://www.melhoresdestinos.com.br/melhores-praias-rio-de-janeiro.html"
      />
    </div>
  );
};

export default Exercise08;


