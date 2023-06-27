import React, { useState } from "react";

function ContateNos() {
  const [whatsappClicked, setWhatsappClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const handleWhatsappClick = () => {
    setWhatsappClicked(true);
    setEmailClicked(false);
  };

  const handleEmailClick = () => {
    setWhatsappClicked(false);
    setEmailClicked(true);
  };

  return (
    <div className="container">
      <div className="contact-info">
        <h1 className="colecao-1"> CONTATO</h1>
        <div className="div-contact">
          <div className="div-wpp">
            <h2>Fale Conosco</h2>
            <p>Tel: (11) 3060-5099</p>
          </div>

          <div className="div-wpp">
            <h2>Fale conosco pelo WhatsApp!</h2>
            <br />
            <button
              id="button"
              className={whatsappClicked ? "active" : ""}
              onClick={handleWhatsappClick}
            >
              <a href="https://api.whatsapp.com/send/?phone=551130605099&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="button">WhatsApp</a>
            </button>
          </div>
          <div className="div-wpp">
            <h2>Envie um e-mail</h2>
            <p>Nossos Clientes Advisors terão o prazer em lhe responder.</p>
            <button
              id="button"
              className={emailClicked ? "active" : ""}
                          onClick={handleEmailClick}
            >
              <a href="https://br.louisvuitton.com/por-br/contate-nos-por-e-mail" target="_blank" rel="noopener noreferrer" className="button" >Enviar um e-mail</a>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ContateNos;
