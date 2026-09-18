---
name: CJM Nexus
description: Dirección financiera y software a medida en una misma firma. Sistema extraído de la portada aprobada el 13 de septiembre de 2026 (maqueta C-fusion.html).
colors:
  papel: "#F3F1ED"
  papel-hondo: "#EDEAE3"
  papel-claro: "#F8F6F2"
  blanco: "#FFFFFF"
  tinta: "#141F3A"
  tinta-honda: "#0B1122"
  tinta-viva: "#18264C"
  tinta-suave: "#4E5870"
  gris: "#5A6375"
  piedra: "#B9B1A7"
  linea: "#DDD8D0"
  linea-fina: "#E8E4DC"
  cobre: "#C9784A"
  cobre-honda: "#A85A2E"
  cobre-presion: "#8F4A22"
  cobre-claro: "#DD9268"
  cobre-tinte: "#FBEFE6"
  klinoda-acento: "#1868E8"
  klinoda-acento-oscuro: "#0B47B0"
  klinoda-acento-claro: "#8DB8F8"
  klinoda-acento-tinte: "#EAF2FE"
  klinoda-tinta: "#0A1F33"
  klinoda-tinta-suave: "#5C748C"
  klinoda-filete: "#E1EBF6"
  klinoda-fondo: "#F4F8FE"
  klinoda-exito: "#0B7D57"
  klinoda-exito-tinte: "#E7F7F1"
  klinoda-atencion: "#9C5C05"
  klinoda-atencion-tinte: "#FDF3E3"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 4.7vw, 4.1rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.036em"
  cifra:
    fontFamily: "Plus Jakarta Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 6.6vw, 6.25rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Plus Jakarta Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 3.2vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.036em"
  title:
    fontFamily: "Plus Jakarta Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.14em"
  button:
    fontFamily: "Plus Jakarta Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: "2px"
  md: "3px"
  lg: "5px"
  xl: "6px"
spacing:
  cabecera: "72px"
  marco: "1240px"
  canal: "32px"
  canal-movil: "20px"
  sangria-escena: "56px"
  seccion: "88px"
  seccion-movil: "52px"
components:
  button-primary:
    backgroundColor: "{colors.cobre-honda}"
    textColor: "{colors.blanco}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.cobre-presion}"
    textColor: "{colors.blanco}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "13px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
  button-header:
    backgroundColor: "{colors.cobre-honda}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.md}"
    padding: "9px 15px"
  interfaz-muestra:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.lg}"
  etiqueta-estado:
    backgroundColor: "transparent"
    textColor: "{colors.blanco}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  tablero-klinoda:
    backgroundColor: "{colors.klinoda-fondo}"
    textColor: "{colors.klinoda-tinta}"
    rounded: "{rounded.xl}"
---

# Design System: CJM Nexus

## Overview

**Creative North Star: "El registro de la firma"**

La web se construye como el documento que la firma entrega, no como una página de captación. Filetes de 1 px en lugar de cajas, cifras tabulares que cuadran, referencias pequeñas en versalitas, e interfaces de muestra que son hojas de trabajo: un tablero gerencial, un portal de documentos, el panel de KLINODA. Cuando el método de la casa es «decidimos por escrito», que la página tenga forma de registro es la primera prueba de ese método, y se lee antes de leer una palabra.

Dos mundos y un solo acento. De día, sobre papel cálido, está lo que la firma ofrece: la portada de fotografía o vídeo, las credenciales y las dos líneas de servicio, con el mismo peso. De noche, sobre marino, está la prueba y la decisión: KLINODA, empresa del Grupo, y el cierre. El paso de uno a otro ocurre a la vista, ligado al scroll. El cobre es la única tinta de énfasis: marca lo que se pulsa, la regla que avisa y el trazo del dato. Los dos colores de la casa tienen cuerpo: el marino va de vivo a hondo y el cobre lleva la luz arriba, siempre dentro de su propio tono. La densidad es la de un informe bien compuesto: aire generoso entre bloques, apretado dentro de cada bloque.

