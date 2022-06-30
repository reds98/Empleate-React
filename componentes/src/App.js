import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div className="App">
      <h1>Hola como estan clase?</h1>
      <p>Descripcion</p>
      <Tarjeta nombreTarjeta={"Informacion Random"} descripcion={"descripcion padre"} precio={2500} />
      <Tarjeta nombreTarjeta={"Raymond"} descripcion={"descripcion ray"} precio={100000} />
    </div>
  );
}

export default App;
