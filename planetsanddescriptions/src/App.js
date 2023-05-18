import './App.css';
//importando un componente:
import Planets from './componentes/Planets';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Planetas</h1>
        <Planets />
      </div>
    </div>
  );
}

export default App;
