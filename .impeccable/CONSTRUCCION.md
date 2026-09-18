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

**Lo que espera a Boris:**

1. Los textos de «Textos por aprobar» (abajo).
2. ~~Tres decisiones tomadas por defecto~~ **Aprobadas por Boris el 2026-09-18:** el método en
   `/servicios#metodo` (pieza 8), el botón de menú bajo 1000 px (pieza 2) y el foco en
   `cobre-honda` (pieza 2). Las páginas interiores quietas (pieza 9) **no** se aprueban: tendrán un
   momento de movimiento por página; el guion está abajo, en «Movimiento de las páginas
   interiores», y se programa después de juntar `fable-pulido`.
3. Confirmar con el abogado la palabra «Grupo» (regla 8 de PRODUCT.md).
4. **Después de juntar `fable-pulido`** (no antes: esa rama está cambiando DESIGN.md): poner al día
   en DESIGN.md el color del foco, que dice «contorno cobre» y ahora es `cobre-honda`, en
   «Buttons» (Hover / Focus) y en «Global». También añadir las páginas interiores.

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
| 12 | Página «Nosotros» | Texto escrito · 2026-09-18 · **sin programar** | Ver «Pieza 12» abajo. Se programa después de juntar `fable-pulido` |

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

## Textos aprobados · 2026-09-18

Boris revisó la lista de «Textos por aprobar» el 18 de septiembre de 2026. Once textos cambiaron
(marcados «cambiado») y el resto quedó aprobado tal cual. Esta es la versión final, lista para
traducir. Un texto nuevo que se escriba al construir vuelve a entrar como «por aprobar».

