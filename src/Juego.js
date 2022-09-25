import React, { useState } from "react";
import Opcion from "./Opcion";
import { Resultado } from "./Resultado";
import './Juego.css';

export function Juego(){
    const[eleccionJugador,setEleccionJugador] = useState({});
    const[eleccionMaquina, setEleccionMaquina] = useState({});

    const opciones =[
        {
            eleccion: "piedra",
            derrota: "tijera"
        },
        {
            eleccion: "papel",
            derrota: "piedra"
        },
        {
            eleccion: "tijera",
            derrota: "papel"
        }
    ]

    const elegirOpcion = (event) =>{
        const jugador = opciones.find(e=>e.eleccion === event.target.textContent);
        setEleccionJugador(jugador);
        eleccionRival();
    }

    const eleccionRival = () =>{
        const eleccion = opciones[Math.floor(Math.random()*opciones.length)];
        setEleccionMaquina(eleccion);
    }

    return(
        <div className = "Contenedor">            
            <h2 className = "resultado">
                <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}/>                             
            </h2>            
            <main className="tarjetaContenedor">
                <section className="tarjetaJugador">
                    <div className="jugador">Jugador</div>
                    <div className="eleccionJugador">{eleccionJugador.eleccion}</div>
                    <div className = "opciones">
                        {opciones.map((e,index)=><Opcion key={e=Math.random()} 
                            elegir={elegirOpcion}
                            valor = {opciones[index]}/>)}
                    </div>
                </section>
                <section className = "tarjetaMaquina">
                    <div className="maquina">Maquina</div>
                    <div className="eleccionMaquina">{eleccionMaquina.eleccion}</div>
                </section>
            </main>
            <button className = "botonMenu">volver al menu</button>
        </div>
    );
}