# Logotipos

Archivos de marca listos para usar en la web. **No editar a mano**: se generan
desde los originales con el guion `scripts/marca.mjs`.

## CJM Nexus

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `cjm-isotipo.png` | Isotipo circular, 256 px, con transparencia | Cabecera y pie |
| `cjm-isotipo.webp` | El mismo a 512 px, más ligero | Pantallas de alta densidad |
| `favicon-32.png` | Icono de pestaña | Navegador |
| `apple-icon.png` | Icono de 180 px | iOS al guardar en pantalla de inicio |
| `cjm-completo-origen.jpg` | Original con marca denominativa y eslogan | Solo referencia, no se publica |

El isotipo sale de `public/logo.png`, que es el único archivo con
transparencia real que existe. El logotipo completo llegó como JPEG con fondo
blanco, así que **no se puede colocar sobre el fondo crema ni sobre las bandas
oscuras** sin que se le vea el recuadro; por eso en la web la marca se compone
con el isotipo más el nombre en Plus Jakarta Sans.

## KLINODA

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `klinoda.png` · `.webp` | Versión de marca sobre fondos claros | Página del proyecto, tarjetas |
| `klinoda-claro.png` · `.webp` | Versión invertida, en blanco | Bandas marino y cobre |
| `klinoda-origen.jpg` | Original recibido | Solo referencia |

**Por qué hay dos versiones.** El original es un JPEG con fondo blanco. Al
volver transparente el blanco desaparece también el documento blanco que va
dentro de la «K», de modo que sobre marino se ve el fondo a través del dibujo.
La versión clara se genera de otra forma: se recorta únicamente el fondo
exterior con un relleno por inundación desde los bordes, el documento interior
se conserva blanco y el morado de la marca se pasa a blanco. Los nodos
turquesa se mantienen en las dos.

## Pendiente

Ninguno de los originales es vectorial: los PDF recibidos llevan dentro una
imagen JPEG. Con un archivo vectorial de verdad (SVG, AI o EPS) los logotipos
se verían nítidos a cualquier tamaño, pesarían una fracción y no haría falta
recortar fondos. Merece la pena pedírselo a quien diseñó la marca.
