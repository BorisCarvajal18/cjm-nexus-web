'use client';

/**
 * <Cierre /> — M6 (DESIGN.md). Termina el documento y empieza una decisión.
 *
 * Tres respuestas antes de pedir nada —con quién hablas, qué pasa en la
 * reunión, qué te llevas—, el único relleno cobre de la página («Agendar»,
 * que abre Calendly) y los canales directos para quien prefiere escribir.
 *
 * EL GESTO, una vez al asomar: un filete de cobre cruza la banda, cierra con
 * el mismo trazo con que abrió «Qué hacemos». Luego suben las tres respuestas.
 * El botón solo cambia de opacidad: su transformación es la del estado al
 * apuntar.
 *
 * Es oscuro por sí mismo. Con «reducir movimiento» avisa a la cabecera como
 * zona oscura (<Noche />); con movimiento, la página ya es de noche.
 */
import Flecha from '../../components/registro/Flecha';
import Negritas from '../../components/registro/Negritas';
import { CURVA } from '../../lib/animations';
import { gsap } from '../../lib/gsap';
import { alAsomar, MUEVE, useRegistro } from '../../lib/registro';
import { getSitio } from '../../content';
import { CALENDLY_URL, contactos } from '../../lib/site';

export default function Cierre({ content, lang = 'es' }) {
  const { canales } = getSitio(lang);
  const raiz = useRegistro((mm, c) => {
    mm.add(MUEVE, () => {
      const tres = c.querySelector('.tres');
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(c, { '--raya': 0 }, { '--raya': 1, duration: 1, ease: 'power2.inOut' }, 0)
        .fromTo(
          c.querySelector('.ref'),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: CURVA.llegar },
          0.1,
        )
        .fromTo(
          c.querySelector('h2'),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: CURVA.llegar },
          0.2,
        )
        .fromTo(tres, { '--div': 0 }, { '--div': 1, duration: 0.5, ease: 'power2.out' }, 0.45);
      gsap.utils.toArray(tres.children).forEach((col, i) => {
        const t = 0.45 + i * 0.12;
        tl.fromTo(
          col.querySelector('h3'),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, ease: CURVA.llegar },
          t,
        );
        tl.fromTo(col.querySelector('p'), { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' }, t + 0.12);
      });
      tl.fromTo(c.querySelector('.boton'), { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' }, 1.1)
        .fromTo(
          c.querySelector('.nota'),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.5, ease: CURVA.llegar },
          1.16,
        )
        .fromTo(c.querySelector('.canales'), { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' }, 1.25);
      alAsomar(c, 'top 70%', tl);
    });
  });

  return (
    <section ref={raiz} className="registro cierre" id="contacto">
      <div className="marco">
        <p className="ref">{content.ref}</p>
        <h2>
          <Negritas>{content.titular}</Negritas>
        </h2>
        <div className="tres">
          {content.tres.map((b) => (
            <div key={b.titulo}>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
        <a className="boton" href={CALENDLY_URL}>
          <span>{content.agendar}</span>
          <Flecha />
        </a>
        <p className="nota">{content.nota}</p>
        <nav className="canales" aria-label={content.canales}>
          {contactos(lang).map((canal) => (
            <a key={canal.key} href={canal.href}>
              {canales[canal.key]}
              {canal.conValor ? ` ${canal.value}` : null}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
