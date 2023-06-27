import React, { useState } from "react";
import PW2 from "../Assests/pw2.webp";
function index() {
  return (
    <div>
      <section id="sec-1">
        <h1>
          A Louis Vuitton tem o prazer de dar as boas-vindas a Pharrell Williams
          como seu novo Diretor Criativo Masculino. Sua primeira coleção para a
          Louis Vuitton será revelada no próximo mês de Junho, durante a Semana
          de Moda Masculina de Paris.
        </h1>
        <p>
          Pharrell Williams é um visionário cujos universos criativos se
          expandem da música à arte e à moda – estabelecendo-se como um ícone
          cultural global nos últimos vinte anos. A maneira como ele rompe
          fronteiras nos vários mundos em que explora, alinha-se ao status da
          Louis Vuitton como uma Maison Cultural, reforçando seus valores de
          inovação, espírito pioneiro e empreendedorismo.
        </p>
        <img src={PW2} alt="Pharrell" className="PW-2" />
        <p>
          “Estou feliz em receber Pharrell de volta em casa, após nossas
          colaborações em 2004 e 2008 para a Louis Vuitton, como nosso novo
          Diretor Criativo Masculino. Sua visão criativa além da moda, sem
          dúvida, levará a Louis Vuitton a um capítulo novo e muito empolgante.”
          – Pietro Beccari, Louis Vuitton’s Chairman and CEO
        </p>
      </section>
    </div>
  );
}

export default index;
