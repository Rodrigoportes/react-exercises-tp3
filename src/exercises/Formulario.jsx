import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
