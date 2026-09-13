# Portada CJM Nexus — plan de dirección visual

12 de septiembre de 2026. Maquetas de decisión, no código del sitio.
Archivos: `A-clara.html`, `B-oscura.html`, capturas en `shots/`.

---

## 1. Paleta — cinco tintas, y ni una más

| Nombre | Valor | Papel en la página |
|---|---|---|
| **Papel** | `#F3F1ED` | El fondo de A. Es el `canvas` que ya está en tailwind.config.js. |
| **Marino tinta** | `#141F3A` | Todo el texto en A; el fondo entero en B. Una sola voz institucional. |
| **Cobre** | `#C9784A` | El único acento. Lo que se pulsa, la regla que avisa, el trazo del dato. |
| **Piedra** | `#B9B1A7` | Filetes, separadores y la letra pequeña sobre oscuro. |
| **Blanco** | `#FFFFFF` | Solo las hojas que contienen un entregable en A. El tablero se lee como papel puesto encima. |
| **Marino humo** (solo B) | `#1E2D4F` | Las hojas de entregable sobre fondo oscuro. |

**El verde azulado sale de la portada.** Estaba para emparentar la línea digital con
KLINODA, pero en la portada hacía justo lo contrario de lo que queremos: pintaba finanzas
de cobre y tecnología de verde, y dos colores distintos para dos líneas se leen como dos
categorías distintas de negocio. Un solo acento para las dos es lo que las iguala. El
verde sigue vivo en la página de KLINODA, donde sí es la marca del producto.

**Ningún gradiente.** El sistema actual manda `bg-g-*` en fondos, botones y titulares.
Esa era la petición de las rondas de julio y agosto; las cuatro referencias que aprobaste
no tienen ni uno. El color plano es lo que hace que la fotografía tenga toda la energía.

## 2. Tipografía

- **A — Plus Jakarta Sans (titulares) + Inter (texto).** Defiende la decisión del
  3 de septiembre: es la familia de KLINODA y emparenta firma y producto.
- **B — Newsreader (titulares) + Inter (texto).** Serif editorial con cursiva de verdad
  y varios pesos. Es lo que hace que Rothschild se lea como una casa con historia y no
  como una web de este año.
- En las dos: **cifras con numeración tabular** (`font-variant-numeric: tabular-nums`).
  Un tablero financiero cuyas columnas no cuadran dice que no sabemos de esto.
- Probé **Instrument Serif** primero y lo descarté: el detector de la skill lo marca como
  una de las serifs saturadas de la ola de webs hechas con IA, que es exactamente el
  problema que venimos a resolver.

## 3. Composición — «el registro»

La portada está montada como el documento que la firma entrega, no como una página de
captación. De arriba abajo:

1. **La ficha.** Un filete con dos campos: *Asunto* (finanzas, tecnología, los dos países)
   y *Nosotros* (los tres nombres). Aquí es donde se dice que somos internacionales: con
   los dos países escritos, sin banderitas ni mapas.
2. **El titular y la fotografía.** El único gesto fuerte de la pantalla.
3. **La banda del criterio.** «Dos campos. Un criterio. Control: en los números y en el
   software.» — texto tal cual de `home.es.js`, que hasta ahora estaba enterrado dentro de
   la esfera del hero y aparecía solo si alguien hacía scroll.
4. **Las dos mitades.** Ancho idéntico, un filete de 1 px entre ellas.
5. **El pie de imprenta.** Los seis hechos como tabla de 4 × 2. Hoy son un ticker que se
   mueve: un dato que pasa no se puede leer, y moverlo no lo hace más creíble.

**Ninguna sección entra con desvanecido.** Una sola animación en toda la página, y explica
algo: los dos entregables se dibujan una vez, a la vez y con el mismo peso. En finanzas el
trazo cruza la línea de meta (por eso el gráfico se llama «ventas contra meta»); en
tecnología el recorrido va de las tres fuentes al documento firmado. Con «reducir
movimiento» activado los dos aparecen ya dibujados.

## 4. El 50/50, resuelto en cuatro sitios

1. **La fotografía no toma partido.** Es una persona y una pantalla: la dirección
   financiera ocurriendo sobre el software. Si el hero enseñara un tablero, la línea
   digital quedaría debajo en la misma pantalla.
2. **La banda de las dos mitades**, en la primera pantalla, con ancho idéntico, el mismo
   cuerpo de letra y el mismo color. Ninguna lleva acento que la otra no lleve.
3. **En la sección, dos columnas iguales**, y los dos entregables miden exactamente lo
   mismo: 432 px de alto, empiezan y terminan en la misma línea. La igualdad es medible,
   no una impresión.
4. **KLINODA baja a una fila propia** debajo de las dos columnas, etiquetada «producto
   propio». Como tercer panel convertía el 50/50 en 33/33/33 y ponía la medicina
   ocupacional al nivel de las dos líneas de negocio.

## 5. Qué hace única a esta portada

Que está construida como el entregable de la firma: campos, filetes, tabla de imprenta y
dos entradas de igual peso. Cuando el método es «decidimos por escrito en actas
numeradas», que la página tenga la forma de un documento no es una metáfora decorativa,
es la primera prueba del método, y se lee antes de leer ni una palabra. Una consultora
financiera no tiene los entregables dibujados con datos reales; una agencia de software
no tiene quince años de dirección financiera firmando la ficha.

## 6. Autorrevisión — lo que cambié porque valía para cualquier web

