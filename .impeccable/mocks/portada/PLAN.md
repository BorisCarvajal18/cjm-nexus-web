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

---

# Ronda 4 — la coreografía, acordada por guion antes de programar

13 de septiembre de 2026. Boris retiró tres límites propios («dos momentos y ya», «máximo dos
pantallas», «el tema al llegar al cierre») y pidió un guion tiempo a tiempo antes de tocar código.
Se aprobó con tres ajustes: **software en espejo**, `launch.json` apuntando al servidor con rangos y
el ajuste al soltar la rueda en **una sola constante**. Copia previa: `C-fusion.r3.html`.
Capturas: `shots/r4-*.png`.

## Qué se construyó

| Momento | Cómo entra | Qué cuenta |
|---|---|---|
| **M0 · Portada** | Al cargar, 1,8 s. Entrada de la ronda C recuperada (16 px, 0,78 s, imagen de 1,05 a 1 en 2 s) y un solo cambio: el titular entra palabra a palabra, cada una desde su máscara | Lo primero que dice la firma se compone delante de ti |
| M1 · Ficha | El filete se traza y los valores se escriben con máscara | *Retirado en la ronda 5* |
| M2 · Criterio y mitades | El filete se abre desde el centro, baja la divisoria y las mitades se separan | *Retirado en la ronda 5* |
| M3 · Imprenta | Las rayas se trazan y 15, 100 y 2.300 cuentan desde cero | *Sustituido en la ronda 5 por las credenciales* |
| **M4 · Qué hacemos** | Dibujo de los dos tableros a la vez al acercarse (1,6 s cada uno; el trazo «Real» de 1,25 s recuperado) y **escena fijada 3,1 pantallas** | Las dos líneas pesan lo mismo |
| **T · La noche** | 0,75 pantalla ligada al scroll al entrar KLINODA | De lo que ofrecemos a la prueba de que sabemos hacerlo |
| **M5 · Portal** | Al terminar T: la hoja sube, las filas aterrizan y cada punto de aptitud se estampa | La vista se llena solo con lo que la empresa puede ver |
| **M6 · Cierre** | El filete de cobre cruza la banda (recuperado) y las tres respuestas llegan en orden de lectura; el botón, el último | Tres respuestas antes de pedirte nada |

### La escena, en pantallas de desplazamiento

| Tramo | Scroll | Qué se mueve |
|---|---|---|
| A · Las dos | 0,00–0,45 | Nada |
| R1 | 0,45–0,70 | Software se hunde en su mitad |
| F1 · F2 · F3 | 0,70–1,70 | Finanzas cruza a la derecha, su texto entra a la izquierda por líneas, pausa |
| R2 · Relevo | 1,70–2,10 | Sale el texto; finanzas se hunde; **después** sube software en su mitad |
| S1 · S2 · S3 | 2,10–3,10 | En espejo: software cruza a la izquierda, su texto entra a la derecha, pausa |

La regla bajo «Qué hacemos» se parte en dos tramos iguales de cobre, y cada uno se llena solo
mientras dura su línea.

## Decisiones

- **Espejo, con el relevo en serie.** Software vuelve a su mitad —la derecha—, que es justo donde
  acaba de quedarse finanzas. Por eso finanzas se hunde entero antes de que suba software: nunca hay
  dos piezas en el mismo sitio.
- **El ajuste al soltar** vive en `var AJUSTE_AL_SOLTAR = true;`, arriba del guion de
  `C-fusion.html`. Dentro de una pausa (A, F3, S3) no mueve nada; fuera de ella lleva a la pausa
  siguiente en la dirección en que ibas. `false` lo apaga.
- **KLINODA: botón de contorno**, no cobre, para que el cobre relleno siga siendo solo «Agendar».
- **La noche sin bajar de AA.** Es una capa marino fija cuya opacidad lleva el scroll (se compone sin
  repintar la página); los colores del texto los escribe el guion en cada fotograma. Medido antes de
  construir: entre el 50 y el 59 % de oscuridad ningún color de texto llega a 4,5:1 (la tinta aguanta
  hasta el 50 %, el blanco pasa desde el 59 %, los grises secundarios fallan desde el 8 %). Así que
  los grises se funden con la tinta al empezar, el fondo da un paso corto del 50 al 59 % en 0,3 s y el
  texto cambia a blanco a mitad de ese paso. **Precisión sobre el guion:** el paso ocurre cuando el
  borde de KLINODA está al 62 % de la pantalla, no a la mitad, porque el recorrido va del 100 % al 25 %.
- Sin movimiento, KLINODA y el cierre son bandas oscuras por sí mismas.

