# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el **mismo peso**. La web no prioriza ninguna: cada visitante se autoselecciona desde la portada. Confirmado con Boris el 12 de septiembre de 2026.

- **Dueño o gerente de PYME / empresa mediana que necesita decidir con números.** Vende, crece y opera todos los días, pero cuando toca decidir la información financiera no cuenta una historia clara. Llega por la trayectoria de Richard Carvajal. Decisión lenta, cara y con un contador ya en escena: la duda real es «¿esto reemplaza a mi contador?» y «¿qué pasa exactamente si os contrato?».
- **Dueño de empresa pequeña o mediana que necesita presencia digital o un sistema.** Dos situaciones distintas bajo la misma línea: quien necesita una página web profesional (decisión rápida, entrada barata) y quien necesita el sistema con el que la empresa trabaja todos los días (normativa, documentos oficiales, datos sensibles). La segunda es del tamaño de KLINODA.

Ambas audiencias evalúan antes de escribir: leen la web entera, en el teléfono, antes de pedir una reunión de veinte minutos.

## Product Purpose

CJM Nexus es una firma de dos líneas —**dirección financiera externa** y **soluciones digitales a medida**— con equipo en Ecuador y Alemania. Esta web es la web corporativa: su trabajo es que un dueño o gerente entienda qué hace la firma, se convenza de que puede sostener lo que dice, y agende el **diagnóstico ejecutivo de 20 minutos** (Calendly). Ese agendamiento es la única conversión.

## Positioning

**El número y el sistema que lo produce viven en la misma firma.** La mayoría de los tableros gerenciales fallan por lo mismo: los datos se arman a mano, llegan tarde y nadie confía del todo en ellos. Cuando quien dirige las finanzas y quien construye el software son la misma casa, el indicador se define una vez en la reunión de dirección y el sistema lo produce solo cada mes. Una consultora financiera no puede construirlo y una software factory no sabe qué medir.

El segundo diferencial es **el método como garantía**, no como promesa: decisiones por escrito en actas numeradas, pruebas automáticas en cada cambio, privacidad escrita en el modelo de datos y no en la pantalla, y nada real hasta que un especialista valide. KLINODA es la evidencia auditable de las cuatro.

## Operating Context

- **Mercados reales hoy: Ecuador y Estados Unidos.** Confirmado el 12 de septiembre de 2026. Alemania es sede de parte del equipo (Boris), no mercado con actividad todavía. Europa y el resto de Latinoamérica son aspiración: no se presentan como negocio en marcha.
- **La conversión es una reunión, no una compra.** Diagnóstico ejecutivo de 20 minutos vía Calendly (`CALENDLY_URL` en `cjm-nexus/src/lib/site.js`), más WhatsApp Ecuador, WhatsApp Alemania y correo como canales directos.
- **Idiomas de trabajo:** español, inglés y alemán.
- **Ritmo del servicio financiero** (redactado, pendiente de confirmación de Richard): semana 1 conversación estratégica con la información que el cliente ya tenga · semana 2 diagnóstico presentado en reunión · semanas 3-4 tablero gerencial y flujo de caja a trece semanas · después, reunión de dirección mensual con acta escrita.
- **Ritmo del servicio web:** día 1 conversación y estructura por escrito · días siguientes construcción con enlace navegable y correcciones · menos de una semana hasta publicación. La semana empieza a contar cuando el cliente entrega textos, logotipo e imágenes.
- **CJM Nexus no maneja ni mueve dinero de clientes** y no pide acceso a cuentas bancarias. Trabaja sobre reportes.

## Capabilities and Constraints

**Qué ofrece la firma**

- Dirección financiera externa: diagnóstico financiero ejecutivo, tablero gerencial mensual, flujo de caja proyectado a trece semanas, rentabilidad por línea de negocio, estructura de costos, reunión de dirección documentada.
- Soluciones digitales: página web a medida publicada en menos de una semana (dominio, alojamiento y mantenimiento incluidos, registrados a nombre de la empresa del cliente); plataformas especializadas por sector; tableros conectados a los datos del cliente; automatización de reportes y documentos con firma electrónica; integraciones con facturación, contabilidad, inventario.
- Empresa del Grupo CJM Nexus: **KLINODA**, plataforma de salud ocupacional en Ecuador (repositorio aparte, `C:\dev\plataforma-medicina-ocupacional`). KLINODA S.A.S., sociedad legalmente constituida del Grupo CJM Nexus, es la parte que firma los contratos. Su cliente es la empresa empleadora y el médico ocupacional es usuario y canal de venta (regla 7 de «Reglas de contenido que no se negocian», decidido el 15 de septiembre de 2026).

**Restricciones técnicas de esta web**

