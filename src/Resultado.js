import React from "react";

export const Resultado = (props) =>{
    let resultadoFinal;
    
    
    if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
        resultadoFinal = <>Resultado: Gana, el Jugador</>
    }else{
        if(props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
            resultadoFinal = <>Resultado: Gana, la Máquina</>
        }else if(props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion){
            resultadoFinal = <>Resultado: Empate</>
        }
    }
    return (
        <h1>{resultadoFinal}</h1>
    )
}