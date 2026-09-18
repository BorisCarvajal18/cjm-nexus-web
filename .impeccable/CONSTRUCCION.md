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

## Estado al 2026-09-18

**Las once piezas están hechas.** La rama `rediseno-2026` tiene la portada de la maqueta aprobada,
las páginas interiores en el sistema del registro, los textos de KLINODA con las reglas 7, 8 y 9, y
«Pulso Cobre» retirado. Nada publicado; `main` sin tocar.

**Rama `fable-pulido` (2026-09-18), desde `rediseno-2026`: la pasada final de pulido.** Nueve commits
separados por tema (css, cuadros, color, pulido, responsive, código, este informe y un último arreglo de cuadros), para quedarse con
unos y descartar otros. El informe, con capturas de antes y después, está en
`.impeccable/pulido/INFORME.md`. Nada publicado; `main` y `rediseno-2026` sin tocar.

**Lo que espera a Boris:**

0. Revisar `fable-pulido` con su informe y decidir qué commits se quedan. Lo nuevo por aprobar es la
   microcopia de las interfaces de muestra (última fila de «Textos por aprobar»).
1. Los textos de «Textos por aprobar» (abajo).
2. Tres decisiones tomadas por defecto, reversibles: el método en `/servicios#metodo` (pieza 8),
   las páginas interiores quietas (pieza 9) y el botón de menú bajo 1000 px (pieza 2).
3. Confirmar con el abogado la palabra «Grupo» (regla 8 de PRODUCT.md).
4. Poner al día en DESIGN.md el color del foco (`cobre-honda`, pieza 2) y, si se aprueba, las páginas
   interiores.

**Lo siguiente, fuera de estas piezas:** traducciones EN/DE (ahora que el español está casi cerrado),
imágenes Open Graph con el titular nuevo, páginas legales, página «Nosotros», isotipo y logotipo de
KLINODA vectoriales y vídeo propio. Las confirmaciones de Richard llegaron el 18-sep-2026: la
página de dirección financiera ya no tiene nada bloqueado.

## Piezas

