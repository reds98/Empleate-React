import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';
function App() {
  return (
    <div className="App">
      <Tarjeta titulo={"Titulo 1"}/>
      <Tarjeta titulo={"Titulo 2"}/>
      <Tarjeta titulo={"Titulo 3"}/>
    </div>
  );
}

export default App;
