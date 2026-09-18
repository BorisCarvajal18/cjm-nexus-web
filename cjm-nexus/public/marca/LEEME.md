# Logotipos

Archivos de marca listos para usar en la web. **No editar a mano**: se generan
desde los originales con el guion `scripts/marca.mjs`.

## CJM Nexus

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `cjm-isotipo.png` | Isotipo circular, 256 px, con transparencia | Cabecera y pie |
| `cjm-isotipo.webp` | El mismo a 512 px, más ligero | Pantallas de alta densidad |
| `cjm-isotipo-claro.png` · `.webp` | Variante clara de una sola tinta, en blanco, 256 y 512 px | Cabecera sobre la portada y sobre marino |
| `favicon-32.png` | Icono de pestaña | Navegador |
| `apple-icon.png` | Icono de 180 px | iOS al guardar en pantalla de inicio |
| `cjm-completo-origen.jpg` | Original con marca denominativa y eslogan | Solo referencia, no se publica |

El isotipo sale de `public/logo.png`, que es el único archivo con
transparencia real que existe. El logotipo completo llegó como JPEG con fondo
blanco, así que **no se puede colocar sobre el fondo crema ni sobre las bandas
oscuras** sin que se le vea el recuadro; por eso en la web la marca se compone
con el isotipo más el nombre en Plus Jakarta Sans.

**Por qué hay una variante clara.** El isotipo lleva el dibujo en marino sobre
un disco casi blanco; sobre la fotografía de la portada o sobre marino ese
disco se recorta y la marca parece una pegatina. La variante clara elimina el
disco y los meridianos (a 27 px solo son ruido) y pasa el resto a blanco: un
dibujo de una tinta que se apoya en el fondo. La genera `isotipoClaro()` en el
mismo guion, desde `public/logo.png`.

## KLINODA

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `klinoda.png` · `.webp` | Versión para fondos claros, en morado `#3E3676` y turquesa `#328591` (los de su plataforma), **sin el lema**, 800 px | Barra del tablero y vista de aptitud |
| `klinoda-claro.png` · `.webp` | Versión clara, en blanco con los nodos turquesa, **sin el lema**, 1400 px | Placa de la escena y bandas oscuras |
| `klinoda-origen.png` | Original del repositorio de KLINODA (2087 × 753, negro y verde) | Fuente de las dos versiones; no se publica en ninguna página |
| `klinoda-origen.jpg` | Original antiguo (708 × 257) | Ya no se usa; se conserva como referencia |

**Cómo se hacen.** Las dos salen desde el 2026-09-19 del mismo original bueno,
con `klinodaDesdeOriginal()` en `scripts/marca.mjs`. Cada píxel se descompone en
negro, verde y fondo, y la transparencia es la suma de las dos tintas: el borde
conserva su suavizado sin dientes ni halo. Después el negro se pinta de un color y
el verde de otro. Para fondos claros, morado y turquesa, la marca de la plataforma
de KLINODA, con los valores exactos de `static/marca/klinoda-logo-app.png` de su
repositorio. Para fondos oscuros, blanco y el turquesa de la escena. Lo blanco de
dentro de la «K» se vuelve transparente, como el fondo. **Ninguna lleva el lema**
(«Cada persona. Una historia completa.»): a los tamaños en que se usan no se lee.
Donde hace falta, la web lo escribe como texto (`home.es.js` → `klinoda.lema`).

## Pendiente

Ninguno de los originales es vectorial (tampoco `klinoda-origen.png`, que es un PNG grande): los PDF recibidos llevan dentro una
imagen JPEG. Con un archivo vectorial de verdad (SVG, AI o EPS) los logotipos
se verían nítidos a cualquier tamaño, pesarían una fracción y no haría falta
recortar fondos. Merece la pena pedírselo a quien diseñó la marca.
