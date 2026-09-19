/**
 * Todo el texto y los datos de la portada, en un solo sitio.
 *
 * POR QUÉ ASÍ Y NO DENTRO DE LOS COMPONENTES: cuando llegue el inglés y el
 * alemán bastará con un archivo hermano (`home.en.js`, `home.de.js`) y no
 * habrá que tocar ni una línea de maquetación. Además permite revisar y
 * corregir los textos leyendo un solo archivo, que es como se aprobaron.
 *
 * REGLA AL EDITAR: cada AFIRMACIÓN sobre la firma tiene que poder responder
 * «¿dónde está eso?». Los datos que llenan las interfaces de muestra son otra
 * cosa: ilustran cómo se ve un entregable, igual que la captura de pantalla de
 * cualquier producto, y por eso pueden ser inventados. Lo que no se hace nunca
 * es presentar esos números como resultados propios ni de un cliente.
 *
 * Revisado con el dueño el 5 de septiembre de 2026.
 */
export const home = {
  meta: {
    title: 'Dirección financiera y software especializado | CJM Nexus',
    description:
      'CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y el desarrollo de software especializado, para PYMEs y empresas medianas que quieren crecer con control.',
  },

  /* La portada (DESIGN.md, M0). Textos de la maqueta aprobada, C-fusion.html.
     En el titular, las palabras entre asteriscos van en 800. */
  portada: {
    titular: 'Finanzas *claras* y software a la *altura* de tu empresa.',
    // Los quince años son de Richard Carvajal y llevan su nombre (regla 2 de
    // PRODUCT.md).
    entrada:
      'CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y el desarrollo de software especializado. Para empresas que quieren crecer con control.',
    agendar: 'Agendar diagnóstico ejecutivo · 20 min',
    verQueHacemos: 'Ver qué hacemos',
    nota: 'Sin costo · sin compromiso · 20 minutos',
    imagen: 'Tres personas trabajan en una mesa con informes, gráficos impresos y una laptop, vistas desde arriba.',
  },

  /* Las credenciales (DESIGN.md, M1). Las cifras de trayectoria son de
     Richard Carvajal y llevan su nombre al lado (regla 2 de PRODUCT.md). */
  credenciales: {
    etiqueta: 'Trayectoria y equipo',
    cifras: [
      {
        hasta: 15,
        mas: '+',
        que: 'años en dirección financiera',
        quien: 'La trayectoria de Richard Carvajal, fundador de la firma.',
      },
      {
        hasta: 100,
        mas: '+',
        que: 'clientes asesorados',
        quien: 'Por Richard Carvajal en Latinoamérica, Estados Unidos y Europa.',
      },
      {
        valor: '2',
        que: 'países',
        quien: 'Equipo en Ecuador y Berlín.',
      },
    ],
    firma:
      '**Richard Carvajal** lidera la dirección financiera, **Boris Carvajal** la tecnología y **Mirella Llanga** la gerencia general.',
  },

  /* «Qué hacemos» (DESIGN.md, M4 y la escena de los tableros). Textos de la
     maqueta aprobada. Las dos líneas pesan lo mismo (regla 1 de PRODUCT.md):
     el orden lo marcan «Servicio 01» y «Servicio 02», y nada más.

     Los números de las dos interfaces de muestra ilustran cómo se ve un
     entregable. No son resultados propios ni de un cliente: por eso llevan
     debajo «Interfaz de muestra · datos ilustrativos». */
  hacemos: {
    titulo: 'Qué hacemos',
    rotulo: 'Dos líneas, una firma. Quien define el número construye también el sistema que lo produce.',
    muestra: 'Interfaz de muestra · datos ilustrativos',
    servicios: [
      {
        ref: 'Servicio 01',
        // Dos líneas fijas en la escena.
        titulo: ['Dirección financiera', 'externa.'],
        lead: 'Un director financiero para dueños y gerentes que necesitan claridad para decidir, con entregables concretos cada mes.',
        lista: [
          'Diagnóstico financiero ejecutivo',
          'Flujo de caja a trece semanas',
          'Indicadores y control de costos',
          'Rentabilidad por línea de negocio',
        ],
        boton: 'Ver el servicio',
        href: '/servicios/direccion-financiera',
      },
      {
        ref: 'Servicio 02',
        titulo: ['Páginas web y', 'sistemas a medida.'],
        lead: 'Tu página web profesional publicada en menos de una semana. Y el sistema completo cuando la operación lo pide.',
        lista: [
          'Página web a medida, en días',
          'Software especializado por sector',
          'Tableros conectados a tus datos',
          'Privacidad y trazabilidad',
        ],
        boton: 'Ver el servicio',
        href: '/servicios/soluciones-digitales',
      },
    ],
    /* LOS DATOS CUADRAN ENTRE SÍ, como en un tablero de verdad: las tres líneas
       suman $1,24 M, que es el indicador «Ventas» y el punto de junio del
       gráfico; junio está un 12 % sobre mayo; y el trazo cruza la meta entre
       abril y mayo. Quien sabe de finanzas mira justo eso. */
    tablero: {
      titulo: 'Tablero gerencial',
      periodo: 'Junio',
      vistas: ['Mes', 'Trimestre', 'Año'],
      kpis: [
        { nombre: 'Ventas', cambio: '▲ 12 %', valor: '$1,24 M', chispa: '0,12 9,11 18,12 27,8 36,7 45,4 55,2' },
        { nombre: 'Margen', cambio: '▲ 3 pt', valor: '34 %', chispa: '0,10 9,12 18,9 27,10 36,6 45,7 55,4' },
        { nombre: 'Caja', cambio: '▼ 4 d', valor: '45 d', aviso: true, chispa: '0,4 9,5 18,3 27,7 36,8 45,11 55,12' },
        { nombre: 'Cartera', cambio: '▲ 2 pt', valor: '18 %', aviso: true, chispa: '0,11 9,10 18,11 27,8 36,9 45,6 55,5' },
      ],
      grafico: 'Ventas contra meta',
      real: 'Real',
      meta: 'Meta',
      proyeccion: 'Proyección',
      ejeY: ['1,4 M', '1,1 M', '0,8 M', '0,5 M'],
      ejeX: ['ENE', 'MAR', 'MAY', 'JUL', 'SEP'],
      // En millones, de enero a septiembre. Lo real llega hasta junio, que es
      // el periodo del tablero; de julio en adelante es proyección. La escala
      // es la de `ejeY` y la meta va de enero a septiembre.
      ventas: {
        escala: [0.5, 1.4],
        real: [0.82, 0.88, 0.85, 0.97, 1.11, 1.24],
        proyeccion: [1.27, 1.31, 1.36],
        meta: [1.0, 1.2],
        globo: { mes: 'JUN', valor: '$1,24 M', nota: '10 % sobre meta' },
      },
      tabla: ['Rentabilidad por línea', 'Ingresos', 'Margen'],
      lineas: [
        { nombre: 'Servicios', ingresos: '$612 K', barra: 1, margen: '38 %' },
        { nombre: 'Producto', ingresos: '$431 K', barra: 0.82, margen: '31 %' },
        { nombre: 'Mantenimiento', ingresos: '$197 K', barra: 0.63, margen: '24 %' },
      ],
      alerta: 'Cartera vencida por encima de 60 días',
    },
    /* Los números de `reparto` suman los 128 documentos, con las mismas
       palabras de la columna «Estado». El tercer dato de cada suceso es su
       icono, no texto. */
    portal: {
      titulo: 'Documentos y trazabilidad',
      rotulo: 'Portal de empresa',
      buscar: 'Buscar documento',
      columnas: ['Documento', 'Estado'],
      documentos: [
        { nombre: 'Informe mensual', origen: 'Contabilidad · 12 jun', estado: 'Firmado', sel: true },
        { nombre: 'Acta de dirección', origen: 'Dirección · 05 jun', estado: 'Firmado' },
        { nombre: 'Conciliación', origen: 'Contabilidad · 04 jun', estado: 'En revisión', tipo: 'rev' },
        { nombre: 'Orden de compra 2418', origen: 'Operación · 03 jun', estado: 'Borrador', tipo: 'bor' },
        { nombre: 'Reporte de inventario', origen: 'Operación · 01 jun', estado: 'Firmado' },
      ],
      cuantos: '5 de 128 documentos',
      periodo: 'Últimos 30 días',
      // Los 128, por estado. Suman lo que dice `cuantos`.
      reparto: [
        { estado: 'Firmado', cuantos: 96 },
        { estado: 'En revisión', cuantos: 21, tipo: 'rev' },
        { estado: 'Borrador', cuantos: 11, tipo: 'bor' },
      ],
      traza: 'Traza del documento',
      sello: 'Sello 9F3A · C21E',
      sucesos: [
        ['Crea el documento', '09:12 · Operación', 'documento'],
        ['Valida 12 reglas', '09:20 · Sistema', 'regla'],
        ['Adjunta el respaldo', '09:26 · Contabilidad', 'clip'],
        ['Firma electrónica', '09:34 · Dirección', 'firma'],
        ['Sella y entrega', '09:34 · Sistema', 'sello'],
      ],
      reglas: 'Reglas cumplidas',
      cumplidas: 12,
      total: 12,
      pie: 'Reglas, permisos y trazabilidad en el centro, no en la pantalla.',
    },
  },

  /* KLINODA en la portada (DESIGN.md, M5 y la escena de KLINODA). Fuera de su
     página es una puerta: enseña el producto, dice su estado y lleva a su
     página (regla 3 de PRODUCT.md).

     DEMO CON DATOS FICTICIOS. Solo módulos que existen en el portal de
     empresa de KLINODA (portal_empresa/panel.html): vencidas, vencen en 90
     días o menos con sus tres plazos, trabajadores con certificado disponible
     y los plazos por cargo con su aptitud. Sin nombre ni documento, sin datos
     clínicos y sin totales por aptitud. Etiquetas reales.

     Las frases van a la empresa, que es el cliente (reglas 7, 8 y 9 de
     PRODUCT.md). */
  klinoda: {
    etiqueta: 'Demo · en desarrollo · datos ficticios',
    logo: 'KLINODA',
    // El lema de KLINODA. Iba dentro de la imagen y no se leía a su tamaño:
    // ahora es texto, con la letra del sitio.
    lema: 'Cada persona. Una historia completa.',
    seccion: 'Panel de mi empresa',
    /* Las tres pestañas son los rótulos reales de las tres hojas de su portal
       de empresa (portal_empresa/panel.html: «Plazos», «Certificados» y
       «Personal»), sin inventar ningún módulo (regla 4 de PRODUCT.md). */
    pestanas: ['Plazos', 'Certificados', 'Personal'],
    plazos: {
      rotulo: 'Vencen en 90 días o menos',
      total: 11,
      // Las marcas del eje, en días. Solo cifras.
      eje: [0, 30, 60, 90],
      // `dias`: a cuántos días vence cada evaluación del tramo. Sitúa cada
      // punto en la línea de 90 días; hay tantos como dice `cuantos`.
      tramos: [
        { cuantos: 4, que: 'en 30 días o menos', dias: [6, 13, 21, 27] },
        { cuantos: 5, que: 'entre 31 y 60 días', dias: [34, 40, 46, 52, 58] },
        { cuantos: 2, que: 'entre 61 y 90 días', dias: [69, 84] },
      ],
    },
    vencidas: { cuantos: 3, rotulo: 'Vencidas' },
    certificados: { cuantos: 44, rotulo: 'Trabajadores con certificado disponible' },
    cargos: [
      { cargo: 'Operador de planta', aptitud: 'APTO', vence: 'Vence 14 oct' },
      { cargo: 'Conductor', aptitud: 'APTO EN OBSERVACIÓN', observacion: true, vence: 'Vence 22 oct' },
      { cargo: 'Supervisora de turno', aptitud: 'APTO', vence: 'Vence 03 nov' },
    ],
    frases: [
      'KLINODA es una empresa del Grupo CJM Nexus. Su plataforma ordena la salud ocupacional de las empresas en Ecuador.',
      'Ves qué certificados vencen y quién está apto para su puesto, sin perseguir un solo papel.',
      'Cada vista enseña solo lo que le corresponde: en la de la empresa, lo clínico no existe.',
    ],
    pregunta: '¿Quieres conocer más sobre KLINODA?',
    boton: 'Ver KLINODA',
  },

  /* El cierre (DESIGN.md, M6). Nombra a los dos, Richard y Boris, porque las
     dos audiencias pesan igual (PRODUCT.md). En el titular, lo que va entre
     asteriscos dobles va en 800. */
  cierre: {
    ref: 'Siguiente paso',
    titular: 'Veinte minutos con **quien va a hacer el trabajo**.',
    tres: [
      {
        titulo: 'Con quién hablas',
        texto: 'Richard Carvajal en dirección financiera, Boris Carvajal en tecnología: las mismas personas que después hacen el trabajo.',
      },
      {
        titulo: 'Qué pasa en la reunión',
        texto: 'Nos cuentas cómo decides hoy, con qué información y qué te falta. Preguntamos: no venimos a presentar.',
      },
      {
        titulo: 'Qué te llevas',
        texto: 'Qué conviene ordenar primero y en qué orden. Y si no somos los indicados, te lo decimos en esa misma reunión.',
      },
    ],
    agendar: 'Agendar diagnóstico ejecutivo · 20 min',
    nota: 'Sin costo · sin compromiso · en español o inglés',
    canales: 'Otros canales',
  },
};

export default home;
