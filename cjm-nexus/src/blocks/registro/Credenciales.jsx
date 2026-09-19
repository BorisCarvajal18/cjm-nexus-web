'use client';

/**
 * <Credenciales /> — M1 (DESIGN.md, Credenciales). La banda bajo la portada.
 *
 * Tres cifras, pocas y grandes, separadas por filetes verticales. En cada una:
 * la cifra en trazo fino, lo que es y a nombre de quién. Debajo, una frase
 * firma el equipo con los nombres en negrita. Las cifras de trayectoria son de
 * Richard Carvajal y lo dicen al lado (regla 2 de PRODUCT.md).
 *
 * EL GESTO, una vez al asomar: se trazan las rayas entre cifras, cada cifra
 * sube y cuenta (15 y 100), su nota se escribe detrás con una máscara y al
 * final se traza la firma. En el HTML cada cifra ya tiene su valor final.
 */
import Negritas from '../../components/registro/Negritas';
import { CURVA } from '../../lib/animations';
import { gsap } from '../../lib/gsap';
import { alAsomar, conMillares, cuenta, escalona, MUEVE, restauraCuenta, useRegistro } from '../../lib/registro';

export default function Credenciales({ content }) {
  const raiz = useRegistro((mm, cred) => {
    mm.add(MUEVE, () => {
      const cuentas = gsap.utils.toArray(cred.querySelectorAll('.cuenta'));
      const notas = cred.querySelectorAll('.que, .quien');
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(cred.querySelector('.cifras'), { '--raya': 0 }, { '--raya': 1, duration: 0.6, ease: 'power2.out' }, 0);
      gsap.utils.toArray(cred.querySelectorAll('.cifras li')).forEach((li, i) => {
        const t = 0.1 + i * 0.12;
        tl.fromTo(li.querySelector('.cifra'), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, ease: CURVA.llegar }, t);
        escalona(
          tl,
          li.querySelectorAll('.que, .quien'),
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'power2.inOut' },
          t + 0.35,
          0.1,
        );
      });
      cuentas.forEach((el) => tl.add(cuenta(el, 1.3), 0.1));
      tl.fromTo(cred.querySelector('.firma'), { '--raya': 0 }, { '--raya': 1, duration: 0.7, ease: CURVA.llegar }, 0.9)
        .fromTo(cred.querySelector('.firma span'), { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' }, 1.1)
        .set(notas, { clearProps: 'clipPath' });
      tl.data = { cuentas };
      alAsomar(cred, 'top 82%', tl);
      return () => cuentas.forEach(restauraCuenta);
    });
  });

  return (
    <section ref={raiz} className="registro credenciales" id="equipo" aria-labelledby="credenciales-titulo">
      <div className="marco">
        {/* Título para el lector de pantalla y el esquema de la página; a la
            vista, la banda se explica sola. */}
        <h2 id="credenciales-titulo" className="sr-only">
          {content.etiqueta}
        </h2>
        <ul className="cifras">
          {content.cifras.map((c) => (
            <li key={c.que}>
              <p className="cifra num">
                {c.hasta !== undefined ? (
                  <>
                    <span className="cuenta" data-hasta={c.hasta}>
                      {conMillares(c.hasta)}
                    </span>
                    <span className="mas">{c.mas}</span>
                  </>
                ) : (
                  c.valor
                )}
              </p>
              <p className="que">{c.que}</p>
              <p className="quien">{c.quien}</p>
            </li>
          ))}
        </ul>
        <p className="firma">
          <span>
            <Negritas>{content.firma}</Negritas>
          </span>
        </p>
      </div>
    </section>
  );
}
