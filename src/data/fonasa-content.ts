// NewCool FONASA - Contenido Educativo
// Fondo Nacional de Salud de Chile

export const FONASA_INFO = {
  nombre: 'Fondo Nacional de Salud',
  sigla: 'FONASA',
  fundacion: 1979,
  dependencia: 'Ministerio de Salud',
  sitioWeb: 'https://fonasa.gob.cl',
  mision: 'Asegurar el acceso a salud de calidad para todos los beneficiarios del sistema publico.',
  vision: 'Ser el seguro publico de salud lider en proteccion y satisfaccion de sus beneficiarios.',
  fullName: 'Fondo Nacional de Salud',
  shortName: 'FONASA',
  icon: '🏥',
  website: 'https://fonasa.gob.cl',
  foundedYear: 1979,
  mission: 'Financiar las prestaciones de salud de sus beneficiarios, asegurando acceso oportuno y de calidad.',
  description: 'Seguro publico de salud que cubre al 80% de la poblacion chilena, financiando atenciones medicas, hospitalizaciones y medicamentos.',
  slogan: 'Tu salud, nuestro compromiso',
  director: 'Camilo Cid Pedraza',
  tesorero: 'Camilo Cid Pedraza'
};

// Tramos FONASA 2024
export const TRAMOS_FONASA = {
  A: {
    nombre: 'Tramo A',
    descripcion: 'Personas carentes de recursos o indigentes',
    requisitos: ['Sin ingresos', 'Carencia de recursos certificada', 'Beneficiarios PASIS'],
    cobertura: '100% gratuito en sistema publico',
    copago: '0%',
    color: '#22c55e'
  },
  B: {
    nombre: 'Tramo B',
    descripcion: 'Ingreso imponible menor o igual a $400.000',
    requisitos: ['Ingreso hasta $400.000 mensual', 'Pensionados con pension minima'],
    cobertura: '100% gratuito en sistema publico',
    copago: '0%',
    color: '#3b82f6'
  },
  C: {
    nombre: 'Tramo C',
    descripcion: 'Ingreso imponible entre $400.001 y $584.000',
    requisitos: ['Ingreso entre $400.001 y $584.000'],
    cobertura: '90% en sistema publico',
    copago: '10%',
    color: '#f59e0b'
  },
  D: {
    nombre: 'Tramo D',
    descripcion: 'Ingreso imponible mayor a $584.000',
    requisitos: ['Ingreso superior a $584.000'],
    cobertura: '80% en sistema publico',
    copago: '20%',
    color: '#ef4444'
  }
};

// Modalidades de atencion
export const MODALIDADES = {
  MAI: {
    nombre: 'Modalidad de Atencion Institucional (MAI)',
    descripcion: 'Atencion en establecimientos publicos de salud',
    donde: ['Hospitales publicos', 'Consultorios', 'CESFAM', 'SAPU'],
    beneficios: [
      'Copago segun tramo (0% a 20%)',
      'Acceso a GES/AUGE',
      'Medicamentos incluidos',
      'No requiere bono previo'
    ],
    ideal: 'Tramos A y B (gratuito)'
  },
  MLE: {
    nombre: 'Modalidad Libre Eleccion (MLE)',
    descripcion: 'Atencion en prestadores privados en convenio con FONASA',
    donde: ['Clinicas privadas', 'Medicos particulares', 'Centros medicos', 'Laboratorios'],
    beneficios: [
      'Eliges tu medico/clinica',
      'Bonificacion segun arancel FONASA',
      'Requiere comprar bono',
      'Copago variable segun prestador'
    ],
    ideal: 'Tramos C y D que prefieren atencion privada'
  }
};

// GES/AUGE - Garantias Explicitas en Salud
export const GES_AUGE = {
  descripcion: 'Conjunto de 87 problemas de salud con garantias de acceso, oportunidad, proteccion financiera y calidad',
  garantias: [
    { nombre: 'Acceso', detalle: 'Derecho a recibir atencion de salud' },
    { nombre: 'Oportunidad', detalle: 'Plazos maximos para atencion' },
    { nombre: 'Proteccion Financiera', detalle: 'Copago maximo conocido' },
    { nombre: 'Calidad', detalle: 'Atencion por prestador acreditado' }
  ],
  enfermedades_destacadas: [
    { id: 'cancer-mama', nombre: 'Cancer de mama', plazo: '45 dias para iniciar tratamiento' },
    { id: 'diabetes', nombre: 'Diabetes Mellitus tipo 1 y 2', plazo: '24 horas confirmacion diagnostica' },
    { id: 'hipertension', nombre: 'Hipertension arterial', plazo: '45 dias para tratamiento' },
    { id: 'infarto', nombre: 'Infarto agudo al miocardio', plazo: 'Inmediato' },
    { id: 'vih', nombre: 'VIH/SIDA', plazo: '7 dias para inicio tratamiento' },
    { id: 'cataratas', nombre: 'Cataratas', plazo: '180 dias para cirugia' },
    { id: 'depresion', nombre: 'Depresion', plazo: '30 dias para inicio tratamiento' },
    { id: 'artrosis', nombre: 'Artrosis de cadera/rodilla', plazo: '240 dias para cirugia' }
  ],
  total_patologias: 87,
  copago_maximo: '20% del valor de la canasta de prestaciones'
};

