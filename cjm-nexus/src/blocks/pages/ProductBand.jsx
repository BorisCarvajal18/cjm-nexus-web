import Flecha from '../../components/registro/Flecha';
import DarkSurface from '../../components/ui/DarkSurface';

/**
 * La banda de KLINODA en las páginas que no son la suya: una puerta (regla 3
 * de PRODUCT.md). Enseña qué es, dice su estado si lo trae y lleva a su
 * página. Aparece una sola vez por página.
 *
 * KLINODA es una empresa del Grupo CJM Nexus (regla 8): nunca «producto
 * propio» ni «la prueba de lo que construimos». Su cliente es la empresa
 * (regla 7).
 *
 * Marino, como la banda de KLINODA de la portada sin movimiento. Las cifras
 * son de construcción (pruebas, actas, tiempo medido con datos ficticios),
 * nunca clínicas.
 *
 * La usa también la página de KLINODA para la banda de quien la construye,
 * sin estado.
 */
export default function ProductBand({ content, href = '#contacto' }) {
  const hechos = content.facts ?? [];
  return (
    <DarkSurface as="section" className="registro seccion oscura banda-producto">
      <div className="marco">
        <div>
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p className="texto">{content.text}</p>
          {content.estado ? <p className="k-etiqueta">{content.estado}</p> : null}
          <div>
            <a className="boton-contorno" href={href}>
              <span>{content.cta}</span>
              <Flecha />
            </a>
          </div>
        </div>
        {hechos.length ? (
          <ul className="hechos" style={{ '--n': hechos.length }}>
            {hechos.map((h) => (
              <li key={h.label}>
                <b className="num">{h.value}</b>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </DarkSurface>
  );
}
