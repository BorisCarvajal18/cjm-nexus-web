/**
 * El cierre de las páginas interiores: la misma banda que el cierre de la
 * portada (`.cierre` en estilos/cierre.css), con el texto de cada página.
 *
 * «Agendar» es el único relleno cobre y abre Calendly; «Escribir» es el
 * botón de contorno. Debajo, los tres canales directos, porque hay gente que
 * no quiere un calendario sino escribir a un número de WhatsApp.
 *
 * Es una banda oscura: avisa a la cabecera con <DarkSurface />, que es lo
 * único que viaja al navegador.
 */
import Flecha from '../components/registro/Flecha';
import DarkSurface from '../components/ui/DarkSurface';
import { getSitio } from '../content';
import { CALENDLY_URL, contactos, CORREO } from '../lib/site';

export default function FinalCta({ content, lang = 'es' }) {
  const { canales } = getSitio(lang);
  return (
    <DarkSurface as="section" id="contacto" className="registro cierre">
      <div className="marco">
        <p className="ref">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        {content.text ? <p className="texto">{content.text}</p> : null}
        <div className="acciones">
          <a className="boton" href={CALENDLY_URL}>
            <span>{content.primary}</span>
            <Flecha />
          </a>
          {content.secondary ? (
            <a className="boton-contorno" href={CORREO}>
              <span>{content.secondary}</span>
              <Flecha />
            </a>
          ) : null}
        </div>
        <div className="canales">
          {contactos(lang).map((canal) => (
            <a key={canal.key} href={canal.href}>
              {canales[canal.key]}
              {canal.conValor ? ` ${canal.value}` : null}
            </a>
          ))}
        </div>
      </div>
    </DarkSurface>
  );
}
