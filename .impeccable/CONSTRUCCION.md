# Construcción del rediseño — estado

**Cada sesión empieza leyendo este archivo** y lo actualiza al terminar. Lo que viaja entre
conversaciones son los archivos, no la memoria del chat.

Orden de lectura para retomar:

1. Este archivo.
2. `DESIGN.md` y `PRODUCT.md` (raíz): la ley.
3. `.impeccable/mocks/portada/PLAN.md`, sobre todo «Para pasarlo al sitio».
4. `.impeccable/mocks/portada/C-fusion.html`: la portada aprobada, la referencia visual.

Regla de trabajo: **una pieza por sesión**. Cada una se construye, se verifica, se hace commit y
se para para que Boris la revise.

## Piezas

| # | Pieza | Estado | Notas |
|---|---|---|---|
| 0 | Ordenar los archivos sin commit | ✅ Hecha · 2026-09-17 | Ver la nota de la sesión |
| 1 | Base del sistema: color, letra, espaciado y constantes de movimiento | ✅ Hecha · 2026-09-17 | Ver «Cómo se usa la base» |
| 2 | Cabecera | Pendiente | Tres estados como `SiteHeader` (transparente sobre la portada, papel al bajar, marino hondo sobre oscuro). Isotipo claro ya en `public/marca/`. Menú fuera bajo 1000 px e idiomas fuera bajo 620 px |
| 3 | Portada | Pendiente | Vídeo: `hero.webm`, `hero.mp4` y `hero-poster.jpg` de `mocks/portada/img/` a `public/`, y el `<video>` en `Hero.jsx`. El titular entra palabra a palabra desde su máscara y la imagen pasa de 1,05 a 1. **Texto abierto:** la entrada atribuye los quince años a la firma (PLAN.md, ronda 5 §2) |
| 4 | Credenciales | Pendiente | 15+, 100+ y 3, con atribución a Richard por su nombre. Las notas y la frase de los tres nombres son **texto propuesto sin aprobar** |
| 5 | Escena de los tableros («Qué hacemos») | Pendiente | Un preset nuevo en `lib/animations.js` con `CONSULTA_ESCENAS`, `ESCENA.tableros` y `AJUSTE_AL_SOLTAR`. Se fija 3,1 pantallas y la letra se ajusta con `--k` |
| 6 | La noche | Pendiente | Las variables de tema (`--suelo`, `--tx-*`, `--filete*`) ya existen. Falta la capa fija, el disparador que llama a `marcarOscuro()` y el paso corto del 50 al 59 % |
| 7 | Escena de KLINODA | Pendiente | 2,1 pantallas. Poner al día `privacy.mockup` en `klinoda.es.js` con las etiquetas reales («APTO», «APTO EN OBSERVACIÓN», «PERIÓDICO»…) |
| 8 | Cierre y pie | Pendiente | El titular y los tres bloques del cierre son **texto propuesto sin aprobar** (PLAN.md, ronda 2 §7) |
| 9 | Páginas de servicios y de KLINODA al sistema nuevo | Pendiente | Hoy siguen con «Pulso Cobre» |
| 10 | **Reescribir el texto de KLINODA con la decisión del ICP** | Pendiente · sesión propia | Ver abajo |
| 11 | Retirar «Pulso Cobre» | Pendiente | Tokens en inglés de `tailwind.config.js` (`navy`, `copper`, `teal`, `ink`, `bg-g-*`, los heredados `indigo`/`slate`…) y los presets antiguos de `lib/animations.js`, cuando ya nada los use. `CalendlyButton.jsx` todavía usa `indigo` |

### Pieza 10 — el texto de KLINODA contradice la decisión del 2026-09-15

PRODUCT.md, regla 7: el cliente es **la empresa empleadora**. Los usuarios son su parte
administrativa y sus médicos ocupacionales, y el médico es además el **canal de venta**. No se
vende al médico como cliente. Hoy el texto dice lo contrario en cuatro sitios:

