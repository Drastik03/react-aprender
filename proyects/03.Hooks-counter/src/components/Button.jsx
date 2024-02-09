import "../styles/Button.css"

export function Button({ text, esBotonClick, click}) {
  return (
    <>
        <button
            className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={click}
        >
            {text}
        </button>
    </>
  )
}