| # | Pieza | Estado | Notas |
|---|---|---|---|
| 0 | Ordenar los archivos sin commit | ✅ Hecha · 2026-09-17 | Ver la nota de la sesión |
| 1 | Base del sistema: color, letra, espaciado y constantes de movimiento | ✅ Hecha · 2026-09-17 | Ver «Cómo se usa la base» |
| 2 | Cabecera | ✅ Hecha · 2026-09-18 | Ver el registro de la sesión. Tres estados como `SiteHeader` (transparente sobre la portada, papel al bajar, marino hondo sobre oscuro). Isotipo claro ya en `public/marca/`. Menú fuera bajo 1000 px e idiomas fuera bajo 620 px |
| 3 | Portada | ✅ Hecha · 2026-09-18 | Vídeo: `hero.webm`, `hero.mp4` y `hero-poster.jpg` de `mocks/portada/img/` a `public/`, y el `<video>` en `Hero.jsx`. El titular entra palabra a palabra desde su máscara y la imagen pasa de 1,05 a 1. **Texto abierto:** la entrada atribuye los quince años a la firma (PLAN.md, ronda 5 §2) |
| 4 | Credenciales | ✅ Hecha · 2026-09-18 | 15+, 100+ y 3, con atribución a Richard por su nombre. Las notas y la frase de los tres nombres son **texto propuesto sin aprobar** |
| 5 | Escena de los tableros («Qué hacemos») | ✅ Hecha · 2026-09-18 | Un preset nuevo en `lib/animations.js` con `CONSULTA_ESCENAS`, `ESCENA.tableros` y `AJUSTE_AL_SOLTAR`. Se fija 3,1 pantallas y la letra se ajusta con `--k` |
| 6 | La noche | ✅ Hecha · 2026-09-18 | Las variables de tema (`--suelo`, `--tx-*`, `--filete*`) ya existen. Falta la capa fija, el disparador que llama a `marcarOscuro()` y el paso corto del 50 al 59 % |
| 7 | Escena de KLINODA | ✅ Hecha · 2026-09-18 | 2,1 pantallas. Poner al día `privacy.mockup` en `klinoda.es.js` con las etiquetas reales («APTO», «APTO EN OBSERVACIÓN», «PERIÓDICO»…) |
| 8 | Cierre y pie | ✅ Hecha · 2026-09-18 | El titular y los tres bloques del cierre son **texto propuesto sin aprobar** (PLAN.md, ronda 2 §7) |
| 9 | Páginas de servicios y de KLINODA al sistema nuevo | ✅ Hecha · 2026-09-18 | Hoy siguen con «Pulso Cobre» |
| 10 | **Reescribir el texto de KLINODA con la decisión del ICP** | ✅ Hecha · 2026-09-18 | Ver abajo |
| 11 | Retirar «Pulso Cobre» | ✅ Hecha · 2026-09-18 | Tokens en inglés de `tailwind.config.js` (`navy`, `copper`, `teal`, `ink`, `bg-g-*`, los heredados `indigo`/`slate`…) y los presets antiguos de `lib/animations.js`, cuando ya nada los use. `CalendlyButton.jsx` todavía usa `indigo` |

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
| 7 | `home.es.js` → `klinoda.frases[0]` y `[1]` | «KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador.» · «La empresa ve qué certificados vencen y quién está apto para su puesto, sin tener que perseguir un papel.» | Reescritas: la maqueta decía «nuestro producto propio» y «para probar exactamente lo que decimos que sabemos hacer» (reglas 7, 8 y 9 de PRODUCT.md). La tercera frase, la pregunta y el botón son los de la maqueta |
| 8 | `home.es.js` → `cierre.titular` y `cierre.tres` | «Veinte minutos con **quien va a hacer el trabajo**.» y los tres bloques «Con quién hablas», «Qué pasa en la reunión», «Qué te llevas» | Propuestos en PLAN.md (ronda 2 §7) |
| 9 | `servicios.es.js` → `servicios.product` | Ceja «Empresa del Grupo CJM Nexus»; entrada «Su plataforma ordena la salud ocupacional de las empresas en Ecuador: un trámite obligatorio, lleno de reglas, formularios oficiales y datos sensibles, resuelto en minutos.»; estado «Demo · en desarrollo · datos ficticios» | Decía «Producto propio» y «la prueba pública de lo que construimos» (reglas 8 y 9) |
| 9 | `servicios.es.js` → `digital.proof` | Ceja «Lo que ya existe»; entrada «KLINODA, empresa del Grupo CJM Nexus, lleva la salud ocupacional de las empresas en Ecuador… Su plataforma la construimos nosotros. Y esta misma web…»; estado | Decía «La prueba» y «KLINODA es nuestra plataforma» (reglas 8 y 9) |
| 10 | `klinoda.es.js` → `meta` | Título «KLINODA · Salud ocupacional para empresas»; descripción «KLINODA, empresa del Grupo CJM Nexus, ordena la salud ocupacional de las empresas en Ecuador…» | Reglas 7, 8 y 9 |
| 10 | `klinoda.es.js` → `hero` | Ceja «Empresa del Grupo CJM Nexus»; titular «La salud ocupacional de tu empresa, en orden y a la vista.»; entrada y nota «Demo · en desarrollo · datos ficticios» | A la empresa: orden y tranquilidad |
| 10 | `klinoda.es.js` → `status.text` y `problem.text` | El estado sin la frase de las validaciones pendientes (regla 6: no listar lo que falta); el problema contado desde la empresa | |
| 10 | `klinoda.es.js` → `medico` (**sección nueva**) | «Una herramienta que te quita trabajo, y que puedes recomendar.» con tres puntos | Al médico: usuario y canal (regla 7). Los tres puntos salen de lo que ya decía la página |
| 10 | `klinoda.es.js` → `fit`, `company`, `cta` | «Para qué empresa es», «Quién construye su plataforma» y el cierre «Veinte minutos para ver KLINODA con los ojos de tu empresa.» | Decían «Eres médico ocupacional…», «nuestro producto» y «Si trabajas en medicina ocupacional…» |
| pulido | `home.es.js` → `hacemos.tablero` | Vistas «Mes», «Trimestre», «Año»; leyenda «Proyección»; globo «JUN · $1,24 M · 10 % sobre meta» | Microcopia nueva **dentro de la interfaz de muestra** (rama `fable-pulido`). Rótulos de producto, no texto de la firma. Ningún texto aprobado cambió |
| pulido | `home.es.js` → `hacemos.portal` | «Buscar documento»; «Sello 9F3A · C21E»; el reparto «96 Firmado · 21 En revisión · 11 Borrador» (suma los 128) | Igual. El reparto usa las mismas palabras de la columna «Estado» |
| pulido | `home.es.js` → `klinoda.pestanas` | «Plazos», «Certificados», «Personal» | Son los rótulos reales de las tres hojas de su portal de empresa (`portal_empresa/panel.html`). No se inventa ningún módulo (regla 4 de PRODUCT.md) |
| pulido | `servicios.es.js` → `finanzas.deliverable.board.months` | Las iniciales de doce meses, de julio a junio | Para el eje del tablero completo |

