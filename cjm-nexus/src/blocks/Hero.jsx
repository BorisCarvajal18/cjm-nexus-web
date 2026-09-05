'use client';

/**
 * <Hero /> — la portada.
 *
 * Es lo primero que ve alguien y lo único que verá si se marcha en cinco
 * segundos, así que responde cuatro preguntas en ese orden: qué hacemos, para
 * quién, qué valor, y qué hacer ahora.
 *
 * EL TEXTO VA CENTRADO Y ES EL PROTAGONISTA. Decisión del dueño, y manda
 * sobre cualquier otra consideración de maquetación.
 *
 * EL GESTO: bajo el texto asoma una esfera con una aurora de los colores de
 * marca. Al desplazarse, la sección se fija, el texto se retira y la esfera
 * crece hasta cubrir la pantalla; entonces aparece el dibujo de los dos
 * campos y la frase que resume la firma. Una sola idea, ejecutada una vez.
 *
 * ── POR QUÉ LA ESFERA CRECE CON `scale` Y NO CON `width`/`height` ─────────
 *
 * Animar el ancho y el alto obliga al navegador a recalcular la disposición
 * de la página en CADA fotograma, y además a redimensionar el lienzo que va
 * dentro, lo que fuerza a repintar la aurora entera desde cero. Eso era lo
 * que hacía que el desplazamiento se sintiera pesado.
 *
 * Con `scale` no hay recálculo ni redimensionado: la tarjeta gráfica estira
 * una capa que ya está pintada. La aurora se amplía, sí, pero como son
 * manchas difuminadas de baja frecuencia, ampliarlas no se nota.
 *
 * LO QUE SE VE SIN JAVASCRIPT: el titular, el texto, los dos botones y la
 * esfera en reposo. Todo legible; las animaciones se suman encima.
 */
import { useEffect, useRef, useState } from 'react';

import useGsap from '../hooks/useGsap';
import Button from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Text';
import { splitWords, wordsIn } from '../lib/animations';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import { marcarOscuro } from '../lib/surface';
import HeroDiagram from './HeroDiagram';

/** Quita acentos y signos para comparar palabras del titular. */
const normalizar = (palabra) =>
  palabra
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]/gu, '');

/* Los cinco focos de la aurora: azul acero, cobre, durazno, marino y piedra,
   sumando luz sobre marino profundo. Esa suma es lo que hace que las mezclas
   salgan luminosas en vez de embarradas. */
const FOCOS = [
  [0.25, 0.3, '#3B4E7A', 0.95],
  [0.75, 0.35, '#C9784A', 0.9],
  [0.5, 0.8, '#E8B48A', 0.75],
  [0.85, 0.85, '#1E2D4F', 0.8],
  [0.15, 0.85, '#B9B1A7', 0.5],
];

/* Resolución del lienzo, fija y modesta a propósito. La aurora son manchas
   difuminadas: a 560 px se ve igual que a 2000 y cuesta trece veces menos
   rellenarla. Como además la esfera se amplía con `scale`, el lienzo nunca
   cambia de tamaño mientras dura la animación. */
const LIENZO = 560;

/* Treinta fotogramas por segundo. La aurora se mueve muy despacio: a sesenta
   no se distingue, y a treinta se libera la mitad del tiempo de la tarjeta
   gráfica para lo que sí importa, que es que el scroll vaya fino. */
const MS_POR_FOTOGRAMA = 1000 / 30;

