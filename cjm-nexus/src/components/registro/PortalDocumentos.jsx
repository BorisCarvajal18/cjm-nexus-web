/**
 * <PortalDocumentos /> — la interfaz de muestra de las soluciones digitales
 * (DESIGN.md, Interfaces de muestra). Papel blanco en los dos temas.
 *
 * La misma ventana que el tablero gerencial: a la izquierda, los documentos
 * con su estado y el reparto de los 128 por estado; a la derecha, la traza
 * del documento elegido, paso a paso, con las reglas cumplidas. Datos
 * ilustrativos (`home.es.js` → `hacemos.portal`). Mide lo mismo que el
 * tablero gerencial: el 50/50 es geometría.
 */
import Icono from './Icono';
import { BarraVentana, Estado, Riel } from './Ventana';

const RIEL = ['documento', 'traza', 'regla', 'candado', 'firma'];

export default function PortalDocumentos({ datos }) {
  const elegido = datos.documentos.find((d) => d.sel) ?? datos.documentos[0];
  const totalReparto = datos.reparto.reduce((a, r) => a + r.cuantos, 0) || 1;

  return (
    <div className="pieza">
      <BarraVentana titulo={datos.titulo}>
        <span className="pz-rotulo">{datos.rotulo}</span>
      </BarraVentana>

      <div className="pz-marco">
        <Riel iconos={RIEL} />
        <div className="pz-cuerpo pz-operacion">
          <div className="pz-docs">
            <div className="pz-busca" aria-hidden="true">
              <Icono nombre="buscar" size={13} />
              <span>{datos.buscar}</span>
            </div>
            <div className="pz-th">
              <span>{datos.columnas[0]}</span>
              <span>{datos.columnas[1]}</span>
            </div>
            <ul>
              {datos.documentos.map((d) => (
                <li key={d.nombre} className={d.sel ? 'es-elegido' : undefined}>
                  <span className={`pz-doc-icono${d.tipo ? ` es-${d.tipo}` : ''}`} aria-hidden="true">
                    <Icono nombre="documento" size={14} />
                  </span>
                  <span className="pz-doc-texto">
                    <span className="nom">{d.nombre}</span>
                    <span className="org">{d.origen}</span>
                  </span>
                  <Estado tipo={d.tipo}>{d.estado}</Estado>
                </li>
              ))}
            </ul>
            <div className="pz-reparto-estados">
              <div className="barra" aria-hidden="true">
                {datos.reparto.map((r) => (
                  <i key={r.estado} className={r.tipo ? `es-${r.tipo}` : undefined} style={{ flexGrow: r.cuantos / totalReparto }} />
                ))}
              </div>
              <ul>
                {datos.reparto.map((r) => (
                  <li key={r.estado} className={r.tipo ? `es-${r.tipo}` : undefined}>
                    <b className="num">{r.cuantos}</b> {r.estado}
                  </li>
                ))}
              </ul>
            </div>
            <p className="pz-paginas">
              <span className="num">{datos.cuantos}</span>
              <span className="pz-filtro">
                <Icono nombre="calendario" size={12} />
                {datos.periodo}
              </span>
            </p>
          </div>

          <div className="pz-traza">
            <div className="pz-th">{datos.traza}</div>
            <div className="pz-elegido">
              <span className="pz-doc-icono" aria-hidden="true">
                <Icono nombre="documento" size={14} />
              </span>
              <span className="pz-doc-texto">
                <span className="nom">{elegido.nombre}</span>
                <span className="org num">{datos.sello}</span>
              </span>
            </div>
            <ol className="pz-hilo">
              {datos.sucesos.map(([que, cuando, icono]) => (
                <li key={que} className="pz-suceso">
                  <span className="nodo" aria-hidden="true">
                    <Icono nombre={icono} size={11} />
                  </span>
                  <b>{que}</b>
                  <span className="num">{cuando}</span>
                </li>
              ))}
            </ol>
            <div className="pz-reglas">
              <div className="fila">
                <span>{datos.reglas}</span>
                <span className="num">
                  <span className="cuenta" data-hasta={datos.cumplidas}>
                    {datos.cumplidas}
                  </span>{' '}
                  / {datos.total}
                </span>
              </div>
              <div className="tramos" aria-hidden="true">
                {Array.from({ length: datos.total }, (_, i) => (
                  <i key={i} className={i < datos.cumplidas ? 'es-cumplida' : undefined} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pz-pie">
        <Icono nombre="sello" size={14} />
        {datos.pie}
      </p>
    </div>
  );
}
