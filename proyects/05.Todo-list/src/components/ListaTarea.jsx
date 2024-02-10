import FormTarea from "./FormTarea";
import Tarea from "./Tarea";
import '../styles/ListaTarea.css'
import { useState } from "react";
function ListaTarea() {
  const [tareas, setTareas] = useState([])
  const agregarTarea=(tarea)=>{
    if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim()
        const tareaActualizada = [tarea, ...tareas]
        setTareas(tareaActualizada)
    }
    console.log("tarea agregada"+tarea);
  }

  const eliminar = (id)=>{
    console.log(`Eliminar ${id}`);
    const tareaActualizada = tareas.filter(tarea => tarea.id != id)
    setTareas(tareaActualizada)
  }
  const completar = (id) => {
    const tareaActualizada = tareas.map(tarea => {
        if(tarea.id === id){
            tarea.completada = !tarea.completada
        }
        return tarea
    })
    setTareas(tareaActualizada)
  }
  return (
    <>
    <FormTarea onSubmit={agregarTarea}/>
    <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => {
            return(
                <Tarea 
                key= {tarea.id}
                id={tarea.id}
                texto = {tarea.texto}
                completada={tarea.completada}
                completarTarea={completar}
                eliminarTarea={eliminar}
            />
            )
        })}
    </div>
    </>
  )
}

export default ListaTarea