| Pieza | Dónde (`cjm-nexus/src/content/`) | Texto final | Estado |
|---|---|---|---|
| 3 | `home.es.js` → `portada.entrada` | «CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y el desarrollo de software especializado. Para empresas que quieren crecer con control.» | Cambiado |
| 3 | `home.es.js` → `meta.description` | «CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y el desarrollo de software especializado, para PYMEs y empresas medianas que quieren crecer con control.» | Cambiado (se añade «el») |
| 4 | `home.es.js` → `credenciales.cifras[0].quien` | «La trayectoria de Richard Carvajal, fundador de la firma.» | Aprobado |
| 4 | `home.es.js` → `credenciales.cifras[1].quien` | «Asesorados por Richard Carvajal en Latinoamérica, Estados Unidos y Europa.» | Cambiado |
| 4 | `home.es.js` → `credenciales.cifras[2].quien` | «Español, inglés y alemán, con equipo en Ecuador y Alemania.» | Aprobado |
| 4 | `home.es.js` → `credenciales.firma` | «**Richard Carvajal** lidera la dirección financiera, **Boris Carvajal** la tecnología y **Mirella Llanga** la gerencia general.» | Cambiado |
| 7 | `home.es.js` → `klinoda.frases[0]` | «KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador.» | Aprobado |
| 7 | `home.es.js` → `klinoda.frases[1]` | «Ves qué certificados vencen y quién está apto para su puesto, sin perseguir un solo papel.» | Cambiado |
| 8 | `home.es.js` → `cierre.titular` | «Veinte minutos con **quien va a hacer el trabajo**.» | Aprobado |
| 8 | `home.es.js` → `cierre.tres[0]` | «Con quién hablas» · «Richard Carvajal en dirección financiera, Boris Carvajal en tecnología: las mismas personas que después hacen el trabajo.» | Cambiado |
| 8 | `home.es.js` → `cierre.tres[1]` | «Qué pasa en la reunión» · «Nos cuentas cómo decides hoy, con qué información y qué te falta. Preguntamos: no venimos a presentar.» | Aprobado |
| 8 | `home.es.js` → `cierre.tres[2]` | «Qué te llevas» · «Qué conviene ordenar primero y en qué orden. Y si no somos los indicados, te lo decimos en esa misma reunión.» | Cambiado |
| 9 | `servicios.es.js` → `servicios.product` | Ceja «Empresa del Grupo CJM Nexus» · «Su plataforma ordena la salud ocupacional de las empresas en Ecuador: un trámite obligatorio, lleno de reglas, formularios oficiales y datos sensibles, ordenado en un solo lugar.» · estado «Demo · en desarrollo · datos ficticios» | Cambiado (la entrada) |
| 9 | `servicios.es.js` → `digital.proof` | Ceja «Lo que ya existe» · «KLINODA es una empresa del Grupo CJM Nexus dedicada a la salud ocupacional en Ecuador: un trámite obligatorio lleno de reglas, formularios oficiales y datos clínicos que la empresa no puede ver. Su plataforma la construye nuestra área digital. Y esta misma web, la que estás leyendo, la hicimos con el mismo criterio con el que haríamos la tuya.» · estado | Cambiado (la entrada) |
| 10 | `klinoda.es.js` → `meta` | «KLINODA · Salud ocupacional para empresas \| CJM Nexus» · «KLINODA, empresa del Grupo CJM Nexus, ordena la salud ocupacional de las empresas en Ecuador: la empresa ve qué trabajadores están aptos y qué certificados vencen, y lo clínico nunca llega a ella.» | Aprobado |
| 10 | `klinoda.es.js` → `hero` | Ceja «Empresa del Grupo CJM Nexus» · «La salud ocupacional de tu empresa, en orden y a la vista.» · «KLINODA ordena la salud ocupacional de tu empresa. Ves qué trabajadores están aptos y qué certificados vencen. El médico ocupacional hace la evaluación en la plataforma y el certificado sale firmado electrónicamente. Lo clínico nunca llega a tu pantalla.» · nota «Demo · en desarrollo · datos ficticios» | Cambiado (la entrada) |
| 10 | `klinoda.es.js` → `status.text` y `problem.text` | El estado sin las validaciones pendientes; el problema contado desde la empresa (texto en el archivo) | Aprobado |
| 10 | `klinoda.es.js` → `medico` | «Una herramienta que te quita trabajo, y que puedes recomendar.» con sus tres puntos | Aprobado |
| 10 | `klinoda.es.js` → `built.items[0].note` | «Se ejecutan en cada cambio, antes de darlo por bueno.» | Cambiado |
| 10 | `klinoda.es.js` → `fit` y `cta` | «Para qué empresa es» y «Veinte minutos para ver KLINODA con los ojos de tu empresa.» | Aprobado |
| 10 | `klinoda.es.js` → `company.text` | «La plataforma de KLINODA la construye el área digital de CJM Nexus. Las actas, las pruebas y la privacidad escrita en el modelo de datos son la forma en que trabajamos también cuando el sistema es de un cliente.» | Cambiado |

**Fuera de esta aprobación:** la microcopia que añadió Fable en `fable-pulido` (vistas, proyección,
buscar, sello, pestañas, meses…) se revisa al juntar esa rama. Las preguntas frecuentes de dirección
financiera siguen en «Revisar con clientes reales».

## Textos por aprobar

Textos escritos después de la aprobación del 2026-09-18. Todo lo que no está aquí está aprobado.