| Lo que iba a hacer | Por qué era genérico | Lo que hice |
|---|---|---|
| Hero partido: texto a la izquierda, foto a la derecha | Es el hero por defecto de cualquier B2B, y lo hace el 80 % de las webs de las cuatro referencias incluidas | Se queda en A (es lo que Brex y Qonto hacen bien), pero la primera pantalla no termina ahí: sigue la banda del criterio y la tabla de imprenta, que son estructura de documento y no de landing |
| Tres tarjetas iguales de icono + título + texto para los servicios | El contenedor perezoso; además no demuestra la igualdad, solo la insinúa | Dos columnas medidas con filetes, sin caja, y los dos entregables con la misma altura exacta |
| «Entregable mensual» / «Publicada en días» como segunda etiqueta de columna | Texto que yo inventé para rellenar una rejilla | Fuera. Las dos columnas abren igual |
| Rótulo blanco sobre la foto con una frase de posicionamiento | Frase que no está en `home.es.js`, escrita por mí para que la foto «dijera algo» | Fuera. El criterio pasa a la banda, con el texto aprobado de `hero.reveal` |
| Resplandor de cobre bajo el botón en la dirección oscura | El halo de color es la firma visual de la interfaz hecha con IA | Sombra de elevación neutra, con desplazamiento y desenfoque |
| Numeración 01 / 02 / 03 en grande | Decoración que finge información | El `index` no se dibuja; «Servicio 01» queda como referencia pequeña de la entrada, del mismo tamaño en las dos columnas |

## 7. Lo que todavía no es decisión mía

- **Falta una frase para abrir la sección.** `home.es.js` solo tiene
  `fields.eyebrow: 'Qué hacemos · desliza'`, y en esta estructura no hay nada que
  deslizar. En las maquetas se lee «Qué hacemos» más una frase propuesta
  («Dos líneas, una firma. La misma casa define el número y construye el sistema que lo
  produce.», sacada del posicionamiento de PRODUCT.md). Necesita aprobación, o hay que
  corregir el `eyebrow`.
- «Arquitectura», la etiqueta de cabecera del segundo entregable, también es propuesta.
- Las dos fotografías son de archivo y están marcadas como provisionales en la propia
  página. Las reales del equipo siguen siendo el camino crítico.

---

# Dirección C — la fusión

12 de septiembre de 2026. `C-fusion.html`. Base: A-clara. Capturas: `shots/C-*.png`
y las dos hojas `shots/comparacion-*.png`.

## Lo que cambia respecto de A

| | A-clara | C |
|---|---|---|
| Portada | Foto a la derecha, texto a la izquierda | **Fotografía a sangre**, titular y subtítulo centrados encima |
| Marca | Texto plano | **Isotipo + «CJM NEXUS» espaciado**, como Mercury |
| Ficha | Encima de la foto | **Debajo**: la foto es la cubierta, la ficha abre el documento |
| Movimiento | Solo el dibujo de los entregables | **Secuencia de entrada escalonada** (una vez) + hover reales + el dibujo |
| Marino | Texto y bandas varias | **Texto y una sola banda de cierre** |
| Entregable 02 | Diagrama de arquitectura | **Pantalla de operación**: documentos, estados y traza |
| Pie de imprenta | 4 × 2 con un «Desliza» suelto | **3 × 2**, seis hechos, seis celdas |

## Las decisiones nuevas

**1. La foto manda la primera pantalla, no el marino.** Es `hero-oscura.jpg`, la de B, pero
sin el velo del 90 %: filtro de brillo al 60 % y un degradado vertical que va del 62 % arriba
al 34 % en el tercio del titular. La banda se lee como fotografía, no como pintura marino.
Medido sobre los píxeles reales: el peor punto detrás del titular da 5,33:1 con texto blanco,
mediana 11:1, y ningún píxel baja de 4,5. Los siete textos sobre la foto pasan AA.

**2. El movimiento, tres cosas y ninguna decorativa.**

- *Al cargar:* cabecera, titular, entrada, acciones y nota entran escalonadas cada 80 ms con
  una subida de 16 px, y la fotografía asienta de 1,05 a 1 en dos segundos. Ocurre una vez.
- *Al apuntar:* el botón oscurece, sube 2 px y la flecha avanza 3 px; los enlaces dibujan un
  filete de cobre de izquierda a derecha; cada mitad de la primera pantalla se vuelve papel
  blanco, su filete superior se vuelve cobre y la referencia se tiñe; las columnas de la
  sección tiñen su propio filete; los entregables se levantan 3 px.
- *Al entrar en pantalla:* los dos entregables se dibujan a la vez.
- La cabecera se vuelve sólida cuando la fotografía ya ha pasado, y entonces aparece
  «Agendar · 20 min». Es lo único que aparece con el desplazamiento.
- Con «reducir movimiento» todo está visible y quieto. Sin JavaScript, también: el estado
  oculto lo pone una clase que añade el propio guion.

**3. Los entregables ya no son dibujos.** El tablero sube a cuatro indicadores con minigráfico,
gráfico con eje, leyenda y línea de meta, y una tabla de rentabilidad por línea. El segundo
deja de ser el diagrama de arquitectura —era lo que más parecía ilustración— y pasa a ser una
pantalla de operación: siete documentos con su origen y su estado, pie de tabla con el filtro,
y a la derecha la traza del documento seleccionado con cinco sucesos fechados. Las reglas, los
permisos y la trazabilidad se ven ocurriendo en vez de estar rotulados. Los dos miden
exactamente 500 px y empiezan y terminan en la misma línea, hasta 768 px.

Los dos llevan al pie **«Interfaz de muestra · datos ilustrativos»**. No estaba en A y hace
falta: el principio 1 de PRODUCT.md obliga a que ninguna cifra pueda leerse como resultado
propio o de un cliente.

