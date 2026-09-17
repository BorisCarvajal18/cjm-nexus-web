/**
 * Sistema de diseño de CJM Nexus.
 *
 * ── DOS SISTEMAS CONVIVEN MIENTRAS DURA LA CONSTRUCCIÓN ─────────────────
 *
 * 1. «EL REGISTRO DE LA FIRMA», el vigente. Es la ley: DESIGN.md en la raíz
 *    del repositorio, extraído de la portada aprobada el 13 de septiembre de
 *    2026. Sus tokens llevan nombre en español y viven en el bloque
 *    `REGISTRO` de abajo: colores (`papel`, `tinta`, `cobre`…), letra
 *    (`text-display`, `text-cifra`…), radios, espaciado y sombras. Toda
 *    sección nueva usa SOLO estos.
 *
 * 2. «PULSO COBRE», el anterior (3 de septiembre). Sus tokens en inglés
 *    (`navy`, `copper`, `teal`, `ink`, `bg-g-*`…) siguen aquí únicamente
 *    porque las páginas actuales los usan. Cada uno se borra cuando la última
 *    sección que lo usa se reconstruya. Ver .impeccable/CONSTRUCCION.md.
 *
 * Lo que sigue es el comentario del sistema anterior, tal como estaba.
 *
 * ────────────────────────────────────────────────────────────────────────
 *
 * LOS COLORES SALEN DE LA REFERENCIA DEL CLIENTE, no de una plantilla:
 * azul marino, cobre y gris cálido sobre blanco roto. El verde azulado es
 * el cuarto color, tomado de la marca KLINODA, y sirve para emparentar
 * visualmente la línea de tecnología con el producto.
 *
 * CADA COLOR VIVE EN UN GRADIENTE. Es la petición explícita del cliente y la
 * regla que más distingue este sistema: los fondos, los botones y los títulos
 * destacados usan `bg-g-*`, no un tono plano.
 *
 * REPARTO DE COLOR (no decorativo, cada uno significa algo):
 *   marino  → institucional, fondos oscuros, dirección financiera
 *   cobre   → todo lo que se puede pulsar, acentos, línea financiera
 *   verde   → línea digital, KLINODA, estados correctos
 *   piedra  → superficies y bandas de descanso
 *
 * NO HAY MODO OSCURO: se retiró en el rediseño (duplicaba la superficie de
 * diseño sin que nadie lo pidiera). El sitio es claro y punto.
 *
 * Las fuentes se cargan con next/font en el layout y se exponen como
 * variables CSS: --font-syne (títulos) y --font-manrope (texto).
 */
const plugin = require('tailwindcss/plugin');

/* ══ REGISTRO — los tokens de DESIGN.md ═════════════════════════════════
   Una sola fuente: de aquí salen las clases de Tailwind Y las variables CSS
   (`--papel`, `--tinta-honda`, `--cobre`…) que escribe el plugin del final.
   Si un valor cambia en DESIGN.md, cambia aquí y en ningún otro sitio. */
