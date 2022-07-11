import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  );
}

export default App;