## Medido a 1440 × 900

- Página: 6.331 px, 7,03 pantallas. Fijado de 1.240 a 4.030 px: **3,10 pantallas** exactas.
- Escena, 63 puntos del recorrido: **ningún solape** entre tableros, ni de ninguna línea visible sobre
  un tablero, ni nada fuera de pantalla.
- Cruces: **+664 px y −664 px**. Tableros de 624 × 587 a tamaño real. Los dos textos alineados con la
  rejilla (132 px a la izquierda en F3, 1.308 px a la derecha en S3).
- Títulos a 46 px, cada línea en un solo renglón; los textos miden 469 px en un escenario de 679.
- Noche, 15 puntos en reposo: **0 fallos de contraste**; el peor, 4,61:1 justo después del paso.
- Con el tabulador, los dos enlaces de la escena quedan opacos y a la vista.

## Lo que no llegó a verificarse en esta ronda

La segunda pasada (fotogramas exactos de los momentos con reloj, ajuste con rueda, cortes, móvil y
reducir movimiento) se quedó colgada en su primera parte sin escribir nada, y la paré al empezar la
ronda 5. No averigüé la causa. Esas comprobaciones se hicieron sobre la versión de la ronda 5. De la
ronda 4 quedan válidas las diez capturas de la escena (`r4-m4-01` a `r4-m4-10`, posiciones exactas);
las de los momentos con reloj (`r4-m0-*`, `r4-m123-*`, `r4-m4-dibujo-*`, `r4-m5-*`, `r4-m6-*`) se
tomaron en tiempo real y van algo más avanzadas de lo que dice su nombre.

## Servidor y panel del navegador

- El servidor con rangos vive en `.impeccable/mocks/servidor.mjs` (el mismo código de arriba).
- `.claude/launch.json` → `node .impeccable/mocks/servidor.mjs .impeccable/mocks/portada 8779`. Con
  `maquetas-portada` el panel lo arranca y el vídeo responde 206.
- Detenidos, tras comprobar que eran esos procesos: el `python -m http.server` del 8777 (PID 23292) y la
  copia temporal del servidor en el 8779 (PID 23240).
- `.impeccable/config.json` en la raíz lo creó el gancho del detector: repite la excepción de Plus
  Jakarta Sans.

---

# Ronda 5 — que todos vean la escena, las credenciales y el botón de cada servicio

13 de septiembre de 2026. La escena de los tableros se queda tal cual. Copia previa:
`C-fusion.r4.html`. Capturas: `shots/r5-*.png` y la hoja `shots/r5-hoja-cuatro-tamanos.png`.

## 1. La escena desde 1024 × 640

**Por qué no se veía.** El portátil de Boris es 1920 × 1080 con escalado de Windows al 125 %: el
navegador maximizado trabaja con 1536 px de ancho y unos 730 de alto, y la escena exigía 760. Ese
escalado es el habitual en portátiles Windows.

**Lo que se hizo, sin bajar el umbral sin más.** El corte pasa a `(min-width: 1024px) and
(min-height: 640px)` y todo lo vertical se ajusta a la altura disponible:

- márgenes del escenario, del rótulo y del hueco hasta los tableros, con `clamp()` en `vh`;
- los tableros, a la escala que cabe en el alto del escenario (antes solo contaba el ancho);
- la letra de los textos, con la variable `--k`: el guion empieza en 1 y la baja en pasos de 0,04
  hasta que los dos textos caben en el escenario (suelo: 0,7). La entrada nunca baja de 15 px ni los
  puntos de 14,5 px.

**Medido, sin escalado** (Playwright con Edge):

| Pantalla | Escenario | Tablero | `--k` | Título | Alto de los textos | Problemas en 63 puntos | Página |
|---|---|---|---|---|---|---|---|
| 1536 × 730 | 544 px | 578 × 544 | 1 | 46,4 px | 502 px | 0 | 7,58 pantallas |
| 1366 × 640 | 465 px | 494 × 465 | 0,92 | 40,2 px | 454 px | 0 | 7,88 |
| 1024 × 640 | 465 px | 444 × 465 | 0,96 | 33,8 px | 453 px | 0 | 8,18 |
| 1920 × 940 | 729 px | 624 × 587 | 1 | 46,4 px | 502 px | 0 | 7,08 |

En los cuatro: fijado de **3,10 pantallas** exactas; ningún solape, ninguna línea visible sobre un
tablero y nada fuera del escenario en 63 puntos del recorrido; cada línea de título en un renglón;
**0 fallos de contraste** en F3, en S3 y en seis puntos de la noche; los dos botones quedan a la vista
al llegar con el tabulador; sin desbordamiento horizontal; ninguna respuesta de error del servidor.

