import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';
import ListaItems from './ListaItems';
function App() {
  return (
    <div className="App">
      <h1>Hola como estan clase?</h1>
      <p>Descripcion</p>
      <Tarjeta nombreTarjeta={"Informacion Random"} descripcion={"descripcion padre"} precio={2500} />
      <ListaItems/>
    </div>
  );
}

export default App;
