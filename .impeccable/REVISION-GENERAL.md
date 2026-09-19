# Revisión general antes de traducir — 2026-09-19

Revisión con ojos frescos de `rediseno-2026` (commit `4ae1361`). **Solo propuestas: no se cambió
ningún archivo del sitio.** Boris decide cuáles se aplican.

## Cómo se hizo

- **Dos miradas independientes**, cada una por un revisor distinto y sin ver a la otra: **diseño** y
  **preparación para traducir**. Las de experiencia, código y rendimiento se descartaron por decisión
  de Boris (ahorro de uso): la auditoría ya cubrió lo esencial.
- **Cada hallazgo se verificó después**, contra el código y en el navegador: medidas a 1001, 1024,
  1040 y 1100 px, el orden de los pasos en tableta, y las líneas citadas.
- **Las maquetas del «después»** son capturas reales de la web con el cambio inyectado en el
  navegador (CSS y DOM), no dibujos. El sitio no se tocó. Capturas en `.impeccable/revision/`.
- No repite nada de `AUDITORIA.md`.

**Decisiones de Boris que enmarcan la revisión (2026-09-19):** inglés, todo el sitio; alemán, solo la
línea digital y «Nosotros», con trato de *Sie* y sin WhatsApp; Berlín, primer mercado de la línea
digital.

**Lo que salió bien:** no hay ningún texto visible escrito dentro del JSX de los bloques; todos los
`alt` y `aria-label` salen de `src/content`; y los rótulos de las interfaces de muestra también. Lo
que queda fuera de contenido está casi todo en un solo archivo (`lib/site.js`).

---

## 1 · Un mapa de rutas por idioma — *sin esto, el alemán no puede ser «solo digital»*

- **Qué y dónde:** hoy seis sitios suponen «todas las rutas × tres idiomas»: `generateStaticParams`
  del layout, `app/sitemap.js:15-42`, los hreflang de `lib/seo.js:80-83`, el selector de idioma
  (`SiteHeader.jsx:40-45`, «la misma página en otro idioma»), y el menú y el pie (`lib/site.js`).
  Con eso, `/de/servicios/direccion-financiera` existiría, saldría en el sitemap y el menú alemán
  enlazaría a ella.
- **Propuesta:** un solo archivo, `src/i18n/rutas.mjs`, con cada ruta, sus idiomas y a dónde lleva
  en los idiomas donde no existe (`/de/servicios` → soluciones digitales;
  `/de/servicios/direccion-financiera` → `/de`). Lo leen el sitemap, los hreflang, el selector, el
  menú, el pie, `next.config.mjs` (redirecciones) y un `generateStaticParams` en las dos páginas que
  no existen en alemán. Es `.mjs` por lo mismo que `lib/destinos.mjs`. Comprobado en Next 14.2: si
  una página devuelve `[]` para `de`, esa ruta no se genera, y con `dynamicParams = false` da 404.
- **De paso:** no existe `not-found.jsx`; un 404 sale con la página de Next, en inglés y sin el
  diseño del sitio. Con el alemán habrá 404 a propósito: conviene una página propia.
- **Por qué mejora:** es la pieza que hace posible la decisión de Boris sin llenar el código de
  `if (lang === 'de')`. Y evita publicar enlaces, sitemap y hreflang hacia páginas que no existen.
- **Esfuerzo:** medio. **Toca algo aprobado:** no.
- **Decisión para Boris:** redirección a lo más cercano (lo que pide el principio 5 de PRODUCT.md) o
  404.

## 2 · La cabecera de cada página de servicio enseña su pieza

- **Qué y dónde:** `blocks/pages/PageHero.jsx` y `.pag-cabeza` (`paginas.css:25-61`). A 1536 px el
  texto acaba hacia la mitad y la mitad derecha de la primera pantalla queda vacía; en el teléfono,
  las tres primeras pantallas de dirección financiera son solo texto y el tablero aparece hacia el
  píxel 3.000.
- **Antes:** `antes-digitales-escritorio-arriba.png`, `antes-financiera-escritorio-arriba.png`,
  `antes-digitales-movil-arriba.png`.
