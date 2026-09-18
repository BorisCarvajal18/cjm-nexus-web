/**
 * <TableroGerencial /> — la interfaz de muestra de la dirección financiera
 * (DESIGN.md, Interfaces de muestra). Papel blanco en los dos temas.
 *
 * Una ventana de producto, no un esquema: barra con el periodo, riel de
 * navegación, cuatro indicadores con su tendencia, ventas contra meta con lo
 * real y lo proyectado, rentabilidad por línea y el aviso del mes. Los datos
 * son ilustrativos y cuadran entre sí (`home.es.js` → `hacemos.tablero`).
 *
 * El trazo del gráfico es uno de los degradados del sistema: sale de cobre
 * apagado y llega encendido donde cruza la meta.
 */
import { ALTO, ANCHO, area, curva, enPorcentaje, puntosDe } from '../../lib/graficos';
import Icono from './Icono';
import { BarraVentana, Indicador, Riel } from './Ventana';

const RIEL = ['tablero', 'flujo', 'rentabilidad', 'costos', 'documento'];
const CAJA = `0 0 ${ANCHO} ${ALTO}`;

/** «$612 K» → 612. Para repartir la barra de ingresos por línea. */
const cifra = (texto) => parseFloat(texto.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

export default function TableroGerencial({ datos }) {
  const { ventas } = datos;
  const total = ventas.real.length + ventas.proyeccion.length;
  const hoy = ventas.real.length - 1;
  const serie = puntosDe([...ventas.real, ...ventas.proyeccion], ventas.escala);
  const [metaA, metaB] = puntosDe(ventas.meta, ventas.escala);
  const ingresos = datos.lineas.map((l) => cifra(l.ingresos));
  const suma = ingresos.reduce((a, b) => a + b, 0) || 1;

  return (
    <div className="pieza">
      <BarraVentana titulo={datos.titulo}>
        <span className="pz-vistas" aria-hidden="true">
          {datos.vistas.map((v, i) => (
            <span key={v} className={i === 0 ? 'es-actual' : undefined}>
              {v}
            </span>
          ))}
        </span>
        <span className="pz-chip">
          <Icono nombre="calendario" size={13} />
          {datos.periodo}
          <Icono nombre="chevron-abajo" size={11} />
        </span>
      </BarraVentana>

      <div className="pz-marco">
        <Riel iconos={RIEL} />
        <div className="pz-cuerpo">
          <div className="pz-kpis">
            {datos.kpis.map((k) => (
              <Indicador key={k.nombre} nombre={k.nombre} valor={k.valor} cambio={k.cambio} aviso={k.aviso} chispa={k.chispa} />
            ))}
          </div>

          <div className="pz-carta pz-grafico">
            <div className="pz-carta-cab">
              <span>{datos.grafico}</span>
              <span className="pz-leyenda">
                <span>
                  <em className="real" />
                  {datos.real}
                </span>
                <span>
                  <em className="proy" />
                  {datos.proyeccion}
                </span>
                <span>
                  <em className="meta" />
                  {datos.meta}
                </span>
              </span>
            </div>
            <div className="pz-plano">
              <div className="pz-eje-y num" aria-hidden="true">
                {datos.ejeY.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {/* Tres capas del mismo tamaño, para poder descubrir lo real y la
                  proyección de izquierda a derecha, cada una con su máscara. */}
              <div className="pz-lienzo">
                <svg className="pz-capa" viewBox={CAJA} preserveAspectRatio="none" aria-hidden="true">
                  <g className="rejilla">
                    {datos.ejeY.map((t, i) => {
                      const y = (i / (datos.ejeY.length - 1)) * ALTO;
                      return <line key={t} x1="0" y1={y} x2={ANCHO} y2={y} />;
                    })}
                  </g>
                  <line className="hoy" x1={serie[hoy][0]} y1="0" x2={serie[hoy][0]} y2={ALTO} />
                  <line className="meta" x1={metaA[0]} y1={metaA[1]} x2={metaB[0]} y2={metaB[1]} />
                </svg>
                <svg className="pz-capa pz-capa-real" viewBox={CAJA} preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="trazo-tablero" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={serie[hoy][0]} y2="0">
                      <stop offset="0" stopColor="#A85A2E" />
                      <stop offset=".6" stopColor="#C9784A" />
                      <stop offset="1" stopColor="#DD9268" />
                    </linearGradient>
                    <linearGradient id="area-tablero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#C9784A" stopOpacity=".2" />
                      <stop offset="1" stopColor="#C9784A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="area" d={area(serie, 0, hoy)} fill="url(#area-tablero)" />
                  <path className="traza" d={curva(serie, 0, hoy)} stroke="url(#trazo-tablero)" />
                </svg>
                <svg className="pz-capa pz-capa-proy" viewBox={CAJA} preserveAspectRatio="none" aria-hidden="true">
                  <path className="proy" d={curva(serie, hoy, total - 1)} />
                </svg>
                <i className="pz-punta" style={enPorcentaje(serie[hoy])} aria-hidden="true" />
                {/* El ancla coloca el globo junto al punto; lo que se anima es
                    la caja de dentro, para no pisar esa colocación. */}
                <div className="pz-globo" style={enPorcentaje(serie[hoy])}>
                  <div className="pz-globo-caja">
                    <small>{ventas.globo.mes}</small>
                    <b className="num">{ventas.globo.valor}</b>
                    <span className="num">
                      <Icono nombre="sube" size={10} />
                      {ventas.globo.nota}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pz-eje-x" aria-hidden="true">
                {datos.ejeX.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="pz-carta pz-tabla">
            <div className="pz-th">
              <span>{datos.tabla[0]}</span>
              <span className="der">{datos.tabla[1]}</span>
              <span className="der">{datos.tabla[2]}</span>
            </div>
            <div className="pz-reparto" aria-hidden="true">
              {ingresos.map((v, i) => (
                <i key={datos.lineas[i].nombre} style={{ flexGrow: v / suma }} />
              ))}
            </div>
            {datos.lineas.map((l, i) => (
              <div key={l.nombre} className={`pz-tr l${i + 1}`}>
                <span className="pz-linea-nombre">
                  <i aria-hidden="true" />
                  {l.nombre}
                </span>
                <span className="der num">{l.ingresos}</span>
                <span className="pz-barra-margen">
                  <span className="pista">
                    <i className="relleno" style={{ '--v': l.barra }} />
                  </span>
                  <span className="num">{l.margen}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="pz-alerta">
            <Icono nombre="alerta" size={14} />
            <span>{datos.alerta}</span>
            <Icono nombre="chevron-derecha" size={12} />
          </p>
        </div>
      </div>
    </div>
  );
}
