// src/exercises/Produtos.js
import React from 'react';
import PropTypes from 'prop-types';

const Produtos = ({ nome, preco, disponivel }) => {
  return (
    <div className="produto">
      <h2 className="produto-nome">{nome}</h2>
      <p className="produto-preco">Preço: R${preco.toFixed(2)}</p>
      <p className={`produto-disponivel ${disponivel ? 'disponivel' : 'indisponivel'}`}>
        {disponivel ? 'Disponível' : 'Indisponível'}
      </p>
    </div>
  );
};

Produtos.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  disponivel: PropTypes.bool.isRequired,
};

export default Produtos;
