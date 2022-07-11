import React from 'react'

export default function TarjetaPaciente() {
    return (
        <div className='bg-white shadow-md m-3 px-5 py-10 rounded-lg'>
            <p className='font-bold mb-3 mt-3 text-gray-700 uppercase'>Nombre</p>
            <span className='font-normal normal-case'>Pipu</span>
            <p className='font-bold mb-3 mt-3 text-gray-700 uppercase'>Propietario</p>
            <span className='font-normal normal-case'>Random</span>
            <p className='font-bold mb-3 mt-3 text-gray-700 uppercase'>Email</p>
            <span className='font-normal normal-case'>ejemplo@gmail.com</span>
            <p className='font-bold mb-3 mt-3 text-gray-700 uppercase'>Fecha de Alta</p>
            <span className='font-normal normal-case'>10/10/10</span>
            <p className='font-bold mb-3 mt-3 text-gray-700 uppercase'>Sintomas</p>
            <span className='font-normal normal-case'> Se siente muy muy mal y trsite</span>
        </div>
    )
}
