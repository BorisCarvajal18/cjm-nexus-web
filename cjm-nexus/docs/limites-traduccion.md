# Límites para quien traduzca

Medidos en el navegador el 2026-09-19 (REVISION-GENERAL.md, propuesta 9). Son los textos que viven
en un hueco fijo: si la traducción se pasa, se corta o desborda. Todo lo demás puede crecer.

| Dónde (`src/content/`) | Qué | Máximo | Por qué |
|---|---|---|---|
| `home` → `hacemos.tablero.kpis[].nombre` | Rótulo de un indicador («Ventas», «Cartera») | **7 letras** | Comparte 95 px con su variación. «Cartera» cabe por 1 px; «Forderungen» y «Receivables» no |
| `home` → `hacemos.portal.documentos[].nombre` | Nombre de un documento | **21 letras** | 135 px; si no cabe, puntos suspensivos |
| `home` → `hacemos.portal.documentos[].estado` | Estado («Firmado», «En revisión») | **11 letras** | La etiqueta crece y le quita sitio al nombre |
| `home` → `hacemos.servicios[].titulo` | Título de cada servicio en la escena: **dos líneas, una por elemento** | **29 letras por línea** | A 1280 px caben unas 29; si una línea parte, la letra de toda la escena baja (`--k`) |
| Todos los `h1` (`hero.title`, `portada.titular`) | Cada palabra | **18 letras** | En el teléfono van a 34 px. En alemán se parten con guion (`hyphens`), pero conviene evitarlo |
| `sitio` → `cabecera.agendar` + `agendarDetalle` | El botón de la cabecera | **16 letras** en total | Por encima, el menú no cabe a 1101 px |
| Menú (`sitio`/`lib/site.js`) | Cada elemento | **10 letras** | Seis elementos entre 1101 y 1300 px |

## Convenciones que lee el código

- **Variación de un indicador:** empieza por `▲` o `▼` y un espacio («▲ 12 %»). El código cambia el
  signo por un icono; sin el signo, no hay flecha.
- **Énfasis de un titular:** `highlight` es la FRASE exacta tal como aparece en `title`, con su
  puntuación y sus mayúsculas (`['en', 'una', 'semana.']` o `'en una semana.'`). En la portada, el
  tramo va entre asteriscos dentro del titular: `*auf Augenhöhe*`.
- **Cifras con «+»:** `'15+'`; el código separa el signo para pintarlo en cobre.

## Tres supuestos del código que el inglés rompe (hay que tocarlos al traducir)

1. `components/registro/TableroGerencial.jsx` → `cifra()` lee los ingresos con **coma decimal**
   («$1,24 M»). Con «$1.24M» leería 124.
2. `components/mockups/ManagementBoard.jsx` pinta `{pct} %` con espacio: bien en español y alemán; en
   inglés es «27%».
3. `lib/registro.js` → `conMillares()` separa los millares con punto. Hoy ninguna cifra animada llega
   a 1000.
