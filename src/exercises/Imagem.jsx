import React from 'react';
import PropTypes from 'prop-types';

const Imagem = ({ src, alt }) => {
  return (
    <div className="imagem-container">
      <img src={src} alt={alt} className="imagem" />
    </div>
  );
};

Imagem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Imagem;