/** Aurora dibujada en lienzo. Un degradado de CSS no se mueve; esto sí. */
function Aurora() {
  const canvas = useRef(null);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return undefined;
    const ctx = cv.getContext('2d', { alpha: false });
    cv.width = LIENZO;
    cv.height = LIENZO;

    let raf = null;
    let ultimo = 0;
    let visible = true;

    const pintar = (t) => {
      ctx.fillStyle = '#141F3A';
      ctx.fillRect(0, 0, LIENZO, LIENZO);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < FOCOS.length; i += 1) {
        const [fx, fy, color, alpha] = FOCOS[i];
        const x = (fx + Math.sin(t * 0.0009 + i * 1.7) * 0.12) * LIENZO;
        const y = (fy + Math.cos(t * 0.0011 + i * 1.3) * 0.12) * LIENZO;
        const g = ctx.createRadialGradient(x, y, 0, x, y, LIENZO * 0.55);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, LIENZO, LIENZO);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    pintar(0);

    // Con «reducir movimiento» queda el primer fotograma y se para: se pierde
    // el movimiento, no la imagen.
    if (prefersReducedMotion()) return undefined;

    const bucle = (now) => {
      raf = requestAnimationFrame(bucle);
      if (!visible || now - ultimo < MS_POR_FOTOGRAMA) return;
      ultimo = now;
      pintar(now);
    };
    raf = requestAnimationFrame(bucle);

    /* Se deja de pintar cuando la portada sale de pantalla. Sin esto, la
       aurora sigue consumiendo tarjeta gráfica mientras alguien lee el resto
       de la página, que es justo cuando más falta hace para el scroll. */
    const observador = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting;
      },
      { threshold: 0 },
    );
    observador.observe(cv);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observador.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      width={LIENZO}
      height={LIENZO}
    />
  );
}

