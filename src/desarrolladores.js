import React from "react";
import './App.css';
import avatar from './Componentes/img/Avatar.png';


 class Desarrolladores extends React.Component{


render (){



    
    
    return  <div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


          <div className="seccion1">

              <section className="informacion"> 
     
                 <img  src={avatar} width="150"/>
                 <h3> <strong> {this.props.nombre}</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> {this.props.dni} </p>
                 <p> {this.props.lu}  </p>

              </section>


     
              

          </div>


    
    
    

      




           {/*  <div className='contenedorboton'>
      
  
              <button class="boton uno"> <span>Inicio</span>   </button>
       
      
            </div>

            <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-whatsapp"></a>
<a href="#" class="fa fa-instagram"></a>

        <section className="derechos">


           <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>


        </section> */}

</div>

    

    
}






}
export default Desarrolladores;