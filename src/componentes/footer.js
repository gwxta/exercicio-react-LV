import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Email enviado:', email);
    setEmail('');
  };

  return (
    <footer>
      <h3>Receba nossas novidades</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Inscrever</button>
      </form>
    </footer>
  );
}

export default Footer;
