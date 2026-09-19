# Auditoría de la web en español — 2026-09-19

Revisión completa de `rediseno-2026` (commit `a7862c9`) como la vería un cliente, antes de traducir.
**No se cambió ningún archivo del sitio.** Capturas en `.impeccable/auditoria/`.

## Cómo se hizo

- **Páginas:** portada, `/servicios`, dirección financiera, soluciones digitales, `/nosotros`,
  `/portafolio`, las tres portadas (Regulars, Chalkline, Towpath) y `/klinoda`. Las legales no
  existen (ver B1).
- **Recorrido automático** sobre la compilación de producción: 10 páginas × 3 tamaños (1536 × 730,
  tableta 820 × 1180 y 390 × 844) × con y sin «reducir movimiento». Se baja la página entera para
  disparar las entradas y las escenas, y se miden desbordes, elementos fuera de la ventana, texto
  cortado, elementos ocultos, errores de consola y respuestas 4xx/5xx. Captura de página entera de
  cada una: `<página>-<tamaño>.png`.
- **Enlaces:** todos los internos abiertos uno a uno, con comprobación de cada ancla.
- **Accesibilidad:** axe-core (WCAG 2 A y AA) en cada página y tamaño, más el esquema de títulos.
- **Rendimiento:** peso y tiempos en escritorio, y la portada en el teléfono con red lenta simulada.
- **Textos:** leídos a mano los archivos de `src/content/`, y buscadas formas de España y
  marcadores.

## Resumen

| Prioridad | Cuántos |
|---|---|
| Bloquea publicar | 4 |
| Conviene arreglar | 9 |
| Detalle | 5 |

**Lo que está bien, comprobado:** ningún enlace interno roto y todas las anclas existen; ningún
desborde horizontal ni elemento fuera de la ventana en los tres tamaños, con y sin «reducir
movimiento»; sin errores de consola en el sitio; **axe: 0 infracciones en las siete páginas del
sitio**; todas las imágenes con texto alternativo; ningún «vosotros» ni forma de España en el texto
visible; Calendly abre el evento de 20 minutos y tiene huecos libres (21, 23, 24, 28 y 30 de
septiembre). Las páginas interiores pesan entre 1 y 17 KB de HTML y cargan en menos de 0,3 s en
local.

---

## Bloquea publicar

### B1 · No hay páginas legales

- **Dónde:** el pie de todas las páginas. «Privacidad» y «Aviso legal» apuntan a `#`.
- **Captura:** `h-pie-legal.png`.
- **Por qué bloquea:** en Alemania el *Impressum* (§ 5 DDG) y la *Datenschutzerklärung* son
  obligatorios para una web comercial, y se sancionan; en Ecuador lo pide la LOPDP. Además, un
  enlace a `#` rompe el principio 5 de PRODUCT.md.
- **Propuesta:** crear `/privacidad` y `/aviso-legal` (y su versión alemana *Impressum* y
  *Datenschutz*) con los datos de la entidad legal. Necesita la entidad y el abogado. Mientras no
  existan, no publicar.

### B2 · «Imagen provisional de archivo» a la vista en la portada

- **Dónde:** portada, esquina inferior derecha del vídeo (`home.es.js` → `portada.credito`).
- **Captura:** `h-credito-portada.png`.
- **Por qué bloquea:** es un texto provisional publicado en la primera pantalla de la web. Se lee
  como algo sin terminar.
- **Propuesta:** o vídeo propio, o quitar el rótulo. Un clip de archivo con licencia no obliga a
  decir que es provisional; si la licencia pide crédito, poner el del autor en el pie.

### B3 · `/en` y `/de` sirven la web en español

- **Dónde:** todas las páginas bajo `/en` y `/de`, el selector «ES · EN · DE» de la cabecera y el pie, y
  `sitemap.xml`.
