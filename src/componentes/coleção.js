import React, { useState } from "react";
import look from "../Assests/look1.jpg"
import look2 from "../Assests/look2.jpg"
import look3 from "../Assests/look3.jpg"

function looks() {
  return (
      <div>
          <hr />
          <h1 className="colecao-1">Coleção</h1>
          <h2>Pharrell Williams apresenta sua primeira coleção para a Louis Vuitton</h2>
          <container className="container1">
              <div>
                  <img src={look} alt="look-1" className="looks" />
                  <b><p>Novas bolsas no formato da sacola oficial da Loja.</p></b>
              </div>
              <div>
                  <img src={look2} alt="look-1" className="looks" />
                 <b> <p>Novos sobretudo no Novo Designer do Pharrell Williams</p></b>
              </div>
              <div>
                  <img src={look3} alt="look-1" className="looks" />
                  <b><p>Sobretudo clássico no Novo Designer, cores e texturas.</p></b>
              </div>
          </container>
          <hr />
    </div>
  );
}

export default looks;