A 1024 la letra baja menos que a 1366 porque el título ya sale más pequeño (depende del ancho) y la
columna estrecha lo compensa.

## 2. La banda de debajo de la portada: credenciales

**Fuera:** la ficha ASUNTO / NOSOTROS, la línea «Dos campos. Un criterio.», las dos entradas de servicio
y la imprenta de seis celdas.

**Dentro: tres cifras, pocas y grandes, cada una con su nota.** Referencia medida en
rothschildandco.com: cifras de 72 px en serif de trazo fino (peso 300), marino, con la nota debajo.
Aquí: Plus Jakarta Sans 300 a 100 px en 1536, numeración tabular.

| Cifra | Lo que es | La nota — TEXTO PROPUESTO |
|---|---|---|
| **15+** | años en dirección financiera | La trayectoria de Richard Carvajal, fundador de la firma. |
| **100+** | clientes asesorados | Por Richard Carvajal, en Latinoamérica y Estados Unidos. |
| **3** | idiomas de trabajo | Español, inglés y alemán, con equipo en Ecuador y Alemania. |

Las dos primeras salen de `home.es.js` (`numbers`) y se atribuyen **por su nombre**: son la trayectoria
de Richard, no de la firma (PRODUCT.md). La tercera es de la firma y está confirmada.

**La ficha, integrada en una frase** (TEXTO PROPUESTO): «**Richard Carvajal** dirige las finanzas,
**Boris Carvajal** la tecnología y **Mirella Llanga** la gerencia general.» Sus puntos medios parecían un
formulario; los tres nombres siguen en la portada, ahora con lo que hace cada uno. Los idiomas pasan a
la tercera cifra. «Finanzas · Tecnología» se va: ya lo dicen la portada y «Qué hacemos».

**«Dos campos. Un criterio.»** también se va: solo presentaba las dos entradas, y su idea ya está en el
rótulo de «Qué hacemos» («Dos líneas, una firma.»). Pendiente de confirmación.

**«Más de 2.300 pruebas automáticas», fuera de la portada.** Propuesta: donde ya vive en
`home.es.js`, el bloque `method` («El método es la garantía»), como prueba de la regla «Probamos lo
que construimos», o en la página de KLINODA. Al lado de la regla que demuestra, esa cifra sí le dice
algo a quien la lee.

**El momento M1:** se trazan las rayas entre cifras, cada cifra sube y cuenta (15 y 100), su nota se
escribe detrás con una máscara y al final se traza la firma. Una vez, al asomar.

**Contradicciones con este plan, retiradas por Boris:** la composición de «el registro» (§3: ficha,
criterio, mitades, imprenta) y el 50/50 en la primera pantalla (§4.2). El 50/50 queda en la escena y en
los dos tramos de cobre del rótulo.

**Abierto, sin tocar:** la entrada de la portada dice «CJM Nexus une dirección financiera con quince
años de trayectoria…», que atribuye los quince años a la firma. Propuesta: «CJM Nexus une la
dirección financiera de Richard Carvajal, con quince años de trayectoria, y desarrollo de software
especializado…». Es texto de `home.es.js`: necesita aprobación.

## 3. «Ver el servicio», botón secundario

Al final de cada línea de la escena, «Ver el servicio» deja de ser un enlace subrayado y pasa a ser el
**botón de contorno** de KLINODA: borde de 1,5 px en el color del texto; al apuntar se rellena de tinta
con la letra blanca. Entra como la última línea del texto y el salto del tabulador lo encuentra igual.

## 4. KLINODA — lo que se revisó antes del guion

Antes de escribir el guion se revisó, solo leyendo, el portal de empresa en el repositorio de KLINODA
(`portal_empresa/`), para no inventar módulos. Lo que no puede olvidarse:

- De los cuatro contenidos pedidos, **existen dos**: aptitud (por trabajador) y certificados emitidos
  (cuántos trabajadores tienen certificado disponible). **No existen** centros de trabajo ni
  evaluaciones agrupadas por cargo: el cargo es solo una columna.
- El panel real enseña además «Vencidas», «Vencen en 90 días o menos» (a 30, 60 y 90 días), una línea de
  resumen y la lista de plazos.
