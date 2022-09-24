import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import React from 'react';
import { ReactDOM } from 'react';
import Desarrolladores from './desarrolladores';
import desarrolladores from './desarolladores.json';

function App() {
  return (
  <Container>
{desarrolladores.map(des => <Desarrolladores
img={des.img}
nombre={des.nombre}
dni={des.dni}
lu={des.lu}
></Desarrolladores>)}


  </Container>
  );
}

export default App;
