import React,{useState} from 'react'

export default function Formulario({pacientes,setPacientes}) {
    const [nombre,setNombre]=useState("")
    const [nombreP,setNombreP]=useState("Adrian")
    const [correo,setCorreo]=useState("ejemplo@gmail.com")
    const [fecha,setFecha]=useState("11/7/22")
    const [sintomas,setSintomas]=useState("")
    
    function agregarPaciente(){   
        const  paciente={
            nombre,
            nombreP,
            correo,
            fecha,
            sintomas
        }     
        setPacientes([...pacientes,paciente])
    }
    

    return (
        <div className='w-1/2'>
            <h1 className='font-black text-3xl text-center'>Administracion Pacientes</h1>
            <p className='text-lg mt-4 text-center'>Agregar Pacientes  y
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5'>
                <div>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre de la Mascota
                    </label>
                    <input
                        
                        onChange={(event)=>{setNombre(event.target.value)}}
                        id="mascota"
                        type="text"
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </input>
                </div>
                <div>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre del propietario
                    </label>
                    <input
                        onChange={(event)=>{setNombreP(event.target.value)}}
                        id="propietario"
                        type="text"
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </input>
                </div>
                <div>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        onChange={(event)=>{setCorreo(event.target.value)}}
                        id="email"
                        type="email"
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </input>
                </div>
                <div>
                    <label
                        htmlFor='alta'
                        className='block text-gray-700 uppercase font-bold'>
                        Fecha de Alta
                    </label>
                    <input
                        onChange={(event)=>{setFecha(event.target.value)}}
                        id="alta"
                        type="date"
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </input>
                </div>
                <div>
                    <label
                        htmlFor='sintomas'
                        className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                    onChange={(event)=>{setSintomas(event.target.value)}}
                        id="sintomas"
                        placeholder='Describe los sintomas'
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </textarea>
                </div>
                <button onClick={agregarPaciente} type="button" className='w-full bg-indigo-600 p-3 
                text-white uppercase font-bold
                 hover:bg-indigo-800'
                 >
                    Agregar Paciente
                </button>
            </form>
        </div>
    )
}
