import logo from './Assests/fav.lv.png';
import lv from "./Assests/lv.png"
import PW1 from "./Assests/20d9.jfif"
import PW2 from './componentes/inicio';
import PW3 from "./componentes/coleção";
import PW4 from "./componentes/contato"
import PW5 from "./componentes/footer"

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo-nav"/>
          <a href="#sec-1">Inicio</a>
          <a href="#sec-2">Coleção</a>
          <a href="#footerr">Contato</a>
        </nav>
      </header>
        <hr />
        <section id='sec-1'>
          <img src={lv} alt="lv" className='lyric'/>
          <h1>by Pharrell Williams</h1>
        <img src={PW1} alt="pharrell" className='PW-1' />
       <PW2 />
      </section>
      <section id='sec-2'>
      <PW3 />
      </section>
      <section id='sec-3'>
      <PW4 />
      </section>
      <footer className='footer-1' id='footerr'>
        <PW5 />
      </footer>
    </div>
  );
}

export default App;
