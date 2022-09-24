

import React from "react";
import './App.css';
import avatar from './Avatar.png';


 class Desarrolladores extends React.Component{


render (){



    
    
    return  <div>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <div className="seccion1">

              <section className="informacion"> 
     
                 <img  src={avatar} width="150"/>
                 <h3> <strong> {this.props.nombre}</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> {this.props.dni} </p>
                 <p> {this.props.lu} </p>

              </section>


     
              <section className="informacion"> 

              <img  src={avatar} width="150"/>
              <h3> <strong> {this.props.nombre}</strong> </h3>
              <h2> <strong> Programador   </strong>  </h2>
              <p> {this.props.dni} </p>
              <p> {this.props.lu} </p>

               </section>





             <section className="informacion"> 

               < img  src={avatar} width="150"/>
              <h3> <strong>  {this.props.nombre} </strong> </h3>
              <h2> <strong> Programadora </strong>   </h2>
              <p> {this.props.dni} </p>
              <p> {this.props.lu}  </p>

            </section>

          </div>


    
    
    <div className="seccion2">


            <section className="informacion"> 
                < img  src={avatar} width="150"/>
                <h3> <strong> {this.props.nombre}</strong> </h3>
                <h2> <strong> Programador  </strong> </h2>
                <p> {this.props.dni} </p>
                <p> {this.props.lu}  </p>

              </section>


            <section className="informacion"> 
               < img  src={avatar} width="150"/>
               <h3> <strong> {this.props.nombre}</strong></h3>
               <h2> <strong> Programadora   </strong></h2>
               <p> {this.props.dni} </p>
               <p> {this.props.lu}  </p>
            </section>


    </div>

      




            <div className='contenedorboton'>
      
  
              <button class="boton uno"> <span>Inicio</span>   </button>
       
      
            </div>
           
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
                                <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                                <a href="https://twitter.com/?lang=es" class="fa fa-twitter"></a>
                                <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                                <a href="https://www.whatsapp.com/?lang=es" class="fa fa-whatsapp"></a>
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
