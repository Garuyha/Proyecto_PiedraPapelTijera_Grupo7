import React from "react";
import Btn from "./Btn";
import './css/style.css'
import Ivan from './img/Desarrolladores/Ivan.PNG'
import Eze from './img/Desarrolladores/Eze.PNG'
import Caro from './img/Desarrolladores/Caro.PNG'
import Henry from './img/Desarrolladores/Henry.PNG'
import Vale from './img/Desarrolladores/Vale.PNG'


 class Desarrolladores extends React.Component{
render (){
    return  <div>


          <div className="seccion1">

              <section className="tarjeta"> 
              <div className="contenedor">
                 <img  src={Ivan} alt="" className="imag"/>
                 <h3> <strong> Diaz Hector Ivan</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> DNI:37304786 </p>
                 <p> LU:TUV000440  </p>
                 <p> Branch: IvanDiaz  </p>
                 </div>
              </section>


     
              <section className="tarjeta"> 
              <div className="contenedor">
              <img  src={Eze} alt="" className="imag"/>
              <h3> <strong> Ezequiel Garcia</strong> </h3>
              <h2> <strong> Programador   </strong>  </h2>
              <p> DNI:41401187 </p>
              <p> LU:TUV000390  </p>
              <p> Branch: Garcis  </p>
              </div>
               </section>





             <section className="tarjeta"> 
             <div className="contenedor">
             <img  src={Caro} alt="" className="imag"/>
              <h3> <strong>  Carolina Maria de los A. Cortez </strong> </h3>
              <h2> <strong> Programadora </strong>   </h2>
              <p> DNI:44812374 </p>
              <p> LU:TUV000415  </p>
              <p> Branch: Charo/ChiaroCoure  </p>
              </div>
            </section>

          </div>


    
    
    <div className="seccion1">


            <section className="tarjeta"> 
            <div className="contenedor">
            <img  src={Henry} alt="" className="imag"/>
                <h3> <strong> Hernán E. Arias Mercado</strong> </h3>
                <h2> <strong> Programador  </strong> </h2>
                <p> DNI:36225750 </p>
                <p> LU:TUV000004  </p>
                <p> Branch:HeNrYx94 </p>
                </div>
              </section>


            <section className="tarjeta"> 
            <div className="contenedor">
            <img  src={Vale} alt="" className="imag"/>
               <h3> <strong> Valeria Caballero</strong></h3>
               <h2> <strong> Programadora   </strong></h2>
               <p> DNI:43139319 </p>
               <p> LU:TUV000055  </p>
               <p> Branch:ValeriaEmiliaCaballero </p>
               </div>
            </section>


    </div>
<div className="btn">
            <div className='botones'>
      
              <Btn/>
       
            </div>
            </div>


</div>

}
}
export default Desarrolladores;