| Archivo | Línea | Qué dice hoy |
|---|---|---|
| `cjm-nexus/src/content/home.es.js` | 96 | «KLINODA es nuestra plataforma para médicos ocupacionales en Ecuador…» |
| `cjm-nexus/src/content/klinoda.es.js` | 35 | Meta descripción: «una plataforma para médicos ocupacionales en Ecuador…» |
| `cjm-nexus/src/content/klinoda.es.js` | 42 | Entrada: «Nuestra plataforma para médicos ocupacionales en Ecuador…» |
| `cjm-nexus/src/content/klinoda.es.js` | 183 | «Tiene sentido si: Eres médico ocupacional y hoy resuelves las evaluaciones…» |

Por qué va en una sesión propia: la página necesita **dos mensajes distintos**. A la empresa,
cumplimiento legal y tranquilidad. Al médico, una herramienta que le facilita el trabajo y que
puede recomendar. Mientras Boris no lo decida, **no se toca** cómo la web nombra la relación entre
CJM Nexus y KLINODA («producto propio», «la prueba de lo que construimos»). Los números de línea
son del 2026-09-17: compruébalos antes de editar.

## Cómo se usa la base (pieza 1)

Una sola fuente: el bloque `REGISTRO` de `cjm-nexus/tailwind.config.js`. De ahí salen las clases
y también las variables CSS.

- **Color:** `papel`, `papel-hondo`, `blanco`, `tinta`, `tinta-honda`, `tinta-suave`, `gris`,
  `piedra`, `linea`, `linea-fina`, `cobre`, `cobre-honda`, `cobre-presion`, `cobre-claro` y
  `klinoda-*` (solo dentro de su tablero).
  - Tema (cambia de noche): `bg-suelo`, `bg-suelo-alto`, `text-tx-1/2/3`, `text-tx-inverso`,
    `border-filete`, `border-filete-fuerte`. Son variables, así que no admiten `/opacidad`.
  - Las mismas en CSS: `var(--papel)`, `var(--tinta-honda)`, `var(--suelo)`…
- **Letra:** `text-display`, `text-cifra`, `text-headline`, `text-title`, `text-body`,
  `text-label` y `text-button` traen tamaño, interlínea, espaciado y peso. La familia va aparte:
  `font-display` o `font-sans`. `text-cifra` se usa con `tabular-nums`, y `text-label` con
  `uppercase`. Plus Jakarta Sans ya carga el peso 300.
- **Radios:** `rounded-sm` 2 px, `rounded-md` 3 px, `rounded-lg` 5 px y `rounded-xl` 6 px
  (sustituyen a los de Tailwind).
- **Espaciado:** clases `.marco` (1240 px con canales de 32 px, y 20 px bajo 620) y `.seccion`
  (88 px arriba y abajo, 64 bajo 1100 y 52 bajo 620). Tokens `h-cabecera`, `px-canal`,
  `sangria-escena`, `max-w-marco`… y la variable `--cabecera`.
- **Sombras:** `shadow-hoja`, `shadow-hoja-noche`, `shadow-conversion`.
- **Curvas en CSS:** `ease-llegar` (= `--curva`), `ease-cruzar`, `ease-salir`.
- **Movimiento en GSAP** (`cjm-nexus/src/lib/animations.js`, bloque «EL REGISTRO»): `CURVA`,
  `SALIDA`, `DURACION`, `PANTALLAS`, `SCRUB`, `ESCENA`, `AJUSTE_AL_SOLTAR`, `UMBRAL_ESCENAS`,
  `CONSULTA_ESCENAS` (para `gsap.matchMedia`), `ESCALA_ALTO` y `fijaEscenas()`.
- **Global** (`globals.css`): el cuerpo en papel y tinta a 16 px / 1,55. El foco es un contorno
  cobre de 2 px separado 3 px. Con «reducir movimiento», transiciones instantáneas y ninguna
  animación CSS.

## Detalles conocidos, sin arreglar

- **Contraste del foco.** El contorno cobre `#C9784A` sobre papel da unos 2,97:1, justo por debajo
  del 3:1 de contraste no textual. Ya pasaba con el anillo anterior, que era del mismo color, y es
  el valor que fija DESIGN.md. Hay que decidirlo al construir la cabecera: `cobre-honda` daría más
  de 4,5:1.
