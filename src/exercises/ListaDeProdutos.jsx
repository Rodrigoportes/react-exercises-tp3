import React, { useState } from 'react';
import Produtos from './Produtos'; 
import '../css/ListaDeProdutos.css'; 

const produtos = [
  { nome: 'Produto A', preco: 29.99, disponivel: true },
  { nome: 'Produto B', preco: 49.99, disponivel: false },
  { nome: 'Produto C', preco: 19.99, disponivel: true },
  { nome: 'Produto D', preco: 99.99, disponivel: true },
];

const ListaDeProdutos = () => {
  const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);

  const handleCheckboxChange = () => {
    setMostrarDisponiveis(!mostrarDisponiveis);
  };

  const produtosFiltrados = mostrarDisponiveis
    ? produtos.filter((produto) => produto.disponivel)
    : produtos;

  return (
    <div className="lista-de-produtos">
      <div className="filtro-disponiveis">
        <label>
          <input
            type="checkbox"
            checked={mostrarDisponiveis}
            onChange={handleCheckboxChange}
          />
          Mostrar apenas produtos disponíveis
        </label>
      </div>
      {produtosFiltrados.map((produto, index) => (
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