El movimiento está escrito, no espolvoreado. Hay dos escenas fijadas que cuentan algo, y cada sección tiene una sola entrada, sacada de su contenido. Todo lo que se mueve puede leerse quieto. Rechazos confirmados por Boris: orbes y manchas difuminadas, texto con degradado, tarjetas de vidrio, halos de color, tarjetas iguales de icono, título y texto, numeración grande decorativa y datos que pasan en un ticker.

**Key Characteristics:**
- Papel `#F3F1ED` y marino `#141F3A`, con el cobre como único acento. El marino y el cobre nunca son planos donde hacen de superficie: degradado tonal, de un tono a otro más hondo.
- Filetes de 1 px como estructura; esquinas casi rectas (2–3 px).
- Plus Jakarta Sans para titulares y cifras; Inter para el texto; numeración tabular en toda cifra.
- Interfaces de muestra en papel blanco, en los dos temas, con su pie «Interfaz de muestra · datos ilustrativos».
- El 50/50 medible: las dos líneas miden, duran y se mueven exactamente igual.
- Dos relojes de movimiento: el scroll para las escenas y la noche; el reloj, una vez, para cada entrada.

### Movimiento

**Las curvas.**
- **Llegar:** `cubic-bezier(.16,1,.3,1)`, que en GSAP es `expo.out`. Es la de todas las entradas y los estados al apuntar.
- **Cruzar:** `power3.inOut`, para los desplazamientos decididos de las escenas.
- **Salir:** `power2.in`, y cada salida dura el 60 % de su entrada.
- **Duraciones:**
  - estados al apuntar, 0,18–0,44 s;
  - entradas, 0,6–1,8 s por sección;
  - dibujo de un tablero, 1,4–1,6 s.
- **Qué se anima:** solo transformación, opacidad, máscara (`clip-path`) y variables que escalan filetes. Nunca alto ni ancho. Los trazos de los gráficos se descubren con una máscara de izquierda a derecha, no con `stroke-dashoffset`: el SVG se estira al hueco y un guion medido en unidades del dibujo se queda corto.

**Los dos relojes.**
1. **Ligado al scroll y reversible.** Lo usan las escenas fijadas y la noche. Se mide en pantallas de desplazamiento: **0,30 por gesto y 0,40 por pausa de lectura**, con `scrub` de 0,5 s.
   - *Escena de los tableros:* 3,1 pantallas.
   - *Escena de KLINODA:* 2,1 pantallas.
   - *La noche:* 0,75 pantalla, sin fijar.
   - *Ajuste al soltar:* si la rueda se suelta a mitad de un gesto, la escena lo termina hasta la pausa siguiente en la dirección en que se iba. Una sola constante lo apaga: `AJUSTE_AL_SOLTAR`.
2. **Con reloj, una sola vez, al asomar.** Cada sección tiene una única entrada.
   - Si la página se carga ya pasada la sección, aparece en su estado final.
   - Si asoma mientras entra la portada, espera a que termine.
   - Tras cada recálculo de ScrollTrigger, las entradas que no han arrancado vuelven a pintar su estado de partida.

**Un gesto por sección**, sacado de lo que contiene. Ninguno se repite.
- **Portada:** el titular entra palabra a palabra, cada una desde su máscara, y la imagen se asienta de 1,05 a 1.
- **Credenciales:** las cifras cuentan y las rayas entre ellas se trazan.
- **Tableros de servicio:** el trazo del gráfico cruza la meta, detrás sale la proyección y el globo del mes, y las filas aterrizan. En el portal, la traza baja paso a paso hasta el sello y las doce reglas se cumplen una a una. Los dos dibujos duran lo mismo: 1,6 s.
- **La noche:** el fondo se oscurece ligado al scroll.
- **KLINODA:** la placa se levanta y su nombre viaja a la barra del tablero.
- **Cierre:** un filete de cobre cruza la banda.