- **Después:** `despues-1-cabecera-digitales-escritorio.png`, `despues-1-cabecera-digitales-movil.png`.
  Desde 1100 px, dos columnas: el texto de siempre y, a la derecha, **la pieza que ya existe**: en
  soluciones digitales, una portada del portafolio con su etiqueta «Concepto · marca ficticia» y el
  enlace aprobado «Ver tres portadas de ejemplo»; en dirección financiera, el tablero gerencial de la
  portada (520 px, sombra de hoja, «Interfaz de muestra · datos ilustrativos»). Quieta: el momento de
  movimiento de cada página no cambia. En el teléfono la pieza va debajo de los botones. Las
  cabeceras sin pieza (servicios, nosotros, portafolio) solo bajan algo su aire para que asome lo
  siguiente a 730 px de alto.
- **Por qué mejora:** quien llega directo desde LinkedIn o el buscador ve una página de servicio
  como portada. Hoy lee una promesa; con esto ve el entregable, que es lo que hacen Mercury, Qonto y
  Brex en cada página de producto. Desaparece el salto entre una portada rica y unas interiores
  vacías.
- **Esfuerzo:** medio. **Toca algo aprobado:** textos y movimiento, no. Sí matiza la decisión
  «cabecera interior más tranquila que la portada, a propósito» (`PageHero.jsx:8`): sigue quieta,
  deja de estar vacía.

## 3 · La oferta de la web enseña las tres portadas, no un enlace

- **Qué y dónde:** `/servicios/soluciones-digitales#web` (`blocks/pages/Offer.jsx`). El título dice
  «Una página web que no parece una plantilla» y en toda la página, de 5.700 px, no hay una sola
  imagen que lo enseñe: la prueba es un enlace de texto al final de la sección.
- **Antes:** `antes-2-web-escritorio.png`. **Después:** `despues-2-web-portadas-escritorio.png`.
  Entre «Qué incluye» y «Cómo va», una tira con las tres vistas previas que ya existen
  (`public/portafolio/previa/`), con el mismo borde y sombra que en `/portafolio`, su referencia
  («Restaurante · Friedrichshain»…), la etiqueta «Concepto · marca ficticia» y el enlace, que sube
  desde el final. En el teléfono, una sola, la del teléfono.
- **Por qué mejora:** quien viene a comprar una web quiere ver webs. Tres portadas que no se parecen
  responden a «¿es una plantilla?» mejor que cualquier párrafo, y es el producto para Berlín.
- **Esfuerzo:** bajo (imágenes y estilos ya existen). **Toca algo aprobado:** no. El filete de «La
  semana, en una línea» no se toca.

## 4 · Menú, pie y canales: textos a `src/content`, y canales por idioma

- **Qué y dónde:** unas veinte cadenas visibles viven en `lib/site.js:37-98` («Inicio», «Servicios»,
  «Los dos servicios», «Empresa», «Legal», «Privacidad», «WhatsApp Ecuador», «Correo»…), contra la
  regla de PRODUCT.md de que ningún texto visible vaya fuera de contenido. `CONTACTS` es fijo: el
  alemán saldría con WhatsApp en el pie y en los dos cierres (`SiteFooter.jsx:31`, `Cierre.jsx:68`,
  `FinalCta.jsx:36`), y `FinalCta.jsx:29` lleva el correo escrito a mano.
- **Propuesta:** las etiquetas pasan a `sitio.<idioma>.js`; `contactos(lang)` devuelve WhatsApp en
  español y, en alemán, teléfono (`tel:`) y correo. Mismo arreglo para cuatro detalles del mismo tipo:
  el nombre de los servicios en el JSON-LD de las dos páginas de servicio (`page.jsx:56`);
  `og:locale`, que las páginas interiores pierden porque `pageMetadata` no lo pone
  (`lib/seo.js:85-92`); `es_ES` en `i18n/settings.js:9`, que debería ser `es_EC` o `es_419` (regla 10);
  y las comillas «…» escritas dentro de `Symptoms.jsx:19` (en alemán son „…“ y en inglés “…”).
- **Por qué mejora:** sin esto, el traductor no ve esos textos y el alemán incumple la decisión sobre
  WhatsApp.
- **Esfuerzo:** bajo-medio. **Toca algo aprobado:** mueve textos aprobados de sitio, sin cambiarlos.
- **Decisiones para Boris:** ¿el inglés lleva WhatsApp? Y en los cierres se pinta solo la etiqueta del
  canal, no el número: «Telefon» sin número sirve de poco; en alemán convendría enseñarlo.

