import React from "react";
import Produto from './Produto';

const Exercise05 = () => {
  
  const produto = {
    nome: "Notebook",
    preco: 3500.00,
    descricao: "Um notebook de alta performance, ideal para trabalho e entretenimento."
  };

  return (
    <div className="container">
      <Produto nome={produto.nome} preco={produto.preco} descricao={produto.descricao} />
    </div>
  );
};

export default Exercise05;

