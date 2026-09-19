import Flecha from '../../components/registro/Flecha';
import { destinoEn, existe } from '../../i18n/rutas.mjs';

/**
 * «Dos líneas, una firma.»: tres puntos sobre la firma, en columnas con
 * filetes, sobre el papel hondo. El de KLINODA es una puerta (regla 3 de
 * PRODUCT.md): dice que es empresa del Grupo, su estado y lleva a su página.
 *
 * Debajo, en la misma banda, el remite a cómo trabajamos: una línea y el
 * enlace a /servicios#metodo. El método vive allí y no se repite aquí.
 *
 * Los enlaces del contenido vienen sin idioma (`/klinoda`); aquí se les pone.
 */
export default function Firma({ content, metodo, lang }) {
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
        {/* El método vive en /servicios: donde esa página no existe (alemán),
            el remite no sale. */}
        {existe(lang, metodo.href.split('#')[0]) ? (
          <div className="remite">
            <div>
              <p className="ref-pag">{metodo.etiqueta}</p>
              <p className="texto">{metodo.texto}</p>
            </div>
            <a className="enlace adelante" href={destinoEn(lang, metodo.href)}>
              <span>{metodo.enlace}</span>
              <Flecha />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
