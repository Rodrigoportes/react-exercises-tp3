import React from 'react';

const Tabela = ({ dados }) => {

  if (!dados || dados.length === 0) {
    return <p>Nenhum dado disponível</p>;
  }

  const headers = Object.keys(dados[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
