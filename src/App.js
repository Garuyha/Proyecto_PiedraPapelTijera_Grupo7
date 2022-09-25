import './App.css';
// import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Piedra from './img/Piedra.png';
import Papel from './img/Papel.png';
import Tijera from './img/Tijera.png';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Titulo'>Piedra, Papel o Tijera</h1>
        <h2 className='jugador'>
        IA
        </h2>
        <h2 className='jugador'>
        JUGADOR
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