// Estadisticas
export const FONASA_STATS = {
  beneficiarios: '15+ millones',
  cobertura: '80% de la poblacion',
  prestadores: '5,000+ en convenio',
  hospitales: '200+ hospitales publicos'
};

// Funciones principales
export const FONASA_FUNCTIONS = [
  {
    id: 'aseguramiento',
    name: 'Aseguramiento',
    icon: '🛡️',
    description: 'Garantizar cobertura de salud a todos los beneficiarios',
    details: [
      'Inscripcion automatica para trabajadores dependientes',
      'Afiliacion voluntaria para independientes',
      'Cobertura a cargas familiares',
      'Sin exclusiones por preexistencias'
    ]
  },
  {
    id: 'financiamiento',
    name: 'Financiamiento',
    icon: '💰',
    description: 'Financiar prestaciones de salud segun modalidad',
    details: [
      'Pago a hospitales publicos',
      'Bonificacion en Libre Eleccion',
      'Subsidios de incapacidad laboral',
      'Cobertura GES/AUGE'
    ]
  },
  {
    id: 'bonos',
    name: 'Bonos de Atencion',
    icon: '🎫',
    description: 'Emitir bonos para atencion en modalidad libre eleccion',
    details: [
      'Bonos electronicos en fonasa.cl',
      'Compra presencial en sucursales',
      'Bonos de emergencia',
      'Programas especiales (PAD, PPV)'
    ]
  },
  {
    id: 'licencias',
    name: 'Licencias Medicas',
    icon: '📋',
    description: 'Procesar licencias y pagar subsidios de incapacidad laboral',
    details: [
      'Recepcion de licencias electronicas',
      'Calculo de subsidio',
      'Pago a trabajadores',
      'Derivacion a COMPIN cuando corresponde'
    ]
  },
  {
    id: 'ges',
    name: 'GES/AUGE',
    icon: '⚕️',
    description: 'Administrar las Garantias Explicitas en Salud',
    details: [
      '87 patologias cubiertas',
      'Plazos garantizados',
      'Copago maximo conocido',
      'Red de prestadores acreditados'
    ]
  }
];

// Servicios ciudadanos
export const FONASA_SERVICES = [
  {
    id: 'consulta-tramo',
    name: 'Consulta de Tramo',
    icon: '🔍',
    description: 'Conoce tu tramo FONASA y beneficios asociados',
    requirements: ['RUT', 'ClaveUnica o clave FONASA'],
    steps: [
      'Ingresa a fonasa.cl',
      'Selecciona "Mi FONASA"',
      'Autenticate con ClaveUnica',
      'Visualiza tu tramo y cargas'
    ],
    url: 'https://fonasa.gob.cl',
    online: true
  },
  {
    id: 'compra-bono',
    name: 'Compra de Bonos',
    icon: '🎫',
    description: 'Compra bonos para atencion en Libre Eleccion',
    requirements: ['RUT', 'ClaveUnica', 'Tramo C o D'],
    steps: [
      'Ingresa a fonasa.cl/compradebonos',
      'Busca la prestacion o profesional',
      'Selecciona el bono',
      'Paga con tarjeta o cuenta bancaria'
    ],
    url: 'https://fonasa.gob.cl/sites/fonasa/compra-bono',
    online: true
  },
  {
    id: 'licencia-medica',
    name: 'Licencia Medica',
    icon: '📋',
    description: 'Consulta y seguimiento de licencias medicas',
    requirements: ['RUT', 'ClaveUnica', 'Licencia emitida'],
    steps: [
      'Tu medico emite licencia electronica',
      'FONASA la recibe automaticamente',
      'Consulta estado en fonasa.cl',
      'Recibe pago del subsidio'
    ],
    url: 'https://fonasa.gob.cl',
    online: true
  },
  {
    id: 'inscripcion-ges',
    name: 'Activar GES/AUGE',
    icon: '⚕️',
    description: 'Activa la garantia GES para una patologia cubierta',
    requirements: ['Diagnostico confirmado', 'Derivacion medica'],
    steps: [
      'Medico confirma diagnostico GES',
      'Emite Constancia de Informacion al Paciente (CIP)',
      'Activa garantia en establecimiento',
      'Recibe atencion en plazos garantizados'
    ],
    url: 'https://fonasa.gob.cl',
    online: true
  },
  {
    id: 'credencial',
    name: 'Credencial FONASA',
    icon: '🪪',
    description: 'Obtener credencial de beneficiario FONASA',
    requirements: ['Ser beneficiario FONASA', 'RUT'],
    steps: [
      'Ingresa a fonasa.cl',
      'Selecciona "Credencial digital"',
      'Descarga o muestra desde tu celular',
      'Presenta en centros de atencion'
    ],
    url: 'https://fonasa.gob.cl',
    online: true
  },
  {
    id: 'exceso-cotizacion',
    name: 'Exceso de Cotizacion',
    icon: '💵',
    description: 'Recupera el 7% pagado en exceso sobre el tope',
    requirements: ['Cotizaciones sobre tope imponible', 'ClaveUnica'],
    steps: [
      'Ingresa a fonasa.cl',
      'Revisa si tienes exceso acumulado',
      'Solicita la devolucion',
      'Recibe deposito en tu cuenta'
    ],
    url: 'https://fonasa.gob.cl',
    online: true
  }
];

