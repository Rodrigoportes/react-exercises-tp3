import React from "react";
import img from '../img/praia.jpg';
import '../css/Exercise01.css'; 
import Exercicio02 from "./Exercise02";
 

const Exercise01 = () => {
  return (
    <div className="cartao">
      <div className="container-img">
        <img src={img} title="praia"/>
      </div>  
      <div className="container-texto">
        <h1>Concorra a uma viagem grátis</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis quasi omnis neque 
        dignissimos id saepe rem. Hic, dicta reprehenderit molestiae consequatur corrupti sequi totam aperiam mollitia voluptatum quod illum?</p>
        <Exercicio02/>

      </div>
    </div>
  );
};

export default Exercise01;
