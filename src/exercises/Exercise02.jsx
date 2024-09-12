import React, { useState } from "react";

const Exercise02 = () => {
  const [corBotao, setcorBotao] = useState("whitesmoke");

  const handleClick = () => {
    setcorBotao(novaCor => novaCor === "whitesmoke" ? "green" : "whitesmoke");
  };

  return (
    <>
      <button
        style={{ backgroundColor: corBotao, color: "rgb(86, 185, 224)", fontSize: "24px" }} onClick={handleClick}>Saiba mais!</button>
    </>
  );
};

export default Exercise02;