| Pieza | Dónde (`cjm-nexus/src/content/`) | Texto | Por qué está aquí |
|---|---|---|---|
| 12 | `nosotros.es.js` → `meta` | «Nosotros: quién está detrás de CJM Nexus» · «Las personas que dirigen CJM Nexus: Richard Carvajal en dirección financiera, Boris Carvajal en tecnología y Mirella Llanga en la gerencia general. Equipo en Ecuador y Alemania.» | Nuevo |
| 12 | `nosotros.es.js` → `hero` | Ceja «Nosotros» · «Quién está detrás de CJM Nexus.» (énfasis en «detrás») · «Una firma de dos líneas —dirección financiera externa y soluciones digitales— con equipo en Ecuador y Alemania. Estas son las tres personas que la dirigen, con su nombre y lo que hace cada una.» · botón «Conocer al equipo» | Nuevo |
| 12 | `nosotros.es.js` → `personas.titulo` | «Tres personas, cada una con lo suyo.» | Nuevo |
| 12 | `nosotros.es.js` → `personas.items[0]` | Richard: «Fundador · Dirección financiera» · «Lidera la dirección financiera de CJM Nexus: el diagnóstico, el tablero de cada mes y la reunión de dirección.» · 15+ años · 100+ clientes en Latinoamérica, Estados Unidos y Europa · Ecuador | Nuevo; las cifras y los hechos salen de PRODUCT.md |
| 12 | `nosotros.es.js` → `personas.items[1]` | Boris: «Cofundador · Tecnología» · «Lidera la tecnología de CJM Nexus: las páginas web, los sistemas a medida y los tableros conectados a los datos de cada empresa.» · Alemania | Nuevo. No nombra KLINODA a propósito: su plataforma la construye CJM Nexus y no se dice quién la dirige |
| 12 | `nosotros.es.js` → `personas.items[2]` | Mirella: «Gerente general» · «Lidera la gerencia general de CJM Nexus: la operación de la firma y la coordinación entre sus dos líneas.» | Frase dada por Boris el 2026-09-18 |
| 12 | `nosotros.es.js` → `firma` | «Dos líneas, una firma.» y tres puntos, con textos ya aprobados en la portada y en KLINODA; títulos nuevos: «El número y el sistema, en la misma firma», «Ecuador y Alemania», «KLINODA, empresa del Grupo»; el primer punto dice «Quien define el número construye también el sistema que lo produce.» | Títulos nuevos |
| 9 | `servicios.es.js` → `metodo` | Intro «Las reglas que aplicamos en las dos líneas, con un ejemplo real de cada una.» · Regla 1 «Decidimos por escrito»: «Lo que se decide queda escrito en un acta. Nada se acuerda de palabra.» · finanzas «Cada reunión de dirección, una al mes, termina con su acta.» · software «Trece actas de decisión en KLINODA, cada una con su motivo y sus alternativas…» · Regla 3 «Privacidad por diseño»: «Vemos solo lo que el trabajo necesita, y lo que alguien no debe ver no le llega.» · finanzas «No pedimos acceso a tus cuentas bancarias ni movemos dinero: trabajamos con los reportes que ya tienes.» · software, el de antes | **Aprobado por Boris el 2026-09-18** (propuesta del chat). Se anota aquí porque cambió después de la aprobación general |
| 12 | `nosotros.es.js` → `metodo` y `cta` | «Ver cómo trabajamos» (a `/servicios#metodo`) y el cierre con el titular aprobado del cierre de la portada | Reutilizados; solo «Ver cómo trabajamos» es nuevo |

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

### 2026-09-18 — español latinoamericano, cifras autorizadas y decisiones aprobadas

Ronda solo de textos y documentos: en paralelo, otro chat pule el diseño en la rama `fable-pulido`
(su propio worktree). Aquí no se tocaron CSS, componentes ni DESIGN.md.

- `git push origin rediseno-2026`.
- **PRODUCT.md:** las cifras 2.300+ pruebas, 13 actas y 5,1 s quedan autorizadas para las páginas
  públicas (Boris, 2026-09-18), y la regla 10: español latinoamericano, tuteo al cliente, «ustedes»
  cuando el cliente habla a la firma, nunca «vosotros».
- **Textos corregidos** (siete):
  - `klinoda.es.js` → `cta.text`: «cómo lleváis hoy» → «cómo lleva hoy tu empresa».
  - `servicios.es.js` → `digital.web.includes`: «con vosotros» → «contigo».
  - `servicios.es.js` → `digital.systems.steps[0]`: «cómo trabajáis» → «cómo trabaja tu equipo».
  - `servicios.es.js` → `digital.systems.steps[3]`: «que ya tenéis» → «que ya tienes».
  - `servicios.es.js` → `digital.faq`: «¿Qué necesitáis de mí?» → «¿Qué necesitan de mí?» y
    «¿Trabajáis con empresas fuera de Ecuador?» → «¿Trabajan con empresas fuera de Ecuador?».
  - `home.es.js` → `portada.imagen` (el texto alternativo): «un portátil» → «una laptop».
- **Decisiones aprobadas:** método en `/servicios#metodo`, botón de menú en móvil y foco en
  `cobre-honda`. Pendiente: poner el foco al día en DESIGN.md tras juntar `fable-pulido`.

