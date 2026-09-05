'use client';

/**
 * <Hero /> — la portada.
 *
 * Es lo primero que ve alguien y lo único que verá si se marcha en cinco
 * segundos, así que responde cuatro preguntas en ese orden: qué hacemos, para
 * quién, qué valor, y qué hacer ahora.
 *
 * EL TEXTO VA CENTRADO Y ES EL PROTAGONISTA. La decisión es del dueño y
 * manda sobre cualquier otra consideración de maquetación.
 *
 * EL GESTO: bajo el texto flota una esfera con una aurora de los colores de
 * marca. Al desplazarse, la sección se fija, el texto se retira y la esfera
 * crece hasta ocupar la pantalla entera con la frase que resume la firma.
 * Es una sola idea, ejecutada una sola vez, y por eso se sostiene: si cada
 * sección hiciera algo así, ninguna significaría nada.
 *
 * LO QUE SE VE SIN JAVASCRIPT: el titular, el texto, los dos botones y la
 * esfera a su tamaño de reposo. Todo legible. Las animaciones se suman
 * encima; no son la condición para leer la página.
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

/* Los cinco focos de la aurora: marino, azul acero, cobre, durazno y piedra.
   Se dibujan sumando luz sobre marino profundo, que es lo que hace que las
   mezclas salgan luminosas y no embarradas. */
const FOCOS = [
  [0.25, 0.3, '#3B4E7A', 0.95],
  [0.75, 0.35, '#C9784A', 0.9],
  [0.5, 0.8, '#E8B48A', 0.75],
  [0.85, 0.85, '#1E2D4F', 0.8],
  [0.15, 0.85, '#B9B1A7', 0.5],
];

/** Aurora dibujada en lienzo. Un degradado CSS no se mueve; esto sí. */
function Aurora() {
  const canvas = useRef(null);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return undefined;
    const ctx = cv.getContext('2d');
    let raf = null;

    const medir = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = cv.clientWidth * dpr;
      cv.height = cv.clientHeight * dpr;
    };

    const pintar = (t) => {
      const { width: w, height: h } = cv;
      if (!w || !h) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#141F3A';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      FOCOS.forEach(([fx, fy, color, alpha], i) => {
        const x = (fx + Math.sin(t * 0.0009 + i * 1.7) * 0.12) * w;
        const y = (fy + Math.cos(t * 0.0011 + i * 1.3) * 0.12) * h;
        const r = Math.max(w, h) * 0.55;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    medir();
    pintar(0);

    // Con «reducir movimiento» se dibuja UN fotograma y se para. La aurora
    // sigue ahí, quieta: se pierde el movimiento, no la imagen.
    if (!prefersReducedMotion()) {
      const bucle = (now) => {
        pintar(now);
        raf = requestAnimationFrame(bucle);
      };
      raf = requestAnimationFrame(bucle);
    }

    const alRedimensionar = () => {
      medir();
      pintar(performance.now());
    };
    window.addEventListener('resize', alRedimensionar);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', alRedimensionar);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
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

      /* Las dos palabras clave del titular van en gradiente de marca. Se
         resaltan aquí, después de partir el texto, y no en el JSX: así el
         HTML que sirve el servidor es una frase normal y un buscador lee
         «Finanzas claras y software a la altura», no fragmentos sueltos. */
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

      const esfera = root.querySelector('[data-esfera]');
      gsap.set(esfera, { xPercent: -50, yPercent: -22 });
      gsap.from(esfera, { yPercent: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.6 });

      /* Mientras la esfera está expandida, el fondo bajo la cabecera es
         oscuro aunque la sección sea clara: hay que avisar a mano. */
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
          onUpdate: (st) => marcar(st.progress > 0.45),
          onLeaveBack: () => marcar(false),
        },
      });

      tl.to(root.querySelector('[data-texto]'), { y: -80, opacity: 0, ease: 'power2.in', duration: 0.35 }, 0)
        .to(root.querySelector('[data-pista]'), { opacity: 0, duration: 0.2 }, 0)
        .to(
          esfera,
          {
            width: '100vw',
            height: '100vh',
            maxWidth: '100vw',
            maxHeight: '100vh',
            top: '50%',
            yPercent: -50,
            borderRadius: 0,
            ease: 'power2.inOut',
            duration: 1,
          },
          0,
        )
        .to(root.querySelector('[data-frase]'), { opacity: 1, duration: 0.4 }, 0.55)
        .from(root.querySelector('[data-frase] h2'), { y: 40, duration: 0.4 }, 0.55);

      return () => marcar(false);
    },
    [anchoSuficiente],
  );

  return (
    <section
      ref={scope}
      id="top"
      className="relative overflow-hidden bg-canvas lg:h-screen"
    >
      {/* Focos difuminados del fondo. Puramente decorativos y muy suaves:
          lo que tiene que destacar es el titular. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -left-[18vw] -top-[22vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,#3B4E7A,transparent_62%)] opacity-50 blur-[70px]" />
        <span className="absolute -right-[14vw] -top-[16vw] h-[48vw] w-[48vw] rounded-full bg-[radial-gradient(circle,#E8B48A,transparent_62%)] opacity-80 blur-[70px]" />
        <span className="absolute -bottom-[24vw] right-[8vw] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(circle,#C9784A,transparent_62%)] opacity-40 blur-[70px]" />
        <span className="absolute -bottom-[20vw] left-[12vw] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,#B9B1A7,transparent_62%)] opacity-70 blur-[70px]" />
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

      {/* La esfera */}
      <div
        data-esfera
        className="relative mx-auto mb-16 aspect-square w-[min(78vw,420px)] overflow-hidden rounded-full shadow-deep lg:absolute lg:left-1/2 lg:top-full lg:mb-0 lg:h-[42vw] lg:max-h-[600px] lg:w-[42vw] lg:max-w-[600px]"
      >
        <Aurora />
        <HeroDiagram className="absolute inset-0 h-full w-full opacity-90" />
        <div
          data-frase
          className="absolute inset-0 grid place-items-center px-[8vw] text-center text-white opacity-0"
        >
          <div>
            <h2 className="text-[clamp(1.7rem,3.8vw,3.2rem)] font-extrabold">{reveal.title}</h2>
            <p className="mt-3 font-semibold opacity-90">{reveal.text}</p>
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
