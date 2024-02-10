import './App.css'
import  ListaTarea  from "./components/ListaTarea";
function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaTarea/>
      </div>
    </div>
  )
}

export default App
