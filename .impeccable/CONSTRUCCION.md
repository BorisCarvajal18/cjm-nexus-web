# Construcción del rediseño — estado

**Cada sesión empieza leyendo este archivo** y lo actualiza al terminar. Lo que viaja entre
conversaciones son los archivos, no la memoria del chat.

Orden de lectura para retomar:

1. Este archivo.
2. `DESIGN.md` y `PRODUCT.md` (raíz): la ley.
3. `.impeccable/mocks/portada/PLAN.md`, sobre todo «Para pasarlo al sitio».
4. `.impeccable/mocks/portada/C-fusion.html`: la portada aprobada, la referencia visual.

Regla de trabajo (desde el 2026-09-18): las piezas van **en su orden, una tras otra**. Cada una
se construye con `C-fusion.html` como referencia, se verifica (`npm run build` sin errores,
capturas a 1536 × 730 y 390 × 844, y con «reducir movimiento»), se hace commit y se marca aquí.
Solo se para si algo necesita una decisión de Boris que no esté en DESIGN.md ni en PRODUCT.md.
Las capturas de verificación van a `.impeccable/construccion/`.

## Piezas

| # | Pieza | Estado | Notas |
|---|---|---|---|
| 0 | Ordenar los archivos sin commit | ✅ Hecha · 2026-09-17 | Ver la nota de la sesión |
| 1 | Base del sistema: color, letra, espaciado y constantes de movimiento | ✅ Hecha · 2026-09-17 | Ver «Cómo se usa la base» |
| 2 | Cabecera | ✅ Hecha · 2026-09-18 | Ver el registro de la sesión. Tres estados como `SiteHeader` (transparente sobre la portada, papel al bajar, marino hondo sobre oscuro). Isotipo claro ya en `public/marca/`. Menú fuera bajo 1000 px e idiomas fuera bajo 620 px |
| 3 | Portada | ✅ Hecha · 2026-09-18 | Vídeo: `hero.webm`, `hero.mp4` y `hero-poster.jpg` de `mocks/portada/img/` a `public/`, y el `<video>` en `Hero.jsx`. El titular entra palabra a palabra desde su máscara y la imagen pasa de 1,05 a 1. **Texto abierto:** la entrada atribuye los quince años a la firma (PLAN.md, ronda 5 §2) |
| 4 | Credenciales | ✅ Hecha · 2026-09-18 | 15+, 100+ y 3, con atribución a Richard por su nombre. Las notas y la frase de los tres nombres son **texto propuesto sin aprobar** |
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

## Textos por aprobar

Textos que están en el sitio pero que PLAN.md marca como propuestos, o que se escribieron al
construir. Se usan igual; Boris los aprueba o los cambia leyendo esta lista.

| Pieza | Dónde (`cjm-nexus/src/content/`) | Texto | Por qué está aquí |
|---|---|---|---|
| 3 | `home.es.js` → `portada.entrada` y `meta.description` | «CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y desarrollo de software especializado…» | Propuesta de PLAN.md (ronda 5 §2). La maqueta atribuía los quince años a la firma, contra la regla 2 de PRODUCT.md |
| 4 | `home.es.js` → `credenciales.cifras[].quien` | Las tres notas: «La trayectoria de Richard Carvajal, fundador de la firma.», «Por Richard Carvajal, en Latinoamérica y Estados Unidos.», «Español, inglés y alemán, con equipo en Ecuador y Alemania.» | Propuestas en PLAN.md (ronda 5 §2) |
| 4 | `home.es.js` → `credenciales.firma` | «**Richard Carvajal** dirige las finanzas, **Boris Carvajal** la tecnología y **Mirella Llanga** la gerencia general.» | Propuesta en PLAN.md (ronda 5 §2) |

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

- ~~**Contraste del foco.**~~ Resuelto en la pieza 2: el contorno pasa a `cobre-honda` (4,5:1 sobre
  papel, 3,7:1 sobre marino hondo). DESIGN.md sigue diciendo «contorno cobre»; conviene poner al
  día esa línea cuando se revise el documento.
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

### 2026-09-18 — decisiones nuevas y pieza 2

**Antes de empezar:**

- `git push origin rediseno-2026`: los 6 commits que solo estaban en este equipo ya están en GitHub.
- PRODUCT.md, reglas 8 y 9: KLINODA es «Empresa del Grupo CJM Nexus» (nunca más «producto propio» ni
  «la prueba de lo que construimos»; falta que el abogado confirme la palabra «Grupo») y nunca
  «plataforma para médicos ocupacionales». La frase de DESIGN.md que decía «el producto propio» se
  ajustó.

**Pieza 2 — cabecera** (`components/SiteHeader.jsx`, textos en `content/sitio.es.js`):

- Los tres estados de la maqueta: transparente con letra blanca sobre zona oscura, papel con filete al
  bajar y marino hondo al bajar sobre zona oscura. Arriba de una página clara va transparente con letra
  tinta. El isotipo claro va con letra blanca y el original sobre papel.
- Menú en Inter 500 a 14,5 px con subrayado cobre que se traza al apuntar; la página actual lo lleva
  fijo (`aria-current`). Idiomas ES · EN · DE como enlaces reales a la misma página en otro idioma.
  Botón «Agendar · 20 min» en cobre hondo, 3 px, con la flecha que avanza 3 px.
