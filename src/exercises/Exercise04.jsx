import React from "react";
import '../css/exercise04.css'

const Exercise04 = () => {
  const items = [
    "Desenvolvimento de Software: Criamos soluções personalizadas que impulsionam a eficiência e a agilidade dos negócios.",
    "Infraestrutura de TI: Oferecemos serviços de gestão e suporte para garantir que seus sistemas operacionais funcionem sem interrupções.",
    "Consultoria Tecnológica: Ajudamos a otimizar processos e a adotar as melhores práticas para que você possa se manter à frente no mercado.",
    "Compromisso com a Qualidade: Utilizamos as melhores práticas e tecnologias de ponta para garantir que nossos produtos e serviços atendam aos mais altos padrões de qualidade.",
    "Soluções Personalizadas: Entendemos que cada negócio é único. Desenvolvemos soluções sob medida para atender às suas necessidades específicas e maximizar o valor para sua empresa.",
    "Suporte Proativo: Nossa equipe está sempre disponível para fornecer suporte contínuo e proativo, garantindo que você tenha a assistência necessária para enfrentar qualquer desafio tecnológico."
  ];

  return (
    <div className="container-lista">
      <ul className="lista">
        {items.map((item, index) => (
          <li key={index} className="itens">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise04;