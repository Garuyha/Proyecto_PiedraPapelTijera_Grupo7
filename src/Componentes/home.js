import React from "react";
import './css/style.css'
import Home from './img/home.jpeg'


 class Homes extends React.Component{


render (){

    return  <div>
        <div className="menu">
            <div>
                <div className="container">
                    <img src={Home} className="image"></img>
                </div>
            <section className="botones">
                <div>
                    <button>Jugar</button>
                </div>
                <div>
                    <button>Desarrolladores</button>
                </div>
            </section>
            </div>
        </div>
</div>
}
}
export default Homes;