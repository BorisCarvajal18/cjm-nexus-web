import { StepItem } from './Steps';

/**
 * Una de las dos ofertas de la página de soluciones digitales.
 *
 * DOS OFERTAS Y NO UNA: una página web en días y un sistema en meses no caben
 * en una sola descripción; un plazo de una semana al lado de un proceso de
 * meses no lo cree nadie.
 *
 * LA REFERENCIA LAS SEPARA, no un número grande: «01 · …» y «02 · …» en
 * versalitas, como «Servicio 01» en la portada (DESIGN.md prohíbe la
 * numeración grande decorativa). `tone="muted"` pone la segunda sobre papel
 * hondo, que marca el corte sin gastar un píxel de animación.
 *
 * LA LETRA PEQUEÑA VA A LA VISTA: «en una semana» sin condición suena a
 * folleto; con la condición escrita, a alguien que ya lo ha hecho.
 */
export default function Offer({ content, tone = 'plain', id }) {
  return (
    <section id={id} className={`registro seccion oferta ${tone === 'muted' ? 'banda-honda' : ''}`}>
      <div className="marco">
        <div className="cabeza">
          <div>
            <p className="ref-pag">
              <span className="num">{content.marker}</span> · {content.eyebrow}
            </p>
            <h2>{content.title}</h2>
          </div>
          <div>
            <p>{content.text}</p>
            {content.includes ? (
              <div className="incluye">
                <h3 className="ref-pag">{content.includesLabel}</h3>
                <ul className="lista-pag dos fuerte">
                  {content.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {content.items ? (
          <ul className="puntos-pag" style={{ '--n': 4 }}>
            {content.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <h3 className="ref-pag sub">{content.stepsLabel}</h3>
        <ol className="pasos en-columnas" style={{ '--n': content.steps.length > 3 ? 4 : 3 }}>
          {content.steps.map((paso) => (
            <StepItem key={paso.step} paso={paso} />
          ))}
        </ol>

        {content.note ? <p className="nota-pag">{content.note}</p> : null}
      </div>
    </section>
  );
}
