import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function App(){
    return(
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
            <Button className='boton'><img  className='boton' alt="logo" /></Button>
            <Button className='boton'><img  className='boton' alt="logo" /></Button>
            <Button className='boton'><img  className='boton' alt="logo" /></Button>
          </ButtonGroup>
          </>
           <p className="puntajes">puntajeJugador1:0    puntajeIA:0 </p> 
        </header>
        </div>
        );
}