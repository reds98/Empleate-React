import React from 'react'

export default function Formulario() {
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
                        id="sintomas"
                        placeholder='Describe los sintomas'
                        className='border-2 w-full p-2 mt-2 place-gray-400 rounded-md'>
                    </textarea>
                </div>
                <button className='w-full bg-indigo-600 p-3 
                text-white uppercase font-bold
                 hover:bg-indigo-800'>
                    Agregar Paciente
                </button>
            </form>
        </div>
    )
}
