import { useState } from 'react';
import './App.css'
import { Button } from "./components/Button";
import { Window } from "./components/Window";
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState('')
  const agregarInput = (valor) => {
    setInput(input+valor)
    console.log("hi")
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    }
    else{
      alert("Ingrese valores")
    }
  }
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Window input={input}/>
        <div className='fila'>
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={() => {
            setInput('')
            console.log("clear")
          }}>Clear</Button>
        </div>
      </div>
    </div>
  )
}

export default App