## Cómo se usa la base (pieza 1)

Una sola fuente: el bloque `REGISTRO` de `cjm-nexus/tailwind.config.js`. De ahí salen las clases
y también las variables CSS. El CSS escrito a mano vive en `cjm-nexus/src/app/estilos/`, una hoja
por sección (base, portada, credenciales, que-hacemos, cuadros, klinoda, cierre y paginas), cargadas
en ese orden desde el layout. `registro.css` ya no existe.

- **Color:** `papel`, `papel-hondo`, `papel-claro`, `blanco`, `tinta`, `tinta-honda`, `tinta-viva`,
  `tinta-suave`, `gris`, `piedra`, `linea`, `linea-fina`, `cobre`, `cobre-honda`, `cobre-presion`,
  `cobre-claro`, `cobre-tinte` y `klinoda-*` (solo dentro de su tablero; ahora con sus tintes).
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
- **Sombras:** `shadow-hoja`, `shadow-hoja-noche`, `shadow-conversion` y `shadow-conversion-alta`;
  en CSS, `var(--sombra-hoja)`…
- **Degradados** (The Tonal Gradient Rule): `bg-marino`, `bg-cierre`, `bg-conversion`,
  `bg-conversion-presion` y `bg-cobre`; en CSS, `var(--degradado-marino)`…
- **Curvas en CSS:** `ease-llegar` (= `--curva`), `ease-cruzar`, `ease-salir`.
- **Movimiento en GSAP** (`cjm-nexus/src/lib/animations.js`, bloque «EL REGISTRO»): `CURVA`,
  `SCRUB`, `ESCENA`, `AJUSTE_AL_SOLTAR`, `UMBRAL_ESCENAS` y `ESCALA_ALTO`. Las duraciones, lo que
  cuesta un gesto y una pausa, y el 60 % de las salidas están en DESIGN.md: las constantes que los
  repetían (`SALIDA`, `DURACION`, `PANTALLAS`, `CONSULTA_ESCENAS`, `fijaEscenas()`) no las leía nadie
  y se retiraron en `fable-pulido`.
- **Interfaces de muestra:** `components/registro/Ventana.jsx` (barra, riel, indicador, estado),
  `Icono.jsx` (el juego de iconos) y `lib/graficos.js` (la geometría de los gráficos).
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
- **El primer `npm run build` en una carpeta recién clonada puede quedarse colgado** sin usar CPU
  ni escribir nada (visto en el worktree de `fable-pulido`, con `node_modules` recién instalado dentro
  de OneDrive). Se mata el proceso, se borra `cjm-nexus/.next` y el segundo intento compila.
