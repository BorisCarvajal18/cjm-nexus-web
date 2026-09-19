# Portafolio · fuentes de las maquetas

Tres portadas de ejemplo para la oferta «tu web en menos de una semana»: solo la primera pantalla,
en HTML y CSS puros, sin framework. Marcas ficticias.

**Segunda versión (2026-09-19).** El diseño se rehízo desde cero porque el primer intento quedó
correcto pero plano. Del primero quedan las marcas y tres ideas de contenido: el almuerzo del día,
la ficha de la obra en curso y los turnos libres.

| Portada | Idea | Gesto de movimiento (uno por portada) |
|---|---|---|
| `restaurante.html` · Tres Ollas | El fogón encendido. El nombre explica el almuerzo: sopa, segundo y jugo | Al abrir, el fogón pasa de penumbra a luz |
| `constructora.html` · Cordel | La lámina de un plano: foto panorámica y un cajetín con titular y obra en curso | La foto sube como una obra; después se llena el avance |
| `barberia.html` · Orilla | La vitrina: escaparate con el nombre, la puerta al centro, escaparate con turnos y precios | Las dos hojas de la puerta se abren |

Las tres respetan «reducir movimiento» (sin animación, estado final directo). Cada una lleva
«Concepto de portada · marca ficticia» y cierra con «¿Quieres una así para tu negocio? Escríbenos»
hacia `https://www.cjmnexus.com/es#contacto`.

## Nombres

Comprobados el 2026-09-19 con búsquedas en la web: ninguno es el de un negocio conocido en Ecuador.

| Marca | Sector | Ciudad | Descartados |
|---|---|---|---|
| Tres Ollas | Restaurante | Cuenca | — |
| Cordel | Constructora | Quito y valles | «Lindero» (existe Constructora El Lindero), «Tapial» (se confunde con Constructora Tapia, Quito) |
| Orilla | Barbería | Guayaquil (Las Peñas) | — (hay una «La Orilla Barber Shop» en Canarias, no en Ecuador) |

Las personas que aparecen (Ing. Andrea Mora, Don Wilson, Mayra, Kevin) son inventadas.

## Imágenes

Todas de Unsplash, con la Unsplash License (uso libre, también comercial, sin atribución obligatoria);
ninguna es de Unsplash+. Descargadas a `img/`. Comprobado el 2026-09-19 que cargan abriendo cada HTML
desde la carpeta (`file://`) en Chrome: todas con su tamaño natural, ninguna rota.

| Archivo | Portada | Autor | Página |
|---|---|---|---|
| `img/restaurante-fogon.jpg` | Tres Ollas | Leandro Silva | https://unsplash.com/photos/a-stove-with-pots-on-it-14iwjD5K9PY |
| `img/constructora-interior.jpg` | Cordel | Neon Wang | https://unsplash.com/photos/modern-concrete-interior-with-large-windows-overlooking-landscape-vDubGhodBV8 |
| `img/constructora-obra.jpg` | Cordel | Maxim Tolchinskiy | https://unsplash.com/photos/unfinished-concrete-building-on-a-sandy-hill-at-sunset-KhKZGj0rOGU |
| `img/barberia-puerta.jpg` | Orilla | Ten | https://unsplash.com/photos/vintage-barber-chair-bathed-in-sunlight-near-doorway-4y50IXfnaIo |

Descartadas por el camino: un barbero con el logo bordado de una barbería real en el polo, y además
negro con dorado; y un guiso en olla de barro para el restaurante, porque dos fotos competían.

## Tipografías

Google Fonts, licencia OFL. Distintas entre sí y de las de CJM Nexus (Plus Jakarta Sans e Inter).

- **Tres Ollas:** Caprasimo (rótulo pintado de picantería) y Figtree.
- **Cordel:** Encode Sans, grotesca de aire técnico, con su eje de anchura para el titular y las cifras.
- **Orilla:** Rozha One (didona gruesa de rótulo y cartel del XIX) y Hanken Grotesk.

## Referencias

Webs reales, primera pantalla vista a 1536 × 730 el 2026-09-19.

### Restaurante · Tres Ollas

- **Dishoom**, Londres (dishoom.com). Vende el lugar antes que el plato: «que sientas que estuviste
  en Bombay». Tomo que la portada huela a sitio: el fogón de leña, no un plato de catálogo.
- **Kol**, Londres (kolrestaurant.com). Una sola foto a sangre, con barro, lino y cerámica, y la
  marca callada. Tomo la foto única que ocupa la pantalla y las texturas de material.
- **Pujol**, Ciudad de México (pujol.com.mx). Reservar por WhatsApp junto a la dirección. Tomo
  WhatsApp como la acción principal, con la ubicación al lado.
- **Hawksmoor**, Londres (thehawksmoor.com). La marca grande sobre una foto oscura y cálida de mesa
  llena. Tomo el titular grande directamente sobre la foto.

### Constructora · Cordel

- **Olson Kundig**, Seattle (olsonkundig.com). La foto se toma desde dentro de la obra y la
  estructura enmarca el paisaje; una sola frase grande. Tomo el interior de hormigón con la montaña
  al fondo y un titular único y sobrio.
- **SOM**, Chicago (som.com). La portada es una obra concreta con su ciudad, no un eslogan. Tomo el
  pie de foto con obra y año, y la obra en curso con su lugar.
- **Laing O'Rourke**, Reino Unido (laingorourke.com). Cabecera armada en celdas con filete. Tomo
  las celdas, que aquí son un cajetín de plano con datos reales.
- **Uribe & Schwarzkopf**, Quito (uribeschwarzkopf.com). La promotora de referencia en Ecuador
  pone WhatsApp en la cabecera. Tomo WhatsApp a la vista desde arriba.
- Vistas y descartadas: Built (pide verificación anti-bots) y Multiplex (bloquea el acceso).

### Barbería · Orilla

- **Fellow Barber**, EE. UU. (fellowbarber.com). El protagonista es un lugar y una persona con
  carácter, con rótulos pintados, no las herramientas. Tomo el local con historia y la gente con
  nombre («Don Wilson, 31 años con la tijera»).
- **Blind Barber**, Nueva York (blindbarber.com). Fondo de color liso y sombras duras de sol. Tomo
  el cobalto liso contra la luz de mediodía de la foto.
- **Ruffians**, Edimburgo y Londres (ruffians.co.uk). «Book now» siempre a mano y una marca con
  personaje propio. Tomo reservar en la cabecera y en la portada, y el tono con personalidad.
- **Murdock London** (murdocklondon.com), como contraejemplo: emergentes de descuento y cookies
  tapan la portada, y el menú usa el icono del poste de barbero. Nada de eso aquí.

## Capturas

En `capturas/`: `<portada>-1536x730.png` (primera pantalla en el portátil de Boris),
`<portada>-390x844.png` (teléfono, densidad 2) y sus versiones `-entera` con la página completa,
donde se ve la llamada de CJM Nexus. Hechas con Chrome sin ventana sobre `file://`, después de que
termina el movimiento de entrada.