- El portal real **sí muestra nombres y número de documento**; la demo tiene que omitir esas columnas.
- El código **prohíbe totales por aptitud**; la demo tampoco puede mostrarlos.
- Las etiquetas reales son «APTO», «APTO EN OBSERVACIÓN», «APTO CON LIMITACIONES», «NO APTO» e «INGRESO»,
  «PERIÓDICO», «REINTEGRO», «RETIRO». El `privacy.mockup` aprobado usa otras («Apto», «Con
  observaciones», «Periódica»).
- La frase actual de la banda, «Nuestra plataforma para médicos ocupacionales», ya choca con la regla
  nueva: nada de «para médicos» ni «para empresas».

## El resto de la verificación

- **Credenciales a 1536 × 730**, en tiempo real (`shots/r5-hoja-credenciales.png`): a 0,24 s del
  disparo las cifras van por 3; a 0,74 s, por 14 y 91, con las notas escribiéndose; al final, «15+»,
  «100+» y «3».
- **Ajuste al soltar, con rueda de verdad a 1536 × 730:** soltada bajando en 0,61 pantallas → termina en
  **1,30** (inicio de F3); dentro de F3 no se mueve (1,50 → 1,50); soltada subiendo en 2,22 → termina en
  **1,70** (final de F3).
- **Cortes:** 1000 × 800 y 1280 × 620, sin escena y en filas; 1440 × 900, con escena.
- **Reducir movimiento** (`shots/r5-reducir-movimiento.png`): sin clase de entrada, sin fijado, sin capa
  de noche, sin vídeo; KLINODA marino por sí misma y la cabecera se vuelve oscura al llegar; las cifras
  con su valor final; 0 elementos ocultos; 0 fallos de contraste.
- **Móvil 390 × 844** (`shots/r5-movil.png`): sin fijado, sin desbordamiento, 0 fallos de contraste en
  las credenciales ni en KLINODA.
- **El texto está en el HTML:** las notas, los títulos, los botones y la pregunta, al pedir el HTML sin
  ejecutar nada. «2.300», «pruebas automáticas», «Asunto» y «Dos campos. Un criterio.» ya no aparecen.
- **Errores:** ninguna excepción en la página y ninguna respuesta 4xx o 5xx en ninguna de las pasadas.

## Lo que aprendí verificando

Las dos veces que el guion de verificación tocó la línea de tiempo global de GSAP (pausarla y llevarla a
un instante en la ronda 4, cambiarle la velocidad en la ronda 5) el proceso se quedó colgado en la
siguiente orden. Los momentos con reloj se capturan en tiempo real, sin tocarla.

**Estados de partida que se perdían.** Con las escenas fijadas activas, el estado de partida de las
entradas creadas después de ellas (el tablero de KLINODA y el cierre) se perdía al recalcular
ScrollTrigger: puntos, tarjetas y titular se veían enteros antes de animarse. En móvil, sin escenas
fijadas, no pasaba. No averigüé la causa dentro de GSAP. El arreglo: cada entrada con reloj queda anotada
y, tras cada recálculo, las que aún no han arrancado se vuelven a pintar en su estado de partida.
Comprobado a 1536 × 730 y 390 × 844, al cargar y después de forzar un recálculo; al llegar siguen
animándose. De paso, las entradas escalonadas pasaron a un `fromTo` por elemento y el tramo T dejó de usar
`quickTo`; ninguno de los dos cambios era la causa, y los dos se quedan porque no cambian nada visible.

## 4b. KLINODA — la escena, aprobada y construida

Boris aprobó el guion y sus seis puntos: usar los módulos que sí existen en lugar de centros de trabajo
y evaluaciones por cargo; quitar nombre y documento; etiquetas reales; el logotipo claro tal cual, con su
lema; la etiqueta «Demo · en desarrollo · datos ficticios» en lugar de «En piloto controlado», y las tres
frases con el botón «Ver KLINODA». Añadió una nota: **que el tablero no diga tanta información y sea bonito
y visualmente llamativo.** Capturas: `shots/r5-hoja-klinoda.png` y `shots/r5-klinoda-reposo.png`.

### La escena, en pantallas (2,1 fijadas, después de T)

| Tramo | Scroll | Qué se mueve |
|---|---|---|
| A · El producto | 0,00–0,40 | Nada. El tablero ocupa el escenario entero, tapado por una placa marino al 94 %; en el centro, el logotipo claro y la etiqueta |
| K1 · Se levanta | 0,40–0,70 | La placa desaparece; el logotipo y la etiqueta viajan, de centro a centro, al logotipo oscuro y al distintivo de la barra, y se funden con ellos |
| K2 · Se lee | 0,70–1,10 | Al llegar, el tablero se dibuja una vez (1,4 s): se traza la línea de plazos, las cifras cuentan, cada vencimiento cae en su tramo y las tarjetas aterrizan |
| K3 · Se retira | 1,10–1,40 | Se reduce a media escena y cruza a la derecha |
| K4 · Su texto | 1,40–1,70 | Tres frases, la pregunta y el botón, por líneas, desde −32 px |
| K5 · Se lee | 1,70–2,10 | Nada |