- **Capturas automáticas con Edge sin ventana** (puppeteer-core): el perfil del navegador tiene que ir
  en una ruta corta; la de la carpeta temporal de la sesión pasa del límite de Windows y Edge se
  cierra sin decir nada.
- **Los 21 archivos del sitio anterior borrados hoy** reaparecieron sin commit, idénticos a lo que
  ya se había borrado. Lo más probable es que fuera OneDrive restaurándolos. Si vuelven, esa es la
  causa, y siguen en el historial de git.

## Pendientes fuera de estas piezas

Isotipo vectorial de una tinta · material de vídeo propio · traducciones EN/DE · imágenes Open
Graph con el titular nuevo · páginas legales · página «Nosotros».

## Revisar con clientes reales

Textos que se quedan como propuesta porque todavía no hay con quién contrastarlos. No bloquean la
publicación; se revisan cuando haya clientes.

| Dónde | Qué | Por qué |
|---|---|---|
| `servicios.es.js` → `finanzas.faq` | Las siete preguntas frecuentes de dirección financiera | Son las que Boris espera, no las que escucha Richard: aún no hay clientes fijos (Richard, 18-sep-2026) |

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

**Pieza 5 — escena de los tableros** (`blocks/registro/QueHacemos.jsx`, interfaces en
`components/registro/TableroGerencial.jsx` y `PortalDocumentos.jsx`, textos en `home.es.js` →
`hacemos`):

- El preset nuevo está en `lib/animations.js`, bloque «EL REGISTRO — los tableros y las escenas
  fijadas»: `armaFinanzas`, `armaSoftware`, `lineasDe`, `escenaTableros` y el ajuste al soltar
  (`ajustePausas` y `snapDeEscena`, que respetan `AJUSTE_AL_SOLTAR` y servirán a KLINODA). Usa
  `ESCENA.tableros`, `SCRUB`, `ESCALA_ALTO` y `UMBRAL_ESCENAS`, y el guion es el de la maqueta: A,
  R1, F1–F3, R2, S1–S3.
- Bajo 1024 × 640 o con «reducir movimiento», filas: cada tablero se dibuja al asomar y su texto
  llega por líneas; con «reducir movimiento», quieto y entero.
- Textos de la maqueta, que no coinciden del todo con los que tenía `home.es.js` (la lista y la
  entrada de la línea digital son más cortas). Los botones «Ver el servicio» llevan a las dos
  páginas de servicio.
- Sale `blocks/TwoFields.jsx` y, con él, el tercer panel de KLINODA de la portada, que decía «nuestra
  plataforma para médicos ocupacionales» y «la prueba de lo que construimos». KLINODA vuelve a la
  portada en la pieza 7.
- `/servicios` usaba las maquetas de `home.es.js`: pasan a `servicios.es.js` → `servicios.mockups`
  hasta la pieza 9.

**Verificación** (producción): build sin errores. A 1536 × 730 (`p5-escena-*`): el escenario se fija
**3,10 pantallas** exactas (el espaciador mide 4,1), tableros de 588 × 544, `--k` 1; en A, los dos
tableros lado a lado; en F3, finanzas a la derecha con su texto; en S3, software a la izquierda con el
suyo; ningún error. Móvil y «reducir movimiento» (`p5-filas-*`): sin fijado; con «reducir
movimiento», 0 elementos ocultos y la cuenta en 12.

**Visto al verificar, sin tocar:** el botón «volver arriba» (`BackToTop`, del sistema anterior)
flota sobre la escena abajo a la derecha. No está en la maqueta ni en DESIGN.md. Se decide en la
pieza 8.