- Next.js 14 App Router con generación estática, React 18, Tailwind (tokens de marca), GSAP. La app vive en la subcarpeta `cjm-nexus/`, no en la raíz del repositorio.
- Despliegue en Vercel (Root Directory apuntando a `cjm-nexus/`), dominio `cjmnexus.com`.
- **Ningún texto visible va quemado en los componentes.** Todo sale de `cjm-nexus/src/content/*.js`. Es la regla que permite revisar y aprobar los textos leyendo un solo archivo.
- **Trilingüe ES/EN/DE es obligatorio** y cada idioma es una URL real e indexable (`/es`, `/en`, `/de`). Estado actual deliberado: solo existe el español escrito; `/en` y `/de` sirven contenido español a la espera de las traducciones, porque traducir un texto que todavía se corrige significa traducirlo dos veces. Todo enlace interno lleva el idioma delante.
- **Ningún precio en la web.** Ni cifras, ni rangos, ni «desde». La pregunta «¿cuánto cuesta?» se responde remitiendo a la reunión de veinte minutos, que es distinto de esquivarla. Confirmado por el dueño el 5 de septiembre de 2026 y ratificado el 12 de septiembre.

**Decisiones abiertas — no inventar la respuesta**

Recogidas en `cjm-nexus/docs/preguntas-richard.md` y marcadas con el comentario `SUPUESTO` en `cjm-nexus/src/content/servicios.es.js`. Están escritas en la web a partir de suposiciones razonables y esperan la confirmación de Richard:

1. Plazos reales del servicio financiero, y si el diagnóstico se presenta en reunión o se entrega y ya.
2. Frecuencia real de la reunión de dirección (mensual, quincenal, según cliente) y si se levanta acta en finanzas como se hace en tecnología.
3. Forma de cobro (mensualidad, proyecto, horas). No sale en la web, pero condiciona qué se puede afirmar.
4. Cuáles son las preguntas que de verdad le hacen a Richard antes de firmar. Las seis actuales son las que Boris esperaría, no las que Richard escucha.

Otras cosas sin resolver: no existe página «Nosotros» (el menú apunta a la banda de la portada), no existen las páginas legales de Privacidad y Aviso legal (pendientes de la entidad legal de la firma), no hay página de empresa en LinkedIn (`SOCIAL_PROFILES` está vacío a propósito). Cómo nombra la web la relación entre CJM Nexus y KLINODA ya está decidido (regla 8, 18 de septiembre de 2026), salvo la confirmación del abogado sobre la palabra «Grupo». Quién es el cliente de KLINODA también (regla 7, 15 de septiembre de 2026).

## Brand Commitments

- Nombre: **CJM Nexus**. Tagline en inglés: _Connecting Finance. Technology. Global Growth._
- Logotipo oficial en `cjm-nexus/public/logo.png`; material de marca en `cjm-nexus/public/marca/`; imágenes Open Graph por idioma.
- Equipo nombrado en público: Richard Carvajal (fundador, dirección financiera, Ecuador), Mirella Llanga (gerente general), Boris Carvajal (cofundador, tecnología, Alemania).
- **Voz:** frase corta, sujeto concreto, cero jerga de consultora. Se nombra la objeción antes que el beneficio. La letra pequeña va a la vista porque es lo que hace creíble la promesa («en una semana desde que tenemos tus textos»). El texto dice lo que el sistema hace, nunca que cumple una norma.
- **Confidencial, no publicable sin autorización:** identidad de la médica aliada de KLINODA, participación familiar en el desarrollo, cifras de avance interno y cualquier fecha de lanzamiento.
- **Reglas públicas de KLINODA** (acordadas con el dueño, ver cabecera de `cjm-nexus/src/content/klinoda.es.js`): ninguna pantalla con datos de paciente ni siquiera inventados; ninguna afirmación de validez legal o sanitaria; ninguna fecha de lanzamiento; ningún nombre de los profesionales que acompañan; nada de riesgos ni detalles de seguridad; y el estado se dice, y se dice primero.

**Reglas de contenido que no se negocian.** Confirmadas por Boris al aprobar la portada, el 13 de septiembre de 2026. Valen para cualquier página, no solo la portada.

