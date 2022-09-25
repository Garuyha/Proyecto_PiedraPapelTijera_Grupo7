
import './App.css';
import './Componentes/css/style.css'
import Homes from './Componentes/home';
import Desarrolladores from './Componentes/desarrolladores';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <header className='PPP'>
        Piedra, Papel o Tijera
      </header>
      <Routes>
        <Route path="/desarrolladores" element={<Homes />} />
        <Route path="/" element={<Desarrolladores />} />
      </Routes>
      <footer> 
       © 2022 Mate Cebado Inc. | All rights reserved.            
      </footer>
    </div>
  );
}

export default App;
