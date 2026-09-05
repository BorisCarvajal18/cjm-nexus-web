# Lo que hay que confirmar antes de publicar las páginas de servicios

**Para:** Richard
**De:** Boris
**Fecha:** 5 de septiembre de 2026

Las tres páginas de servicios ya están escritas y montadas. Casi todo sale del
brochure y de lo que ya hacemos, pero hay **tres cosas que escribí suponiendo**,
porque no las tengo confirmadas. Están abajo.

**No hace falta que escribas nada desde cero.** Debajo de cada pregunta está lo
que dice hoy la web. Solo tienes que decir **«está bien»** o **corregir la
frase**. Con cinco minutos por pregunta queda resuelto.

Si algo de lo que escribí no es verdad, prefiero saberlo ahora: es texto que un
cliente te va a leer antes de una reunión, y no puede decir algo que después
tengas que desmentir.

---

## 1 · ¿Cómo es de verdad un mes de trabajo con un cliente?

Es lo más importante de la página de dirección financiera. Todo comprador se
hace la misma pregunta antes de contratar: *«¿y qué pasa exactamente si os
contrato?»*. La página la responde con estos cuatro pasos.

**Lo que dice hoy la web:**

| Cuándo | Qué pasa | Qué recibe el cliente |
| --- | --- | --- |
| **Semana 1** — Levantamiento | Nos entrega los estados financieros de los últimos doce meses y hablamos una vez con su contador. No pedimos acceso a cuentas bancarias ni movemos dinero. | Pone él: los reportes que ya tiene y un par de horas de su tiempo. |
| **Semana 2** — Diagnóstico financiero | Un documento con el estado real del negocio: rentabilidad por línea, estructura de costos, ciclo de caja y los tres o cuatro puntos que más dinero le están costando. **Se presenta en reunión**, no se manda por correo. | El diagnóstico y una lista priorizada de qué atacar primero. |
| **Semanas 3 y 4** — Puesta en marcha | Montamos el tablero gerencial y el flujo de caja proyectado a trece semanas con sus datos. | El tablero funcionando, con sus cifras dentro. |
| **Cada mes** — Reunión de dirección | Una reunión mensual con el tablero delante: qué pasó, qué se decide, quién hace qué. Las decisiones quedan escritas. | Tablero actualizado, alertas del mes y el acta de la reunión. |

**Lo que necesito que confirmes:**

1. ¿Los plazos son así? (¿el diagnóstico tarda una semana, dos, un mes?)
2. ¿Qué le pides exactamente al cliente para arrancar? Yo puse «estados
   financieros de los últimos doce meses y una conversación con su contador».
3. ¿El diagnóstico se **presenta en reunión** o se entrega y ya?
4. ¿La reunión es **mensual**? ¿Quincenal? ¿Depende del cliente?
5. ¿Se firma un **acta** de cada reunión? Lo puse porque es nuestra forma de
   trabajar en tecnología, pero no sé si tú lo haces así en finanzas.
6. ¿Cómo se cobra? ¿Mensualidad, por proyecto, por horas? **El precio no va a
   salir en la web**, pero necesito saber la forma para no escribir algo que
   contradiga tu propuesta.

---

## 2 · ¿Qué te preguntan de verdad antes de firmar?

La sección de preguntas frecuentes va justo antes de pedir la reunión, y sirve
para quitar la última objeción. Ahora mismo tiene **las preguntas que yo
imagino**, no las que tú escuchas.

**Lo que dice hoy la web** (pregunta → resumen de la respuesta):

1. **¿Esto reemplaza a mi contador?** → No. El contador registra y cumple; la
   dirección financiera interpreta y decide. Trabajamos con él, no en su lugar.
2. **¿Y si mi contabilidad está desordenada?** → Es lo normal y no impide
   empezar. Ordenar lo mínimo para decidir es parte del primer mes.
3. **¿Cuánto tiempo me va a quitar?** → La entrega inicial de información y una
   reunión al mes. El trabajo lo hacemos nosotros.
4. **¿Necesitan acceso a mis cuentas bancarias?** → No. Trabajamos con
   reportes. No manejamos ni movemos dinero de ningún cliente.
5. **¿Desde qué tamaño de empresa tiene sentido?** → Desde que las decisiones
   pesan lo suficiente como para que equivocarse cueste caro.
6. **¿Trabajan a distancia?** → Sí, Ecuador y Alemania, en español, inglés y
   alemán.

**Lo que necesito que confirmes:**

- ¿Alguna de estas respuestas está mal o suena distinto a como tú la dices?
- **¿Cuáles son las tres o cuatro preguntas que te hacen de verdad?** Si alguna
  de las de arriba nunca te la han hecho, la quitamos y ponemos la real. Una
  pregunta auténtica vale por tres inventadas.

---

## 3 · La promesa de entregas en los proyectos de software

*(Esta es más para mí que para ti, pero conviene que la veas porque es una
promesa pública.)*

**Lo que dice hoy la web:** que en un proyecto de software el cliente ve un
prototipo navegable antes de que programemos nada, y que **cada dos semanas hay
una versión que puede abrir y usar**. También que al terminar **el código, la
documentación y los accesos quedan a su nombre**.

**Lo que necesito que confirmes:** que estás de acuerdo con comprometer eso por
escrito en la web. Yo puedo sostenerlo técnicamente. Lo que no quiero es que un
cliente lo lea, lo exija en la negociación y a ti te sorprenda.

---

## Lo que no está bloqueado

Todo lo demás de las tres páginas ya está escrito y no depende de esta lista:
los síntomas del cliente, los entregables, el tablero gerencial, la sección de
«para quién no es», los tipos de proyecto de software y las garantías.

En cuanto lleguen tus respuestas, corrijo los tres bloques y las páginas quedan
listas. Nada se publica hasta que esté todo el sitio terminado.

---

### Nota técnica (para Boris)

Cada bloque escrito con suposiciones está marcado con el comentario `SUPUESTO`
en `src/content/servicios.es.js`. Para encontrarlos todos:

```bash
grep -n "SUPUESTO" src/content/servicios.es.js
```