// Categorias de cobertura (para graficos)
export const INCOME_CATEGORIES = [
  {
    id: 'cotizaciones',
    name: 'Cotizaciones (7%)',
    icon: '💼',
    amount: '4+ billones CLP',
    percentage: 45,
    color: '#3b82f6',
    description: 'Descuento del 7% del sueldo de trabajadores'
  },
  {
    id: 'fiscal',
    name: 'Aporte Fiscal',
    icon: '🏛️',
    amount: '3+ billones CLP',
    percentage: 35,
    color: '#10b981',
    description: 'Recursos del Estado para tramos A y B'
  },
  {
    id: 'copagos',
    name: 'Copagos',
    icon: '💳',
    amount: '1+ billon CLP',
    percentage: 12,
    color: '#f59e0b',
    description: 'Pagos de usuarios tramos C y D'
  },
  {
    id: 'otros',
    name: 'Otros Ingresos',
    icon: '📊',
    amount: '700 mil millones CLP',
    percentage: 8,
    color: '#8b5cf6',
    description: 'Multas, intereses, otros'
  }
];

export const EXPENSE_CATEGORIES = [
  {
    id: 'hospitales',
    name: 'Hospitales Publicos',
    icon: '🏥',
    amount: '4+ billones CLP',
    percentage: 50,
    color: '#ef4444',
    description: 'Financiamiento de la red publica de salud'
  },
  {
    id: 'libre-eleccion',
    name: 'Libre Eleccion',
    icon: '🏨',
    amount: '1.5+ billones CLP',
    percentage: 18,
    color: '#3b82f6',
    description: 'Bonificaciones en prestadores privados'
  },
  {
    id: 'subsidios',
    name: 'Subsidios Incapacidad',
    icon: '📋',
    amount: '1.2+ billones CLP',
    percentage: 15,
    color: '#10b981',
    description: 'Pago de licencias medicas'
  },
  {
    id: 'ges',
    name: 'GES/AUGE',
    icon: '⚕️',
    amount: '800 mil millones CLP',
    percentage: 10,
    color: '#f59e0b',
    description: 'Garantias explicitas en salud'
  },
  {
    id: 'otros',
    name: 'Otros Gastos',
    icon: '📊',
    amount: '500 mil millones CLP',
    percentage: 7,
    color: '#8b5cf6',
    description: 'Administracion, programas especiales'
  }
];

