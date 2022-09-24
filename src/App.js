import './App.css';
// import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Piedra from './img/Piedra.png';
import Papel from './img/Papel.png';
import Tijera from './img/Tijera.png';

// {/* <img src={logo} className="App-logo" alt="logo" /> */}



function App() {
  // const [numero, setNumero] = useState(Math.floor(Math.random()* 10));


  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>Numero al azar: {numero}</h1> */}
        <h1 className='Titulo'>Piedra, Papel o Tijera</h1>
        <h2 className='jugador'>
        JUGADOR                   IA
        </h2>
       <p>GANADOR</p>
      <>
      <ButtonGroup size="lg" className="mb-2">
        <Button className='boton'><img src={Piedra} className='boton' alt="logo" /></Button>
        <Button className='boton'><img src={Papel} className='boton' alt="logo" /></Button>
        <Button className='boton'><img src={Tijera} className='boton' alt="logo" /></Button>
      </ButtonGroup>
      </>
       <p className="puntajes">puntajeJugador1:0    puntajeIA:0 </p>  
  


    


      </header>
    </div>
  );
}

export default App;
