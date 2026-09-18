/**
 * Un paso del proceso: cuándo, qué pasa y qué recibe o pone el cliente.
 *
 * CADA PASO DICE QUÉ RECIBE O QUÉ PONE EL CLIENTE. Sin esa línea, los pasos
 * se convierten en una lista de actividades nuestras. Se exporta porque lo
 * usan dos montajes: la sección de aquí abajo (en filas) y las dos ofertas de
 * soluciones digitales (en columnas). Mismo material, sin tarjetas ni
 * números en círculo: un filete y su referencia.
 */
export function StepItem({ paso }) {
  return (
    <li>
      <p className="ref-pag cuando">
        {paso.step}
        <b>{paso.when}</b>
      </p>
      <div>
        <h3>{paso.title}</h3>
        <p>{paso.text}</p>
        {paso.gives ? <p className="da">{paso.gives}</p> : null}
      </div>
    </li>
  );
}

/**
 * El proceso completo, con su título fijo al lado en escritorio.
 *
 * Responde a la única pregunta que se hace de verdad quien piensa en
 * contratar: «¿y qué pasa exactamente si os contrato?». El título se queda
 * con `position: sticky`, sin animación.
 */
export default function Steps({ content }) {
  return (
    <section id="proceso" className="registro seccion">
      <div className="marco dos-col">
        <div className="fijo">
          <p className="ref-pag">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          {content.intro ? <p className="intro">{content.intro}</p> : null}
        </div>
        <ol className="pasos">
          {content.steps.map((paso) => (
            <StepItem key={paso.step} paso={paso} />
          ))}
        </ol>
      </div>
    </section>
  );
}
