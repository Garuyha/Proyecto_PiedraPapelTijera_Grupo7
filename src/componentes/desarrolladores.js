import React from "react";
import Btn from "./Btn";
import './css/cssIvan.css';
import './css/style.css'
import avatar from './img/Avatar.png';


 class Desarrolladores extends React.Component{
render (){
    return  <div>


          <div className="seccion1">

              <section className="tarjeta"> 
              <div className="contenedor">
                 <img  src={avatar} width="150" alt=""/>
                 <h3> <strong> Diaz Hector Ivan</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> DNI:37304786 </p>
                 <p> LU:37304786  </p>
                 </div>
              </section>


     
              <section className="tarjeta"> 
              <div className="contenedor">
              <img  src={avatar} width="150" alt=""/>
              <h3> <strong> Ezequiel Garcia</strong> </h3>
              <h2> <strong> Programador   </strong>  </h2>
              <p> DNI:37304786 </p>
              <p> LU:37304786  </p>
              </div>
               </section>





             <section className="tarjeta"> 
             <div className="contenedor">
               < img  src={avatar} width="150" alt=""/>
              <h3> <strong>  Carolina Cortez </strong> </h3>
              <h2> <strong> Programadora </strong>   </h2>
              <p> DNI:37304786 </p>
              <p> LU:37304786  </p>
              </div>
            </section>

          </div>


    
    
    <div className="seccion1">


            <section className="tarjeta"> 
            <div className="contenedor">
                < img  src={avatar} width="150" alt=""/>
                <h3> <strong> Henrique Arias</strong> </h3>
                <h2> <strong> Programador  </strong> </h2>
                <p> DNI:37304786 </p>
                <p> LU:37304786  </p>
                </div>
              </section>


            <section className="tarjeta"> 
            <div className="contenedor">
               < img  src={avatar} width="150" alt=""/>
               <h3> <strong> Valeria Caballero</strong></h3>
               <h2> <strong> Programadora   </strong></h2>
               <p> DNI:37304786 </p>
               <p> LU:37304786  </p>
               </div>
            </section>


    </div>

      




            <div className='botones'>
      
  
              <button className="boton"> <Btn/>   </button>
       
      
            </div>
            <a href="https://www.facebook.com/react/" className="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>

</div>

}
}
export default Desarrolladores;