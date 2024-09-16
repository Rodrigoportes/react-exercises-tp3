import React, { useState } from 'react';
import Formulario from './Formulario'; 
import Resumo from './Resumo'; 
import '../css/Formulario.css'; 

const Exercicio11 = () => {
  const [dados, setDados] = useState(null);

  const handleFormSubmit = (formData) => {
    setDados(formData);
  };

  return (
    <div>
      <h1>Formulário e Resumo - Exercício 11</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {dados && <Resumo dados={dados} />}
    </div>
  );
};

export default Exercicio11;