## 5 · Una portada alemana hecha con bloques que ya existen

- **Qué y dónde:** la portada mezcla las dos líneas: la escena 50/50 de los tableros, las credenciales
  (las tres cifras son de Richard y de finanzas), KLINODA y el cierre que nombra a Richard. Con un solo
  servicio la escena revienta: `QueHacemos.jsx:57` desestructura dos y `escenaTableros` usa
  `cajas[1]` y `textos[1]` (`lib/animations.js:262-350`). Y sin la banda de KLINODA, `Noche` no avisa a
  la cabecera de que el cierre es oscuro.
- **Propuesta:** que la composición la decida el contenido, no el código: `home.de.js` lleva
  `variante: 'digital'` y `app/[lang]/page.jsx` compone `Portada` → la oferta de la web en una semana
  (`Offer` con su momento) → las tres portadas (`Portadas`) → KLINODA (`ProductBand`) → `FinalCta`.
  Ningún componente nuevo. `Firma` y `Method` necesitan aceptar que el método no exista o traiga solo
  el ejemplo de software.
- **Por qué mejora:** el visitante de Berlín ve en la primera página lo que se le vende, sin una
  línea que allí no se ofrece.
- **Esfuerzo:** medio-alto. **Toca algo aprobado:** sí; es una portada nueva y no se debe escribir una
  línea antes de que Boris decida:
  1. **El 50/50 (regla 1)** rige «donde aparezcan juntas», pero PRODUCT.md también dice «dos audiencias
     con el mismo peso». En alemán deja de ser verdad: hace falta una excepción escrita.
  2. **¿Se nombra la dirección financiera en alemán** (una frase honesta en «Nosotros») o no aparece?
  3. **Textos que cambian de sentido:** el titular de portada y su meta, el lema del pie, las
     credenciales, el cierre y «Dos líneas, una firma».
  4. **El método:** fuera en alemán, o solo con el ejemplo de software.

## 6 · «Nosotros»: de tres columnas con huecos a tres filas de registro

- **Qué y dónde:** `blocks/pages/Personas.jsx` y `.fichas` (`paginas.css:576-640`). Las tres fichas
  miden lo que mide la de Richard: la de Boris deja unos 170 px vacíos y la de Mirella se queda en
  blanco hasta abajo. Sin retratos, tres columnas iguales se leen como una plantilla de equipo a la
  que le faltan las fotos. En tableta, el texto ocupa media pantalla.
- **Antes:** `antes-4-nosotros-escritorio.png`, `antes-4-nosotros-tableta.png`. **Después:**
  `despues-4-nosotros-escritorio.png`, `despues-4-nosotros-tableta.png`. Cada persona es una fila
  con filete, como las reglas del método: cargo, nombre y lugar a la izquierda; lo que lidera en el
  centro; las cifras de Richard a la derecha. Una celda vacía en una fila de registro se lee como
  «sin anotación», no como un hueco. Los retratos, cuando lleguen, entran como una columna más.
- **Por qué mejora:** es la página donde se mide la confianza. Hoy transmite «faltan cosas»; en filas
  transmite lo que dice su titular, y parece intencional sin fotos.
- **Esfuerzo:** bajo-medio. **Toca algo aprobado:** textos, no. Sí cambia la maqueta de fichas «como
  las credenciales» (`Personas.jsx:4-6`).

## 7 · Dirección financiera: el tablero junto a «Qué hay dentro»

- **Qué y dónde:** `BoardShowcase` (`#entregable`) y el `FeatureGrid` que le sigue. El tablero se
  estira a 1.176 px (`.caja-pieza.entregable { max-width: none }`), contra DESIGN.md («piezas a tamaño
  real»): el gráfico queda chato y los indicadores, aplastados. Debajo, seis párrafos describen esa
  misma hoja sin señalarla, y desde ahí hay unos 2.300 px seguidos de solo texto.
- **Antes:** `antes-5-entregable-escritorio.png`. **Después:** `despues-5-entregable-escritorio.png`.
  Una sola sección en dos columnas: a la izquierda el tablero a unos 700 px, fijo mientras se baja
  (`position: sticky`, el patrón que ya usa `Steps`); a la derecha los seis entregables en una
  columna, con su rótulo «Entregables» y su título en pequeño. El momento «El tablero se dibuja» no
  cambia. Bajo 1000 px, como hoy.