**4. La ficha suelta la geografía.** «Ecuador y Alemania» sale y entra **«En español, inglés y
alemán»**. Razón de fondo, no de estilo: PRODUCT.md dice que los mercados reales hoy son
Ecuador y Estados Unidos, así que la línea anterior nombraba un país sin actividad y omitía uno
con actividad. Los idiomas sí están confirmados. «Equipo en Ecuador y Alemania» se queda en el
pie de imprenta, que es donde ese dato es exacto. La nota bajo el botón pierde los idiomas para
no repetirlos en la misma pantalla: queda «Sin costo · sin compromiso · 20 minutos».

## Lo que hace falta y no tengo

**Un isotipo vectorial de una tinta.** `cjm-isotipo.png` son 256 px de mapa de bits con globo de
meridianos, corbata y degradados azul y turquesa. A 27 px los meridianos caen por debajo del
píxel y se empastan en una nube gris, y el azul-turquesa pelea con la paleta plana marino y
cobre. En la maqueta va un **isotipo provisional redibujado** en SVG de una tinta que conserva
la geometría reconocible —el anillo, los cuatro nodos y el monograma— y suelta lo demás.

Lo que hay que pedirle a quien diseñó la marca, en este orden:

1. `cjm-isotipo.svg`, curvas vectoriales de verdad (no un JPEG metido dentro de un SVG, que es
   lo que traían los PDF), **una sola tinta**, sobre lienzo cuadrado y con el margen óptico ya
   incorporado.
2. Una **versión reducida para tamaños pequeños**: sin meridianos, sin corbata, sin degradados y
   sin esferas con brillo. Es la versión que toda marca tiene para favicon y cabecera.
3. Si es posible, el logotipo completo en vectorial. No es urgente: la marca denominativa
   compuesta en Plus Jakarta Sans espaciada es la decisión de `marca/LEEME.md` y funciona.

## Sigue sin ser decisión mía

- **«Veinte minutos para ver si podemos ayudarte.»** — titular de la banda de cierre. Lo escribí
  yo. No está en `home.es.js` y necesita aprobación o sustitución.
- Sigue en pie lo que ya estaba: la frase de apertura de «Qué hacemos», la etiqueta
  «Arquitectura» (ahora «Portal de empresa»), y que las dos fotografías son de archivo.
- **Plus Jakarta Sans.** El detector de la skill la marca como fuente saturada de la ola de
  webs hechas con IA. Se mantiene porque es la decisión del 3 de septiembre y emparenta la firma
  con KLINODA, pero conviene saber que es el único aviso que queda abierto. La alternativa ya
  probada es Newsreader, la serif de B.

---

# Ronda 2 — pantalla completa, movimiento con oficio y la puerta de KLINODA

12 de septiembre de 2026. Referencia declarada: **mercury.com**.

## 1. La portada ocupa la pantalla entera

`100svh`, con `100vh` de reserva para navegadores viejos. `svh` y no `vh` porque en el
móvil la barra del navegador se retrae al bajar: con `vh` la primera pantalla mide más
que lo que se ve, y la ficha asomaría igual. Medido: el hero mide exactamente el alto de
la ventana en 1440, 1280, 768, 390 y 320.

**La señal de que hay más abajo** es un filete de 44 px centrado abajo, con un tramo de
cobre que lo recorre cada 2,8 s, y se apaga en cuanto alguien empieza a bajar. Es
señalización, no adorno: desaparece en cuanto ha cumplido su función.

## 2. El aliento de la fotografía

`transform: scale(1 → 1,06)` en 22 s, `ease-in-out`, `infinite alternate`.

- **`alternate` es lo que evita el salto.** Con `infinite` a secas la imagen volvería de
  golpe a 1 cada 22 s. Al alternar, el viaje de vuelta es la propia animación: 44 s de
  ciclo y ni un corte.
- **Solo `transform`.** No toca `width`, `top` ni `background-position`, así que la
  tarjeta gráfica lo resuelve sin recalcular la página ni repintarla.
- Con «reducir movimiento» no se anima: se queda fija en 1,02.

### Qué haría falta para un vídeo como el de rothschildandco.com

Comprobado en su web el 12 de septiembre de 2026:

| Pieza | Lo que ellos tienen |
|---|---|
| El vídeo | `..._ambient_video_v5_v1-1080p.mp4`, 1080p, **24,5 MB** |
| El póster | Un WebP de 148 KB servido ya recortado al ancho del hero |
| El montaje | El `<video>` no está en el HTML inicial: lo inyecta un guion aparte después del primer pintado |

Traducido a lo que nos falta, por orden de dificultad:

1. **El material grabado.** Es el 90 % del trabajo y no es código: diez o quince segundos
   de plano ambiente, sin corte visible, rodados o licenciados. Es el mismo cuello de
   botella que ya tienen las fotografías del equipo.
2. **Un póster.** Un fotograma del propio vídeo, servido al ancho exacto. Sin él, la
   primera pantalla es un rectángulo negro mientras carga.
3. **Dos codificaciones.** MP4 (H.264) para que funcione en todo, y WebM o AV1 para pesar
   la mitad donde se pueda. Con `muted`, `loop`, `playsinline` y `autoplay`.
4. **Una regla para el móvil.** 24 MB en un plan de datos no es aceptable: en pantallas
   pequeñas se sirve solo el póster.
5. **Respetar «reducir movimiento»:** no se reproduce, se queda el póster.

**Recomendación:** el Ken Burns sobre fotografía fija es exactamente el sustituto correcto
hasta que exista ese material. Cuando llegue, el cambio en la página son unas quince
líneas; lo caro es la grabación.

## 3. La marca, con el archivo real

Fuera el símbolo provisional. Se usan los dos archivos de `public/marca/`:

- `cjm-isotipo.png` — el original, cuando la cabecera se vuelve papel.
- `cjm-isotipo-claro.png` — **nuevo**, sobre la fotografía y sobre marino.

