import { useState } from 'react'
import '../styles/TareaFormulario.css'
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line react/prop-types
function FormTarea({onSubmit}) {
  const [cambio,setCambios] = useState('')
  const manejoCambio=  e=>{
    console.log("escribiendo");
    setCambios(e.target.value)
  }
  const envio = (e)=>{
    e.preventDefault()
    const tarea = {
      id: uuidv4(),
      texto: cambio,
      compleada: false
    }
    onSubmit(tarea)
    console.log(tarea.id)
  }
 
  return (
    <div className='tareas-lista-contenedor '>
      <form className="tarea-formulario"
      onSubmit={envio}>
        <input
            className="tarea-input" 
            type="text" 
            placeholder="Nombre de la tarea" 
            name="texto"
            onChange={manejoCambio}/>|
            <button className="tarea-boton">Agregar tarea</button>
      </form>
    </div>
  )
}

export default FormTarea
