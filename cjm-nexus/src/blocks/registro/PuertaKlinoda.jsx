'use client';

/**
 * <PuertaKlinoda /> — M5 y la escena de KLINODA (DESIGN.md).
 *
 * Fuera de su página, KLINODA es una puerta (regla 3 de PRODUCT.md): enseña
 * el producto, dice su estado y lleva a su página. Es una empresa del Grupo
 * CJM Nexus (regla 8) y su cliente es la empresa empleadora (regla 7).
 *
 * EN REPOSO (sin JavaScript, con «reducir movimiento» y bajo 1024 × 640 px):
 * logotipo y etiqueta de estado, el tablero de su portal de empresa y el
 * texto. Sin movimiento, la banda es marino por sí misma; con movimiento es
 * la página entera la que se ha hecho de noche (<Noche />).
 *
 * DESDE 1024 × 640 Y CON MOVIMIENTO, la escena: se fija 2,1 pantallas, la
 * placa se levanta, el nombre viaja a la barra, el tablero se dibuja, se
 * retira a la derecha y entra el texto (`escenaKlinoda` en lib/animations.js).
 *
 * El tablero lleva la marca de KLINODA: sus colores solo viven aquí dentro.
 * Datos ficticios, sin nombres ni documento, sin nada clínico y sin totales
 * por aptitud.
 */
import Flecha from '../../components/registro/Flecha';
import Icono from '../../components/registro/Icono';
import { armaKlinoda, CURVA, escenaKlinoda, UMBRAL_ESCENAS } from '../../lib/animations';
import { gsap } from '../../lib/gsap';
import { alAsomar, escalona, MUEVE, restauraCuenta, useRegistro } from '../../lib/registro';

/** Lo que abarca la línea de plazos del tablero, en días. */
const DIAS = 90;

export default function PuertaKlinoda({ content, lang }) {
  const raiz = useRegistro((mm, puerta) => {
    mm.add({ mueve: MUEVE, escena: UMBRAL_ESCENAS }, (ctx) => {
      if (!ctx.conditions.mueve) return undefined;
      const tablero = puerta.querySelector('.k-tablero');
      const texto = puerta.querySelector('.k-texto');
      const arma = armaKlinoda(tablero);
      const limpia = () => gsap.utils.toArray(tablero.querySelectorAll('.cuenta')).forEach(restauraCuenta);

      if (!ctx.conditions.escena) {
        alAsomar(tablero, 'top 80%', arma);
        alAsomar(
          texto,
          'top 88%',
          escalona(
            gsap.timeline({ paused: true }),
            texto.children,
            { x: -24, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: CURVA.llegar },
            0,
            0.08,
          ),
        );
        return limpia;
      }
      return escenaKlinoda(puerta, { arma, limpia });
    });
  });

  const k = content;

  return (
    <section ref={raiz} className="registro puerta" id="klinoda">
      <div className="k-escenario">
        <div className="marco">
          <div className="k-area">
            <div className="k-caja">
              <div className="k-tablero">
                <header className="k-barra">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="k-logo" src="/marca/klinoda.png" width="800" height="215" alt="" />
                  <span className="k-seccion">{k.seccion}</span>
                  <span className="k-pestanas" aria-hidden="true">
                    {k.pestanas.map((p, i) => (
                      <span key={p} className={i === 0 ? 'es-actual' : undefined}>
                        {p}
                      </span>
                    ))}
                  </span>
                  <span className="k-chip" aria-hidden="true">
                    {k.etiqueta}
                  </span>
                </header>
                <div className="k-cuerpo">
                  <div className="k-carta k-plazos">
                    <p className="k-rot">
                      <span className="k-icono" aria-hidden="true">
                        <Icono nombre="calendario" />
                      </span>
                      {k.plazos.rotulo}
                    </p>
                    <p className="k-grande num">
                      <span className="cuenta" data-hasta={k.plazos.total}>
                        {k.plazos.total}
                      </span>
                    </p>
                    {/* La línea de 90 días: tres tramos y un punto por
                        vencimiento, cada uno en su día. */}
                    <div className="k-linea">
                      <div className="k-eje" aria-hidden="true">
                        <div className="k-puntos">
                          {k.plazos.tramos.flatMap((t, n) =>
                            t.dias.map((dia) => <i key={dia} className={`t${n + 1}`} style={{ left: `${(dia / DIAS) * 100}%` }} />),
                          )}
                        </div>
                        <div className="k-marcas num">
                          {k.plazos.eje.map((m) => (
                            <span key={m} style={{ left: `${(m / DIAS) * 100}%` }}>
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="k-tramos">
                        {k.plazos.tramos.map((t) => (
                          <div key={t.que} className="k-tramo">
                            <span>
                              <b className="num">{t.cuantos}</b>
                              {t.que}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="k-minis">
                    <div className="k-carta k-mini aviso">
                      <span className="k-icono" aria-hidden="true">
                        <Icono nombre="vencida" />
                      </span>
                      <p className="k-grande num">
                        <span className="cuenta" data-hasta={k.vencidas.cuantos}>
                          {k.vencidas.cuantos}
                        </span>
                      </p>
                      <p className="k-rot">{k.vencidas.rotulo}</p>
                    </div>
                    <div className="k-carta k-mini bien">
                      <span className="k-icono" aria-hidden="true">
                        <Icono nombre="certificado" />
                      </span>
                      <p className="k-grande num">
                        <span className="cuenta" data-hasta={k.certificados.cuantos}>
                          {k.certificados.cuantos}
                        </span>
                      </p>
                      <p className="k-rot">{k.certificados.rotulo}</p>
                    </div>
                  </div>
                  <div className="k-filas">
                    {k.cargos.map((c) => (
                      <div key={c.cargo} className="k-fila">
                        <span className="k-cargo">
                          <span className="k-icono" aria-hidden="true">
                            <Icono nombre="maletin" />
                          </span>
                          {c.cargo}
                        </span>
                        <span className="k-pie">
                          <span className={`k-apto${c.observacion ? ' obs' : ''}`}>{c.aptitud}</span>
                          <span className="k-vence num">
                            <Icono nombre="calendario" />
                            {c.vence}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="k-placa" aria-hidden="true" />
              <div className="k-marca">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/marca/klinoda-claro.png" width="1400" height="377" alt={k.logo} />
                <p className="k-lema">{k.lema}</p>
                <p className="k-etiqueta">{k.etiqueta}</p>
              </div>
            </div>
            <div className="k-texto">
              {k.frases.map((f) => (
                <p key={f} className="k-frase">
                  {f}
                </p>
              ))}
              <p className="pregunta">{k.pregunta}</p>
              <a className="boton-contorno" href={`/${lang}/klinoda`}>
                <span>{k.boton}</span>
                <Flecha />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
