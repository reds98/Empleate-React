import React, { useState } from "react";
import "./Tarjeta.css"

function Tarjeta({ descripcion, nombreTarjeta, precio }) {

    const [edad,setEdad]=useState(20)
    function incrementarEdad(){
       setEdad(edad+1)
    }
    function disminuirEdad(){
        setEdad(edad-1)
    }
    


    return (
        <div className="contenedorTarjeta">
            <h1>Informacion recibida {nombreTarjeta}</h1>
            <h1>Titulo de la tarjeta</h1>
            <p>Descripcion de la tarjeta : {descripcion}</p>
            <p>precio:{edad}</p>
            {/* <p>El precio es {precio}</p> */}
            {/* <p>{nombreSecundario}</p> */}
            <button onClick={incrementarEdad}>Incrementar precio</button>
            <button onClick={disminuirEdad}>Disminuir precio</button>
        </div>
    )

}
export default Tarjeta