- **Captura:** `h-en-en-espanol.png`.
- **Por qué bloquea:** cada una declara `lang="en"` o `lang="de"`, su propio canonical y hreflang,
  pero el texto está en español. Un buscador indexa tres copias de lo mismo, un lector de pantalla
  lee español con voz inglesa o alemana, y quien pulsa «DE» no encuentra alemán.
- **Propuesta:** publicar con las traducciones. Si hubiera que publicar antes: quitar EN y DE del
  selector y del sitemap y poner `noindex` en `/en` y `/de`.

### B4 · Las tres portadas cargan las fuentes desde Google

- **Dónde:** `public/portafolio/regulars/`, `chalkline/` y `towpath/` → `fonts.googleapis.com`.
- **Por qué bloquea (para Berlín):** cargar Google Fonts desde los servidores de Google, sin
  consentimiento, envía la IP del visitante a EE. UU. En Alemania se ha sancionado (LG München I,
  20-01-2022) y ha dado pie a oleadas de cartas de reclamación. Precisamente son las portadas que se
  van a enseñar a clientes de Berlín. El sitio de CJM Nexus no tiene este problema: sirve sus
  fuentes con `next/font`.
- **Propuesta:** descargar las fuentes de cada portada (Caprasimo y Figtree; Encode Sans; Rozha One
  y Hanken Grotesk) a su carpeta y cargarlas con `@font-face`. El diseño no cambia.

---

## Conviene arreglar

### C1 · Contraste por debajo de AA en dos portadas

- **Dónde:** Chalkline, cinco textos del cajetín (`#6e6c66` sobre `#e4e3de`, **4,08:1**); Towpath,
  la etiqueta «Concept homepage · fictional brand» (`#a4b0d8` sobre `#23409a`, **4,3:1**).
- **Capturas:** `h-chalkline-contraste.png`, `h-towpath-contraste.png`.
- **Por qué:** las portadas son la muestra de lo que entregamos, y PRODUCT.md promete WCAG AA.
- **Propuesta:** oscurecer el gris de Chalkline (alrededor de `#5c5a55` da ≥ 4,5:1) y aclarar el
  de Towpath (alrededor de `#bcc6e8`). Es tocar el diseño de las portadas: decide Boris.

### C2 · Los datos del tablero de dirección financiera no cuadran

- **Dónde:** `/servicios/direccion-financiera#entregable` (`servicios.es.js` →
  `finanzas.deliverable.board`).
- **Captura:** `h-tablero-financiera.png`.
- **Qué falla:** el indicador «Ventas» dice **▲ 12 %**, pero la barra de junio (114) está un
  **5,6 %** sobre la de mayo (108). «Rentabilidad ▲ 1,5» no lleva unidad. DESIGN.md pide que los
  datos cuadren entre sí («quien sabe de finanzas mira justo eso»), y el tablero de la portada sí
  cuadra.
- **Propuesta:** mayo a 102 (así junio queda un 11,8 % arriba) o el indicador a «▲ 6 %», y
  «▲ 1,5 pt».

### C3 · El vídeo de la portada pesa 1,75 MB y se descarga también en el teléfono

- **Dónde:** portada (`/portada/hero.webm`), el 99 % de lo que pesa la página.
- **Medido:** en el teléfono con red lenta simulada, el elemento principal tarda **2,4 s** en
  pintarse (LCP) y se bajan los 1,75 MB completos.
- **Propuesta:** en el teléfono, o con ahorro de datos o red lenta (`navigator.connection`), quedarse
  con el póster; y una versión del vídeo por debajo de 600 KB para pantallas pequeñas.

### C4 · Conexión a Calendly en todas las páginas, sin que nadie la pida

- **Dónde:** `app/[lang]/layout.jsx`, `<link rel="preconnect" href="https://assets.calendly.com">`.
- **Por qué:** abre una conexión con un tercero (y le da la IP) en cada visita. «Agendar» es un
  enlace normal a calendly.com, no un widget, así que no gana nada. En Alemania suma al punto B4.