**Por qué hacía falta la variante clara.** El original lleva el dibujo en marino sobre un
disco interior casi blanco. Sobre crema funciona; sobre la foto, el disco se recorta
contra el fondo y la marca se lee como una pegatina pegada encima. Se generó con
`scripts/marca.mjs`, función `isotipoClaro()`, que hace lo contrario que `klinodaClaro`:
vuelve transparente todo lo casi blanco —el disco y, de paso, los meridianos del globo,
que a 28 px solo aportan ruido— y pasa a blanco toda la tinta restante. Sale un dibujo de
una sola tinta que se apoya en el fondo en lugar de taparlo.

**Lo que sigue faltando:** el vectorial. Ninguno de los originales lo es.

## 4. Los tres momentos de scroll

Uno por sección, y cada uno cuenta algo. El vocabulario es de dos gestos, no de seis.

| Momento | Qué hace | Qué cuenta |
|---|---|---|
| **1 · «Qué hacemos»** | El filete bajo el rótulo se traza de izquierda a derecha en 0,85 s; el titular y la frase suben 14 px, escalonados | Se abre una sección del documento. Es el mismo gesto que el filete de cobre al apuntar: un trazo marca un límite |
| **2 · Los entregables** | El lienzo se queda quieto mientras pasa la columna de texto, y la pieza se arma en tres tramos: indicadores, gráfico, tabla | Esto no es una ilustración: es lo que se entrega, y se construye por partes con tus datos |
| **3 · El cierre** | Un filete de cobre cruza el ancho de la banda y las tres respuestas suben escalonadas | Termina el documento y empieza una decisión. Cierra con el mismo gesto con que abrió el momento 1 |

**Medido**, no supuesto: con ventana de 900 px el panel se queda quieto durante 120 px de
desplazamiento, y los tres tramos se arman dentro de ese tramo.

**Lo que aprendí por el camino y cambié.** El primer intento ocultaba los tramos hasta que
tocaban. El resultado era un panel con 500 px de blanco: no se lee como que se está
armando, se lee como que está roto. Ahora la pieza está entera desde el principio y lo que
avanza es el foco —los tramos pendientes al 34 %— y el dibujo del dato.

## 5. Degradados: tres, y solo tres

1. **El velo sobre la fotografía** — cinco paradas verticales.
2. **La banda de cierre** — marino a `#101A31` y a tinta honda, en 170°.
3. **El trazo del gráfico** — `linearGradient` en el `stroke`: sale de cobre apagado y
   llega encendido donde la línea cruza la meta.

Ninguno en titulares, ninguno en botones, ninguna mancha flotante.

## 6. «Qué hacemos»: dos filas a todo el ancho

Cada servicio ocupa una fila de `108vh`, con el texto a la izquierda y la interfaz a la
derecha, mucho mayor: **660 px de ancho frente a los 540 de la ronda 1**, y 640 px de alto.

**La igualdad, medida.** Las dos filas tienen la misma altura, el mismo reparto de
columnas, el mismo alto de pieza (640 px exactos hasta 768 px de ancho), el mismo número
de tramos y los mismos tiempos. En vertical una tiene que ir primera: lo resuelven las
etiquetas «Servicio 01» y «Servicio 02» y un tratamiento idéntico, que es la misma
decisión del punto 4 del plan original.

## 7. El cierre, con sustancia — TEXTO PROPUESTO, PENDIENTE DE APROBACIÓN

> **Siguiente paso**
>
> ### Veinte minutos con **quien va a hacer el trabajo**.
>
> **Con quién hablas.** Richard Carvajal en dirección financiera, Boris Carvajal en
> tecnología. No hay un comercial de por medio.
>
> **Qué pasa en la reunión.** Nos cuentas cómo decides hoy, con qué información y qué te
> falta. Preguntamos: no venimos a presentar.
>
> **Qué te llevas.** Qué conviene ordenar primero y en qué orden. Y si no somos la casa
> adecuada, te lo decimos en esa misma reunión.
>
> [Agendar diagnóstico ejecutivo · 20 min]
> Sin costo · sin compromiso · en español, inglés o alemán

Nombrar a los dos, y no solo a Richard, no es cortesía: las dos audiencias pesan igual en
PRODUCT.md, y nombrar a uno solo inclinaría la portada hacia esa línea.

## 8. KLINODA: puerta, no explicación

Banda propia a todo el ancho, sobre blanco. Solo: el rótulo «Producto propio», el
logotipo, dos frases, el estado, la captura del portal de empresa y el enlace. Todo lo
demás se queda para `/klinoda`.

Las seis reglas siguen en pie, y la captura no es invención mía: son las columnas y filas
ya aprobadas en `klinoda.es.js` (`privacy.mockup`) — cargo, evaluación y aptitud, sin un
solo nombre y sin un solo dato clínico, con su pie: «Diagnósticos, antecedentes y exámenes
no existen en esta vista.» Ninguna fecha, ninguna afirmación de validez.

El estado —«En piloto controlado · solo con datos ficticios»— se queda porque es la regla 6
y porque, en una puerta, es el mejor gancho que tiene el producto.

## 9. Dos fallos de accesibilidad que venían de antes

Encontrados con un barrido de contraste sobre todos los textos de la página, no a ojo.

1. **El botón de «Agendar» daba 3,35:1.** Blanco sobre cobre `#C9784A`. Es el único
   elemento de conversión de la página, y fallaba también en A y en B. El relleno del
   botón baja a `#A85A2E` (5,04:1) y al pulsar a `#8F4A22` (6,62:1). **El cobre `#C9784A`
   sigue siendo el acento** de filetes, trazos y puntos: lo único que cambia es el relleno
   de los botones. Si prefieres conservar el tono claro, la alternativa es subir el cuerpo
   de letra del botón a 19 px para que cuente como texto grande.
