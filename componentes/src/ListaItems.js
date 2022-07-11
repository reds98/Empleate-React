import React,{useState,useEffect} from "react";

function ListaItems() {
    useEffect(()=>{
        alert("Hola desde el inicio")
    },[])



    let nombres = ["Papaya", "Sandia", "Manzana", "Fresa"]
    const [numerosRandom,setNumerosRandom]=useState([1,3])


    function agregarNumeroRandom(){
        // 0====>9
 
        let numeroRandom= Math.round(Math.random()*10)
        setNumerosRandom([...numerosRandom,numeroRandom])
    }
    return (
        <div>
            <h1>Items de esta lista</h1>
            {nombres.map((elemento) => <p>{elemento}</p>)}
            <h1>Numeros Random</h1>
            <button onClick={agregarNumeroRandom}>Agregar Numero Random </button>
            {numerosRandom.map((elemento)=><p>{elemento}</p>)}
            
        </div>
    )
}
export default ListaItems