// Glosario
export const GLOSSARY = [
  {
    id: 'tramo',
    term: 'Tramo FONASA',
    definition: 'Clasificacion de beneficiarios segun nivel de ingresos (A, B, C, D). Determina el nivel de copago en atenciones.',
    example: 'Si ganas menos de $400.000, estas en tramo A o B y tu atencion es gratuita.'
  },
  {
    id: 'ges',
    term: 'GES/AUGE',
    definition: 'Garantias Explicitas en Salud. Conjunto de 87 enfermedades con cobertura garantizada en plazos y costos.',
    example: 'Si te diagnostican cancer, el GES garantiza que inicies tratamiento en maximo 45 dias.'
  },
  {
    id: 'mai',
    term: 'MAI (Modalidad Institucional)',
    definition: 'Atencion en hospitales y consultorios publicos. Sin necesidad de comprar bono.',
    example: 'En el hospital publico te atienden con tu credencial FONASA.'
  },
  {
    id: 'mle',
    term: 'MLE (Libre Eleccion)',
    definition: 'Atencion en prestadores privados en convenio. Requiere comprar bono y pagar diferencia.',
    example: 'Compras un bono de $15.000 y pagas la diferencia hasta el precio del medico.'
  },
  {
    id: 'bono',
    term: 'Bono de Atencion',
    definition: 'Documento que acredita financiamiento parcial de FONASA para atencion en Libre Eleccion.',
    example: 'El bono cubre parte del arancel y tu pagas la diferencia.'
  },
  {
    id: 'copago',
    term: 'Copago',
    definition: 'Porcentaje de la prestacion que debe pagar el beneficiario segun su tramo.',
    example: 'En tramo D pagas el 20% del valor de la atencion en hospital publico.'
  },
  {
    id: 'arancel',
    term: 'Arancel FONASA',
    definition: 'Listado oficial de precios de referencia para las prestaciones de salud.',
    example: 'Una consulta medica general tiene arancel de referencia de $8.000.'
  },
  {
    id: 'compin',
    term: 'COMPIN',
    definition: 'Comision de Medicina Preventiva e Invalidez. Evalua licencias medicas y pensiones de invalidez.',
    example: 'Si tu licencia es rechazada, puedes apelar ante COMPIN.'
  }
];

// Lecciones
export const LESSONS = [
  {
    id: 'tramos-beneficios',
    title: 'Entendiendo los Tramos FONASA',
    icon: '📊',
    description: 'Aprende como funcionan los tramos A, B, C y D',
    content: [
      'FONASA clasifica a sus beneficiarios en 4 tramos segun ingreso mensual.',
      'Tramos A y B: atencion 100% gratuita en sistema publico.',
      'Tramo C: copago del 10% en sistema publico.',
      'Tramo D: copago del 20% en sistema publico.',
      'En Libre Eleccion, todos pagan segun el bono y el precio del prestador.'
    ],
    keyPoints: [
      'Tu tramo se calcula automaticamente segun tu sueldo',
      'Puedes tener cargas familiares en el mismo tramo',
      'El tramo puede cambiar si cambia tu ingreso'
    ]
  },
  {
    id: 'ges-como-usar',
    title: 'Como Usar el GES/AUGE',
    icon: '⚕️',
    description: 'Guia practica para activar tus garantias de salud',
    content: [
      'El GES cubre 87 enfermedades con garantias de plazos y costos.',
      'Cuando te diagnostican una patologia GES, el medico debe informarte.',
      'Firmas una Constancia de Informacion al Paciente (CIP).',
      'Desde ese momento corren los plazos garantizados.',
      'Si no te atienden a tiempo, puedes reclamar en FONASA.'
    ],
    keyPoints: [
      'Siempre pregunta si tu enfermedad es GES',
      'Exige la CIP firmada',
      'Los plazos son obligatorios para FONASA'
    ]
  },
  {
    id: 'libre-eleccion',
    title: 'Modalidad Libre Eleccion',
    icon: '🏨',
    description: 'Como atenderte en el sistema privado con FONASA',
    content: [
      'Puedes elegir medicos y clinicas privadas en convenio con FONASA.',
      'Compras un bono en fonasa.cl que cubre parte del arancel.',
      'Pagas al prestador la diferencia entre el bono y su precio.',
      'Mientras mas alto tu tramo, menor es la bonificacion.',
      'Revisa siempre si el prestador esta en convenio.'
    ],
    keyPoints: [
      'Compara precios antes de elegir prestador',
      'El bono tiene duracion de 30 dias',
      'Puedes comprar bonos online 24/7'
    ]
  }
];