2. **Piedra `#B9B1A7` como color de texto pequeño sobre blanco daba 2,1:1.** Lo usé en
   seis sitios de los paneles. El plan reserva ese tono para filetes y para letra pequeña
   **sobre oscuro**; sobre papel pasa a `--gris` `#5A6375` (5,4:1).

Barrido final: sin fallos de contraste sobre fondos sólidos. Los siete textos sobre la
fotografía pasan AA medidos sobre los píxeles reales (el peor, 4,94:1 el titular, cuyo
umbral es 3 por ser texto grande).

---

# Ronda 3 — movimiento

13 de septiembre de 2026. Esta ronda va solo de movimiento. Referencia: **mercury.com**.
Capturas: `shots/r3-*.png` y la hoja `shots/r3-seis-alturas.png`.

## Qué hace Mercury, medido en su página

- **Ninguna librería de animación**: ni GSAP, ni ScrollTrigger, ni Lenis, ni Framer.
- `animation-timeline: scroll()` detrás de `@supports`, `view-timeline` y seis reglas `position: sticky`.
- Los cambios de color de sección van con transiciones de 0,3 a 0,5 s.

La maqueta hace lo mismo —fijar y mover ligado al desplazamiento— con GSAP y ScrollTrigger,
porque ya están en el repo con sus ayudantes (commit `e2d5f38`, fases 01 y 02). Está escrita con
las mismas piezas que el sitio para que pasarla a React sea trasladar y no reescribir:
`registerGsap()` de `lib/gsap.js`, la cuenta de `lib/surface.js`, la zona de
`hooks/useDarkSection.js`, los estados de `components/SiteHeader.jsx` y el corte de 1024 px de
`ExpandingFrame` y `HorizontalRail`.

## 1. La portada se mueve: vídeo

**Por qué la foto de la ronda 2 parecía fija.** Se movía —lo medí—, pero de 1 a 1,06 en 22 s es un
0,27 % por segundo: por debajo de lo que el ojo nota en los segundos que alguien mira una portada.

**El clip.** «Business people at work meeting», de @stockyana, en mixkit.co. Plano cenital de una
mesa larga con gráficos impresos, portátil y tabletas: finanzas y software sobre la misma mesa,
sin nadie mirando a cámara. Licencia comprobada en la página del propio clip: *Mixkit Stock Video
Free License*, uso comercial, sin atribución. **Provisional**, marcado en la página como la foto.

**Cómo se preparó.**

| | |
|---|---|
| Original | `4809-1080.mp4`, 111 MB, 1920×1080, 29,97 fps, 37,4 s, sin audio |
| Ventana | de 3,17 a 31,40 s de la fuente: 846 fotogramas, 28,2 s |
| Tono | horneado en el archivo (brillo al 64 %, contraste 1,05, saturación 0,88), no en un filtro de CSS |
| `hero.webm` | VP9, **1,79 MB** |
| `hero.mp4` | H.264 con `faststart`, **2,58 MB** |
| `hero-poster.jpg` | primer fotograma, 104 KB |

Rothschild sirve 24,5 MB.

**El bucle, medido y no supuesto.**

- *No existe un punto de bucle natural en este clip.* Busqué en todas las ventanas de 10 a 15 s y
  de 27 a 33 s: el mejor parecido entre inicio y final es 218 veces la diferencia entre dos
  fotogramas seguidos, porque la gente ya está en otra postura. Así que hay un fundido de 30
  fotogramas.
- *El fundido va al final del archivo.* La primera versión, de 12 s, lo tenía al principio: durante
  ese segundo se veía doble a las personas, y era justo el segundo que ve todo el mundo al llegar.
  Ahora los primeros 27 s son metraje limpio y el fundido ocurre antes de volver a empezar.
- *Las dos uniones son fotogramas consecutivos de la fuente.* Cuerpo → fundido: 0,9726 de SSIM
  frente a 0,9734 en la fuente sin comprimir. Costura final → inicio: 0,944 frente a 0,966; ese par
  ya trae movimiento de origen, y la diferencia restante es la calidad del fotograma clave frente
  al último.

**Cómo carga.** Sin `autoplay` en el HTML: el guion lo arranca solo si no se pide reducir
movimiento ni hay ahorro de datos, y lo pausa cuando sale de pantalla. Entra sobre su propio primer
fotograma, así que el paso de imagen a vídeo no se nota. Debajo queda el póster con la escala de 1 a
1,06 en 24 s, por si el vídeo no puede reproducirse.

**Contraste medido sobre 40 fotogramas reales del bucle**, con el color y la alfa reales de cada
texto: titular 5,97:1 · subtítulo 5,57 · nota 5,50 · enlace 7,10 · menú 9,82 · crédito 8,15.
Todo AA.

**Una trampa que encontré al medir.** `python -m http.server` no admite peticiones por rangos de
bytes, y sin ellas el navegador no puede saltar dentro de un vídeo: la primera medición de contraste
midió 24 veces el mismo fotograma y la descarté. Se rehízo con un servidor que sí los admite. En
Vercel no pasa.

## 2. Momento 1 — los dos tableros

*Qué cuenta: las dos líneas pesan lo mismo.*

| Tramo del recorrido | Qué pasa |
|---|---|
| 0–30 % | Las dos piezas, lado a lado y del mismo tamaño (570×487 a 1440×900). No se mueve nada |
| 30–72 % | Se apartan a la izquierda las dos a la vez, con la misma curva y la misma escala |
| 70–100 % | Entra el texto de cada servicio junto a su pieza, también a la vez |