- **Por qué mejora:** quien sabe de finanzas mira la hoja. Juntas, el texto explica lo que el ojo ya
  tiene delante, y la página pierde una sección de solo texto.
- **Esfuerzo:** medio. **Toca algo aprobado:** textos y movimiento, no; el título «Qué hay dentro, en
  concreto.» baja de tamaño. Si no se hace, conviene al menos limitar el tablero a unos 760 px.

## 8 · El énfasis de los titulares, por frase y no por palabra

- **Qué y dónde:** `components/registro/Resaltado.jsx:6-15` marca en negrita cada palabra que esté en
  `highlight`, por coincidencia exacta; el titular de la portada usa asteriscos por palabra
  (`Portada.jsx:24-26`). Fallos que llegarán con la traducción, todos en silencio: una palabra
  repetida («in», «a», «die») se pone en negrita todas las veces; la puntuación tiene que coincidir
  (`'nómina.'`); distingue mayúsculas; y `*auf Augenhöhe*` pondría en negrita solo «auf».
- **Propuesta:** `Resaltado` busca la frase (`highlight.join(' ')`) y marca su primera aparición, con
  un aviso en desarrollo si no la encuentra; la portada marca tramos `*…*` antes de partir por
  palabras. Los seis titulares actuales ya son frases contiguas: el HTML en español sale idéntico.
- **Por qué mejora:** el traductor escribe la frase que quiere resaltar y funciona; hoy un error no da
  ninguna señal.
- **Esfuerzo:** bajo. **Toca algo aprobado:** no.

## 9 · Tres arreglos de CSS que ya fallan hoy, y una hoja de límites para quien traduzca

- **Etiqueta de estado que no cabe.** `.k-etiqueta` y `.etiqueta-concepto` llevan
  `white-space: nowrap` (`klinoda.css:105-117`, `paginas.css:821-833`). Medido: la etiqueta mide
  323 px y su columna en `/nosotros`, 286 px a 1001 px de ancho y 319 px a 1100: se sale de su
  columna en todo ese tramo, y a 1001 px la página desborda 5 px. En alemán será más larga. **Antes:**
  `antes-7-etiqueta-1001.png`. **Después:** `despues-7-etiqueta-1001.png` (sin `nowrap`: parte en dos
  líneas y el desborde queda en 0).
- **La cabecera entre 1001 y 1100 px.** Con seis elementos en el menú, el botón «Agendar» queda a 9 px
  del borde a 1001 px, en lugar de los 32 px del canal. El alemán simulado con seis elementos no cabe.
  Propuesta: subir el corte del menú de 1000 a unos 1100 px (está escrito en seis sitios de
  `SiteHeader.jsx`), o reducir el hueco entre elementos.
- **Palabras largas en los titulares.** No hay `hyphens` ni `overflow-wrap` en todo el CSS, y en el
  teléfono los `h1` van a 34 px: una palabra de 19 letras («Unternehmenssoftware») desborda a 360 px.
  En la portada cada palabra es un bloque que no puede partirse. Propuesta: `hyphens: auto` y
  `overflow-wrap: break-word` en los titulares para `:lang(de)`.
- **Hoja de límites para el traductor** (medidos): rótulo de indicador ≤ 7 letras («Cartera» cabe por
  1 px; «Forderungen» no); nombre de documento ≤ 21; línea del título de la escena ≤ 29; palabra de un
  `h1` ≤ 18; y el signo ▲ o ▼ al principio de cada variación, que el código lee. Y tres supuestos del
  código que el inglés rompe: `cifra()` en `TableroGerencial.jsx:21` lee coma decimal («$1.2M» se
  leería como 12), `{pct} %` lleva espacio, y los millares van con punto.
- **Esfuerzo:** bajo. **Toca algo aprobado:** mínimo; la cabecera cambia entre 1001 y 1100 px.

## 10 · Tableta: los pasos en filas

