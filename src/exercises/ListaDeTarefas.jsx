import React from 'react';
import Tarefa from './Tarefa'; 
import '../css/ListaDeTarefas.css'; 

const tarefas = [
  { nome: 'Comprar leite', status: 'Pendiente' },
  { nome: 'Lavar o carro', status: 'Concluída' },
  { nome: 'Estudar React', status: 'Pendiente' },
];

const ListaDeTarefas = () => {
  return (
    <div className="lista-de-tarefas">
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} nome={tarefa.nome} status={tarefa.status} />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
