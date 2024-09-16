import React from 'react';
import PropTypes from 'prop-types';

const Tarefa = ({ nome, status }) => {
  return (
    <div className="tarefa">
      <span className="tarefa-nome">{nome}</span>
      <span className={`tarefa-status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
};

Tarefa.propTypes = {
  nome: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Tarefa;