1. **El 50/50.** Dirección financiera y soluciones digitales pesan lo mismo donde aparezcan juntas: mismo tamaño, mismo tratamiento, misma duración. Cuando una tiene que ir primero, el orden lo marcan «Servicio 01» y «Servicio 02», y no cambia nada más.
2. **Las cifras de trayectoria llevan nombre.** Los más de 15 años en dirección financiera y los más de 100 clientes asesorados son de Richard Carvajal. Se le atribuyen por su nombre, junto a la cifra, y nunca se presentan como de la firma.
3. **KLINODA, fuera de su página, es una puerta.** Enseña el producto, dice su estado y lleva a su página. No explica más ni añade información que no esté allí.
4. **Nada clínico, ni siquiera inventado.** Ninguna interfaz enseña diagnósticos, antecedentes, exámenes, nombres de persona ni números de documento. Las demos de KLINODA muestran solo módulos que existen en su portal de empresa, con datos ficticios, sus etiquetas reales y sin totales por aptitud.
5. **Ninguna fecha** de lanzamiento y ninguna afirmación de validez legal o sanitaria.
6. **El estado se dice; lo que falta no se lista.** La etiqueta pública de KLINODA es «Demo · en desarrollo · datos ficticios».
7. **El cliente de KLINODA es la empresa empleadora.** Decidido el 15 de septiembre de 2026. La empresa es quien contrata y paga. Los usuarios son su parte administrativa y sus médicos ocupacionales. El médico ocupacional es además el canal de venta: la propone dentro de las empresas donde trabaja. KLINODA no se vende al médico como cliente, porque los datos médicos no pertenecen al médico. Por eso la web habla a dos personas con dos mensajes: a la empresa, cumplimiento y tranquilidad; al médico, una herramienta que le facilita el trabajo y que puede recomendar.
   _Cambió el 2026-09-15. Antes decía: «No se afirma quién es el cliente de KLINODA. Se dice "salud ocupacional", nunca "para médicos" ni "para empresas": esa decisión de negocio sigue abierta.»_ Los textos del sitio que todavía contradicen la regla están listados en `.impeccable/CONSTRUCCION.md`.
8. **KLINODA se presenta como «Empresa del Grupo CJM Nexus».** Decidido el 18 de septiembre de 2026. Nunca más «producto propio» ni «la prueba de lo que construimos», en ninguna página ni en ningún metadato. **Pendiente:** confirmar con el abogado que «Grupo» es la palabra jurídicamente correcta para la relación entre CJM Nexus y KLINODA S.A.S. Hasta entonces se usa, y se cambia en un solo sitio si el abogado dice otra cosa.
9. **Nunca «plataforma para médicos ocupacionales».** Decidido el 18 de septiembre de 2026. Es la consecuencia de la regla 7: el cliente es la empresa. Al médico se le habla como usuario y como quien la recomienda, nunca como el destinatario de la plataforma.

## Evidence on Hand

**Lo que sí se puede sostener**

- Más de 15 años en dirección financiera (Richard Carvajal, fundador).
- Más de 100 clientes asesorados (Latinoamérica y Estados Unidos). Es la trayectoria de Richard, no cartera activa de CJM Nexus como firma.
- KLINODA, comprobado en su repositorio el 5 de septiembre de 2026: 2.382 pruebas automáticas, 13 actas de decisión, y 50 certificados firmados en 5,1 segundos (acta 0012, medido con datos ficticios).
- El brochure corporativo: `cjm-nexus/public/Brochure CJM Nexus.pdf`.
- Esta misma web, que es real y se puede mirar.

**Ausencias que no se rellenan inventando**

- **No hay ningún cliente de páginas web todavía.** Por eso no hay portafolio, ni número, ni testimonio en la página de soluciones digitales. Las dos únicas pruebas son KLINODA y esta web. La página ya tiene el sitio evidente donde ponerlos cuando lleguen.
- No hay casos de estudio financieros publicables, ni logotipos de clientes, ni prensa, ni fotografías del equipo (las fotos esperan a la página «Nosotros»).
- Los números de las interfaces de muestra (tablero gerencial, portal de empresa) ilustran cómo se ve un entregable, igual que la captura de pantalla de cualquier producto. **Nunca se presentan como resultados propios ni de un cliente.** Llevan al pie «Interfaz de muestra · datos ilustrativos».

## Product Principles

1. **Cada afirmación sobre la firma tiene que poder responder «¿dónde está eso?».** Si no hay fuente, no se escribe. Una ausencia declarada cuesta menos que una prueba inventada.
2. **El estado real se dice, y se dice primero.** Un producto en piloto que lo anuncia en la primera pantalla se lee como una firma seria; el mismo producto con esa información enterrada, como alguien a quien pillaron.
3. **La objeción va antes que el beneficio.** Las dos audiencias llegan con una duda concreta —«¿esto reemplaza a mi contador?», «¿esto es una plantilla con mi logo?»— y la web gana cuando la nombra en voz alta antes de vender.
4. **Todo queda a nombre del cliente:** dominio, accesos, código y documentación. Es un compromiso público y un cliente puede exigirlo en la negociación.
5. **Un enlace que lleva a una página inexistente es peor que uno que lleva a menos de lo prometido.** Se promete lo que existe; lo que falta se enlaza a lo más cercano que sí existe, no a un callejón sin salida.

## Accessibility & Inclusion

**WCAG 2.1 nivel AA como requisito verificable**, no como buena intención. Confirmado el 12 de septiembre de 2026. Cubre contraste de texto y de componentes, foco visible, operación completa por teclado, estructura semántica para lectores de pantalla y respeto a `prefers-reduced-motion` (relevante porque el sitio usa GSAP intensivamente).

Además: el sitio se mira mayoritariamente desde el teléfono, y ese es el caso de uso principal, no el secundario. El soporte trilingüe ES/EN/DE es parte del alcance de inclusión, no solo de SEO.
