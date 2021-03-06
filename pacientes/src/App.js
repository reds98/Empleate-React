import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import { useState } from 'react';
function App() {
 const [pacientes,setPacientes]=useState([])
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
         />
        <ListadoPacientes
        pacientes={pacientes} />
      </div>

    </div>
  );
}

export default App;
