import React from "react";
import Opcion from "./Opcion";
import './Juego.css';

export function Juego(){
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

    return(
        <div className = "Contenedor">
            <div className = "opciones">
                {opciones.map((e, index)=><Opcion
                    valor = {opciones[index]}/>)}
            </div>
        </div>
    );
}