**Verificación:** `npm run build` sin errores. Búsqueda en todo `cjm-nexus/src/content` (pronombres
«vosotros/os/vuestro», presentes en -áis/-éis, pretéritos en -steis, imperativos en -ad/-ed/-id y
vocabulario de España): 0 coincidencias en el texto visible. La única que salta es `id="metodo"`
dentro de un comentario, que no es un imperativo.

## Movimiento de las páginas interiores — guion (sin programar)

Se programa **después de juntar `fable-pulido`**. Un momento por página, sacado de su contenido;
ninguno se repite y ninguno es un desvanecido genérico. Mismas reglas que la portada: curvas
`CURVA.llegar` (`expo.out`), `CURVA.cruzar` (`power3.inOut`) y `CURVA.salir` (`power2.in`, 60 % de su
entrada); solo transformación, opacidad, máscara, trazo y variables de filete; con reloj una sola
vez al asomar (`alAsomar`, con su estado final si la página se carga más abajo) o ligado al scroll y
reversible. Con «reducir movimiento» y sin JavaScript, todo en su estado final desde el primer
píxel. El texto nunca se oculta para esperar a una animación: se mueve lo que ya se lee.


### `/servicios` — «Las dos hojas, a la vez»

**Qué cuenta:** el 50/50. Las dos líneas llegan con el mismo gesto, en el mismo instante y durante
el mismo tiempo. **Dónde:** las dos interfaces de muestra de `ServiceCards`. **Reloj:** con reloj,
una vez, cuando el borde superior de las hojas llega al 80 % de la pantalla. Las dos comparten
disparador en escritorio, porque están a la misma altura.

| Tiempo | Hoja de finanzas | Hoja de software |
|---|---|---|
| 0,00–0,70 s | Sube de +28 px a 0 y pasa de opacidad 0 a 1. `CURVA.llegar` | Lo mismo, en el mismo fotograma |
| 0,10–0,80 s | Su sombra de hoja crece de ninguna a `shadow-hoja`: se «posa» sobre el papel | Igual |
| 0,20–0,75 s | El filete bajo «Servicio 01» se traza de izquierda a derecha (`scaleX` 0→1, `power2.out`) | El filete bajo «Servicio 02», igual y a la vez |

- **Total:** 0,8 s. Dentro de las hojas no se dibuja nada: el dibujo interior es el gesto de
  Dirección financiera y no se repite aquí.
- **Móvil (una columna):** cada hoja tiene su propio disparador al 80 %, con el mismo guion y los
  mismos tiempos.
- **Con «reducir movimiento» o sin JavaScript:** hojas quietas, con su sombra y sus filetes enteros.

### `/servicios/direccion-financiera` — «El tablero se dibuja»

**Qué cuenta:** esto es lo que recibes cada mes, y se arma con tus datos. **Dónde:** el tablero
completo de `BoardShowcase` (`#entregable`). **Reloj:** con reloj, una vez, cuando el borde superior
del tablero llega al 75 %. Duración 1,6 s, dentro de la familia «dibujo de un tablero» de DESIGN.md
(1,4–1,6 s).

| Tiempo | Qué se mueve | Curva |
|---|---|---|
| 0,00–0,90 s | Las doce barras de ventas crecen desde la base (`scaleY` 0→1, origen abajo), escalonadas 0,05 s | `CURVA.llegar` |
| 0,10–0,50 s | La línea discontinua de la meta se extiende de izquierda a derecha (`scaleX` 0→1) | `power2.out` |
| 0,30–1,40 s | El trazo de ventas se dibuja encima de las barras (`stroke-dashoffset`) y cruza la meta. Es el degradado permitido: sale apagado y llega encendido | `CURVA.llegar` |
| 0,60–1,30 s | Las cuatro barras de margen por línea se llenan hasta su porcentaje (`scaleX`, origen izquierda), escalonadas 0,08 s | `CURVA.llegar` |
| 1,20–1,60 s | El filete de «Alertas del mes» se traza y las dos alertas pasan de opacidad 0 a 1, con 0,08 s entre una y otra | `power2.out` |

