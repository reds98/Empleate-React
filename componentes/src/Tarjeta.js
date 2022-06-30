import React from "react";


function Tarjeta({descripcion,nombreTarjeta,precio}){
    

    let edad=29
    
    return (
        <div>
            <h1>Informacion recibida {nombreTarjeta}</h1>
            <h1>Titulo de la tarjeta</h1>
            <p>Descripcion de la tarjeta : {descripcion}</p>
            <p>edad:{edad}</p>
            <p>El precio es {precio}</p>
        </div>
    )
    
}
export default Tarjeta