export default function Hero({ content }) {
  const { eyebrow, title, lead, primary, secondary, note, scroll, reveal, highlight = [] } = content;
  const [anchoSuficiente, setAnchoSuficiente] = useState(false);

  useEffect(() => {
    const q = window.matchMedia('(min-width: 1024px)');
    const sync = () => setAnchoSuficiente(q.matches);
    sync();
    q.addEventListener('change', sync);
    return () => q.removeEventListener('change', sync);
  }, []);

  const scope = useGsap(
    (self, root) => {
      if (!root) return undefined;

      const h1 = root.querySelector('[data-titular]');
      const palabras = splitWords(h1);

      /* Las dos palabras clave van en gradiente de marca. Se resaltan aquí,
         después de partir el texto, y no en el JSX: así el HTML que sirve el
         servidor es una frase normal y un buscador lee «Finanzas claras y
         software a la altura», no fragmentos sueltos. */
      const destacadas = new Set(highlight.map(normalizar));
      palabras.forEach((palabra) => {
        if (destacadas.has(normalizar(palabra.textContent))) {
          palabra.classList.add('text-grad', 'bg-g-brand');
        }
      });

      wordsIn(palabras, { delay: 0.15, stagger: 0.055 });
      gsap.from(root.querySelectorAll('[data-entra]'), {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.5,
      });

      if (!anchoSuficiente || prefersReducedMotion()) return undefined;

      const circulo = root.querySelector('[data-circulo]');

      /* Cuánto hay que ampliar la esfera para tapar la pantalla, y cuánto
         subirla. Van como funciones para que ScrollTrigger las recalcule al
         cambiar el tamaño de la ventana en lugar de quedarse con el valor
         del primer render. */
      const diametro = () => Math.min(window.innerWidth * 0.42, 600);
      const escalaFinal = () =>
        (1.06 * Math.hypot(window.innerWidth, window.innerHeight)) / diametro();
      const subida = () => -(window.innerHeight * 0.5 + diametro() * 0.28);

      gsap.set(circulo, { xPercent: -50, yPercent: -22 });
      gsap.from(circulo, { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.6 });

      /* Mientras la esfera cubre la pantalla, el fondo bajo la cabecera es
         oscuro aunque la sección siga siendo clara: hay que avisar a mano. */
      let oscuro = false;
      const marcar = (activo) => {
        if (activo === oscuro) return;
        oscuro = activo;
        marcarOscuro(activo);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (st) => marcar(st.progress > 0.45),
          onLeaveBack: () => marcar(false),
        },
      });

      tl.to(root.querySelector('[data-texto]'), { y: -80, opacity: 0, ease: 'power2.in', duration: 0.35 }, 0)
        .to(root.querySelector('[data-pista]'), { opacity: 0, duration: 0.2 }, 0)
        .to(circulo, { scale: escalaFinal, y: subida, ease: 'power2.inOut', duration: 1 }, 0)
        .to(root.querySelector('[data-revelado]'), { opacity: 1, duration: 0.35 }, 0.6)
        .from(root.querySelector('[data-frase] h2'), { y: 40, duration: 0.4 }, 0.6);

      return () => marcar(false);
    },
    [anchoSuficiente],
  );

  return (
    <section ref={scope} id="top" className="relative overflow-hidden bg-canvas lg:h-screen">
      {/* Dos focos difuminados, no cuatro: cada uno es una capa grande que el
          navegador tiene que componer, y con dos ya se tiñe el fondo. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -left-[18vw] -top-[22vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,#3B4E7A,transparent_62%)] opacity-50 blur-[70px]" />
        <span className="absolute -right-[14vw] -top-[16vw] h-[48vw] w-[48vw] rounded-full bg-[radial-gradient(circle,#E8B48A,transparent_62%)] opacity-80 blur-[70px]" />
      </div>

      {/* Texto centrado */}
      <div
        data-texto
        className="container relative z-20 grid place-items-center pb-16 pt-32 text-center lg:absolute lg:inset-0 lg:pb-0 lg:pt-0"
      >
        <div>
          <span data-entra className="inline-block">
            <Eyebrow>{eyebrow}</Eyebrow>
          </span>
          <h1
            data-titular
            className="mx-auto mt-4 max-w-[16ch] text-display-lg font-extrabold text-ink"
          >
            {title}
          </h1>
          <p data-entra className="mx-auto mt-5 max-w-[36rem] text-[1.02rem] text-ink-soft">
            {lead}
          </p>
          <div data-entra className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="#contacto" variant="copper" size="lg">
              {primary}
            </Button>
            <Button href="#campos" variant="outline" size="lg">
              {secondary}
            </Button>
          </div>
          <p data-entra className="mt-4 text-[.84rem] text-ink-muted">
            {note}
          </p>
        </div>
      </div>

      {/* La esfera. En escritorio vive en una capa propia que no participa del
          flujo, para que ampliarla no mueva nada de la página. */}
      <div className="relative mx-auto mb-16 w-[min(78vw,420px)] lg:absolute lg:inset-0 lg:mx-0 lg:mb-0 lg:w-auto lg:overflow-hidden">
        {/* En reposo asoma por abajo. La posición inicial la fija GSAP con
            xPercent/yPercent para que conviva con el `scale` que viene
            después; el `-translate-` de CSS es solo el estado sin
            JavaScript. */}
        <div
          data-circulo
          className="relative aspect-square w-full overflow-hidden rounded-full shadow-deep will-change-transform lg:absolute lg:left-1/2 lg:top-full lg:h-[min(42vw,600px)] lg:w-[min(42vw,600px)] lg:-translate-x-1/2 lg:-translate-y-[22%]"
        >
          <Aurora />
        </div>

        {/* Lo que se revela cuando la esfera ya cubre la pantalla. Va en una
            capa aparte y NO se amplía: así el dibujo mantiene su grosor de
            línea y el texto su tamaño. */}
        <div
          data-revelado
          className="pointer-events-none absolute inset-0 hidden opacity-0 lg:block"
        >
          <HeroDiagram className="absolute inset-0 h-full w-full" />

          {/* Velo oscuro bajo la frase. El dibujo llega hasta el centro y sin
              esto el titular compite con las barras y los nodos justo donde
              hay que leerlo. Es un degradado radial muy abierto: separa el
              texto sin tapar el dibujo. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(46%_38%_at_50%_50%,rgba(10,20,40,.62),rgba(10,20,40,0)_70%)]"
          />

          <div data-frase className="absolute inset-0 grid place-items-center px-[8vw] text-center text-white">
            <div>
              <h2 className="text-[clamp(1.7rem,3.8vw,3.2rem)] font-extrabold">{reveal.title}</h2>
              <p className="mt-3 font-semibold text-white/90">{reveal.text}</p>
            </div>
          </div>
        </div>
      </div>

      <p
        data-pista
        className="absolute inset-x-0 bottom-8 z-20 hidden text-center text-[.64rem] font-extrabold uppercase tracking-[.18em] text-ink-muted lg:block"
      >
        {scroll}
        <span
          aria-hidden="true"
          className="mx-auto mt-2 block h-[34px] w-px animate-drop bg-gradient-to-b from-copper to-transparent"
        />
      </p>
    </section>
  );
}