**Piezas 6 y 7 — la noche y la escena de KLINODA**, en un solo commit: el disparador de la noche es
la banda de KLINODA, y las dos comparten `registro.css`.

- **La noche** (`blocks/registro/Noche.jsx`): la capa marino fija, el disparador sobre `.puerta`
  (desde que asoma hasta el 25 % de la pantalla, 0,75 pantalla), los grises que se funden, el paso
  corto de 0,3 s del 50 al 59 % y `marcarOscuro()` al cruzar. Reescribe las variables del tema en
  `<html>`. Con «reducir movimiento» no hay noche: KLINODA avisa a la cabecera como zona oscura (y
  el cierre también, cuando exista). Va la última en `<main>` y, como la maqueta, ordena y recalcula
  los ScrollTrigger al montarse.
- **KLINODA** (`blocks/registro/PuertaKlinoda.jsx`, textos en `home.es.js` → `klinoda`): el tablero
  del portal de empresa con su marca, la placa, el logotipo claro y la etiqueta «Demo · en
  desarrollo · datos ficticios». El preset está en `lib/animations.js`: `armaKlinoda` y
  `escenaKlinoda` (A, K1–K5), con `ESCENA.klinoda`, `ESCALA_ALTO.maximoKlinoda` y el mismo ajuste al
  soltar. Bajo 1024 × 640, filas.
- **Textos:** las dos primeras frases se reescribieron con las reglas 7, 8 y 9 (ver «Textos por
  aprobar»). Nada clínico, ninguna fecha, ninguna validez legal, nada de lo que falta.
- `klinoda.es.js` → `privacy.mockup` pasa a las etiquetas reales: «APTO», «APTO EN OBSERVACIÓN»,
  «PERIÓDICO», «INGRESO».
- **Arreglo propio:** en tableros estrechos (consulta de contenedor bajo 700 px) los puntos de la
  línea de plazos se aplastaban en óvalos; ahora bajan a 0,85 em y no encogen.

**Verificación** (producción): build sin errores. Escena a 1536 × 730 (`p7-klinoda-*`): fijada
**2,10 pantallas** (espaciador 3,1), `--kb` 1,25; en A la placa al 94 % con el logotipo; en K2 el
tablero dibujado con 11, 3 y 44; en K5 el tablero a media escena a la derecha y el texto a la
izquierda; cabecera marino hondo; sin errores. **Contraste de la noche** medido en seis puntos del
tramo (`p6-noche-*`): el peor, 4,98:1 justo antes del paso; después, 6,2:1 y más. Reposo
(`p7-klinoda-reposo-*`): con «reducir movimiento», banda marino por sí misma, 0 ocultos, cifras con
su valor y la cabecera oscura al pasar; en 390 px, sin desbordamiento.

**Visto, sin tocar:** con movimiento la página se queda de noche después de KLINODA, y el bloque del
método y el cierre antiguos todavía no usan las variables del tema. Se resuelve en la pieza 8.

**Pieza 8 — cierre y pie** (`blocks/registro/Cierre.jsx`, `components/SiteFooter.jsx`, textos en
`home.es.js` → `cierre` y `sitio.es.js` → `pie`):

- El cierre de la maqueta: banda marino a marino hondo, «Siguiente paso», el titular, las tres
  respuestas con filetes, «Agendar» (abre Calendly), la nota y los tres canales. El gesto: el filete
  de cobre que cruza la banda y las respuestas que suben. Lleva `id="contacto"`, así que el
  «Agendar» de la cabecera y de la portada aterrizan en él.
- **El pie** no está en la maqueta: se pasó al sistema nuevo siguiendo el cierre. Marino hondo,
  isotipo claro con «CJM NEXUS» espaciado, rótulos en versalitas cobre claro con su filete y enlaces
  con el subrayado cobre al apuntar. Mismos enlaces y textos que antes, ahora en `sitio.es.js`. Vale
  para todas las páginas.