- **OneDrive y `.next`.** Un segundo `npm run build` seguido puede fallar con `EINVAL: readlink …
  .next\…`. Es OneDrive bloqueando la carpeta, no el código: se borra `cjm-nexus/.next` y se
  vuelve a compilar.
- **Verificar con el panel del navegador oculto.** Con el panel oculto, el navegador pausa los
  fotogramas y las entradas de GSAP se quedan en su estado de partida: el texto sale atenuado en
  la captura. Hacer una captura pequeña, esperar 3 s y repetir: cada captura fuerza un fotograma.
- **Los 21 archivos del sitio anterior borrados hoy** reaparecieron sin commit, idénticos a lo que
  ya se había borrado. Lo más probable es que fuera OneDrive restaurándolos. Si vuelven, esa es la
  causa, y siguen en el historial de git.

## Pendientes fuera de estas piezas

Isotipo vectorial de una tinta · material de vídeo propio · traducciones EN/DE · imágenes Open
Graph con el titular nuevo · páginas legales · página «Nosotros» · confirmaciones de Richard
(`cjm-nexus/docs/preguntas-richard.md`).

---

## Registro de sesiones

### 2026-09-17 — ordenar y pieza 1

**Commits:**

1. `docs(product)`: la regla 7 de PRODUCT.md recoge la decisión del ICP del 2026-09-15 y anota
   lo que decía antes. Se corrigen también las líneas 43 y 62: KLINODA S.A.S. es la parte que
   firma los contratos.
2. `chore`: se versionan `.claude/skills/`, `skills-lock.json` y `.impeccable/config.json`.
   `.claude/launch.json` sigue sin versionar.
3. `feat(sistema)`: la pieza 1, con `scripts/marca.mjs`, el isotipo claro y su fila en `LEEME.md`.

**Borrado, con la aprobación de Boris:** 22 restos sin importar.

- 19 del sitio anterior que se había retirado en la fase 03 (`0e471f2`): `providers.jsx`, 10
  componentes, `useScrolled`, `useTheme`, `I18nProvider`, `dictionaries`, `motion.js`,
  `locales/` y `sections/`.
- `DeliverableFrame.jsx` (borrado en `e09aa34`) y `ProjectsStrip.jsx` (borrado en `8b529fb`).
- `.digital.head`: las primeras 326 líneas de `servicios.es.js` en `83c0d55`.

Los 21 de código eran idénticos a su última versión en git.

**La pieza 1:**

- **`tailwind.config.js`:** bloque `REGISTRO`, un plugin que escribe las variables CSS, y
  `.marco` y `.seccion`. «Pulso Cobre» se conserva marcado como anterior.
- **`globals.css`:** cuerpo, foco y «reducir movimiento».
- **`layout.jsx`:** Plus Jakarta Sans con el peso 300.
- **`lib/animations.js`:** las constantes de movimiento.
- **`.claude/launch.json`:** configuración nueva `sitio` (`npm --prefix cjm-nexus run dev`, puerto
  3000). Se mantiene `maquetas-portada`.

**Verificación:**

- `npm run build` sin errores ni avisos, con 23 páginas estáticas.
- Las clases nuevas se comprobaron compilando un archivo de prueba.
- **Antes y después,** medido con los cambios apartados en `git stash`:
  - Ningún desbordamiento horizontal en `/es`, `/es/servicios`, `/es/klinoda` y las dos páginas
    de servicio, a 1280 px y a 375 px.
  - Ningún error del servidor. En la consola solo aparecen los fallos de conexión del momento en
    que se reinició el servidor.
  - Las páginas quedan entre 3 y 163 px más cortas. Es la interlínea heredada, que pasa de 1,625
    a 1,55 (el `body` de DESIGN.md). El texto que hereda del cuerpo pasa de 15 a 16 px.
  - `rounded-lg` pasa de 8 a 5 px en `PlatformCard` y en `/sistema`.
- **Capturas:** portada, servicios y KLINODA a 1280 y 375 px, con las entradas terminadas. No se
  ve nada roto.