// FAQ
export const FAQ_LIST = [
  {
    id: 'como-saber-tramo',
    question: 'Como se en que tramo estoy?',
    answer: 'Tu tramo se calcula automaticamente segun tu ingreso imponible mensual. Puedes consultarlo en fonasa.cl con tu ClaveUnica o llamando al 600 360 3000.',
    category: 'tramos'
  },
  {
    id: 'cambiar-tramo',
    question: 'Puedo cambiar de tramo?',
    answer: 'El tramo se actualiza automaticamente cuando cambia tu ingreso. Si crees que hay un error, puedes solicitar revision en una sucursal FONASA presentando liquidaciones de sueldo.',
    category: 'tramos'
  },
  {
    id: 'isapre-fonasa',
    question: 'Puedo cambiarme de Isapre a FONASA?',
    answer: 'Si, puedes cambiarte en cualquier momento. Solo debes comunicarlo a tu empleador para que descuente el 7% hacia FONASA. El cambio es efectivo desde el mes siguiente.',
    category: 'afiliacion'
  },
  {
    id: 'cargas',
    question: 'Como agrego cargas familiares?',
    answer: 'Las cargas se agregan automaticamente si estan registradas en tu Registro Social de Hogares. Tambien puedes solicitarlo en sucursal FONASA con certificado de nacimiento o matrimonio.',
    category: 'afiliacion'
  },
  {
    id: 'licencia-rechazada',
    question: 'Que hago si rechazan mi licencia medica?',
    answer: 'Tienes 15 dias habiles para apelar ante COMPIN. Debes presentar la apelacion por escrito con todos los antecedentes medicos que respalden tu licencia.',
    category: 'licencias'
  },
  {
    id: 'ges-plazo-vencido',
    question: 'Que pasa si vence el plazo GES y no me atienden?',
    answer: 'FONASA debe derivarte a otro prestador (publico o privado) sin costo adicional. Reclama en fonasa.cl o llamando al 600 360 3000.',
    category: 'ges'
  },
  {
    id: 'bono-emergencia',
    question: 'Puedo usar FONASA en una emergencia en clinica privada?',
    answer: 'Si, las urgencias vitales deben ser atendidas. Luego puedes regularizar comprando un bono de emergencia. La clinica no puede exigir pago previo en urgencia vital.',
    category: 'servicios'
  },
  {
    id: 'exceso-7',
    question: 'Que es el exceso de cotizacion?',
    answer: 'Si tu sueldo supera el tope imponible (81.6 UF) y cotizaste sobre ese monto, pagaste de mas. Puedes solicitar la devolucion del exceso en fonasa.cl una vez al año.',
    category: 'servicios'
  }
];

// Canales de atencion
export const CHANNELS = [
  {
    id: 'web',
    name: 'Sitio Web',
    icon: '🌐',
    description: 'Portal de tramites y consultas online',
    contact: 'fonasa.gob.cl',
    hours: '24/7'
  },
  {
    id: 'telefono',
    name: 'Call Center',
    icon: '📞',
    description: 'Atencion telefonica para consultas',
    contact: '600 360 3000',
    hours: 'Lunes a Viernes 8:00 - 20:00'
  },
  {
    id: 'sucursales',
    name: 'Sucursales',
    icon: '🏢',
    description: 'Atencion presencial en todo Chile',
    contact: 'Consulta tu sucursal en fonasa.cl',
    hours: 'Lunes a Viernes 8:30 - 14:00'
  },
  {
    id: 'app',
    name: 'App Mi FONASA',
    icon: '📱',
    description: 'Aplicacion movil para tramites',
    contact: 'Disponible en App Store y Google Play',
    hours: '24/7'
  }
];

// Datos curiosos
export const CURIOUS_FACTS = [
  { id: '1', fact: 'FONASA cubre al 80% de la poblacion chilena, mas de 15 millones de personas', source: 'FONASA 2024' },
  { id: '2', fact: 'El GES/AUGE comenzo con 25 patologias en 2005 y hoy cubre 87 enfermedades', source: 'Ministerio de Salud' },
  { id: '3', fact: 'Mas de 2 millones de bonos de atencion se compran online cada mes', source: 'FONASA' },
  { id: '4', fact: 'El 7% de cotizacion de salud existe desde 1981', source: 'Historia previsional' }
];

// Tabs de navegacion
export const TABS = [
  { id: 'inicio', name: 'Inicio', icon: '🏠' },
  { id: 'que-es', name: 'Que es FONASA', icon: '🏥' },
  { id: 'servicios', name: 'Servicios', icon: '📋' },
  { id: 'transparencia', name: 'GES/Tramos', icon: '⚕️' },
  { id: 'aprende', name: 'Aprende', icon: '📚' }
] as const;

// Re-exportar con nombres TGR para compatibilidad con componentes
export const TGR_STATS = FONASA_STATS;
export const TGR_FUNCTIONS = FONASA_FUNCTIONS;
export const TGR_SERVICES = FONASA_SERVICES;
export const TGR_INFO = FONASA_INFO;
