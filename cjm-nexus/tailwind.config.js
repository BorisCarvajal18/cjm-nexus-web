/**
 * Configuración de Tailwind — CJM Nexus (CommonJS para Next.js).
 * Tokens de la identidad visual (estilo de referencia: MVP Match)
 * y modo claro/oscuro mediante la clase `dark`.
 *
 * Las fuentes se cargan con next/font (layout) y se exponen como variables
 * CSS: --font-space-grotesk (display) y --font-inter (cuerpo).
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,mjs}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem' },
    },
    extend: {
      colors: {
        // Azul marino profundo — fondos del modo oscuro y secciones oscuras
        navy: { DEFAULT: '#0B1437', light: '#121D4F', dark: '#070D26' },
        // Índigo acento — botones, links y palabras clave
        indigo: { DEFAULT: '#4F46E5', light: '#6366F1', dark: '#4338CA' },
        // Gris azulado suave — tarjetas y bordes
        softblue: '#E4E7F2',
        // Blanco humo — fondo del modo claro
        smoke: '#F5F6FA',
        // Texto principal (+ variantes para texto secundario)
        slate: { DEFAULT: '#1E2340', light: '#3C4368', muted: '#666D93' },
        // Extremos del degradado decorativo azul→lavanda
        lavender: '#8B8FE8',
        iris: '#5B5FD6',
      },
      fontFamily: {
        // Display geométrica para títulos · Inter para el cuerpo
        // (se cargan por Google Fonts <link> en el layout)
        display: ['"Space Grotesk"', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        // Utilidad lista para el degradado de marca: `bg-nexus-gradient`
        'nexus-gradient': 'linear-gradient(135deg, #8B8FE8 0%, #5B5FD6 100%)',
      },
      boxShadow: {
        card: '0 12px 40px -12px rgba(11, 20, 55, 0.12)',
        'card-dark': '0 12px 40px -12px rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
