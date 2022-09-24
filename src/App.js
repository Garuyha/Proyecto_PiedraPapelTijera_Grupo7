
import './App.css';
import './Componentes/css/style.css'
import Desarrolladores from './Componentes/desarrolladores';

function App() {
  return (
    <div>
      <header className='PPP'>
        Piedra, Papel o Tijera
      </header>
      <Desarrolladores/>
      <footer> 
       © 2022 Mate Cebado Inc. | All rights reserved.            
      </footer>
    </div>
  );
}

export default App;
