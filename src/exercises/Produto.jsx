import React from "react";

const Produto = ({ nome, preco, descricao }) => {
  return (
    <div className="produto">
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <p>{descricao}</p>
    </div>
  );
};

export default Produto;