/**
 * Sistema de diseño de CJM Nexus.
 *
 * «EL REGISTRO DE LA FIRMA». Es la ley: DESIGN.md en la raíz del
 * repositorio, extraído de la portada aprobada el 13 de septiembre de 2026.
 * Sus tokens llevan nombre en español y viven en el bloque `REGISTRO` de
 * abajo: colores (`papel`, `tinta`, `cobre`…), letra (`text-display`,
 * `text-cifra`…), radios, espaciado, sombras y degradados.
 *
 * El sistema anterior («Pulso Cobre», 3 de septiembre) se retiró el 18 de
 * septiembre de 2026: sus tokens en inglés (`navy`, `copper`, `teal`, `ink`,
 * `bg-g-*`…) ya no existen. Está en el historial de git.
 *
 * Las fuentes se cargan con next/font en el layout y se exponen como
 * variables CSS: --font-jakarta (titulares) y --font-inter (texto).
 */
const plugin = require('tailwindcss/plugin');

/* ══ REGISTRO — los tokens de DESIGN.md ═════════════════════════════════
   Una sola fuente: de aquí salen las clases de Tailwind Y las variables CSS
   (`--papel`, `--tinta-honda`, `--cobre`, `--sombra-hoja`,
   `--degradado-marino`…) que escribe el plugin del final.
   Si un valor cambia en DESIGN.md, cambia aquí y en ningún otro sitio. */
const REGISTRO = {
  colores: {
    // `claro` es el suelo de las ventanas de muestra y el arranque de las
    // cabeceras de página: un escalón de luz por encima del papel.
    papel: { DEFAULT: '#F3F1ED', hondo: '#EDEAE3', claro: '#F8F6F2' },
    blanco: '#FFFFFF',
    // `viva` es el marino con más azul: la luz de arriba de la noche y el
    // tinte del velo de la portada. Nunca es color de texto.
    tinta: { DEFAULT: '#141F3A', honda: '#0B1122', suave: '#4E5870', viva: '#18264C' },
    gris: '#5A6375',
    // Filetes y trazos. Solo es texto sobre fondo oscuro.
    piedra: '#B9B1A7',
    linea: { DEFAULT: '#DDD8D0', fina: '#E8E4DC' },
    // El único acento. `honda` es el relleno de «Agendar» y de nada más.
    // `tinte` es el fondo de lo que pide atención dentro de una ventana.
    cobre: { DEFAULT: '#C9784A', honda: '#A85A2E', presion: '#8F4A22', claro: '#DD9268', tinte: '#FBEFE6' },
    // Solo dentro del tablero de KLINODA. Nunca fuera de él.
    klinoda: {
      acento: '#1868E8',
      'acento-oscuro': '#0B47B0',
      'acento-claro': '#8DB8F8',
      'acento-tinte': '#EAF2FE',
      tinta: '#0A1F33',
      'tinta-suave': '#5C748C',
      filete: '#E1EBF6',
      fondo: '#F4F8FE',
      exito: '#0B7D57',
      'exito-tinte': '#E7F7F1',
      atencion: '#9C5C05',
      'atencion-tinte': '#FDF3E3',
    },
  },

  /* EL TEMA. Lo único que cambia cuando la página se hace de noche. De día
     valen lo que dice aquí; durante la noche los reescribe el guion en cada
     fotograma sin bajar de 4,5:1. Las interfaces de muestra NO los usan: son
     papel blanco en los dos temas (The Paper-Sheet Rule). Como son
     variables, estas clases no admiten el modificador de opacidad (`/50`). */
  tema: {
    '--suelo': 'var(--papel)',
    '--suelo-alto': 'var(--blanco)',
    '--suelo-hondo': 'var(--papel-hondo)',
    '--tx-1': 'var(--tinta)',
    '--tx-2': 'var(--tinta-suave)',
    '--tx-3': 'var(--gris)',
    '--tx-inverso': 'var(--blanco)',
    '--filete': 'var(--linea)',
    '--filete-fuerte': 'var(--tinta)',
  },

  /* LA LETRA. El tamaño trae su interlínea, espaciado y peso. La familia va
     aparte: `font-display` (Plus Jakarta Sans) con display, cifra, headline,
     title y button; `font-sans` (Inter) con body y label. `cifra` pide además
     `tabular-nums`, y `label`, `uppercase`. */
  letra: {
    display: ['clamp(2.15rem, 4.7vw, 4.1rem)', { lineHeight: '1.03', letterSpacing: '-0.036em', fontWeight: '500' }],
    cifra: ['clamp(3.6rem, 6.6vw, 6.25rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '300' }],
    headline: ['clamp(2.2rem, 3.2vw, 2.9rem)', { lineHeight: '1.04', letterSpacing: '-0.036em', fontWeight: '800' }],
    title: ['clamp(1.6rem, 2.6vw, 2.3rem)', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '800' }],
    body: ['16px', { lineHeight: '1.55', fontWeight: '400' }],
    label: ['11.5px', { lineHeight: '1.3', letterSpacing: '0.14em', fontWeight: '700' }],
    button: ['0.95rem', { lineHeight: '1.2', fontWeight: '700' }],
  },

  // Esquinas de papel cortado. Sustituyen a los radios por defecto de Tailwind.
  radios: { sm: '2px', md: '3px', lg: '5px', xl: '6px' },

  espacio: {
    cabecera: '72px', // el mismo valor que CABECERA en hooks/useDarkSection.js
    canal: '32px',
    'canal-movil': '20px',
    'sangria-escena': '56px',
    seccion: '88px',
    'seccion-movil': '52px',
  },
  marco: '1240px',

  // Solo se levanta lo que se «pone encima» (The Flat-By-Default Rule).
  // Siempre con desplazamiento y en capas: contacto, cercanía y caída.
  sombras: {
    hoja: '0 1px 2px rgba(20,31,58,.06), 0 10px 20px -12px rgba(20,31,58,.2), 0 36px 70px -38px rgba(20,31,58,.55)',
    'hoja-noche': '0 2px 6px rgba(0,0,0,.2), 0 48px 90px -48px rgba(0,0,0,.7)',
    conversion: 'inset 0 1px 0 rgba(255,255,255,.2), 0 2px 3px rgba(11,17,34,.16), 0 14px 28px -18px rgba(168,90,46,.85)',
    'conversion-alta': 'inset 0 1px 0 rgba(255,255,255,.16), 0 3px 6px rgba(11,17,34,.2), 0 22px 38px -20px rgba(168,90,46,.95)',
  },

  /* LOS DEGRADADOS (The Tonal Gradient Rule). Todos son de un mismo tono a
     otro más hondo: dan cuerpo y luz, nunca cambian de color. Ninguno va en
     texto.
     · marino     → las bandas de noche, de marino vivo a marino hondo.
     · cierre     → la banda de cierre, que termina donde empieza el pie.
     · conversion → el relleno de «Agendar»: cobre con la luz arriba. El tono
                    más claro da 4,7:1 con la letra blanca.
     · cobre      → el trazo del dato y la regla de progreso, de apagado a
                    encendido. */
  degradados: {
    marino: 'linear-gradient(180deg, #18264C 0%, #141F3A 44%, #101A33 100%)',
    cierre: 'linear-gradient(180deg, #141F3A 0%, #101A33 55%, #0B1122 100%)',
    conversion: 'linear-gradient(180deg, #AE5E30 0%, #9E5429 100%)',
    'conversion-presion': 'linear-gradient(180deg, #96501F 0%, #874519 100%)',
    cobre: 'linear-gradient(90deg, #A85A2E 0%, #C9784A 60%, #DD9268 100%)',
  },

  /* Las curvas de DESIGN.md para las transiciones de CSS (estados al apuntar).
     En GSAP se usan sus nombres propios, en lib/animations.js (`CURVA`).
     `llegar` es exacta; `cruzar` y `salir` son el equivalente cúbico de
     power3.inOut y power2.in. */
  curvas: {
    llegar: 'cubic-bezier(.16,1,.3,1)',
    cruzar: 'cubic-bezier(.76,0,.24,1)',
    salir: 'cubic-bezier(.32,0,.67,0)',
  },
};

