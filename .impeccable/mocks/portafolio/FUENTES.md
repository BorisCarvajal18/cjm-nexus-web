# Portafolio · fuentes de las maquetas

Tres portadas de ejemplo para la oferta «tu web en menos de una semana»: solo la primera pantalla,
en HTML y CSS puros, sin framework. Marcas ficticias.

**Tercera versión (2026-09-19): Berlín, en inglés.** Decisión de Boris: la oferta se vende primero
en Berlín. Se mantiene el diseño de la segunda versión y cambian el contenido, las marcas y las fotos
que no encajaban con Berlín. La versión ecuatoriana en español (Tres Ollas, Cordel, Orilla) queda en
git, en el commit `98aafc2`, para cuando toque Ecuador.

| Portada | Idea | Gesto de movimiento (uno por portada) |
|---|---|---|
| `restaurante.html` · Regulars | La mesa larga de un sitio de barrio en Friedrichshain, de noche; el menú de la noche en tres pasos, como una tira impresa al pie | Al abrir, el local pasa de penumbra a luz |
| `constructora.html` · Chalkline | La lámina de un plano: un Altbau terminado y un cajetín con titular y la obra en curso en Prenzlauer Berg | La foto sube como una obra; después se llena el avance |
| `barberia.html` · Towpath | La vitrina: escaparate con el nombre, el sillón al sol al centro, escaparate con los huecos libres de hoy y los precios | Dos hojas de puerta se abren sobre la foto |

Las tres respetan «reducir movimiento». Cada una lleva «Concept homepage · fictional brand» y cierra
con «Want one like this for your business? Talk to us» hacia `https://www.cjmnexus.com/en#contacto`.

## Detalles de Berlín

- Precios en euros con formato alemán (`42 €`), horas de 24 h (`10:00–20:00`), fechas `12.03.2027`,
  decimales con coma (`3,60 m`).
- Reserva online o por teléfono; nada de WhatsApp. Los teléfonos son del rango que la Bundesnetzagentur
  reserva para ficción en Berlín (`030 23125 xxx`), así que no son de nadie.
- Barrios y lugares reales sin número de calle: Boxhagener Platz (Friedrichshain), Kollwitzkiez y
  Prenzlauer Berg, Schöneberg, Landwehrkanal, Maybachufer y Kottbusser Damm (Kreuzberg y Neukölln).
- Lo que un residente internacional busca: menú con versión vegetariana, presupuestos y contratos en
  inglés, reservar sin crear cuenta.

## Nombres

Comprobados el 2026-09-19 con búsquedas en la web: ninguno coincide con un negocio conocido de Berlín
de su sector.

| Marca | Sector | Barrio | Notas |
|---|---|---|---|
| Regulars | Restaurante | Friedrichshain | Sin coincidencias en las guías de restaurantes de Berlín (Time Out, The Berliner, Berlin Food Stories) |
| Chalkline | Reformas de Altbau | Toda Berlín | Sin coincidencias entre las empresas de Altbausanierung de Berlín. Es la cuerda de tiza para marcar líneas en obra, pariente de «cordel» |
| Towpath | Barbería | Kreuzberg, junto al canal | Sin coincidencias entre las barberías de Berlín. Descartado antes «Ufer»: existe «Die Besten vom anderen Ufer» en Kreuzberg y «vom anderen Ufer» es un modismo |

Las personas que aparecen (Marta Kowalczyk, Emre, Lina, Jonas) son inventadas.

## Imágenes

Todas de Unsplash, con la Unsplash License (uso libre, también comercial, sin atribución
obligatoria); ninguna es de Unsplash+. Descargadas a `img/`. Comprobado el 2026-09-19 que cargan
abriendo cada HTML desde la carpeta (`file://`) en Chrome.

