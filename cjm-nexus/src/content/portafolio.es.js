/**
 * Textos de la página del portafolio — /es/portafolio
 *
 * Tres portadas de ejemplo de la oferta de web en una semana, para marcas
 * ficticias de Berlín (la oferta se vende primero allí: Boris, 2026-09-19).
 * Las portadas están en inglés y viven como archivos estáticos en
 * `public/portafolio/<nombre>/`; aquí solo se presentan.
 *
 * Que se entienda siempre que son conceptos: la entrada lo dice y cada
 * portada lleva su etiqueta. Ninguna se presenta como cliente.
 *
 * Textos aprobados por Boris el 2026-09-19.
 */
export const portafolio = {
  meta: {
    title: 'Portafolio: portadas de ejemplo | CJM Nexus',
    description:
      'Tres portadas de ejemplo de nuestra oferta de web en una semana: un restaurante, una empresa de reformas y una barbería de Berlín. Marcas ficticias.',
  },

  hero: {
    eyebrow: 'Portafolio',
    title: 'Tres negocios, tres portadas que no se parecen.',
    highlight: ['no', 'se', 'parecen.'],
    lead: 'Así se ve la primera pantalla de una web que hacemos en una semana. Son conceptos para marcas ficticias de Berlín: ningún negocio existe, pero cada portada está hecha como si lo fuera.',
    primary: 'Agendar diagnóstico ejecutivo · 20 min',
    secondary: 'Ver las portadas',
    secondaryHref: '#portadas',
  },

  etiqueta: 'Concepto · marca ficticia',
  idioma: 'Están en inglés, como las pediría un negocio de Berlín.',
  abrir: 'Abrir la portada',

  /* `ruta`: la carpeta en public/portafolio/. `previa`: las capturas de
     public/portafolio/previa/ (escritorio a 1536 × 730, teléfono a 390 × 844). */
  portadas: [
    {
      id: 'regulars',
      nombre: 'Regulars',
      sector: 'Restaurante',
      barrio: 'Friedrichshain',
      texto: 'Cocina de barrio con mesas largas y un menú corto de tres pasos. La reserva, junto a la dirección.',
    },
    {
      id: 'chalkline',
      nombre: 'Chalkline',
      sector: 'Reformas de Altbau',
      barrio: 'Prenzlauer Berg',
      texto: 'Reformas de pisos antiguos con la fecha de entrega firmada. La obra en curso, con su avance, a la vista.',
    },
    {
      id: 'towpath',
      nombre: 'Towpath',
      sector: 'Barbería',
      barrio: 'Kreuzberg',
      texto: 'Barbería de barrio junto al canal. Los turnos libres de hoy y los precios, en el escaparate.',
    },
  ],

  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos para hablar de la tuya.',
    text: 'Sin costo · sin compromiso · en español, inglés o alemán.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

export default portafolio;