- Fijado durante 1,2 pantallas de desplazamiento: dentro del máximo de dos.
- Solo `transform` y `opacity`; nunca alto ni ancho. El texto se atenúa con opacidad y no con
  `visibility`, para que un lector de pantalla lo lea siempre.
- **Corregido en la verificación:** el texto entraba a mitad del recorrido y la pieza 2, que cruza
  de la derecha a abajo a la izquierda, le pasaba por encima. Ahora entra cuando las piezas han
  llegado. Comprobado sin solapes al 45, 62, 74 y 86 %.
- **Solo con ≥1024 px de ancho y ≥760 px de alto.** El alto también está medido: a 1366×700 los dos
  textos se pisaban. Encaje comprobado en 1440×900, 1280×800, 1024×768, 1366×768 y 1920×1080.

## 3. Momento 2 — el cambio de tema

*Qué cuenta: termina el documento y empieza una decisión.*

- Cuando el cierre llega al 58 % de la pantalla, la página entera pasa de papel a marino en 0,7 s.
  Al volver a subir, vuelve a claro. Un solo cambio.
- El tema son ocho variables. Las interfaces de muestra no las usan: son papel blanco en los dos
  temas.
- **La cabecera se entera por el mecanismo del repo, portado tal cual.** El cambio de tema avisa a
  la cuenta de superficies con `marcarOscuro()`, igual que `ExpandingFrame` desde su `onProgress`,
  y la cabecera combina `con-fondo` y `sobre-oscuro` como `SiteHeader`. Comprobado: transparente y
  blanca arriba; marino con texto blanco a 40, 300 y 820 px sobre la foto; papel con texto tinta a
  940 px.
- **Corregido:** si la última sección mide menos que la pantalla, su borde nunca llega a la cabecera
  y la zona no se activaba. Se usa `clamp()` solo en esa sección; en la portada rompía el estado
  inicial.
- Con «reducir movimiento» no hay cambio de tema: el cierre es oscuro por sí mismo y avisa como
  cualquier sección oscura.

## 4. KLINODA

Sobre el portal: «¿Quieres saber más sobre KLINODA?» y el enlace a su página. Quitado el enlace
repetido de la columna izquierda. Ninguna información nueva. Las dos columnas arrancan en la misma
línea.

## 5. Lo que ya no se mueve

Retirados: la secuencia de entrada de la portada, los tres momentos de la ronda 2, el dibujo del
gráfico y de los trazos, y el tramo de cobre en bucle de la señal de desplazamiento. Se quedan los
estados al apuntar, que responden a la persona y no se mueven solos.

## Límites, comprobados

- **Nada fijado por debajo de 1024 px:** sin fijado a 1000 y a 390 px.
- **Con «reducir movimiento»:** sin fijado, sin vídeo, póster quieto y textos a opacidad 1.
- **El texto está en el HTML desde el principio:** comprobado pidiendo el HTML sin ejecutar nada; el
  guion no escribe texto en ningún sitio.

## Para pasarlo al sitio

- Momento 1 → un preset nuevo en `lib/animations.js` y un componente con el mismo `isWide` que
  `ExpandingFrame`.
- Momento 2 → las variables de tema en el CSS y un disparador que llama a `marcarOscuro()`.
- Vídeo → los tres archivos a `public/` y el `<video>` en `Hero.jsx`.

## Sigue pendiente

- Material propio grabado, que sustituye al clip de archivo.
- El isotipo vectorial.
- Los textos propuestos de la ronda 2 (el cierre y las dos frases de KLINODA).
- Plus Jakarta Sans, el único aviso del detector.

---

# Estado al cerrar la ronda 3

13 de septiembre de 2026. Traspaso para seguir en una conversación nueva: lo que ya está arriba
no se repite aquí; esto es lo que hace falta para retomar sin perder nada.

## Qué archivo es cada cosa

| Archivo | Qué es |
|---|---|
| **`C-fusion.html`** | **La versión vigente.** Dirección C tras la ronda 3: vídeo en la portada, los dos momentos de desplazamiento y la pregunta de KLINODA. Se sigue trabajando sobre esta |
| `C-fusion.r2.html` | Copia de seguridad de la ronda 2 tal como quedó antes de empezar la 3: foto fija con Ken Burns, filas de servicio a todo el ancho con el lienzo fijado, banda de KLINODA sin la pregunta y los tres momentos de la ronda 2. Solo para comparar o recuperar algo; no se edita |
| `A-clara.html`, `B-oscura.html` | Las dos direcciones de partida del 12 de septiembre. Históricas |
| `PLAN.md` | El registro: dirección C, ronda 2, ronda 3 y este traspaso |

No hay más copias: `C-fusion.r1.bak.html` se borró en la ronda 2 y `C-fusion.r3.html` al cerrar la
3, porque era idéntica a la vigente.

**Las secciones de la ronda 2 describen `C-fusion.r2.html`**, no la vigente, salvo en lo que la
ronda 3 no tocó: la ficha, el criterio, las dos mitades, la imprenta, el texto del cierre, la paleta
y las correcciones de accesibilidad.

### `img/`

| Archivo | Uso |
|---|---|
| `hero.webm`, `hero.mp4`, `hero-poster.jpg` | Vídeo provisional de la portada (ronda 3) y su primer fotograma |
| `hero-oscura.jpg` | Foto de B y de la ronda 2 |
| `hero-clara.jpg` | Foto de A |
| `cjm-isotipo.png` / `.webp`, `cjm-isotipo-claro.png` / `.webp` | Copias de `cjm-nexus/public/marca/` |
| `klinoda.png`, `klinoda-claro.png` | Copias de `cjm-nexus/public/marca/` |

Las imágenes de marca son copias: la fuente de verdad es `cjm-nexus/public/marca/`.

### `shots/`

