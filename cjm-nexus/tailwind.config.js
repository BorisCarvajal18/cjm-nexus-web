/**
 * Sistema de diseño de CJM Nexus — dirección «Pulso Cobre», aprobada el
 * 3 de septiembre de 2026.
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
 *
 * @type {import('tailwindcss').Config}
 */
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
        // Escala contenida: el cliente rechazó expresamente los títulos enormes.
        eyebrow: ['0.68rem', { lineHeight: '1.4', letterSpacing: '0.18em', fontWeight: '800' }],
        'display-lg': ['clamp(2.1rem, 4.6vw, 3.9rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.7rem, 3.2vw, 2.7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.4rem, 2.4vw, 1.9rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      borderRadius: { xl2: '1.25rem', xl3: '1.75rem', xl4: '2.25rem', '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(26,34,56,.05), 0 12px 32px -20px rgba(26,34,56,.25)',
        lift: '0 20px 50px -30px rgba(26,34,56,.35)',
        deep: '0 60px 140px -50px rgba(20,31,58,.7)',
        copper: '0 16px 36px -14px rgba(168,90,46,.7)',
        // Heredadas (se borran en la fase 03)
        card: '0 12px 40px -12px rgba(11, 20, 55, 0.12)',
        'card-dark': '0 12px 40px -12px rgba(0, 0, 0, 0.45)',
      },
      transitionTimingFunction: { out: 'cubic-bezier(.2,.7,.2,1)' },
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
  plugins: [],
};
