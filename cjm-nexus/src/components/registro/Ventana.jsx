/**
 * Las partes que comparten las interfaces de muestra de CJM Nexus: la barra
 * de la ventana, el riel de navegación, la variación de un indicador y la
 * etiqueta de estado de un documento.
 *
 * Una sola pieza para las dos líneas de servicio: el 50/50 de PRODUCT.md
 * también es que los dos tableros estén hechos con el mismo material.
 */
import { CHISPA, chispaDe } from '../../lib/graficos';
import Icono from './Icono';

/** Barra superior: el isotipo de la firma, el nombre de la vista y, a la
    derecha, lo que cada tablero ponga (periodo, rótulo…). */
export function BarraVentana({ titulo, children }) {
  return (
    <header className="pz-barra">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/marca/cjm-isotipo.png" alt="" width="18" height="18" />
      <p className="pz-titulo">{titulo}</p>
      <div className="pz-barra-fin">{children}</div>
    </header>
  );
}

/** Riel de iconos. El primero es la vista que se está mirando. */
export function Riel({ iconos }) {
  return (
    <div className="pz-riel" aria-hidden="true">
      {iconos.map((nombre, i) => (
        <span key={nombre} className={i === 0 ? 'es-actual' : undefined}>
          <Icono nombre={nombre} size={15} />
        </span>
      ))}
    </div>
  );
}

/**
 * «▲ 12 %» → flecha dibujada y cifra. El texto llega entero desde
 * `src/content/`; aquí solo se cambia el glifo por un icono del juego.
 * `aviso` no es la dirección de la flecha, es si el dato pide atención:
 * una cartera vencida que sube es una mala noticia.
 */
export function Delta({ children, aviso = false }) {
  const texto = String(children);
  const sube = texto.startsWith('▲');
  const tieneFlecha = sube || texto.startsWith('▼');
  return (
    <span className={`pz-delta num${aviso ? ' es-aviso' : ''}`}>
      {tieneFlecha ? <Icono nombre={sube ? 'sube' : 'baja'} size={10} /> : null}
      {tieneFlecha ? texto.slice(1).trim() : texto}
    </span>
  );
}

/** Etiqueta de estado de un documento: «Firmado», «En revisión» (`rev`) o
    «Borrador» (`bor`). Dice el estado con su palabra, no solo con el color. */
export function Estado({ tipo, children }) {
  return <span className={`pz-estado${tipo ? ` es-${tipo}` : ''}`}>{children}</span>;
}

/** Un indicador del tablero: nombre, variación, valor y, si la trae, su
    chispa. `aviso` lo pinta en cobre: pide atención. */
export function Indicador({ nombre, valor, cambio, aviso = false, chispa }) {
  const c = chispa ? chispaDe(chispa) : null;
  return (
    <div className={`pz-kpi${aviso ? ' es-aviso' : ''}`}>
      <div className="pz-kpi-cab">
        <small>{nombre}</small>
        <Delta aviso={aviso}>{cambio}</Delta>
      </div>
      <b className="num">{valor}</b>
      {c ? (
        <span className="pz-chispa" aria-hidden="true">
          <svg viewBox={`0 0 ${CHISPA.ancho} ${CHISPA.alto}`} preserveAspectRatio="none">
            <polygon className="relleno" points={c.area} />
            <polyline className="linea" points={c.trazo} />
          </svg>
          <i style={c.punta} />
        </span>
      ) : null}
    </div>
  );
}
