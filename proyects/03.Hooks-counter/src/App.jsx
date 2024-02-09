import './App.css'
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { useEffect,useState } from "react";
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    count
  },[])
  const click = () => {
    console.log("click")
    setCount(count+1)
  }
  const reiniciar = () => {
    setCount(0)
    console.log("reiniciar")
  }
  return (
    <div className='App'>
      <div className="contenedor-principal">
        <Counter numeroClick={count}/>
        <Button
            text={"Click"}
            esBotonClick={true}
            click={click}
        />
        <Button
            text={"Reiniciar"}
            esBotonClick={false}
            click={reiniciar}
        />
      </div>
    </div>
  )
}

export default App