const REGISTRO = {
  colores: {
    papel: { DEFAULT: '#F3F1ED', hondo: '#EDEAE3' },
    blanco: '#FFFFFF',
    tinta: { DEFAULT: '#141F3A', honda: '#0B1122', suave: '#4E5870' },
    gris: '#5A6375',
    // Filetes y trazos. Solo es texto sobre fondo oscuro.
    piedra: '#B9B1A7',
    linea: { DEFAULT: '#DDD8D0', fina: '#E8E4DC' },
    // El único acento. `honda` es el relleno de «Agendar» y de nada más.
    cobre: { DEFAULT: '#C9784A', honda: '#A85A2E', presion: '#8F4A22', claro: '#DD9268' },
    // Solo dentro del tablero de KLINODA. Nunca fuera de él.
    klinoda: {
      acento: '#1868E8',
      'acento-oscuro': '#0B47B0',
      tinta: '#0A1F33',
      fondo: '#F4F8FE',
      exito: '#0B7D57',
      atencion: '#9C5C05',
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
  sombras: {
    hoja: '0 1px 2px rgba(20,31,58,.05), 0 28px 56px -34px rgba(20,31,58,.55)',
    'hoja-noche': '0 2px 6px rgba(0,0,0,.2), 0 48px 90px -48px rgba(0,0,0,.7)',
    conversion: '0 2px 3px rgba(11,17,34,.16), 0 14px 28px -18px rgba(168,90,46,.85)',
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
  // Heredado: la portada vieja aún lleva variantes `dark:`. Se retira en la
  // fase 03 — el sitio nuevo es claro y no tiene interruptor de tema.
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        // ── REGISTRO (DESIGN.md) ──────────────────────────────────────
        ...REGISTRO.colores,
        suelo: { DEFAULT: 'var(--suelo)', alto: 'var(--suelo-alto)', hondo: 'var(--suelo-hondo)' },
        tx: { 1: 'var(--tx-1)', 2: 'var(--tx-2)', 3: 'var(--tx-3)', inverso: 'var(--tx-inverso)' },
        filete: { DEFAULT: 'var(--filete)', fuerte: 'var(--filete-fuerte)' },

        // ── PULSO COBRE (anterior) ────────────────────────────────────
        // Azul marino — la voz institucional
        navy: { DEFAULT: '#1E2D4F', deep: '#141F3A', light: '#3B4E7A' },
        // Cobre — la acción
        copper: { DEFAULT: '#C9784A', deep: '#A85A2E', light: '#E8B48A' },
        // Verde azulado — tecnología y KLINODA
        teal: { DEFAULT: '#1F6F7A', light: '#45B3A8' },
        // Gris cálido — superficies
        stone: { DEFAULT: '#B9B1A7', light: '#E9E5DF' },
        // Fondos
        canvas: '#F3F1ED',
        surface: { DEFAULT: '#FFFFFF', muted: '#FAF8F5' },
        // Tinta (texto)
        ink: { DEFAULT: '#1A2238', soft: '#4E5870', muted: '#8B92A3' },
        hairline: '#E3DFD8',

        // ── HEREDADOS DEL SITIO ANTERIOR ──────────────────────────────
        // Solo para que la portada vieja siga viéndose mientras se construye
        // la nueva y se puedan comparar en la misma vista previa.
        // SE BORRAN en la fase 03, junto con src/sections/ y los componentes
        // que ya no se usen.
        indigo: { DEFAULT: '#4F46E5', light: '#6366F1', dark: '#4338CA' },
        softblue: '#E4E7F2',
        smoke: '#F5F6FA',
        slate: { DEFAULT: '#1E2340', light: '#3C4368', muted: '#666D93' },
        lavender: '#8B8FE8',
        iris: '#5B5FD6',
      },
      backgroundImage: {
        'g-navy': 'linear-gradient(135deg, #141F3A 0%, #3B4E7A 100%)',
        'g-copper': 'linear-gradient(110deg, #A85A2E 0%, #E8B48A 100%)',
        'g-teal': 'linear-gradient(110deg, #1F6F7A 0%, #45B3A8 100%)',
        'g-stone': 'linear-gradient(135deg, #B9B1A7 0%, #E9E5DF 100%)',
        // La marca: el «nexo» entre las dos disciplinas
        'g-brand': 'linear-gradient(110deg, #1E2D4F 0%, #3B4E7A 45%, #C9784A 100%)',
        // Los cuatro colores. Reservado al hero y a los cierres: si se usa en
        // todas partes deja de significar nada.
        'g-spectrum':
          'linear-gradient(110deg, #141F3A 0%, #1F6F7A 35%, #3B4E7A 60%, #C9784A 100%)',
        // Heredado (se borra en la fase 03)
        'nexus-gradient': 'linear-gradient(135deg, #8B8FE8 0%, #5B5FD6 100%)',
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
        // Pulso Cobre. Escala contenida: el cliente rechazó expresamente los títulos enormes.
        eyebrow: ['0.68rem', { lineHeight: '1.4', letterSpacing: '0.18em', fontWeight: '800' }],
        'display-lg': ['clamp(2.1rem, 4.6vw, 3.9rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.7rem, 3.2vw, 2.7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.4rem, 2.4vw, 1.9rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      // `sm`, `md`, `lg` y `xl` pasan a ser los del registro (2, 3, 5 y 6 px).
      borderRadius: { ...REGISTRO.radios, xl2: '1.25rem', xl3: '1.75rem', xl4: '2.25rem', '4xl': '2rem' },
      spacing: REGISTRO.espacio,
      maxWidth: { marco: REGISTRO.marco },
      boxShadow: {
        ...REGISTRO.sombras,
        // Pulso Cobre
        soft: '0 1px 2px rgba(26,34,56,.05), 0 12px 32px -20px rgba(26,34,56,.25)',
        lift: '0 20px 50px -30px rgba(26,34,56,.35)',
        deep: '0 60px 140px -50px rgba(20,31,58,.7)',
        copper: '0 16px 36px -14px rgba(168,90,46,.7)',
        // Heredadas (se borran en la fase 03)
        card: '0 12px 40px -12px rgba(11, 20, 55, 0.12)',
        'card-dark': '0 12px 40px -12px rgba(0, 0, 0, 0.45)',
      },
      transitionTimingFunction: { ...REGISTRO.curvas, out: 'cubic-bezier(.2,.7,.2,1)' },
      keyframes: {
        // Único movimiento continuo permitido fuera de GSAP: la pista del hero.
        drop: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: { drop: 'drop 1.8s ease-in-out infinite' },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      // Las variables CSS del registro, para el CSS escrito a mano y para GSAP.
      addBase({
        ':root': {
          ...variables(REGISTRO.colores),
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