- **La portada queda como la maqueta:** portada, credenciales, qué hacemos, KLINODA y cierre. Salen
  de ella el bloque del método, el cierre antiguo (`FinalCta` sigue en las otras páginas) y el
  botón «volver arriba».
- **Decisión mía, a revisar:** el método (`Method.jsx` con sus textos, ahora en `servicios.es.js` →
  `metodo`) pasa a `/servicios#metodo`, y «Método» del menú y del pie apunta ahí. Motivo: la maqueta
  aprobada no lo lleva, DESIGN.md enumera lo que va en la portada, y dejar «Método» sin destino
  rompe el principio 5 de PRODUCT.md. Si prefieres otra cosa (quitarlo del menú, o una página
  propia), es un cambio de dos líneas en `lib/site.js`.

**Verificación** (producción): build sin errores. Capturas `p8-cierre-*`: el cierre y el pie a 1536 ×
730 y 390 × 844, con y sin «reducir movimiento»; 0 ocultos al terminar la entrada; la cabecera marino
hondo sobre los dos; «Agendar» lleva a Calendly; sin desbordamiento. Anclas comprobadas en el HTML
servido: `/es` tiene `#equipo` y `#contacto`; `/es/servicios`, `#metodo`. En `/es` no aparecen ya
«producto propio», «para médicos ocupacionales» ni «la prueba de lo que construimos» (siguen en
`/es/servicios` y `/es/klinoda`: piezas 9 y 10).

**Pieza 9 — páginas interiores al sistema nuevo** (`/servicios`, las dos páginas de servicio y
`/klinoda`; CSS en `registro.css`, bloque «PÁGINAS INTERIORES»):

- Se reescribieron con el vocabulario del registro, conservando props y textos: `PageHero`,
  `Symptoms`, `Steps` (+ `StepItem`), `BoardShowcase`, `FeatureGrid`, `Fit`, `Faq`, `Offer`,
  `ProductBand`, `ServiceCards`, `StatusBanner`, `Privacy`, `Numbers`, `Method` y `FinalCta` (ahora
  la misma banda que el cierre de la portada), más las hojas `ManagementBoard` y `KlinodaCard`.
- Fuera, por DESIGN.md: los orbes difuminados, las tarjetas, los números grandes de las ofertas y
  de los pasos (ahora referencias en versalitas), los degradados de las marcas y el parallax.
- `/servicios` enseña las dos interfaces de muestra de la portada al 50/50 (datos de
  `home.es.js` → `hacemos`); se borra `servicios.mockups`.
- **Decisión mía, a revisar:** las páginas interiores están **quietas**, sin entradas al hacer
  scroll. Son páginas de lectura y la maqueta solo define el movimiento de la portada; DESIGN.md
  pide que cada gesto salga del contenido y que ninguno se repita, y repetir un «aparecer» en cada
  bloque es justo lo que prohíbe. `Reveal` sigue existiendo solo para `/sistema`.
- Sale el botón «volver arriba» de todas las páginas.
- Las bandas de KLINODA de `/servicios` y de soluciones digitales se reescribieron con las reglas 8 y 9
  y llevan su etiqueta de estado (ver «Textos por aprobar»). La página `/klinoda` conserva sus textos
  hasta la pieza 10.

**Verificación** (producción, `p9-*`, capturas de página entera): build sin errores; las cuatro
páginas a 1536 × 730 y 390 × 844 sin desbordamiento horizontal, sin errores de consola ni respuestas
4xx/5xx, y 0 elementos ocultos también con «reducir movimiento».

**Pieza 10 — los textos de KLINODA** (`klinoda.es.js`; la página suma la sección `#medico`):

