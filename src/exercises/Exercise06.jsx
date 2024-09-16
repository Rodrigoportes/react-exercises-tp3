import React from "react";
import Perfil from './Perfil'; 

const Exercise06 = () => {
  
  const usuario = {
    nome: "João Silva",
    email: "joao.silva@email.com",
    endereco: "Rua das Flores, 123, São Paulo"
  };

  return (
    <div className="container">
      <Perfil nome={usuario.nome} email={usuario.email} endereco={usuario.endereco} />
    </div>
  );
};

export default Exercise06;