- **Propuesta:** quitar el `preconnect`.

### C5 · La acción principal tiene tres nombres

- **Dónde:** en todo el sitio es «Agendar diagnóstico ejecutivo». En soluciones digitales es
  «Contar tu caso · 20 min» (cabecera) y «Agendar una conversación» (cierre). Las tres llevan al mismo
  Calendly, que además se llama «Diagnostico Ejecutivo», sin tilde y con la interfaz en inglés.
- **Por qué:** PRODUCT.md dice que hay una sola conversión. Quien viene por una web no va a pedir un
  «diagnóstico ejecutivo», pero entonces necesita su propio evento, no otro nombre para el mismo.
- **Propuesta:** decidir si la línea web tiene su evento de Calendly («Conversación · 20 min») o si
  se unifica el nombre. Corregir la tilde en Calendly.

### C6 · Promesas que PRODUCT.md no respalda

- **Soluciones digitales, «¿Quién la mantiene después?»:** «el mantenimiento va incluido: … y los
  cambios que vayas necesitando». Es una promesa abierta; PRODUCT.md solo dice «mantenimiento
  incluido». Propuesta: acotarla («cambios pequeños», o «los cambios, con un límite escrito»).
- **Soluciones digitales, «¿Cuánto cuesta?»:** «Son veinte minutos, sales con una propuesta
  cerrada». Contradice la misma página («salimos con el alcance escrito y una propuesta con precio»
  tras dos o tres sesiones) y la de dirección financiera («de esa conversación sale una propuesta»).
  Propuesta: «sales sabiendo qué necesitas; la propuesta cerrada te llega después, por escrito».
- **Sistemas a medida:** «dos o tres sesiones», «acceso al sistema desde el primer mes» y «soporte
  con tiempos de respuesta escritos». PRODUCT.md solo documenta el ritmo de la web y el financiero.
  Confirmar con Boris.
- **Garantía «Probamos lo que construimos»:** «pruebas automáticas en cada cambio», dicho para las
  dos ofertas. En KLINODA es cierto; en una web de una semana, hay que confirmarlo o acotarlo a los
  sistemas.

### C7 · Frases repetidas

- «un informe que nadie abre», dos veces en dirección financiera (intro del mes y entregable).
- «plantilla con el logotipo cambiado», tres veces en `#web`: el título («no parece una
  plantilla»), la entrada y el primer punto de «Qué incluye». Captura: `h-web-incluye.png`.
- En las credenciales, «clientes asesorados» y, justo debajo, «Asesorados por Richard Carvajal…».
- «Lo que preguntan antes de empezar.» es el título de las dos preguntas frecuentes (aceptable,
  pero fácil de variar).
- **Propuesta:** dejar una de cada una. Son textos aprobados: decide Boris.

### C8 · Imágenes para compartir con el eslogan viejo

- **Dónde:** `og-es.png`, `og-en.png` y `og-de.png`, en todas las páginas. Ya anotado en
  CONSTRUCCION.md.
- **Por qué:** al compartir un enlace en LinkedIn o WhatsApp sale el eslogan en inglés que se
  retiró. Para Berlín, LinkedIn es el canal principal.
- **Propuesta:** rehacerlas con el titular nuevo, una por idioma, cuando existan las traducciones.

### C9 · Documentos y comentarios desactualizados antes de traducir

- **PRODUCT.md:** «Mercados reales hoy: Ecuador y Estados Unidos» (ahora es Berlín primero), «no
  hay portafolio» y «las fotos esperan a la página “Nosotros”».
- **Comentarios del código** que ya no son verdad: «TEXTO POR APROBAR» en `home.es.js` (líneas 28,
  44, 203 y 252), `servicios.es.js` (136 y 565) y `nosotros.es.js` (26); «SUPUESTO» en
  `servicios.es.js` (580); y «no aparece ni un portafolio» en `servicios.es.js` (393). No se publican,
  pero quien traduzca los lee como instrucciones.