| Prefijo | Qué muestra |
|---|---|
| `A-*`, `B-*` | Las direcciones de partida |
| `C-*` | **Ronda 2.** Los nombres se reescribieron en esa ronda y las capturas de la ronda 1 ya no existen. `C-momento-1/2/3` son los tres momentos de la ronda 2, retirados |
| `comparacion-*` | **Ronda 2**, contra mercury.com y brex.com (la portada todavía era la foto) |
| `r3-*` | **Ronda 3:** `r3-1` a `r3-6` son las seis alturas de escritorio, más `r3-movil`, `r3-reducir-movimiento` y la hoja `r3-seis-alturas` |
| `ref-*` | mercury.com y brex.com, capturadas el 12 de septiembre |

## Cómo servir la maqueta para que el vídeo funcione

- **Hace falta un servidor que admita peticiones por rangos de bytes** (cabecera `Range`, respuesta
  `206 Partial Content`). Sin rangos el navegador no puede saltar dentro del vídeo: `currentTime` se
  queda en 0. El bucle se reproduce igual, pero cualquier salto —y cualquier medición sobre el
  vídeo— falla en silencio.
- **`python -m http.server` no sirve**: no admite rangos. Es justo lo que tiene configurado ahora
  `.claude/launch.json` (entrada `maquetas-portada`, puerto 8777).
- **Necesita internet**: Google Fonts y GSAP 3.13.0 se cargan desde cdnjs.
- **Abrirla con doble clic (`file://`) no está comprobado.** No lo doy por bueno.

Este servidor sí está comprobado (devuelve `206`) y no tiene dependencias. Vivía en una carpeta
temporal que se pierde al cerrar, así que queda aquí entero. Es el mismo que se probó, con una línea
más para leer `PORT`:

```js
// servidor.mjs — node servidor.mjs <carpeta> [puerto]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const RAIZ = path.resolve(process.argv[2]);
const PUERTO = +(process.env.PORT || process.argv[3] || 8779);
const TIPOS = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.webm': 'video/webm', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  const ruta = decodeURIComponent(req.url.split('?')[0]);
  const archivo = path.resolve(path.join(RAIZ, ruta === '/' ? 'C-fusion.html' : ruta));
  if (!archivo.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
  fs.stat(archivo, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404'); }
    const tipo = TIPOS[path.extname(archivo).toLowerCase()] || 'application/octet-stream';
    const base = { 'Content-Type': tipo, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' };
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (!m) { res.writeHead(200, { ...base, 'Content-Length': st.size }); return fs.createReadStream(archivo).pipe(res); }
    let ini, fin;
    if (m[1] === '') { ini = Math.max(0, st.size - Number(m[2])); fin = st.size - 1; }
    else { ini = Number(m[1]); fin = m[2] === '' ? st.size - 1 : Math.min(Number(m[2]), st.size - 1); }
    if (ini > fin || ini >= st.size) { res.writeHead(416, { 'Content-Range': `bytes */${st.size}` }); return res.end(); }
    res.writeHead(206, { ...base, 'Content-Length': fin - ini + 1, 'Content-Range': `bytes ${ini}-${fin}/${st.size}` });
    fs.createReadStream(archivo, { start: ini, end: fin }).pipe(res);
  });
}).listen(PUERTO, '127.0.0.1', () => console.log(`sirviendo ${RAIZ} en http://localhost:${PUERTO}`));
```

Uso: `node servidor.mjs .impeccable/mocks/portada 8779` y abrir `http://localhost:8779/`.

### Lo que se quedó a medias con el panel del navegador

- `preview_start` de `maquetas-portada` falla porque **el puerto 8777 está ocupado por el PID
  23292** (`python -m http.server 8777 --bind 127.0.0.1`), un servidor que lancé en segundo plano
  durante la ronda 3. **El PID 23240** es el servidor con rangos en el 8779, lanzado desde la carpeta
  temporal. Si siguen vivos, se paran con `Stop-Process -Id 23292,23240`, **pero antes hay que
  comprobar** con `Get-CimInstance Win32_Process -Filter "ProcessId = …"` que siguen siendo esos: un
  PID puede haberse reutilizado.
- **Arreglo propuesto, sin aplicar** (la conversación se cortó antes): guardar el servidor de arriba
  en el proyecto y cambiar la entrada de `launch.json` a
  `"runtimeExecutable": "node"`, `"runtimeArgs": ["<ruta>/servidor.mjs", ".impeccable/mocks/portada"]`
  y `"autoPort": true`. Así usa el puerto que le asigne el panel y el vídeo funciona.

## Cómo se verificó la ronda 3

Los guiones estaban en la carpeta temporal y se pierden; queda el método, para poder repetirlo.

- **Navegador:** Playwright 1.49.1 con `channel: 'msedge'`. El Chromium que trae Playwright no
  decodifica H.264; Edge decodifica H.264 y VP9.
- **ffmpeg:** el paquete `ffmpeg-static` 5.3.0. Este equipo no tiene ffmpeg instalado; el paquete lo
  trae con libx264, libvpx-vp9 y libaom.
- **Contraste sobre el vídeo:** ocultar el texto con `visibility: hidden` (conserva la maqueta),
  pausar, saltar a N instantes del bucle, recortar la caja de cada texto y calcular la relación con
  su color y su alfa reales, tomando el percentil 0,5 % para ignorar píxeles sueltos de compresión.
  **Antes, comprobar que el salto funciona:** el `currentTime` real tiene que coincidir con el
  pedido y los fotogramas tienen que ser distintos.
- **Contraste sobre fondos sólidos:** barrido de todos los nodos de texto contra su primer ancestro
  con fondo opaco.