- **Lo que no se mueve:** las cuatro cifras de la cabecera (ventas, margen, caja, rentabilidad) están
  quietas desde el principio. Contar cifras es el gesto de las credenciales de la portada.
- **Móvil:** el mismo guion; el disparador pasa al 85 %, porque el tablero es más alto que la pantalla.
- **Con «reducir movimiento» o sin JavaScript:** el tablero dibujado entero.
- **Si la página se carga más abajo:** estado final, sin animar (`alAsomar`).

### `/servicios/soluciones-digitales` — «La semana, en una línea»

**Qué cuenta:** «publicada en menos de una semana», recorrida paso a paso. **Dónde:** los tres pasos
de la página web (`#web`: «Día 1», «Los días siguientes», «Menos de una semana»). Los cuatro pasos de
los sistemas a medida se quedan quietos: un solo momento por página. **Reloj:** ligado al scroll y
reversible, con `scrub` 0,5 s. Empieza cuando el borde superior de los pasos llega al 85 % de la
pantalla y termina cuando llega al 40 %: unos 0,45 de pantalla.

| Progreso | Qué se mueve |
|---|---|
| 0–100 % | Un filete de cobre de 2 px recorre el borde superior de las tres columnas, de izquierda a derecha y de forma continua (`scaleX` 0→1 sobre una capa encima del filete de 1 px). Sin curva propia: la marca el dedo |
| 0 %, 33 % y 66 % | Cuando el filete llega al inicio de cada columna, un punto de cobre de 5 px delante de su «cuándo» aparece (`scale` 0→1, 0,3 s, `CURVA.llegar`). Si se sube, se apaga en 0,18 s (`CURVA.salir`) |
| 100 % | La línea termina en el borde derecho de «Menos de una semana». No hay punto final ni rebote |

- **Contraste:** el texto de los pasos no cambia de color ni de opacidad en ningún momento. Solo se
  mueven el filete y los puntos, así que se lee igual en cualquier punto del recorrido.
- **Móvil (columnas apiladas, por debajo de 760 px):** la misma idea en vertical. Cada columna traza su
  filete superior de izquierda a derecha al cruzar el 70 % de la pantalla, ligado al scroll, y su
  punto aparece al completarse.
- **Con «reducir movimiento» o sin JavaScript:** los tres filetes en cobre enteros y los tres puntos
  visibles.

### `/klinoda` — «Lo que no existe, no aparece»

**Qué cuenta:** la regla de privacidad. La vista de la empresa se llena de cargo, evaluación y
aptitud, y nada más. **Dónde:** la vista de aptitud de `Privacy` (`#privacidad`). **Reloj:** con reloj,
una vez, cuando el borde superior de la hoja llega al 80 %. Duración 1,5 s.

| Tiempo | Qué se mueve | Curva |
|---|---|---|
| 0,00–0,40 s | El filete bajo la cabecera de columnas («Cargo · Evaluación · Aptitud») se traza de izquierda a derecha | `power2.out` |
| 0,15–0,75 s | Las tres filas aterrizan una a una: de −8 px a 0 y de opacidad 0 a 1, con 0,12 s entre cada fila. Cargo y evaluación llegan juntos | `CURVA.llegar` |
| 0,55–1,05 s | Las etiquetas de aptitud («APTO», «APTO EN OBSERVACIÓN») se estampan en el orden de las filas: `scale` 0,92→1 y opacidad 0→1, con 0,12 s entre cada una | `power3.out` |
| 1,10–1,50 s | Sobre el pie se traza un filete de cobre de 2 px y la frase «Diagnósticos, antecedentes y exámenes no existen en esta vista.» pasa de opacidad 0 a 1 | `power2.out` |

- **Lo que no se hace, a propósito:** ningún hueco ni columna vacía se anima. Lo clínico no existe en
  esta vista, así que no se enseña «apareciendo» ni «tapándose».
- **Móvil:** el mismo guion; la columna de evaluación está oculta y sus tiempos se saltan sin dejar
  hueco.
- **Con «reducir movimiento» o sin JavaScript:** la tabla entera, con su filete y su pie.

### Para las cuatro páginas

