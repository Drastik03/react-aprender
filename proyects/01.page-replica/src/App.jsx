import { Testimonio } from "../src/components/Testimonio";
import "./App.css"

function App() {
  return (
    <div className='App'>
      <div className="contenedor-principal">
        <h1>Esto es lo que se dice de nuestros cursos</h1>
        <Testimonio
          name={'Shawn Wang'}
          pais={'Singapur'}
          image={'img3'}
          cargo={'Ingeniero de Software'}
          empresa={'Amazon'}
          testimonio={'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'}/>
        <Testimonio 
          name={"Emma Bostian"} 
          pais={"Suecia"} 
          image={"img1"}
          cargo={"Ingeniera de software"}
          empresa={"Spotify"}
          testimonio={"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify."}/>

          <Testimonio
            name={'Sarah Chima'}
            pais={'Nigeria'}
            image={'img2'}
            cargo={'Ingeniera de Software'}
            empresa={'ChatDesk'}
            testimonio={'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'}/>
            
      </div>
    </div>
  )
}

export default App
