

import React from "react";
import './App.css';
import avatar from './Avatar.png';


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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div>

<div class="media">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light " style="display:flex ; justify-content:end">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="btn btn-block btn-social btn-twitter" style="display: flex ; justify-content:flex-end">
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-whatsapp"></a>
                            </a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>

</div>



        <section className="derechos">


           <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>


        </section>

</div>

    

    
}






}
export default Desarrolladores;