- Bajo 1000 px sale el menú y bajo 620 px los idiomas y « · 20 min», como dice DESIGN.md.
- **Desviación a revisar:** la maqueta no tiene nada que sustituya al menú bajo 1000 px, y el teléfono se
  quedaría sin navegación (el caso principal, PRODUCT.md). Se conserva un botón de dos filetes que abre
  un panel de papel bajo la cabecera, con los enlaces y los idiomas. Escape lo cierra y devuelve el foco.
- **El menú no es el de la maqueta:** la maqueta dice «Servicios, Proyectos, Método, Nosotros,
  Contacto» con «Proyectos» sin destino. Se mantiene el menú del sitio, con «KLINODA» en lugar de
  «Proyectos», porque un enlace a ninguna parte es peor (principio 5 de PRODUCT.md).
- Foco en `cobre-honda` en todo el sitio (ver «Detalles conocidos»).
- La entrada escalonada de la cabecera (`.sec` en la maqueta) es parte de la entrada de la portada:
  va con la pieza 3.

**Verificación:** `npm run build` sin errores ni avisos. Capturas `p2-cabecera-*` a 1536 × 730 y
390 × 844, con y sin «reducir movimiento», arriba y a 600 px: papel con letra tinta al bajar, sin
desbordamiento horizontal, sin errores. En la portada, recorrida entera: transparente → papel →
marino hondo con isotipo claro sobre las zonas oscuras. Panel móvil: se abre, `aria-expanded`
cambia, Escape lo cierra y el foco vuelve al botón. El tabulador enseña el contorno cobre hondo.

**Pieza 3 — portada** (`blocks/registro/Portada.jsx`, estilos en `app/registro.css`, textos en
`home.es.js` → `portada`):

- Vídeo provisional de archivo (`public/portada/hero.webm`, `hero.mp4` y `hero-poster.jpg`) bajo el
  velo de cinco paradas. Sin `autoplay`: lo arranca el guion sin «reducir movimiento» ni ahorro de
  datos, y se pausa fuera de pantalla. Debajo, el primer fotograma respira de 1 a 1,06 en 24 s.
- La entrada: el titular palabra a palabra desde su máscara, la imagen de 1,05 a 1, la entrada, los
  botones y la nota escalonados, y la marca, el menú y los idiomas de la cabecera con ellos. La
  clase `.js-mov` la pone un guion en `<head>` (`layout.jsx`) antes del primer pintado, **solo en la
  portada** y sin «reducir movimiento»; seguro de 2,5 s.
- `registro.css` lleva también los botones del sistema: `.boton` (Agendar), `.boton-contorno` y
  `.enlace` con filete, más `components/registro/Flecha.jsx`.
- Fuera `blocks/Hero.jsx` y `blocks/HeroDiagram.jsx` (la esfera y su aurora), y `home.hero`. El JSON-LD
  de Organization toma ahora `portada.entrada`.
- El botón y «Ver qué hacemos» apuntan a `#contacto` y `#campos`, como en el sitio.

**Verificación:** build sin errores. Capturas `p3-portada-*`: a 1536 × 730 y 390 × 844 la portada mide
exactamente la ventana, el vídeo se reproduce con movimiento y con «reducir movimiento» queda el
póster quieto, sin `.js-mov` y con todo visible. La cabecera, blanca sobre la portada. El texto está en
el HTML servido.

**Pieza 4 — credenciales** (`blocks/registro/Credenciales.jsx`, textos en `home.es.js` →
`credenciales`, movimiento compartido en `lib/registro.js`):

- `lib/registro.js` trae las piezas de movimiento de la maqueta con sus nombres (`cuenta`,
  `fijaAncho`, `escalona`, `trazo`, `alAsomar` con el repintado de estados de partida tras cada
  recálculo) y el hook `useRegistro`, que monta un `gsap.matchMedia()` por sección y lo deshace al
  desmontar. Lo usarán las piezas 5 a 8.
- 15+, 100+ y 3 en Plus Jakarta Sans 300, con filetes verticales (horizontales bajo 760 px), su
  nota a nombre de Richard y la frase de la firma. El gesto de la maqueta: rayas que se trazan,
  cifras que suben y cuentan, notas que se escriben con máscara y la firma al final.
- La sección lleva `id="equipo"`, así que «Nosotros» del menú aterriza en ella.
- **Salen de la portada**, porque la maqueta aprobada los sustituye: la cinta de hechos
  (`FactsTicker`, además un ticker, que DESIGN.md prohíbe), el manifiesto, las cifras antiguas
  (`Numbers` sigue en la página de KLINODA) y la banda del equipo. Se borran `FactsTicker.jsx`,
  `ManifestoBlock.jsx`, `Team.jsx` y sus textos (`facts`, `manifesto`, `numbers`, `team`).
- «Más de 2.300 pruebas» ya no está en la portada; sigue en el bloque del método, como proponía
  PLAN.md.

**Verificación** (compilación de producción, `next start` en el puerto 3001, entrada `sitio-prod` de
`launch.json`): build sin errores. Capturas `p4-credenciales-*`: con movimiento, a 0,55 s del
disparo las cifras van por 12 y 80; al final, 15+, 100+ y 3 con opacidad 1. Con «reducir
movimiento», todo quieto con su valor final. En 390 px, las cifras apiladas con filetes
horizontales.
