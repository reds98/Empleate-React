import React from 'react'
import TarjetaPaciente from './TarjetaPaciente'
export default function ListadoPacientes() {
    return (
        <div className='w-1/2'>
            <h1  className='font-black text-center text-3xl'>ListadoPacientes</h1>
            <p className='text-xl mt-5 mb-10 text-center '>
                Administra tus
                <span className='font-bold text-indigo-600'> Pacientes y Citas</span>
            </p>
            <TarjetaPaciente/>
            <TarjetaPaciente/>
            <TarjetaPaciente/>
            <TarjetaPaciente/>
        </div>

    )
}