- Dos mensajes. **A la empresa**, orden y tranquilidad: ve qué trabajadores están aptos y qué
  certificados vencen, y lo clínico nunca llega a ella. Se dice lo que el sistema hace, nunca que
  cumple una norma (PRODUCT.md, voz), así que «cumplimiento» no aparece como afirmación.
  **Al médico**, una sección propia: una herramienta que le quita trabajo y que puede proponer en
  las empresas donde evalúa; KLINODA la contrata la empresa.
- Nada clínico, ninguna fecha, ninguna validez legal. El estado es la etiqueta pública «Demo · en
  desarrollo · datos ficticios» y ya no menciona las validaciones pendientes (regla 6). «Piloto
  controlado» sale de todos los textos visibles, también de la evidencia del método en
  `servicios.es.js` y de la nota de las cifras.
- Los cuatro sitios que listaba esta pieza (`home.es.js` 96, `klinoda.es.js` 35, 42 y 183) ya no
  existen o están reescritos.

**Verificación:** build sin errores. En el HTML servido de las cinco páginas no aparecen «producto
propio», «para médicos ocupacionales», «la prueba de lo que construimos» ni «piloto controlado»;
«Empresa del Grupo CJM Nexus» aparece en portada, servicios, soluciones digitales y KLINODA.
Capturas `p10-*`: sin desbordamiento, sin errores, 0 ocultos.

Queda solo en `/sistema` (el catálogo interno, pieza 11): «En desarrollo · piloto controlado».

**Pieza 11 — retirar «Pulso Cobre»:**

- **Se borra `/sistema`**, el catálogo interno del sistema anterior (no indexable y fuera de toda
  navegación). Era lo único que seguía usando el kit viejo, y su papel de referencia lo tiene ahora
  DESIGN.md. Si se quiere un catálogo del registro, se rehace desde cero; el anterior está en git.
- Fuera el kit `components/ui/` salvo `DarkSurface` (Accordion, BackToTop, Button, Card, Circuit,
  ExpandingFrame, Field, HighlightTitle, HorizontalRail, Manifesto, PersonCard, Pill, ProjectCard,
  Reveal, StackedCards, StatCounter, Text, Ticker e `index.js`), `CalendlyButton`, `useCalendly`,
  `useGsap`, `FinanceCard` y `PlatformCard`.
- `tailwind.config.js` queda solo con el registro: fuera `navy`, `copper`, `teal`, `stone`, `canvas`,
  `surface`, `ink`, `hairline`, los heredados (`indigo`, `slate`…), `bg-g-*`, los tamaños `display-*`
  y `eyebrow`, los radios `xl2`–`4xl`, las sombras viejas, la animación `drop`, `container` y
  `darkMode`.
- `lib/animations.js` sin los presets viejos (`reveal`, `parallax`, `horizontalRail`…);
  `lib/gsap.js` sin `MotionPathPlugin` ni `prefersReducedMotion`; `globals.css` sin `.text-grad`,
  `.circuit` ni `.no-bar`, y la selección en cobre.

**Verificación:** build sin errores ni avisos. `/es/sistema` da 404. Las cinco páginas a 1536 × 730 y
390 × 844, y con «reducir movimiento»: sin desbordamiento, sin errores; las escenas siguen fijando
3,1 y 2,1 pantallas y la noche llega a 1. Con «reducir movimiento» lo único con opacidad 0 en la
portada es el vídeo y la capa de la noche, que en ese modo no se muestran.

### 2026-09-18 — respuestas de Richard (dirección financiera)

- **Plazos:** el diagnóstico tarda de una a dos semanas. En `finanzas.month`, el paso 02 pasa de
  «Semana 2» a «De una a dos semanas» y el 03 de «Semanas 3 y 4» a «Las dos semanas siguientes»,
  que se cuentan desde el diagnóstico. «Semana 1» y «Cada mes, a partir de aquí» se quedan.
- **Confirmado, sin cambios en la página:** el diagnóstico se presenta en reunión; la reunión de
  dirección es mensual; se levanta un acta de cada una.
