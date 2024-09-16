import React from 'react';

const Resumo = ({ dados }) => {
  return (
    <div className="resumo">
      <h2>Resumo dos Dados</h2>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Email:</strong> {dados.email}</p>
    </div>
  );
};

export default Resumo;