/** { hoja: '…' } → { '--sombra-hoja': '…' } */
const conPrefijo = (valores, prefijo) =>
  Object.fromEntries(Object.entries(valores).map(([nombre, valor]) => [`--${prefijo}-${nombre}`, valor]));

/** { papel: { DEFAULT, hondo } } → { '--papel': …, '--papel-hondo': … } */
function variables(colores, prefijo = '') {
  return Object.entries(colores).reduce((vars, [nombre, valor]) => {
    const base = nombre === 'DEFAULT' ? prefijo : prefijo ? `${prefijo}-${nombre}` : nombre;
    if (typeof valor === 'string') return { ...vars, [`--${base}`]: valor };
    return { ...vars, ...variables(valor, base) };
  }, {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mjs}'],
  theme: {
    extend: {
      colors: {
        // ── REGISTRO (DESIGN.md) ──────────────────────────────────────
        ...REGISTRO.colores,
        suelo: { DEFAULT: 'var(--suelo)', alto: 'var(--suelo-alto)', hondo: 'var(--suelo-hondo)' },
        tx: { 1: 'var(--tx-1)', 2: 'var(--tx-2)', 3: 'var(--tx-3)', inverso: 'var(--tx-inverso)' },
        filete: { DEFAULT: 'var(--filete)', fuerte: 'var(--filete-fuerte)' },
      },
      fontFamily: {
        // Plus Jakarta Sans (titulares) + Inter (texto), elegidas el 3-sep-2026.
        // Plus Jakarta es también la familia de KLINODA: firma y producto
        // quedan emparentados. Las variables las define next/font en el layout.
        display: ['var(--font-jakarta)', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        ...REGISTRO.letra,
      },
      // `sm`, `md`, `lg` y `xl` pasan a ser los del registro (2, 3, 5 y 6 px).
      borderRadius: REGISTRO.radios,
      spacing: REGISTRO.espacio,
      maxWidth: { marco: REGISTRO.marco },
      boxShadow: REGISTRO.sombras,
      backgroundImage: REGISTRO.degradados,
      transitionTimingFunction: REGISTRO.curvas,
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      // Las variables CSS del registro, para el CSS escrito a mano y para GSAP.
      addBase({
        ':root': {
          ...variables(REGISTRO.colores),
          ...conPrefijo(REGISTRO.sombras, 'sombra'),
          ...conPrefijo(REGISTRO.degradados, 'degradado'),
          ...REGISTRO.tema,
          '--curva': REGISTRO.curvas.llegar,
          '--cabecera': REGISTRO.espacio.cabecera,
        },
      });

      /* La rejilla: el marco de 1240 px con sus canales, y el aire de cada
         sección. Los cortes son los de DESIGN.md («Layout»). */
      addComponents({
        '.marco': {
          maxWidth: REGISTRO.marco,
          marginInline: 'auto',
          paddingInline: REGISTRO.espacio.canal,
          '@media (max-width: 620px)': { paddingInline: REGISTRO.espacio['canal-movil'] },
        },
        '.seccion': {
          paddingBlock: REGISTRO.espacio.seccion,
          '@media (max-width: 1100px)': { paddingBlock: '64px' },
          '@media (max-width: 620px)': { paddingBlock: REGISTRO.espacio['seccion-movil'] },
        },
      });
    }),
  ],
};