- **La llegada:** la cabecera de cada página (`PageHero`) se queda quieta a propósito. El salto
  desde la portada lo resuelve el primer momento de cada página. Si al probarlo sigue notándose, la
  siguiente pieza a mirar sería la cabecera del sitio, que es lo único que viaja entre páginas, no un
  desvanecido en cada titular.
- **Implementación prevista:** cada momento en un preset de `lib/animations.js` y cada sección con
  `useRegistro`, bajo `MUEVE`, con `alAsomar` para los de reloj. Los disparadores se revisan después
  de juntar `fable-pulido`, porque esa rama puede cambiar alturas y espaciados.

### 2026-09-18 — textos aprobados

- Boris aprobó la lista de «Textos por aprobar»: once cambios aplicados y el resto aprobado tal cual.
  La tabla pasa a «Textos aprobados · 2026-09-18», con el texto final de cada fila.
- **Los 100+ clientes de Richard: Latinoamérica, Estados Unidos y Europa** (Boris). Cambiado en
  PRODUCT.md (Evidence on Hand) y en la nota de las credenciales. «Mercados reales hoy: Ecuador y
  Estados Unidos» no cambia: habla de dónde opera la firma hoy, no de la trayectoria de Richard.
  El comentario de `lib/seo.js` todavía dice «Latinoamérica y Estados Unidos»; es código, fuera de
  esta ronda, y no cambia lo que declara la web.
- **«Nosotros» (pieza 12), pendiente:** `nosotros.es.js` todavía no existe. Faltan las respuestas
  sobre cada persona (preguntas 1, 2, 3, 5, 7, 9 y 10 de la ronda anterior). Cuando se escriba,
  los 100+ clientes van con Latinoamérica, Estados Unidos y Europa.
- `highlight` comprobado: ningún texto cambiado tiene palabras resaltadas. El titular de `/klinoda`
  y sus `highlight` no cambian.

**Verificación:** build sin errores. Capturas a 1536 × 730: `aprobados-credenciales.png`,
`aprobados-cierre.png` y `aprobados-klinoda-entrada.png`.

### 2026-09-18 — pieza 12: el texto de «Nosotros»

`cjm-nexus/src/content/nosotros.es.js`, con la misma forma que los otros archivos de contenido, y
`getNosotros()` en `content/index.js`. No hay página todavía: se programa después de juntar
`fable-pulido`.

**Estructura propuesta** (de arriba abajo):

1. **Cabecera** (`hero`, claves de `PageHero`): qué es la firma en una frase y que aquí están sus
   tres personas. «Agendar» y «Conocer al equipo» (→ `#personas`).
2. **El equipo** (`personas`): tres fichas iguales, en el orden de la firma de la portada. Cada una:
   retrato (previsto, hoy vacío), nombre, cargo, una línea de lo que lidera, dónde está y LinkedIn.
   Solo Richard lleva cifras, porque son su trayectoria (regla 2).
3. **La firma** (`firma`): dos líneas en una casa, Ecuador y Alemania, y KLINODA como empresa del
   Grupo, con su estado y el enlace a su página (regla 3: una puerta).
4. **Cómo trabajamos** (`metodo`): una línea y el enlace a `/servicios#metodo`.
5. **Cierre** (`cta`, claves de `FinalCta`).

**Sin fotos, y completa igual.** Cada ficha trae `retrato: null`. Al programarla: si no hay retrato,
la ficha no deja hueco ni recuadro gris: empieza por el nombre. Cuando llegue un retrato se rellenan
`src` y `alt` (ruta prevista `public/equipo/<id>.jpg`) y aparece encima del nombre, con el mismo
tamaño en las tres fichas. Nada de fotos de archivo. Igual con `linkedinHref: null`: sin enlace no
se pinta nada; con enlace, «LinkedIn» como enlace con filete.

**Lo que no dice, a propósito:** nada de la relación familiar, nada de quién dirige la plataforma de
KLINODA (la ficha de Boris ni la nombra), nada de la médica aliada, ni año ni lugar de constitución.

**Huecos marcados (`HUECO` en el archivo), para completar después:**

