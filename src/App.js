import './App.css';
import Desarrolladores from './desarrolladores';
import desarrolladores from './desarolladores.json';
import FooterDesarrolladores from './footerDesarrolladores';


function App() {
  return (
    <>
   
{//desarrolladores && desarrolladores.map es para comprobar si los datos existen
  desarrolladores.desarrolladores && desarrolladores.desarrolladores.map( des =>   
<Desarrolladores key={des.nombre}
  nombre={des.nombre}
dni={des.dni}
lu={des.lu}
></Desarrolladores>  
  )
}


<FooterDesarrolladores/>


</>
  );
}

export default App;
