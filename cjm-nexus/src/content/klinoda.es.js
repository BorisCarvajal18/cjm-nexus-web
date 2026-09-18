/**
 * Textos del aviso de KLINODA — /es/klinoda
 *
 * CAMBIO DE ALCANCE (Boris, 2026-09-19): KLINODA tendrá su propia web
 * pública. La página larga de KLINODA se retiró de esta web y /klinoda es
 * ahora un aviso corto: su web está en camino, qué es KLINODA, su estado y
 * cómo escribirnos. No se indexa y no está en el sitemap. El día que exista
 * su web, /klinoda redirige allí (`KLINODA_WEB` en `src/lib/destinos.mjs`).
 *
 * LA PÁGINA RETIRADA sigue en el historial de git: esta misma ruta en el
 * commit f4bd24d (la cabecera, el problema, cómo funciona, al médico, la
 * vista de aptitud, las cifras de construcción, para qué empresa es…). Sus
 * textos estaban aprobados el 18-sep-2026; si la web de KLINODA los
 * necesita, están ahí.
 *
 * LAS REGLAS DE KLINODA SIGUEN VALIENDO (PRODUCT.md, reglas 3 a 9): ninguna
 * fecha, ninguna validez legal o sanitaria, nada clínico, el estado se dice
 * y lo que falta no se lista, «Empresa del Grupo CJM Nexus» y nunca
 * «plataforma para médicos». Por eso aquí no hay «pronto» ni plazo: solo
 * «en camino».
 *
 * Textos aprobados por Boris el 2026-09-19.
 */
export const klinoda = {
  meta: {
    title: 'KLINODA · Empresa del Grupo CJM Nexus | CJM Nexus',
    description:
      'KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador. Su web está en camino.',
  },

  aviso: {
    eyebrow: 'Empresa del Grupo CJM Nexus',
    title: 'La web de KLINODA está en camino.',
    highlight: ['en', 'camino.'],
    lead: 'KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador.',
    segunda: 'Mientras tanto, si tu empresa quiere saber más, escríbenos.',
    estado: 'Demo · en desarrollo · datos ficticios',
    escribir: 'Escribir a CJM Nexus',
    // El asunto del correo, para saber de dónde viene el mensaje.
    asunto: 'KLINODA',
    volver: 'Volver al inicio',
  },
};

export default klinoda;