- **Propuesta:** limpiarlos en una pasada antes de traducir.

---

## Detalle

- **D1 · La portada no tiene título para KLINODA ni para las credenciales.** El esquema de títulos
  pasa de «Qué hacemos» al cierre; con un lector de pantalla no se puede saltar a KLINODA. Propuesta:
  la pregunta «¿Quieres conocer más sobre KLINODA?» como `h2`, o un `h2` visualmente oculto.
- **D2 · Títulos pegados en dos portadas:** en Chalkline, el `h2` se lee «…Prenzlauer BergOn site
  now…», y en Towpath el `h1`, «TowpathNeighbourhood barber…»: dos `span` sin espacio entre ellos.
  Propuesta: un espacio o un salto entre los dos.
- **D3 · Fechas que caducan en las muestras:** «Junio 2026» en el tablero de la portada. Propuesta:
  el mes sin año.
- **D4 · Texto cortado con puntos suspensivos a propósito** en el portal de documentos («Informe
  mensual de r…»). Es diseño de producto, pero en 1536 px corta los tres primeros documentos.
  Propuesta: nombres más cortos en la muestra.
- **D5 · El evento de Calendly está en inglés** y en hora de Europa central: bien para Berlín, raro
  para Ecuador. Ver C5.

---

## Qué hay que ADAPTAR para Berlín, no solo traducir

- **Moneda y formatos:** los tableros de muestra van en dólares y con formato latino («$1,24 M»,
  «$612 K», «Junio 2026», «12 jun»). En alemán, «1,24 Mio. €», fechas «12.06.», horas de 24 h. Las
  portadas de Berlín ya lo hacen bien.
- **Ecuador en el texto:**
  - el pie («Ecuador y Alemania») y las credenciales («equipo en Ecuador y Alemania»);
  - la pregunta de soluciones digitales «¿Trabajan con empresas fuera de Ecuador?», que para Berlín es
    la pregunta al revés;
  - el «equipo en Ecuador y en Alemania» de las preguntas de dirección financiera;
  - KLINODA, «salud ocupacional en Ecuador», que se queda, pero hay que contar por qué aparece.
- **WhatsApp:** «enlace directo a WhatsApp» en lo que incluye la web y «WhatsApp Ecuador / WhatsApp
  Alemania» en el cierre de todas las páginas. En Alemania se espera teléfono, correo y formulario;
  WhatsApp Business tiene además su problema de protección de datos.
- **Vocabulario del mercado:**
  - «contador» es el *Steuerberater*;
  - «declarar impuestos», «financiamiento» y «PYMEs» pasan a *Steuererklärung*, *Finanzierung* y
    *KMU* / *Mittelstand*;
  - «plata» no se traduce.
- **Dirección financiera en Berlín:** hay que decidir si se ofrece. Richard trabaja desde Ecuador; una
  empresa alemana trabaja con HGB, DATEV y la BWA de su *Steuerberater*. Las cifras de Richard (100+
  clientes en Latinoamérica, EE. UU. y Europa) valen, pero el servicio necesita su versión alemana o
  una nota honesta.
- **Tratamiento:** en alemán, *Sie* o *du*. Para B2B, lo esperable es *Sie*; la regla 10 de PRODUCT.md
  (tuteo) es para el español.
- **Legal y contratos:** además de B1, un cliente alemán de web pedirá el contrato de encargo de
  tratamiento (AVV) y el alojamiento en la UE. Conviene decirlo en «Qué incluye».
- **Precio y plazo:** «Sin costo · sin compromiso» es *kostenlos und unverbindlich*. «En una
  semana» se mantiene, con su letra pequeña.

---

## Para recorrerla

Servidor de desarrollo encendido en `http://localhost:3000/es` (entrada `sitio` de
`.claude/launch.json`).
