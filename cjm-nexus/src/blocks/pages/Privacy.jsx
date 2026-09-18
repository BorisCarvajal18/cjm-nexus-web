import KlinodaCard from '../../components/mockups/KlinodaCard';
import DarkSurface from '../../components/ui/DarkSurface';

/**
 * La regla de privacidad de KLINODA, enseñada en lugar de explicada.
 *
 * La vista de aptitud del portal de empresa puede enseñarse justo porque no
 * contiene un solo dato clínico: cargo, tipo de evaluación y aptitud, con las
 * etiquetas reales. Sin nombres, ni reales ni inventados. La regla que la
 * sección explica es la misma que hace posible la ilustración.
 *
 * Marino, con la hoja en papel blanco (The Paper-Sheet Rule).
 */
export default function Privacy({ content }) {
  return (
    <DarkSurface as="section" id="privacidad" className="registro seccion oscura">
      <div className="marco dos-col">
        <div>
          <p className="ref-pag">{content.eyebrow}</p>
          <h2 className="titulo-pag">{content.title}</h2>
          <p className="entrada-pag">{content.text}</p>
          <ul className="puntos-pag" style={{ '--n': 2 }}>
            {content.points.map((punto) => (
              <li key={punto.title}>
                <h3>{punto.title}</h3>
                <p>{punto.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <KlinodaCard data={content.mockup} />
      </div>
    </DarkSurface>
  );
}
