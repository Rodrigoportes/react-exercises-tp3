import React from "react";

const Perfil = ({ nome, email, endereco }) => {
  return (
    <div className="perfil">
      <h2>Nome: {nome}</h2>
      <p>Email: {email}</p>
      <p>Endereço: {endereco}</p>
    </div>
  );
};

export default Perfil;
