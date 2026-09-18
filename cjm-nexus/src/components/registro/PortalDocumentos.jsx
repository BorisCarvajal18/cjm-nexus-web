/**
 * <PortalDocumentos /> — la interfaz de muestra de las soluciones digitales
 * (DESIGN.md, Interfaces de muestra). Papel blanco en los dos temas.
 *
 * Documentos con su estado a la izquierda y la traza del documento elegido a
 * la derecha, con las reglas cumplidas. Datos ilustrativos (`home.es.js` →
 * `hacemos`). Mide lo mismo que el tablero gerencial: el 50/50 es geometría.
 */
export default function PortalDocumentos({ datos }) {
  return (
    <div className="pieza">
      <header>
        <h4>{datos.titulo}</h4>
        <span className="rotulo-pieza">{datos.rotulo}</span>
      </header>
      <div className="cuerpo">
        <div className="operacion">
          <div className="docs">
            <div className="th">
              <span>{datos.columnas[0]}</span>
              <span>{datos.columnas[1]}</span>
            </div>
            <ul>
              {datos.documentos.map((d) => (
                <li key={d.nombre} className={d.sel ? 'sel' : undefined}>
                  <span>
                    <span className="nom">{d.nombre}</span>
                    <span className="org">{d.origen}</span>
                  </span>
                  <span className={`estado${d.tipo ? ` ${d.tipo}` : ''}`}>{d.estado}</span>
                </li>
              ))}
            </ul>
            <p className="pie">
              <span className="num">{datos.cuantos}</span>
              <i>{datos.periodo}</i>
            </p>
          </div>
          <div className="raya" aria-hidden="true" />
          <div className="traza-col">
            <div className="th">{datos.traza}</div>
            <div className="hilo">
              {datos.sucesos.map(([que, cuando]) => (
                <div key={que} className="suceso">
                  <b>{que}</b>
                  <span>{cuando}</span>
                </div>
              ))}
            </div>
            <div className="reglas">
              <div className="fila">
                <span>{datos.reglas}</span>
                <span className="num">
                  <span className="cuenta" data-hasta={datos.cumplidas}>
                    {datos.cumplidas}
                  </span>{' '}
                  / {datos.total}
                </span>
              </div>
              <div className="pista" />
            </div>
          </div>
        </div>
      </div>
      <footer>{datos.pie}</footer>
    </div>
  );
}
