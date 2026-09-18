# CJM Nexus — Web corporativa

Web de **CJM Nexus** · _Connecting Finance. Technology. Global Growth._
Dirección financiera externa y software a medida, en una misma firma.

La ley del diseño está en la raíz del repositorio: `DESIGN.md` (el sistema,
«El registro de la firma») y `PRODUCT.md` (a quién le habla, qué se puede
afirmar y las reglas de contenido que no se negocian). El estado del trabajo,
en `.impeccable/CONSTRUCCION.md`.

## Stack

- **Next.js 14 (App Router)** con generación estática (SSG): el HTML servido
  ya trae todos los textos, títulos y enlaces.
- React 18 y Tailwind CSS. Los tokens del sistema viven en el bloque
  `REGISTRO` de `tailwind.config.js`, que además los escribe como variables
  CSS (`--papel`, `--tinta`, `--cobre`, `--sombra-hoja`, `--degradado-marino`…).
- **GSAP + ScrollTrigger** para las dos escenas fijadas de la portada, la
  noche y las entradas. Con «reducir movimiento» no se anima nada.
- Sin librería de gráficos ni de iconos: los gráficos de las interfaces de
  muestra son SVG calculado (`src/lib/graficos.js`) y los iconos, un juego
  propio (`src/components/registro/Icono.jsx`).
- Trilingüe por URL (`/es`, `/en`, `/de`). Hoy solo existe el español
  escrito; `/en` y `/de` sirven el contenido español a la espera de las
  traducciones.

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción (genera /es, /en y /de estáticos)
npm run start    # servir el build de producción
npm run lint     # ESLint
```

Si un segundo `npm run build` seguido falla con `EINVAL: readlink … .next`, es
OneDrive bloqueando la carpeta, no el código: se borra `.next` y se repite.

## URLs

- `/` → redirige al idioma preferido del navegador (por defecto `/es`)
- `/es`, `/es/servicios`, `/es/servicios/direccion-financiera`,
  `/es/servicios/soluciones-digitales` y `/es/klinoda` (y lo mismo en `/en` y `/de`)
- `/robots.txt` y `/sitemap.xml` → generados automáticamente
- `/api/brochure` → aviso por correo de cada descarga del brochure (`.env.example`)

## Estructura

```
src/
├── app/
│   ├── [lang]/          # layout (<html lang>, metadatos, fuentes) y las cinco páginas
│   ├── estilos/         # el CSS del registro, una hoja por sección:
│   │                    #   base · portada · credenciales · que-hacemos ·
│   │                    #   cuadros · klinoda · cierre · paginas
│   ├── globals.css      # Tailwind y la base del documento (foco, selección…)
│   ├── api/brochure/    # aviso de descargas
│   ├── robots.js · sitemap.js
├── blocks/
│   ├── registro/        # las secciones de la portada: Portada, Credenciales,
│   │                    #   QueHacemos, PuertaKlinoda, Cierre y Noche
│   └── pages/           # los bloques de las páginas interiores
├── components/
│   ├── registro/        # Icono, Flecha, Ventana y las dos interfaces de muestra
│   ├── mockups/         # las hojas de las páginas interiores
│   └── SiteHeader · SiteFooter
├── content/             # TODOS los textos visibles, por página (`*.es.js`)
├── lib/                 # animations (escenas), registro (entradas), graficos,
│                        #   surface (color de la cabecera), seo, site, gsap
├── hooks/ · i18n/ · middleware.js
public/
├── marca/               # logotipos generados con `scripts/marca.mjs` (ver LEEME.md)
└── portada/             # vídeo y póster de la portada
```

## Reglas del proyecto

- **Ningún texto visible va quemado en los componentes.** Todo sale de
  `src/content/*.js`: es lo que permite aprobar los textos leyendo un archivo.
- **Color, letra, radios, sombras y degradados, solo por token** (`REGISTRO`).
  Si un valor cambia en DESIGN.md, cambia ahí y en ningún otro sitio.
- **El cobre relleno es solo de «Agendar».** Cualquier otra acción es un botón
  de contorno.
- **Las interfaces de muestra no enseñan nada clínico ni nombres de persona**,
  ni siquiera inventados, y llevan debajo «Interfaz de muestra · datos
  ilustrativos» (PRODUCT.md).
- Todo enlace interno lleva el idioma delante (`navLinks(lang)` en `src/lib/site.js`).
- La URL canónica se define en `src/lib/site.js` (`SITE_URL`).
