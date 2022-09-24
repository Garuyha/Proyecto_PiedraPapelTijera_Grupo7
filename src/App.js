
import './App.css';
import './Componentes/css/style.css'
import Desarrolladores from './Componentes/desarrolladores';
import Homes from './Componentes/home';

function App() {
  return (
    <div>
      <header className='PPP'>
        Piedra, Papel o Tijera
      </header>
      <Homes/>
      <footer> 
       © 2022 Mate Cebado Inc. | All rights reserved.            
      </footer>
    </div>
  );
}

export default App;