| Persona | Hueco | Estado |
|---|---|---|
| Richard | Trayectoria (cargos, sectores) y formación | «No por ahora» |
| Richard | Ciudad e idiomas | Solo «Ecuador» |
| Richard | Enlace a LinkedIn | Falta el enlace |
| Boris | Trayectoria, formación e idiomas | «No por ahora» |
| Boris | Ciudad | Solo «Alemania» |
| Boris | Enlace a LinkedIn | Falta el enlace |
| Mirella | ~~Qué hace en concreto como gerente general~~ | ✅ Resuelto el 2026-09-18: «…la operación de la firma y la coordinación entre sus dos líneas.» |
| Mirella | Trayectoria, formación e idiomas | «No por ahora» |
| Mirella | Desde dónde trabaja | «No por ahora»: su ficha no lleva lugar |
| Mirella | Enlace a LinkedIn | Falta el enlace |
| Las tres | Retratos | Sin fecha |

**Al programarla** (fuera de esta ronda, que es solo de textos): el enlace «Nosotros» del menú y del
pie pasa de `/${lang}#equipo` a `/${lang}/nosotros` en `lib/site.js`; la página nueva entra en
`sitemap.js`; y el comentario de `lib/seo.js` que dice «Latinoamérica y Estados Unidos» se pone al
día con Europa.

### 2026-09-18 — «casa» fuera, y lo que queda de «Nosotros»

- **«Casa» sale del sitio** (en Latinoamérica suena raro para una firma). Tres textos:
  `home.es.js` → `hacemos.rotulo`: «Dos líneas, una firma. Quien define el número construye también
  el sistema que lo produce.»; `nosotros.es.js` → `firma.items[0]`: «El número y el sistema, en la
  misma firma» y «Quien define el número construye también el sistema que lo produce.» Ya no queda
  ninguna «casa» en `src/content`.
- **Mirella, sin aplicar:** el cambio llegó con los marcadores «[FRASE DE BORIS]» y «[CIUDAD O PAÍS]»
  sin rellenar. Siguen los huecos de la pieza 12 (qué hace en concreto y desde dónde trabaja).
- **El método de `/servicios`** rompe el 50/50: sus cuatro evidencias son de KLINODA. Hay una
  propuesta en el chat del 2026-09-18, pendiente de Boris; no se ha aplicado.

### 2026-09-18 — el método, al 50/50

- **Aprobado por Boris** (propuesta del chat): el método de `/servicios#metodo` queda con dos reglas,
  «Decidimos por escrito» y «Privacidad por diseño», cada una con un ejemplo de dirección financiera
  y uno de software (`servicios.es.js` → `metodo`). Nueva intro: «Las reglas que aplicamos en las dos
  líneas, con un ejemplo real de cada una.»; la misma frase en `nosotros.es.js` → `metodo.texto`.
- **Fuera:** «Nada real hasta validar» (solo de KLINODA, y listaba lo que falta: regla 6) y, por
  ahora, «Probamos lo que construimos».
- **Pregunta para Richard:** ¿hay alguna práctica real en dirección financiera que haga el papel de
  «probamos lo que construimos», algo que se revise o se compruebe antes de entregar (el tablero,
  el diagnóstico, la proyección de caja)? Si la hay, la regla vuelve con un ejemplo de cada línea;
  si no, se queda fuera. No se rellena con una suposición.
- **Componente pendiente (después de juntar `fable-pulido`):** el campo `evidence` pasa a
  `ejemplos: { finanzas, software }`. `blocks/Method.jsx` todavía pinta `evidence`, así que **hoy
  `/servicios#metodo` enseña las dos reglas sin sus ejemplos**. Al actualizarlo: dos ejemplos por
  regla, del mismo tamaño y con la misma letra (50/50), cada uno con su referencia (`metodo.etiquetas`:
  «Dirección financiera» / «Soluciones digitales»), tras el filete de cobre de siempre.

### 2026-09-18 — la frase de Mirella

- `nosotros.es.js` → Mirella: «Lidera la gerencia general de CJM Nexus: la operación de la firma y la
  coordinación entre sus dos líneas.» (Boris). Su `base` sigue en `null`, sin dato: su ficha no lleva
  lugar. Quedan abiertos sus huecos de trayectoria, formación, lugar y LinkedIn.
