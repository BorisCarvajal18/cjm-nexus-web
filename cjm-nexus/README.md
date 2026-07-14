# CJM Nexus — Web corporativa

One-page corporativa de **CJM Nexus** · _Connecting Finance. Technology. Global Growth._

## Stack

- **Next.js 14 (App Router)** con generación estática (SSG) → el HTML servido
  ya trae todos los textos, títulos y enlaces (SEO).
- React 18
- Tailwind CSS (tokens de marca en `tailwind.config.js`, modo claro/oscuro con clase `dark`)
- Framer Motion (animaciones y microinteracciones)
- Recharts (dashboard de demostración)
- react-i18next (trilingüe: ES por defecto, EN, DE) — un idioma por URL

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción (genera /es, /en, /de estáticos)
npm run start    # servir el build de producción
```

## URLs

- `/` → redirige al idioma preferido del navegador (por defecto `/es`)
- `/es`, `/en`, `/de` → páginas reales indexables (una por idioma)
- `/robots.txt` y `/sitemap.xml` → generados automáticamente

## Estructura

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.jsx   # <html lang>, metadata (title/description/canonical/hreflang), fuentes, tema
│   │   └── page.jsx     # composición de las 9 secciones (one-page)
│   ├── providers.jsx    # i18n + MotionConfig + tema (contextos de cliente)
│   ├── globals.css      # estilos base + utilidades
│   ├── robots.js        # genera /robots.txt
│   └── sitemap.js       # genera /sitemap.xml
├── middleware.js        # redirección de "/" al idioma preferido
├── i18n/                # settings, diccionarios (server) y provider SSR
├── components/          # componentes reutilizables (CalendlyButton, Logo, …)
├── sections/            # las 9 secciones de la one-page, en orden
├── locales/             # es.json · en.json · de.json (todos los textos visibles)
├── hooks/               # hooks propios (useCalendly, useTheme, useScrolled)
├── lib/                 # datos del sitio (SITE_URL, contactos) y presets de animación
└── assets/              # recursos estáticos

public/
└── logo.png             # logo oficial (navbar, footer y favicon)
```

## Reglas del proyecto

- Ningún texto visible va "quemado" en los componentes: todo sale de `src/locales/*.json`.
- Colores solo mediante tokens: `navy`, `indigo`, `softblue`, `smoke`, `slate` (+ `lavender`/`iris` y `bg-nexus-gradient`).
- El botón "Diagnóstico Ejecutivo" siempre se implementa con `<CalendlyButton />`.
- Cada idioma es una URL real; el contenido se renderiza en servidor (SSR/SSG).
- La URL canónica del sitio se define en `src/lib/site.js` (`SITE_URL`).
```
