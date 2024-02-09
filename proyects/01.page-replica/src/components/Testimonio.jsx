import "../styles/testimonio.css";
// eslint-disable-next-line react/prop-types
export function Testimonio({name, image, pais, cargo, empresa, testimonio}) {
  const imagen = `./public/imagenes/${image}.png`;
  return (
    <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={imagen} alt="Foto" />
        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio"><strong>{name}</strong> en {pais}</p>
            <p className="cargo-testimonio">{cargo} en {empresa}</p>
            <p className="texto-testimonio">{testimonio}</p>
        </div>
    </div>
  )
}
