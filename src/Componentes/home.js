import React from "react";
import './css/style.css'
import Home from './img/home.jpeg'
import Btn from "./Btn";


 class Homes extends React.Component{


render (){

    return  <div>
        <div className="menu">
            <div>
                <div className="container">
                    <img src={Home} alt="" className="image"/>
                </div>
            <section className="botones">
                <Btn/>
            </section>
            </div>
        </div>
</div>
}
}
export default Homes;