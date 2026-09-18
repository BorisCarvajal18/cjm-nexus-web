'use client';

/**
 * <Portada /> — M0 (DESIGN.md). La primera pantalla entera: vídeo bajo un
 * velo marino, el titular, la entrada, «Agendar» y el enlace a «Qué hacemos».
 *
 * EL GESTO, una vez al cargar (1,8 s): el titular entra palabra a palabra,
 * cada una desde su máscara, y la imagen se asienta de 1,05 a 1. Lo hace el
 * CSS (`.js-mov` / `.cargada` en estilos/portada.css); aquí solo se da la salida,
 * cuando las fuentes ya están, para que el titular no cambie de letra a mitad
 * del gesto.
 *
 * EL VÍDEO no lleva `autoplay`: lo arranca este guion solo si el sistema no
 * pide reducir movimiento ni ahorro de datos, y se pausa fuera de pantalla.
 * Mientras carga, o si no puede reproducirse, se ve su primer fotograma, que
 * respira de 1 a 1,06. El paso de uno a otro no se nota.
 */
import { useEffect, useRef } from 'react';

import Flecha from '../../components/registro/Flecha';
import useDarkSection from '../../hooks/useDarkSection';

/** «Finanzas *claras* y…» → palabras, con las marcadas en 800. */
function palabras(titular) {
  return titular.split(' ').map((p) => ({ texto: p.replace(/\*/g, ''), fuerte: p.startsWith('*') }));
}

export default function Portada({ content }) {
  const seccion = useDarkSection();
  const video = useRef(null);

  /* La entrada: espera a las fuentes (como mucho 0,7 s). En una pestaña en
     segundo plano requestAnimationFrame no corre: a los 1,2 s arranca igual. */
  useEffect(() => {
    const raiz = document.documentElement;
    if (!raiz.classList.contains('js-mov')) return undefined;
    const arranca = () => raiz.classList.add('cargada');
    const fuentes = document.fonts?.ready ?? Promise.resolve();
    let vivo = true;
    Promise.race([fuentes, new Promise((ok) => setTimeout(ok, 700))]).then(() => {
      if (vivo) requestAnimationFrame(() => requestAnimationFrame(arranca));
    });
    const seguro = setTimeout(arranca, 1200);
    return () => {
      vivo = false;
      clearTimeout(seguro);
    };
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return undefined;
    v.muted = true;
    const calma = window.matchMedia('(prefers-reduced-motion: reduce)');
    const ahorro = !!navigator.connection?.saveData;
    const arranca = () => {
      if (calma.matches || ahorro) return;
      v.preload = 'auto';
      v.play()?.catch?.(() => {
        /* se queda la imagen */
      });
    };
    const enMarcha = () => v.classList.add('en-marcha');
    v.addEventListener('playing', enMarcha);

    /* Fuera de pantalla no hace falta gastar batería decodificando. */
    let observador;
    if ('IntersectionObserver' in window) {
      observador = new IntersectionObserver(([e]) => {
        if (calma.matches || ahorro) return;
        if (e.isIntersecting) arranca();
        else v.pause();
      });
      observador.observe(v);
    } else {
      arranca();
    }
    const alCambiar = (e) => {
      if (e.matches) {
        v.pause();
        v.classList.remove('en-marcha');
      } else arranca();
    };
    calma.addEventListener('change', alCambiar);
    return () => {
      v.removeEventListener('playing', enMarcha);
      observador?.disconnect();
      calma.removeEventListener('change', alCambiar);
    };
  }, []);

  return (
    <section ref={seccion} className="registro portada" id="portada">
      <div className="fondo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="foto" src="/portada/hero-poster.jpg" alt={content.imagen} fetchPriority="high" />
        <video ref={video} className="video" muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
          <source src="/portada/hero.webm" type="video/webm" />
          <source src="/portada/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="velo" aria-hidden="true" />
      <div className="marco">
        <h1>
          {palabras(content.titular).map((p, i) => {
            const Etiqueta = p.fuerte ? 'b' : 'span';
            return (
              <span key={i}>
                {i > 0 ? ' ' : null}
                <Etiqueta className="p" style={{ '--i': i }}>
                  <span>{p.texto}</span>
                </Etiqueta>
              </span>
            );
          })}
        </h1>
        <p className="entrada sec" style={{ '--d': '.46s' }}>
          {content.entrada}
        </p>
        <div className="acciones sec" style={{ '--d': '.54s' }}>
          <a className="boton" href="#contacto">
            <span>{content.agendar}</span>
            <Flecha />
          </a>
          <a className="enlace" href="#campos">
            {content.verQueHacemos}
            <Flecha abajo size={14} />
          </a>
        </div>
        <p className="nota sec" style={{ '--d': '.62s' }}>
          {content.nota}
        </p>
      </div>
      <p className="credito">{content.credito}</p>
      <div className="sigue" aria-hidden="true">
        <i />
      </div>
    </section>
  );
}
