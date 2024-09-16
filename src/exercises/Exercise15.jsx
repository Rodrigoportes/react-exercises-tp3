import React from 'react';
import Tabela from './Tabela';
import '../css/tabela.css'; 

const dados = [
  { Nome: 'Produto A', Preço: 'R$10', Disponível: 'Sim' },
  { Nome: 'Produto B', Preço: 'R$20', Disponível: 'Não' },
  { Nome: 'Produto C', Preço: 'R$30', Disponível: 'Sim' },
];

const Exercise15 = () => {
  return (
    <div>
      <h1>Minha Tabela</h1>
      <Tabela dados={dados} />
    </div>
  );
};

export default Exercise15;

