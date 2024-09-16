import React from 'react';

const ImagemLink = ({ imagem, descricao, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imagem} alt={descricao} style={styles.imagem} />
    </a>
  );
};

const styles = {
  imagem: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ImagemLink;