- **La forma de cobro no aparece en la web.** Buscado en todos los textos (`src/content`, `lib`,
  componentes) y en el brochure en PDF: ninguno dice mensualidad, horas, proyecto, tarifa ni
  cuota. Las dos respuestas a «¿Cuánto cuesta?» remiten a la reunión sin cifra ni forma.
- **Preguntas frecuentes:** se quedan las propuestas, en «Revisar con clientes reales».
- Se quita el pendiente «confirmaciones de Richard»; `docs/preguntas-richard.md` queda marcado
  como resuelto. Fuera los comentarios `SUPUESTO` de la página financiera. PRODUCT.md, al día.

### 2026-09-18 — rama `fable-pulido`: la pasada final de pulido

Encargo de Boris: llevar al máximo los cuadros y el color, pulir todo lo mejorable, que funcione en
seis tamaños y dejar el código más limpio, sin tocar textos ni las reglas de PRODUCT.md. Informe con
capturas de antes y después: `.impeccable/pulido/INFORME.md`.

**Commits, en su orden** (cada uno se puede quedar o descartar; el informe dice cuáles dependen de cuáles):

1. `refactor(css)`: `registro.css` (2.822 líneas) partido en ocho hojas por sección. Solo mueve:
   32 capturas idénticas píxel a píxel.
2. `feat(cuadros)`: las interfaces de muestra pasan a ser ventanas de producto (tablero gerencial,
   portal de documentos, tablero y vista de aptitud de KLINODA, tablero completo de finanzas). Juego de
   iconos propio, piezas compartidas, gráficos calculados y consultas de contenedor.
3. `feat(color)`: marino vivo, papel claro y tinte de cobre; sombras y degradados como tokens; la noche
   con hondura (solo del 90 % en adelante: el tramo del 50 al 59 % no se toca); velo de la portada en
   marino vivo; «Agendar» con la luz arriba. DESIGN.md: The Tonal Gradient Rule.
4. `fix(cuadros)`: la fecha de una tarjeta de cargo de KLINODA se cortaba en filas.
5. `style(pulido)`: el reinicio `.registro p/h/ul` le ganaba a las clases de una palabra y sus
   márgenes no se aplicaban (referencia, título y cifras pegados en varias secciones); banda de
   KLINODA sin cifras; «Agendar · 20 min» con hueco doble; preguntas frecuentes; estados.
6. `fix(responsive)`: 390, 768, 1024, 1366, 1536 y 1920 sin desbordes ni solapes; arreglos de
   teléfono y tableta.
7. `refactor(codigo)`: duplicaciones de las dos escenas y de las zonas oscuras, restos sin uso,
   `puntos` → `conMillares`, README y comentarios caducados. Escenas idénticas píxel a píxel.
8. `docs(pulido)`: el informe y estos documentos.
9. `fix(cuadros)`: la última pasada del detector marcó seis colores sueltos en `cuadros.css`; ahora
   todo sale de un token. Excepciones acotadas y con motivo en `.impeccable/config.json` (la
   microletra y el radio de 1 px de las ventanas; cinco tamaños de la cabecera, heredados de la
   maqueta). Sigue en pie, sin tocar, `1.2rem` del menú del teléfono (pieza 2).

**Verificación:** `npm run build` sin errores ni avisos (20 páginas estáticas; la portada pesa 2,4 kB
más de JS). Las cinco páginas en los seis tamaños: sin desbordamiento horizontal, sin elementos fuera
de la ventana y sin errores de consola. Con «reducir movimiento», todo quieto y entero. Recorrido con
el tabulador en portada y página de servicio. Detector de Impeccable sobre los 28 archivos de
interfaz cambiados: 0 hallazgos en las reglas generales; en las del sistema de diseño quedan los
tamaños de letra heredados de `portada.css`, `klinoda.css` y `paginas.css`, que no son de esta
pasada. Capturas en `.impeccable/pulido/capturas/`.

