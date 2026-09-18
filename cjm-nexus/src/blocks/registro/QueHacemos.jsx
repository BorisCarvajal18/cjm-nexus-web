'use client';

/**
 * <QueHacemos /> — M4 y la escena de los tableros (DESIGN.md).
 *
 * EN REPOSO (sin JavaScript, con «reducir movimiento» y bajo 1024 × 640 px):
 * cada servicio en su fila, la interfaz de muestra y su texto, todo legible.
 * Con movimiento, cada tablero se dibuja al entrar y su texto llega por
 * líneas. Los dos con los mismos tiempos.
 *
 * DESDE 1024 × 640 Y CON MOVIMIENTO, la escena: el escenario se fija 3,1
 * pantallas y las dos líneas se relevan con el mismo recorrido, la misma
 * curva y la misma letra (`escenaTableros` en lib/animations.js). El 50/50
 * de PRODUCT.md, medido.
 */
import Flecha from '../../components/registro/Flecha';
import PortalDocumentos from '../../components/registro/PortalDocumentos';
import TableroGerencial from '../../components/registro/TableroGerencial';
import { armaFinanzas, armaSoftware, CURVA, escenaTableros, lineasDe, UMBRAL_ESCENAS } from '../../lib/animations';
import { gsap } from '../../lib/gsap';
import { alAsomar, escalona, MUEVE, restauraCuenta, useRegistro } from '../../lib/registro';

export default function QueHacemos({ content, lang }) {
  const raiz = useRegistro((mm, seccion) => {
    mm.add({ mueve: MUEVE, escena: UMBRAL_ESCENAS }, (ctx) => {
      if (!ctx.conditions.mueve) return undefined;
      const cajas = gsap.utils.toArray(seccion.querySelectorAll('.caja-pieza'));
      const textos = gsap.utils.toArray(seccion.querySelectorAll('.texto-servicio'));
      const armaF = armaFinanzas(cajas[0].querySelector('.pieza'));
      const armaS = armaSoftware(cajas[1].querySelector('.pieza'));
      const tlRegla = gsap
        .timeline({ paused: true })
        .fromTo(seccion.querySelector('.regla'), { '--raya': 0 }, { '--raya': 1, duration: 0.85, ease: CURVA.llegar });
      const limpia = () => gsap.utils.toArray(seccion.querySelectorAll('.cuenta')).forEach(restauraCuenta);

      if (!ctx.conditions.escena) {
        alAsomar(seccion.querySelector('.rotulo'), 'top 85%', tlRegla);
        alAsomar(cajas[0], 'top 80%', armaF);
        alAsomar(cajas[1], 'top 80%', armaS);
        textos.forEach((t) => {
          const tlT = escalona(
            gsap.timeline({ paused: true }),
            lineasDe(t),
            { x: -24, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: CURVA.llegar },
            0,
            0.07,
          );
          alAsomar(t, 'top 88%', tlT);
        });
        return limpia;
      }
      return escenaTableros(seccion, { armaF, armaS, tlRegla, limpia });
    });
  });

  const [finanzas, digital] = content.servicios;

  return (
    <section ref={raiz} className="registro hacemos" id="campos">
      <div className="escenario">
        <div className="marco">
          <div className="rotulo">
            <h2>{content.titulo}</h2>
            <p>{content.rotulo}</p>
            <div className="regla" aria-hidden="true">
              <i />
              <i />
            </div>
          </div>

          <div className="dos-servicios">
            <Servicio servicio={finanzas} muestra={content.muestra} lang={lang}>
              <TableroGerencial datos={content.tablero} />
            </Servicio>
            <Servicio servicio={digital} muestra={content.muestra} lang={lang}>
              <PortalDocumentos datos={content.portal} />
            </Servicio>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicio({ servicio, muestra, lang, children }) {
  return (
    <article className="servicio">
      <div className="caja-pieza">
        {children}
        <p className="muestra">{muestra}</p>
      </div>
      <div className="texto-servicio">
        <p className="ref">{servicio.ref}</p>
        <h3>
          <span className="linea">{servicio.titulo[0]}</span> <span className="linea">{servicio.titulo[1]}</span>
        </h3>
        <p className="lead">{servicio.lead}</p>
        <ul className="lista">
          {servicio.lista.map((punto) => (
            <li key={punto}>{punto}</li>
          ))}
        </ul>
        <a className="boton-contorno" href={`/${lang}${servicio.href}`}>
          <span>{servicio.boton}</span>
          <Flecha />
        </a>
      </div>
    </article>
  );
}