**El umbral.**
- **Desde 1024 × 640 px** y sin «reducir movimiento», las escenas se fijan. Por debajo, cada escena se queda en filas sin fijar, con las mismas entradas con reloj.
- **Entre 640 y 900 px de alto** no se baja el umbral: todo se ajusta a la altura. Los márgenes van en `vh`, las piezas se escalan al alto del escenario y la letra baja en pasos de 0,04 con la variable `--k`, hasta un mínimo de 0,7. El tablero de KLINODA, además, crece hasta 1,25 cuando sobra alto.

**La noche sin bajar de AA.** Es una capa marino fija cuya opacidad lleva el scroll, y los colores del texto se recalculan en cada fotograma. Entre el 50 y el 59 % de oscuridad ningún texto llega a 4,5:1, así que los grises se funden primero con la tinta y el fondo cruza ese tramo en un paso corto de 0,3 s. Mientras oscurece, la capa es marino plano, que es contra lo que están hechas esas cuentas. **La hondura** entra después, del 90 % en adelante, con el texto ya en blanco y más de 12:1: una segunda capa, de marino vivo arriba a marino hondo abajo. Su punto más claro (#18264C) deja el texto más tenue de la noche en 5,9:1.

**Con «reducir movimiento»** todo está en su estado final desde el primer píxel: sin entrada, sin vídeo (queda el póster quieto), sin fijado y sin noche. KLINODA y el cierre son bandas marino por sí mismas, las cifras muestran su valor y los gráficos están dibujados. Los estados al apuntar son instantáneos. **Sin JavaScript**, igual. El texto está en el HTML desde el principio; el guion solo mueve, atenúa y cuenta.

## Colors

Papel cálido y marino tinta, con un solo acento cobre. El azul de KLINODA vive solo dentro de su tablero. Desde la pasada de pulido del 18 de septiembre de 2026 la paleta tiene tres matices más (marino vivo, papel claro y tinte de cobre) y los degradados dejan de contarse: se rigen por una regla.

### Primary
- **Cobre** (#C9784A): el acento. Filetes que marcan un límite, trazo del dato en los gráficos, puntos de lista, tramos de progreso bajo «Qué hacemos» y subrayado al apuntar. Nunca es relleno detrás de texto.
- **Cobre hondo** (#A85A2E): la base del relleno de «Agendar», el único elemento de conversión; el «+» de las credenciales; el foco de teclado y la selección de texto (5,04:1 con blanco); también el texto de aviso sobre papel blanco.
- **Cobre presión** (#8F4A22): el mismo botón al apuntar y al pulsar.
- **Cobre claro** (#DD9268): el acento sobre marino (etiquetas del cierre, punta del gráfico, tramo de la señal de desplazamiento) y el extremo encendido del degradado de cobre.
- **Tinte de cobre** (#FBEFE6): el fondo de lo que pide atención dentro de una interfaz de muestra. Sobre él, el texto va en cobre presión (5,9:1).

### Tertiary
- **Azul KLINODA** (#1868E8), **hondo** (#0B47B0), **claro** (#8DB8F8) y su **tinte** (#EAF2FE): los azules del propio producto, sacados de su `base.html`. Solo dentro de su tablero: los puntos de vencimiento (del más urgente al más lejano), la pestaña activa, las fichas de icono y el distintivo «Demo».
- **Tinta KLINODA** (#0A1F33) y **Tinta suave KLINODA** (#5C748C) sobre **Fondo KLINODA** (#F4F8FE), con filetes **#E1EBF6**: el texto, el suelo y las líneas de su tablero.
- **Verde KLINODA** (#0B7D57) y **Ámbar KLINODA** (#9C5C05), cada uno con su tinte (#E7F7F1 y #FDF3E3): estados «APTO» y «APTO EN OBSERVACIÓN», y las cifras de certificados y vencidas.

### Dentro de las interfaces de muestra
La ventana de un tablero de CJM Nexus tiene su propia paleta, fija en los dos temas y definida en `.pieza` (`estilos/cuadros.css`): suelo **#F8F6F2**, filetes **#E3DFD7** y **#ECE9E2**, dos marinos de apoyo para series (**#5B6A8C** y **#A9B2C6**) y dos estados, como en cualquier producto: **verde** (#17694B sobre #E6F2EC) para «va bien» y **cobre presión** (#8F4A22 sobre #FBEFE6) para «pide atención». El verde solo existe dentro de la ventana: en la página, el énfasis sigue siendo cobre. Todos los pares de texto y fondo pasan de 4,5:1.

### Neutral
- **Papel** (#F3F1ED): el suelo de día, y el fondo de la cabecera cuando la página ya bajó.
- **Papel hondo** (#EDEAE3): un escalón de suelo para bandas de referencia.
- **Papel claro** (#F8F6F2): un escalón de luz. El suelo de las ventanas de muestra y el arranque de las cabeceras de página, que se funden con el papel.
- **Blanco** (#FFFFFF): solo las hojas que contienen un entregable. Se leen como papel puesto encima.
- **Marino tinta** (#141F3A): todo el texto de día y el suelo de noche. Una sola voz institucional.
- **Marino hondo** (#0B1122): fondo de la portada, final de la banda de cierre y cabecera sobre zonas oscuras.
- **Marino vivo** (#18264C): el marino con más azul. Es la luz de arriba de la noche y de las bandas marino, y el tinte del velo de la portada. Nunca es color de texto.
- **Tinta suave** (#4E5870): texto secundario sobre papel (6,3:1).
- **Gris** (#5A6375): texto terciario y letra pequeña sobre papel o blanco (5,4:1).
- **Piedra** (#B9B1A7): filetes, líneas de meta y trazos neutros de los gráficos. Solo es texto sobre fondo oscuro.
- **Línea** (#DDD8D0) y **Línea fina** (#E8E4DC): filetes estructurales y separadores interiores de las hojas.

### Named Rules
**The One Accent Rule.** El cobre es la única tinta de énfasis de CJM Nexus. Dos líneas de negocio con dos colores se leen como dos negocios distintos; un solo acento las iguala.

**The Copper-Fill Rule.** El cobre relleno es solo para «Agendar». Cualquier otra acción es un botón de contorno en el color del texto.

**The Paper-Sheet Rule.** Las interfaces de muestra son papel blanco en los dos temas. No usan las variables del tema y nunca se oscurecen.

**The Tonal Gradient Rule.** Un degradado va siempre de un tono a otro más hondo del mismo color: da cuerpo y luz, nunca cambia de color. Sustituye a la regla de «solo tres degradados», que dejaba el marino y el cobre planos justo donde hacen de superficie. Los que existen, todos en `REGISTRO.degradados` salvo el velo:
- **El velo** de la portada, en marino vivo: un velo casi negro dejaba el metraje gris; uno con azul lo tiñe de la casa. Lleva detrás del texto una sombra ancha, sin color propio, que asegura el 4,5:1 cuando el vídeo pasa por una zona clara.
- **Marino** (#18264C → #141F3A → #101A33): la hondura de la noche, las bandas marino de las páginas y la placa de KLINODA.
- **Cierre** (#141F3A → #0B1122): termina donde empieza el pie.
- **Conversión** (#AE5E30 → #9E5429): el relleno de «Agendar», con la luz arriba. El tono más claro da 4,7:1 con la letra blanca.
- **Cobre** (#A85A2E → #DD9268): el trazo del dato, los dos tramos de la regla de «Qué hacemos» y el filete del cierre, de apagado a encendido.
- **Papel** (#F8F6F2 → #F3F1ED): el arranque de las cabeceras de página.

Nunca en texto, nunca de un color a otro, y nada de orbes, manchas ni halos: lo que Boris rechazó sigue rechazado.

## Typography

**Display Font:** Plus Jakarta Sans (con Segoe UI y system-ui)
**Body Font:** Inter (con Segoe UI y system-ui)

**Character:** Una grotesca geométrica, cálida y con mucho rango de peso, emparentada con KLINODA, sobre una Inter de lectura neutra. El contraste está en el peso, no en la familia: 300 para las cifras grandes, 500 con palabras en 800 para el titular, y 800 para los títulos de sección.

### Hierarchy
- **Display** (500 con énfasis en 800, clamp(2.15rem, 4.7vw, 4.1rem), 1,03): el titular de portada, sobre la imagen; máximo 17 caracteres por línea.
- **Cifra** (300, clamp(3.6rem, 6.6vw, 6.25rem), 0,95): las credenciales, en trazo fino como una cifra de informe, con numeración tabular.
- **Headline** (800, clamp(2.2rem, 3.2vw, 2.9rem), 1,04): el título de cada servicio dentro de la escena, en dos líneas fijas. Dentro de la escena escala con `--k`.
- **Title** (800, clamp(1.6rem, 2.6vw, 2.3rem), 1,15): rótulos de sección («Qué hacemos») y la pregunta de KLINODA (700).
- **Body** (400, 16px, 1,55): texto corrido. Entradas a 1,02–1,15 rem, con 44–50 caracteres de medida en columnas.
- **Label** (700, 11,5px, 0,14em, mayúsculas): referencias como «Servicio 01», del mismo tamaño en las dos columnas. Nunca como antetítulo decorativo.

### Named Rules
**The Tabular Numbers Rule.** Toda cifra lleva `font-variant-numeric: tabular-nums`. Un tablero financiero cuyas columnas no cuadran dice que no sabemos de esto.

**The Weight Not Color Rule.** El énfasis se hace con peso (500 → 800) o con tamaño, nunca con color ni con degradado. El «+» de las credenciales va en cobre hondo y no es una excepción: no enfatiza una palabra, es la marca de «más de» junto a la cifra, y es el único cobre de esa banda.

## Layout

- **Rejilla:** un marco de 1240 px con canales de 32 px (20 px bajo 620 px), sobre una cabecera fija de 72 px. Las secciones respiran 88–96 px arriba y abajo, 64 px bajo 1100 px y 52 px bajo 620 px. La portada ocupa `100svh`.
- **El 50/50 es geometría:** las dos líneas usan columnas del mismo ancho, piezas de la misma altura, la misma letra y el mismo recorrido.
- **Escenas fijadas:** el escenario ocupa la pantalla y sobresale del marco hasta 56 px por lado. Las piezas son figuras; el texto sigue alineado con la rejilla. Las piezas van a tamaño real (624 px de ancho a 1440) y solo se reducen si no caben.
- **Cortes:** 1100 px (servicios y KLINODA pasan a una columna), 1000 px (sin menú, credenciales y cierre en una columna), 760 px (cifras apiladas) y 620 px (móvil). El tablero de KLINODA reordena sus cartas con una consulta de contenedor a 700 px.
- **El teléfono es el caso principal:** todo se lee en filas, sin fijar nada.

## Elevation & Depth

Plano por defecto. La profundidad es solo para lo que se «pone encima»: las hojas de entregable y el botón de conversión. Siempre con desplazamiento y desenfoque; nunca un halo sin desplazamiento. Sobre marino, la sombra de las hojas se hace más honda para que se lean como papel iluminado.

### Shadow Vocabulary
- **Hoja** (`box-shadow: 0 1px 2px rgba(20,31,58,.06), 0 10px 20px -12px rgba(20,31,58,.2), 0 36px 70px -38px rgba(20,31,58,.55)`): tablero gerencial y portal de documentos. Tres capas: contacto, cercanía y caída.
- **Hoja de noche** (`box-shadow: 0 2px 6px rgba(0,0,0,.2), 0 48px 90px -48px rgba(0,0,0,.7)`): el tablero de KLINODA sobre marino.
- **Botón de conversión** (`box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 2px 3px rgba(11,17,34,.16), 0 14px 28px -18px rgba(168,90,46,.85)`): «Agendar» en reposo, con un filo de luz en el borde superior; al apuntar sube 2 px y la sombra se alarga.

### Named Rules
**The Flat-By-Default Rule.** Filetes, bandas y texto no llevan sombra. Si algo no es una hoja ni el botón de conversión, no se levanta.

## Shapes

Esquinas casi rectas, de papel cortado. Etiquetas de estado y chips: 2 px. Botones y cartas interiores: 3 px. La ventana de una interfaz de muestra: 5 px, un punto más que lo que contiene. El tablero de KLINODA y sus cartas, con el lenguaje algo más blando del producto: 5–6 px. La estructura la dan los filetes de 1 px; el estado activo, un filete de cobre de 2 px que se traza de izquierda a derecha. Los marcadores son círculos pequeños (5–7 px en listas y estados; 1,3 em en la línea de plazos de KLINODA).

## Components

### Buttons
Firmes y escasos: un solo relleno en toda la página.
- **Shape:** esquinas de papel (3px).
- **Primary («Agendar diagnóstico ejecutivo · 20 min»):** cobre con la luz arriba (degradado de conversión sobre cobre hondo) y letra blanca en Plus Jakarta Sans 700, 0,95 rem, relleno de 15 × 24 px y flecha a la derecha. Es la única conversión.
- **Hover / Focus:** pasa a cobre presión (una segunda capa que aparece, porque un degradado no se transiciona y una opacidad sí), sube 2 px, alarga la sombra y la flecha avanza 3 px. El foco es un contorno cobre hondo de 2 px separado 3 px: el cobre a secas da 2,97:1 sobre papel y no llega al 3:1 de un componente.
- **Secondary (contorno):** borde de 1,5 px en el color del texto, sin relleno, con 13 × 22 px de relleno. Al apuntar se rellena del color del texto y la letra pasa al inverso. Sirve igual sobre papel y de noche. Es el botón de «Ver el servicio» y «Ver KLINODA».
- **Cabecera:** el mismo cobre hondo en pequeño (9 × 15 px); «Agendar · 20 min».

### Enlace con filete
Texto en Plus Jakarta Sans 700 sobre un filete de 1 px. Al apuntar, un segundo filete de cobre se traza de izquierda a derecha en 0,36 s y la flecha avanza.

### Navigation
Cabecera fija de 72 px con isotipo, «CJM NEXUS» espaciado a 0,2 em, menú en Inter 500, idiomas y el botón pequeño. Tiene tres estados, combinados como en `SiteHeader`:
- **Transparente, con letra blanca**, sobre la portada.
- **Papel, con filete y letra tinta**, en cuanto la página baja.
- **Marino hondo** cuando una zona oscura avisa.

Los enlaces del menú se subrayan en cobre al apuntar. Bajo 1000 px desaparece el menú; bajo 620 px, los idiomas.

### Interfaces de muestra
Ventanas de producto sobre papel blanco (5 px, sombra de hoja) que enseñan un entregable real, no un esquema: el tablero gerencial y el portal de documentos y trazabilidad. Miden lo mismo entre sí (520 px; 560 px en la escena) y están hechas con las mismas piezas (`components/registro/Ventana.jsx`), porque el 50/50 también es material.
- **Anatomía:** barra de 46 px con el isotipo y el nombre de la vista; riel de iconos; un suelo apenas tintado y, encima, cartas blancas de 3 px con sombra corta. La profundidad va de dentro afuera: suelo, carta, globo.
- **Tablero gerencial:** cuatro indicadores con su variación (flecha dibujada, verde o cobre) y su chispa; ventas contra meta con lo real, la proyección punteada y el globo del mes en marino; rentabilidad por línea con el reparto de ingresos en una barra; y el aviso del mes en cobre.
- **Portal de documentos:** buscador, documentos con ficha de icono y etiqueta de estado, el reparto de los 128 por estado, y la traza del documento elegido con un nodo por paso, el sello y doce tramos de reglas.
- **Los datos cuadran entre sí.** Las tres líneas suman el indicador «Ventas», que es el punto de junio del gráfico; junio está un 12 % sobre mayo; los estados suman 128. Quien sabe de finanzas mira justo eso.
- **Iconos:** un solo juego propio (`components/registro/Icono.jsx`), de trazo de 1,4 px sobre rejilla de 16. Ningún glifo Unicode hace de icono.
- **Gráficos:** SVG calculado (`lib/graficos.js`) que se estira al hueco; la letra de los ejes, los puntos y el globo son HTML colocado en porcentajes, para que nada se deforme.
- **Se adaptan a su propio ancho** con consultas de contenedor, no al de la ventana: bajo 540 px sale el riel y bajo 440 px pasan a una columna.
- Debajo llevan siempre «Interfaz de muestra · datos ilustrativos». Se dibujan una vez, al acercarse. Donde están quietas, sus filas responden al ratón.

### Credenciales
Tres columnas separadas por filetes verticales. En cada una: la cifra en trazo fino, lo que es (Plus Jakarta Sans 700) y a nombre de quién, en Inter. Debajo, una frase firma el equipo con los nombres en negrita.

### Escena de los tableros (signature)
- **A:** las dos hojas, lado a lado y del mismo tamaño.
- **Finanzas:** software se hunde; finanzas cruza a la derecha y su texto entra a la izquierda, línea a línea.
- **Relevo:** en serie, nunca dos piezas en el mismo sitio.
- **Software:** en espejo; cruza a la izquierda y su texto entra a la derecha.

La regla del rótulo se parte en dos tramos de cobre iguales, que se llenan mientras dura cada línea.

### Escena de KLINODA (signature)
Un tablero del portal de empresa que ocupa el escenario, tapado por una placa marino al 94 % con el logotipo claro y la etiqueta «Demo · en desarrollo · datos ficticios». El tablero es una ventana con la marca de KLINODA: barra con las tres hojas reales de su portal (Plazos, Certificados y Personal), la línea de 90 días con un punto por vencimiento colocado en su día, las dos cifras con su ficha de icono y los plazos por cargo. Solo módulos que existen, sin nombres, sin nada clínico y sin totales por aptitud.
- **La placa se levanta:** el logotipo y la etiqueta viajan a la barra.
- **El tablero se dibuja:** cifras en trazo fino, la línea de 90 días con sus marcas y un punto por vencimiento, y tarjetas de cargo.
- **Se retira** a media escena, a la derecha.
- **Entran** a la izquierda tres frases, la pregunta y el botón de contorno.

### Etiqueta de estado
Texto de 0,8 rem en un marco de 1 px (2px) con un punto de color delante. Dice el estado; no lista lo que falta.

## Do's and Don'ts

### Do:
- **Do** usar el cobre hondo (#A85A2E) como relleno solo en «Agendar», y el contorno para cualquier otra acción.
- **Do** escribir toda cifra con numeración tabular y atribuir las cifras de trayectoria a quien pertenecen.
- **Do** dar a las dos líneas de servicio el mismo ancho, alto, letra, curva y recorrido. Si una va primero, la marca «Servicio 01».
- **Do** medir cada escena en pantallas: 0,30 por gesto, 0,40 por pausa, y las mismas curvas en las dos.
- **Do** fijar escenas solo desde 1024 × 640 px y ajustar piezas y letra a la altura antes de pensar en subir el umbral.
- **Do** dejar cada sección legible y quieta con «reducir movimiento» y sin JavaScript, con todo el texto en el HTML.
- **Do** mantener el contraste AA en cada punto de reposo, también durante la noche.

### Don't:
- **Don't** usar orbes, manchas difuminadas, texto con degradado, tarjetas de vidrio ni halos de color sin desplazamiento.
- **Don't** hacer un degradado de un color a otro. De marino a marino, de cobre a cobre, de papel a papel.
- **Don't** repetir la misma entrada de desvanecido en todas las secciones: cada una tiene su gesto.
- **Don't** animar alto, ancho ni márgenes. Solo transformación, opacidad, máscara y trazo.
- **Don't** fijar nada por debajo de 1024 px de ancho ni de 640 de alto.
- **Don't** pintar las dos líneas de negocio con colores distintos, ni traer el azul de KLINODA fuera de su tablero.
- **Don't** numerar en grande (01 / 02 / 03) como decoración, ni hacer rejillas de tarjetas iguales de icono, título y texto.
- **Don't** mover datos en un ticker: una cifra que pasa no se puede leer.
- **Don't** usar piedra (#B9B1A7) como texto sobre papel o blanco.
