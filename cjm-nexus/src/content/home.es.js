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
      'CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y desarrollo de software especializado, para PYMEs y empresas medianas que quieren crecer con control.',
  },

  /* La portada (DESIGN.md, M0). Textos de la maqueta aprobada, C-fusion.html.
     En el titular, las palabras entre asteriscos van en 800. */
  portada: {
    titular: 'Finanzas *claras* y software a la *altura* de tu empresa.',
    // TEXTO POR APROBAR (PLAN.md, ronda 5 §2): la maqueta decía «une dirección
    // financiera con quince años de trayectoria», que atribuye los quince años
    // a la firma y choca con la regla 2 de PRODUCT.md. Esta es la propuesta
    // del plan, que se los da a Richard Carvajal por su nombre.
    entrada:
      'CJM Nexus une la dirección financiera de Richard Carvajal, con quince años de trayectoria, y desarrollo de software especializado, para empresas que quieren crecer con control.',
    agendar: 'Agendar diagnóstico ejecutivo · 20 min',
    verQueHacemos: 'Ver qué hacemos',
    nota: 'Sin costo · sin compromiso · 20 minutos',
    imagen: 'Tres personas trabajan en una mesa con informes, gráficos impresos y un portátil, vistas desde arriba.',
    // El vídeo es un clip de archivo hasta que exista material propio.
    credito: 'Imagen provisional de archivo',
  },

  /* Las credenciales (DESIGN.md, M1). Las cifras de trayectoria son de
     Richard Carvajal y llevan su nombre al lado (regla 2 de PRODUCT.md).
     TEXTO POR APROBAR (PLAN.md, ronda 5 §2): las tres notas (`quien`) y la
     frase de la firma. */
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
        quien: 'Por Richard Carvajal, en Latinoamérica y Estados Unidos.',
      },
      {
        valor: '3',
        que: 'idiomas de trabajo',
        quien: 'Español, inglés y alemán, con equipo en Ecuador y Alemania.',
      },
    ],
    firma:
      '**Richard Carvajal** dirige las finanzas, **Boris Carvajal** la tecnología y **Mirella Llanga** la gerencia general.',
  },

  /* «Qué hacemos» (DESIGN.md, M4 y la escena de los tableros). Textos de la
     maqueta aprobada. Las dos líneas pesan lo mismo (regla 1 de PRODUCT.md):
     el orden lo marcan «Servicio 01» y «Servicio 02», y nada más.

     Los números de las dos interfaces de muestra ilustran cómo se ve un
     entregable. No son resultados propios ni de un cliente: por eso llevan
     debajo «Interfaz de muestra · datos ilustrativos». */
  hacemos: {
    titulo: 'Qué hacemos',
    rotulo: 'Dos líneas, una firma. La misma casa define el número y construye el sistema que lo produce.',
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
    tablero: {
      titulo: 'Tablero gerencial',
      periodo: 'Junio 2026',
      kpis: [
        { nombre: 'Ventas', cambio: '▲ 12 %', valor: '$1,24 M', chispa: '0,12 9,11 18,12 27,8 36,7 45,4 55,2' },
        { nombre: 'Margen', cambio: '▲ 3 pt', valor: '34 %', chispa: '0,10 9,12 18,9 27,10 36,6 45,7 55,4' },
        { nombre: 'Caja', cambio: '▼ 4 d', valor: '45 d', aviso: true, chispa: '0,4 9,5 18,3 27,7 36,8 45,11 55,12' },
        { nombre: 'Cartera', cambio: '▲ 2 pt', valor: '18 %', aviso: true, chispa: '0,11 9,10 18,11 27,8 36,9 45,6 55,5' },
      ],
      grafico: 'Ventas contra meta',
      real: 'Real',
      meta: 'Meta',
      ejeY: ['1,4 M', '1,1 M', '0,8 M', '0,5 M'],
      ejeX: ['ENE', 'MAR', 'MAY', 'JUL', 'SEP'],
      tabla: ['Rentabilidad por línea', 'Ingresos', 'Margen'],
      lineas: [
        { nombre: 'Servicios', ingresos: '$612 K', barra: 1, margen: '38 %' },
        { nombre: 'Producto', ingresos: '$431 K', barra: 0.82, margen: '31 %' },
        { nombre: 'Mantenimiento', ingresos: '$197 K', barra: 0.63, margen: '24 %' },
      ],
      alerta: 'Cartera vencida por encima de 60 días',
    },
    portal: {
      titulo: 'Documentos y trazabilidad',
      rotulo: 'Portal de empresa',
      columnas: ['Documento', 'Estado'],
      documentos: [
        { nombre: 'Informe mensual de resultados', origen: 'Contabilidad · 12 jun', estado: 'Firmado', sel: true },
        { nombre: 'Acta de reunión de dirección', origen: 'Dirección · 05 jun', estado: 'Firmado' },
        { nombre: 'Conciliación bancaria', origen: 'Contabilidad · 04 jun', estado: 'En revisión', tipo: 'rev' },
        { nombre: 'Orden de compra 2418', origen: 'Operación · 03 jun', estado: 'Borrador', tipo: 'bor' },
        { nombre: 'Reporte de inventario', origen: 'Operación · 01 jun', estado: 'Firmado' },
      ],
      cuantos: '5 de 128 documentos',
      periodo: 'Últimos 30 días',
      traza: 'Traza del documento',
      sucesos: [
        ['Crea el documento', '09:12 · Operación'],
        ['Valida 12 reglas', '09:20 · Sistema'],
        ['Adjunta el respaldo', '09:26 · Contabilidad'],
        ['Firma electrónica', '09:34 · Dirección'],
        ['Sella y entrega', '09:34 · Sistema'],
      ],
      reglas: 'Reglas cumplidas',
      cumplidas: 12,
      total: 12,
      pie: 'Reglas, permisos y trazabilidad en el centro, no en la pantalla.',
    },
  },

  method: {
    eyebrow: 'Cómo trabajamos',
    title: 'El método es la garantía.',
    intro: 'Cuatro reglas que aplicamos en cada proyecto, con un ejemplo real de cada una.',
    items: [
      {
        title: 'Decidimos por escrito',
        text: 'Cada decisión relevante queda en un acta numerada con su motivo y sus alternativas. Nada se acuerda de palabra.',
        evidence: 'Trece actas en KLINODA, desde la elección del stack hasta la firma electrónica.',
      },
      {
        title: 'Probamos lo que construimos',
        text: 'Pruebas automáticas y controles de seguridad en cada cambio. Si algo se rompe, falla la compilación, no el cliente.',
        evidence:
          'Más de 2.300 pruebas y una matriz que comprueba cada pantalla contra cada tipo de usuario.',
      },
      {
        title: 'Privacidad por diseño',
        text: 'Lo que alguien no debe ver no sale de la base de datos. La regla vive en el modelo, no en la pantalla.',
        evidence:
          'El portal de empresa de KLINODA solo consume una lista cerrada de campos, y una prueba falla si se cuela un dato clínico.',
      },
      {
        title: 'Nada real hasta validar',
        text: 'Datos ficticios hasta que el especialista y el abogado den el visto bueno. Un producto serio no se prueba con personas reales.',
        evidence:
          'KLINODA opera en piloto controlado y el sistema se niega a arrancar si alguien intenta autorizar datos reales por configuración.',
      },
    ],
  },

  /* En la portada el equipo va como banda corta, sin fotografías ni fichas.
     Tres tarjetas con iniciales dentro de un círculo se leen como un hueco
     esperando a rellenarse; una frase que nombra a los tres y enlaza a su
     página se lee como una decisión. Las fotos van en «Nosotros». */
  cta: {
    eyebrow: 'Siguiente paso',
    title: 'Veinte minutos para entender tu empresa y proponerte un camino.',
    text: 'Diagnóstico, dirección financiera o una solución a medida. Sin compromiso, en español, inglés o alemán.',
    primary: 'Agendar diagnóstico ejecutivo',
    secondary: 'Escribir a CJM Nexus',
  },
};

export default home;