- **Qué y dónde:** entre 760 y 1000 px, `.pasos.en-columnas` va a dos columnas
  (`paginas.css:924-926`): en `#web`, los pasos 01 y 02 quedan arriba y el 03, «Publicada», solo abajo
  a la izquierda (comprobado en el navegador). El filete de «La semana, en una línea» se parte en
  dos renglones y deja de leerse como una semana.
- **Antes:** `antes-6-pasos-tableta.png`. **Después:** `despues-6-pasos-tableta.png`. En ese tramo,
  los pasos van en filas, con el mismo formato que «Cómo trabajamos» de dirección financiera (el
  «cuándo» a la izquierda, 150 px). Para el momento de movimiento basta subir de 760 a 1000 px el
  umbral en que cada paso traza su filete, que es lo que el guion ya prevé para pasos apilados.
- **Esfuerzo:** bajo. **Toca algo aprobado:** solo ese umbral; el gesto es el mismo.

---

## Quedó fuera (por el tope de diez)

- **KLINODA se ve solo en la portada.** En `/servicios`, en soluciones digitales («No lo decimos: lo
  construimos.») y en el aviso de `/klinoda`, la mitad derecha de la banda es marino plano o está
  vacía, y la regla 3 de PRODUCT.md dice que fuera de su página KLINODA «enseña el producto». Propuesta:
  sacar su tablero a un componente propio, sin placa ni movimiento, y ponerlo en esas bandas. Esfuerzo
  medio-alto, porque hay que separarlo de la escena sin romperla.
- `nosotros.es.js` → `personas.retratoPendiente` no lo usa ningún componente: el traductor lo
  traduciría en vano.
- `portafolio.es.js` → «Están en inglés, como las pediría un negocio de Berlín» queda raro en alemán.
- `SiteHeader.jsx` (componente de cliente) importa `../content`, que importa todos los archivos de
  contenido: con tres idiomas conviene que reciba sus textos por props. No se midió en la compilación.
- El selector de idioma se lee «es», «en», «de» en un lector de pantalla, sin el nombre del idioma.

## Objeción, aparte

**«Las páginas interiores, sobrias a propósito».** De acuerdo con «quietas»; no con «solo texto».
PRODUCT.md dice que las dos audiencias leen la web entera en el teléfono, y muchas entran directas a
una página de servicio. Las referencias que eligió Boris ponen el producto en la cabecera de cada
página, no solo en la portada. La calma viene de la tipografía, el papel y la quietud, no de que
falte la imagen. Las propuestas 2, 3 y 7 no añaden movimiento. La inversión de contenido que más
cambiaría la percepción de la firma sigue siendo el retrato propio de los tres: ninguna maqueta lo
sustituye.

---

## Resumen para decidir

| # | Propuesta | Mirada | Impacto | Esfuerzo | Toca algo aprobado | Sí / No |
|---|---|---|---|---|---|---|
| 1 | Mapa de rutas por idioma (y página 404 propia) | Traducción | 5 | Medio | No | |
| 2 | La cabecera de cada servicio enseña su pieza | Diseño | 5 | Medio | Matiza «interiores sobrias» | |
| 3 | La oferta de la web enseña las tres portadas | Diseño | 5 | Bajo | No | |
| 4 | Menú, pie y canales a contenido; canales por idioma | Traducción | 5 | Bajo-medio | Mueve textos, no los cambia | |
| 5 | Portada alemana con bloques existentes | Traducción | 5 | Medio-alto | Sí: cuatro decisiones previas | |
| 6 | «Nosotros» en filas de registro | Diseño | 4 | Bajo-medio | La maqueta de fichas | |
| 7 | El tablero junto a «Qué hay dentro» | Diseño | 4 | Medio | Un título baja de tamaño | |
| 8 | Énfasis por frase, no por palabra | Traducción | 4 | Bajo | No | |
| 9 | Tres arreglos de CSS y la hoja de límites | Traducción | 4 | Bajo | Cabecera entre 1001 y 1100 px | |
| 10 | Tableta: los pasos en filas | Diseño | 3 | Bajo | Un umbral del movimiento | |

**Orden recomendado si se aprueban todas:** 8 y 9 (pequeñas, y protegen la traducción); 4 y 1 (la
estructura de idiomas); 3, 10, 6, 2 y 7 (diseño, antes de traducir para no maquetar dos veces); y la 5
al final, cuando Boris haya tomado sus cuatro decisiones.