| Archivo | Portada | Autor | Página |
|---|---|---|---|
| `img/restaurante-cena.jpg` | Regulars | Romain Gal | https://unsplash.com/photos/people-enjoying-a-candlelit-dinner-at-a-dimly-lit-restaurant-UEjjO-aJtZ8 |
| `img/constructora-altbau.jpg` | Chalkline | Christian Lue | https://unsplash.com/photos/empty-room-with-wooden-floor-and-large-window-4YhNRgL59Fc |
| `img/constructora-techo.jpg` | Chalkline | Olek Buzunov | https://unsplash.com/photos/interior-hallway-under-renovation-with-exposed-ceiling-and-wiring-BncclVhCSXA |
| `img/barberia-sillon.jpg` | Towpath | Fito García | https://unsplash.com/photos/a-black-chair-sitting-in-front-of-a-brick-wall-tLKzShLoPDQ |

Salieron las fotos que no encajaban con Berlín: el fogón de leña, el interior de hormigón con
montañas, la obra de hormigón y ladrillo al atardecer, y la barbería antigua con puerta colonial y reja (demasiado del sur). También se descartó una mesa de brunch
americano (pollo con gofres). Los escaparates de barbería que salieron llevaban el poste de barbero o
el rótulo de una barbería real.

## Tipografías

Google Fonts, licencia OFL. Distintas entre sí y de las de CJM Nexus (Plus Jakarta Sans e Inter).

- **Regulars:** Caprasimo y Figtree.
- **Chalkline:** Encode Sans, grotesca de aire técnico, con su eje de anchura para el titular y las cifras.
- **Towpath:** Rozha One (didona gruesa de rótulo y cartel del XIX) y Hanken Grotesk.

## Referencias

Webs reales, primera pantalla vista a 1536 × 730 el 2026-09-19. Siguen valiendo para la versión de
Berlín: el diseño no cambia.

### Restaurante

- **Dishoom**, Londres (dishoom.com). Vende el lugar antes que el plato. Tomo que la portada sea el
  local lleno, no un plato de catálogo.
- **Kol**, Londres (kolrestaurant.com). Una sola foto a sangre y la marca callada. Tomo la foto única
  que ocupa la pantalla.
- **Pujol**, Ciudad de México (pujol.com.mx). Reservar junto a la dirección. Tomo reservar y llamar
  al lado del barrio.
- **Hawksmoor**, Londres (thehawksmoor.com). La marca grande sobre una foto oscura y cálida de mesa
  llena. Tomo el titular grande directamente sobre la foto.

### Constructora

- **Olson Kundig**, Seattle (olsonkundig.com). La foto desde dentro de la obra terminada y una sola
  frase. Tomo el interior acabado y un titular único y sobrio.
- **SOM**, Chicago (som.com). Una obra concreta con su lugar, no un eslogan. Tomo el pie de foto con
  obra, barrio y año, y la obra en curso con su barrio.
- **Laing O'Rourke**, Reino Unido (laingorourke.com). Cabecera en celdas con filete. Tomo las celdas,
  que aquí son un cajetín de plano con datos reales.
- **Uribe & Schwarzkopf**, Quito (uribeschwarzkopf.com). El contacto directo en la cabecera. En
  Berlín es el teléfono.
- Vistas y descartadas: Built (pide verificación anti-bots) y Multiplex (bloquea el acceso).

### Barbería

- **Fellow Barber**, EE. UU. (fellowbarber.com). Un lugar y una persona con carácter, no las
  herramientas. Tomo el local con historia y la gente con nombre.
- **Blind Barber**, Nueva York (blindbarber.com). Fondo de color liso contra luz dura. Tomo el cobalto
  liso contra la luz de la foto.
- **Ruffians**, Edimburgo y Londres (ruffians.co.uk). Reservar siempre a mano. Tomo reservar en la
  cabecera y en la portada.
- **Murdock London** (murdocklondon.com), como contraejemplo: emergentes que tapan la portada y el
  icono del poste de barbero.

## Capturas

En `capturas/`: `<portada>-1536x730.png` (primera pantalla en el portátil de Boris),
`<portada>-390x844.png` (teléfono, densidad 2) y sus versiones `-entera` con la página completa,
donde se ve la llamada de CJM Nexus. Hechas con Chrome sin ventana sobre `file://`, después de que
termina el movimiento de entrada.
