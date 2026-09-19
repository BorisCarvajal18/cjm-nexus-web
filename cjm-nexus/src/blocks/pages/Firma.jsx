import Flecha from '../../components/registro/Flecha';
import { destinoEn } from '../../i18n/rutas.mjs';

/**
 * «Dos líneas, una firma.»: tres puntos sobre la firma, en columnas con
 * filetes, sobre el papel hondo. El de KLINODA es una puerta (regla 3 de
 * PRODUCT.md): dice que es empresa del Grupo, su estado y lleva a su página.
 *
 * El método va justo debajo, en su propia sección (<Method />, #metodo).
 *
 * Los enlaces del contenido vienen sin idioma (`/klinoda`); aquí se les pone.
 */
export default function Firma({ content, lang }) {
  return (
    <section className="registro seccion banda-honda">
      <div className="marco">
        <div className="cabeza-seccion">
          <p className="ref-pag">{content.etiqueta}</p>
          <h2>{content.titulo}</h2>
        </div>
        <ul className="puntos-pag firma-puntos" style={{ '--n': content.items.length }}>
          {content.items.map((item) => (
            <li key={item.titulo}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              {item.estado ? <p className="k-etiqueta">{item.estado}</p> : null}
              {item.href ? (
                <a className="enlace adelante" href={destinoEn(lang, item.href)}>
                  <span>{item.enlace}</span>
                  <Flecha />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