- **Momento 1:** posición del panel a lo largo del recorrido, para confirmar el fijado; textos dentro
  de su fila en seis tamaños de pantalla; ningún texto visible por encima del 5 % sobre una pieza al
  45, 62, 74 y 86 %.
- **Costura del vídeo:** SSIM del último fotograma frente al primero, comparado con el mismo par en
  la fuente sin comprimir.
- **Detector de impeccable:** en este equipo funciona en modo degradado (faltan htmlparser2,
  css-select, css-tree y domutils), así que sus hallazgos se quedan cortos. No es un visto bueno.
  La excepción para Plus Jakarta Sans vive en `mocks/portada/.impeccable/config.json`; al
  ejecutarlo desde la raíz del repo, el aviso salió igual.

## Cómo rehacer el vídeo

1. Descargar el original: `https://assets.mixkit.co/videos/4809/4809-1080.mp4` (111 MB).
2. Maestro casi sin pérdida. Fotogramas 95 a 941 de la fuente a 29,97 fps, con 30 de fundido
   colocados al final:

```bash
ffmpeg -t 33 -i 4809-1080.mp4 -filter_complex "[0:v]fps=30000/1001,scale=1920:-2:flags=lanczos,colorchannelmixer=rr=0.64:gg=0.64:bb=0.64,eq=contrast=1.05:saturation=0.88,setpts=N/FRAME_RATE/TB,split=3[a][b][c];[a]trim=start_frame=941:end_frame=971,setpts=PTS-STARTPTS[cola];[b]trim=start_frame=95:end_frame=125,setpts=PTS-STARTPTS[cabeza];[c]trim=start_frame=125:end_frame=941,setpts=PTS-STARTPTS[cuerpo];[cola][cabeza]blend=all_expr='A*(29-N)/29+B*N/29'[union];[cuerpo][union]concat=n=2:v=1:a=0,setpts=N/FRAME_RATE/TB,format=yuv420p[out]" -map "[out]" -r 30000/1001 -c:v libx264 -preset veryfast -crf 12 -an maestro.mp4
```

3. Los tres archivos que se publican:

```bash
ffmpeg -i maestro.mp4 -c:v libx264 -preset slow -crf 27 -profile:v high -level 4.1 -pix_fmt yuv420p -movflags +faststart -an hero.mp4
ffmpeg -i maestro.mp4 -c:v libvpx-vp9 -b:v 0 -crf 37 -row-mt 1 -deadline good -cpu-used 2 -an hero.webm
ffmpeg -i maestro.mp4 -frames:v 1 -q:v 4 hero-poster.jpg
```

El resultado tiene 846 fotogramas (28,2 s).

## Candidatos de vídeo descartados

Por si hay que cambiar el clip:

- **Pexels 3255275** (fauxels): cenital de ocho personas, pero con pantallas moradas de un producto
  ajeno y datos que no son nuestros.
- **Pexels 7952199:** gente de pie con acreditaciones colgadas y luz fría; no es una oficina.
- **Pexels 8824734:** su primer fotograma es una planta.
- **Mixkit 4547:** la estampa de «gente de negocios» en oficina blanca, y 77 MB.
- **Mixkit 261:** un logotipo de Apple en el centro del plano.
- **Pexels 7437144, 7439778, 6201692 y 6828870:** oficina blanca de startup, un primer plano y dos
  cafeterías.
- **Coverr:** la categoría de reuniones enlaza sobre todo a iStock, de pago.

Pexels muestra una pantalla de Cloudflare a los navegadores automáticos tras la primera página;
Mixkit no.

## Fuera del commit de este punto de control, a propósito

- `cjm-nexus/scripts/marca.mjs` (modificado: función `isotipoClaro()`) y
  `cjm-nexus/public/marca/cjm-isotipo-claro.png` / `.webp` (nuevos), de la ronda 2. Son del sitio y
  van en su propio commit.
- `cjm-nexus/public/marca/LEEME.md` **todavía no menciona la variante clara**: hay que añadirla a su
  tabla.
- `.claude/launch.json`, sin versionar.
- Los archivos sin versionar de `cjm-nexus/src/` que salen en `git status` ya estaban así antes de
  esta conversación; no son de estas maquetas.
- `.impeccable/hook.cache.json` está ignorado por git.

## Detalles conocidos que no están arreglados

- A mitad del momento 1 (en torno al 62 %), la pieza 2 roza al cruzar el pie «Interfaz de muestra»
  de la pieza 1. Es transitorio: al llegar quedan separadas.
- En tema oscuro la cabecera es tinta honda (`#0B1122`) sobre un suelo marino (`#141F3A`) y se lee
  como una barra. Es el estilo de `SiteHeader` (`bg-navy-deep`).
- Al final de cada vuelta de 28 s hay un fundido de 1 s con doble imagen de las personas. Con este
  clip es inevitable: no tiene un punto de bucle natural.
- El momento 1 solo existe con al menos 1024 × 760 px; por debajo se ve el estado en reposo, con
  pieza y texto en filas.

## Decisiones abiertas

1. Aprobar o cambiar los textos propuestos: el titular y los tres bloques del cierre, y las dos
   frases de KLINODA.
2. Plus Jakarta Sans. **Corrección:** en las rondas 1 a 3 la presenté como decisión abierta, pero
   `mocks/portada/.impeccable/config.json` guarda desde el 12 de septiembre una excepción del
   detector con el motivo «user confirmed: Boris eligio Plus Jakarta Sans + Inter el 3-sep-2026
   entre cuatro parejas comparadas, y es la familia de KLINODA». La decisión está tomada; solo
   queda confirmarla o revocarla.
3. Material propio grabado para la portada.
4. El isotipo vectorial de una tinta.
5. Cuándo pasar la maqueta al sitio (ver «Para pasarlo al sitio» en la ronda 3).