Las mismas unidades y curvas que la escena de los tableros, y el mismo `AJUSTE_AL_SOLTAR`.

### El tablero: poco texto, mucho gesto

- **Con la marca de KLINODA, no la de CJM Nexus.** Sus colores salen de su propio `base.html`: azul
  `#1868E8` y `#0B47B0`, verde `#0B7D57` y ámbar `#9C5C05`, sobre `#F4F8FE`.
- **Tres cifras grandes en trazo fino.** Primera: **11** que vencen en 90 días o menos, con una línea de
  plazos que tiene **un punto por vencimiento** en tres tramos (4 · 5 · 2), del azul más hondo al más
  claro según urgencia. Segunda: **3** vencidas, en ámbar. Tercera: **44** trabajadores con certificado
  disponible, en verde.
- **Tres tarjetas** de cargo, aptitud y vencimiento, con las etiquetas reales («APTO», «APTO EN
  OBSERVACIÓN»). Sin tablas.
- Todo sale de `portal_empresa/panel.html`. Sin nombre ni documento, sin datos clínicos y sin totales
  por aptitud.
- Medido en em: la variable `--kb` lo ajusta entero. Si sobra alto crece hasta un 25 %; si falta, baja en
  pasos. El texto de al lado se ajusta con `--kt`.

### Decisiones y avisos

- **Logotipo claro al 34 % del ancho y placa al 94 %.** Más grande se ven los bordes dentados del
  recorte: `klinoda-claro.png` salió de quitar el fondo del original. Hace falta, igual que con CJM
  Nexus, **un vectorial de una tinta**.
- Salen de la portada la vista «Portal de empresa · Vista de aptitud», la frase «para médicos
  ocupacionales» (chocaba con la regla nueva) y «En piloto controlado · solo con datos ficticios».
- **Para pasarlo al sitio:** el `privacy.mockup` aprobado en `klinoda.es.js` usa etiquetas que no son las
  reales («Apto», «Con observaciones», «Periódica»). El contenido tendrá que ponerse al día con la escena.

### Medido (Playwright con Edge)

| Pantalla | `--kb` | Problemas en 43 puntos | Contraste en K2 y K5 | Viaje del logotipo (desvío) | Página |
|---|---|---|---|---|---|
| 1536 × 730 | 1,20 | 0 | 0 fallos | 0,4 · −0,5 px | 9,79 pantallas |
| 1366 × 640 | 1,04 | 0 | 0 fallos | −0,3 · −0,4 px | 9,97 |
| 1024 × 640 | 1,04 | 0 | 0 fallos | −0,5 · 0,2 px | 9,90 |
| 1920 × 940 | 1,25 | 0 | 0 fallos | 0 · −0,4 px | 9,49 |

- **La escena:** en los cuatro tamaños queda fijada **2,10 pantallas**. En 43 puntos del recorrido el
  tablero no se sale del escenario y ninguna línea visible lo pisa. Ninguna tarjeta se desborda y el
  tablero no sobra por abajo. Al final de K2 las cifras marcan 11, 3 y 44. El contraste más justo es
  4,64:1, en la etiqueta «APTO» (11–13 px). Con el tabulador, el botón queda a la vista.
- **Ajuste al soltar, con rueda, a 1536 × 730:** soltada bajando en 0,61 → termina en **0,70**; subiendo
  en 1,22 → termina en **1,10**.
- **Reducir movimiento:** sin escena y sin fijado, 0 elementos ocultos, la banda marino por sí misma, las
  cifras con su valor final y 0 fallos de contraste.
- **Móvil 390 × 844:** sin fijado, sin desbordamiento, 0 fallos de contraste.
- **Texto en el HTML:** están las frases, la pregunta, el botón, la etiqueta y las etiquetas reales. Ya no
  aparecen «para médicos», «Con observaciones», «Periódica» ni «En piloto controlado».
- **Errores:** ninguna excepción y ninguna respuesta 4xx o 5xx.
- **Longitud:** la página pasa de 7,1–8,2 pantallas a **9,5–10**. Son las 2,1 de la escena nueva.
- Bajo la placa y mientras se levanta se ven las tarjetas con sus cifras a 0. Los puntos y las tarjetas
  de cargo aparecen al dibujarse en K2: se lee como un panel que se llena.
