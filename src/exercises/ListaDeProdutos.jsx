// src/exercises/ListaDeProdutos.js
import React from 'react';
import Produtos from './Produtos'; // Verifique o caminho para o componente Produtos
import '../css/ListaDeProdutos.css'; // Verifique o caminho para o arquivo CSS

const produtos = [
  { nome: 'Produto A', preco: 29.99, disponivel: true },
  { nome: 'Produto B', preco: 49.99, disponivel: false },
  { nome: 'Produto C', preco: 19.99, disponivel: true },
  { nome: 'Produto D', preco: 99.99, disponivel: true },
];

const ListaDeProdutos = () => {
  return (
    <div className="lista-de-produtos">
      {produtos.map((produto, index) => (
        <Produtos
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          disponivel={produto.disponivel}
        />
      ))}
    </div>
  );
};

export default ListaDeProdutos;

