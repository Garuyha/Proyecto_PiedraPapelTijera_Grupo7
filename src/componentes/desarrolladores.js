import React from "react";
import './css/cssIvan.css';
import avatar from './Componentes/img/Avatar.png';


 class Desarrolladores extends React.Component{


render (){



    
    
    return  <div>


          <div className="seccion1">

              <section className="informacion"> 
     
                 <img  src={avatar} width="150"/>
                 <h3> <strong> Diaz Hector Ivan</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> DNI:37304786 </p>
                 <p> LU:37304786  </p>

              </section>


     
              <section className="informacion"> 

              <img  src={avatar} width="150"/>
              <h3> <strong> Ezequiel Garcia</strong> </h3>
              <h2> <strong> Programador   </strong>  </h2>
              <p> DNI:37304786 </p>
              <p> LU:37304786  </p>

               </section>





             <section className="informacion"> 

               < img  src={avatar} width="150"/>
              <h3> <strong>  Carolina Cortez </strong> </h3>
              <h2> <strong> Programadora </strong>   </h2>
              <p> DNI:37304786 </p>
              <p> LU:37304786  </p>

            </section>

          </div>


    
    
    <div className="seccion2">


            <section className="informacion"> 
                < img  src={avatar} width="150"/>
                <h3> <strong> Henrique Arias</strong> </h3>
                <h2> <strong> Programador  </strong> </h2>
                <p> DNI:37304786 </p>
                <p> LU:37304786  </p>

              </section>


            <section className="informacion"> 
               < img  src={avatar} width="150"/>
               <h3> <strong> Valeria Caballero</strong></h3>
               <h2> <strong> Programadora   </strong></h2>
               <p> DNI:37304786 </p>
               <p> LU:37304786  </p>
            </section>


    </div>

      




            <div className='contenedorboton'>
      
  
              <button class="boton uno"> <span>Inicio</span>   </button>
       
      
            </div>



        <section className="derechos">


           <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>


        </section>

</div>

    

    
}






}
export default Desarrolladores;