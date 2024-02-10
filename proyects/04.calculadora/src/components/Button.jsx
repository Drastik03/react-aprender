import "../styles/Button.css";
// eslint-disable-next-line react/prop-types
export function Button({ children,manejarClick}) {
  const isOperator = (valor) => {
    return isNaN(valor) && (valor != ".") && (valor != "=");
  };

  return (
    <div
        className={`boton-contenedor ${isOperator(children) ? 'operador' : ''}`.trimEnd()}
        onClick={()=>manejarClick(children)}
    >
      {children}
    </div>
  );
}
