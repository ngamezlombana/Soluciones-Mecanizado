export interface ServicioCNC {
  id: string;
  codigo: string;
  tag: string;
  titulo: string;
  descripcion: string;
  especificacionesLabel: string;
  especificaciones: string;
  pieLabel: string;
  pieValor: string;
  destacado?: boolean;
}

export interface TestimonioCNC {
  id: string;
  autor: string;
  empresa: string;
  cargo: string;
  comentario: string;
  estrellas: number;
  verificado: string;
  urlLinkedin?: string;
}

export interface FaqCNC {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface ConsultoriaData {
  nombreEmpresa: string;
  subtitulo: string;
  consultor: {
    nombre: string;
    titulo: string;
    experiencia: string;
    descripcion: string;
  };
  contacto: {
    telefonoRaw: string;
    telefonoDisplay: string;
    whatsappRaw: string;
    whatsappTextoDefault: string;
    email: string;
    dominio: string;
  };
  ubicacion: {
    ciudad: string;
    departamento: string;
    pais: string;
    zonasPresenciales: string[];
    coberturaRemota: string;
    direccionTexto: string;
  };
  horario: {
    zonaHoraria: string; // 'America/Bogota'
    diasSemana: string;
    horaApertura: number; // 8
    horaCierre: number;   // 18
    sabados: string;
    domingos: string;
  };
  softwareHerramientas: string[];
  controlesCompatibles: string[];
  servicios: ServicioCNC[];
  metricasClave: {
    numero: string;
    titulo: string;
    descripcion: string;
    tag: string;
  }[];
  metodologia: {
    paso: string;
    etapa: string;
    titulo: string;
    descripcion: string;
    tag: string;
  }[];
  testimonios: TestimonioCNC[];
  faqs: FaqCNC[];
  redes: {
    linkedin?: string;
    whatsapp: string;
    maps?: string;
  };
}

export const consultoriaData: ConsultoriaData = {
  nombreEmpresa: "Soluciones en Mecanizado",
  subtitulo: "Consultoría & Ingeniería CAD/CAM // Cali, Valle del Cauca",
  consultor: {
    nombre: "Ing. Nestor Alonso Gamez Lombana",
    titulo: "Ingeniero Consultor & Programador CAM Especialista",
    experiencia: "Más de 12 años de experiencia técnica",
    descripcion: "Especialista en optimización de procesos de maquinado CNC, programación de trayectorias libres de colisión y modelado paramétrico avanzado para la industria metalmecánica."
  },
  contacto: {
    telefonoRaw: "+573052912936",
    telefonoDisplay: "+57 305 291 2936",
    whatsappRaw: "573052912936",
    whatsappTextoDefault: "Hola Ing. Nestor, requiero asesoría técnica en mecanizado CNC y programación CAD/CAM.",
    email: "contacto@solucionescnc.co",
    dominio: "https://solucionescnc.co"
  },
  ubicacion: {
    ciudad: "Cali",
    departamento: "Valle del Cauca",
    pais: "Colombia",
    zonasPresenciales: [
      "Zona Industrial de Yumbo",
      "Cali (Acopi, San Nicolás, Carrera 1)",
      "Jamundí",
      "Palmira"
    ],
    coberturaRemota: "Colombia y proyectos internacionales",
    direccionTexto: "Atención presencial en plantas de Cali y Yumbo | Soporte remoto para todo el país"
  },
  horario: {
    zonaHoraria: "America/Bogota",
    diasSemana: "Lunes a Viernes: 08:00 - 18:00 COT",
    horaApertura: 8,
    horaCierre: 18,
    sabados: "08:00 - 13:00 (Urgencias en planta bajo coordinación previa)",
    domingos: "Cerrado (Atención vía WhatsApp programada)"
  },
  softwareHerramientas: [
    "SolidWorks (Diseño y Ensambles 3D)",
    "Mastercam (Fresado 3/4 Ejes y Torneado CAM)",
    "AutoCAD (Planos Técnicos y Tolerancias GD&T)",
    "BobCAD-CAM (Estrategias y Trayectorias CNC)",
    "Autodesk Fusion & Onshape (CAD/CAM Colaborativo)"
  ],
  controlesCompatibles: [
    "Fanuc (Series 0i, 31i, 18i)",
    "Haas (NGC y Clásico)",
    "Siemens Sinumerik (828D, 840D)",
    "Heidenhain (TNC)",
    "Mach3 / Mach4 / Syntec"
  ],
  metricasClave: [
    {
      numero: "[01]",
      titulo: "ASESORÍA Y AUDITORÍA TÉCNICA",
      descripcion: "Auditoría de procesos de fabricación, viabilidad DFM, selección óptima de herramientas y parámetros de corte.",
      tag: "DIAGNÓSTICO EN PLANTA Y REMOTO"
    },
    {
      numero: "[02]",
      titulo: "PROGRAMACIÓN CAM Y G-CODE",
      descripcion: "Trayectorias de herramienta en Mastercam y BobCAD-CAM con simulación cinemática rigurosa y cero colisiones.",
      tag: "MASTERCAM & BOBCAD-CAM"
    },
    {
      numero: "[03]",
      titulo: "DISEÑO MECÁNICO E INGENIERÍA",
      descripcion: "Modelado paramétrico 3D en SolidWorks y planos técnicos normalizados de taller en AutoCAD con GD&T.",
      tag: "SOLIDWORKS & AUTOCAD"
    },
    {
      numero: "[04]",
      titulo: "REDUCCIÓN DE COSTOS Y TIEMPOS",
      descripcion: "Optimización de ciclos de mecanizado hasta un 35%, prolongación de vida útil de insertos y prevención de paradas.",
      tag: "EFICIENCIA OPERATIVA"
    }
  ],
  servicios: [
    {
      id: "asesoria-cnc",
      codigo: "[SRV-01 // AUDITORÍA]",
      tag: "ASESORÍA CNC",
      titulo: "ASESORÍA Y DIAGNÓSTICO CNC",
      descripcion: "Auditoría de parámetros de corte, selección de herramientas, estrategias de fijación y prevención de errores o vibraciones en máquina.",
      especificacionesLabel: "ÁREAS DE APLICACIÓN:",
      especificaciones: "Tornos CNC, centros de mecanizado vertical de 3 y 4 ejes, reducción de desgastes.",
      pieLabel: "MODALIDAD:",
      pieValor: "PRESENCIAL EN PLANTA O REMOTA"
    },
    {
      id: "diseno-mecanico-3d",
      codigo: "[SRV-02 // CAD 3D]",
      tag: "INGENIERÍA CAD",
      titulo: "DISEÑO MECÁNICO 3D",
      descripcion: "Modelado paramétrico en SolidWorks y elaboración de planos de taller en AutoCAD con tolerancias dimensionales y geométricas (GD&T).",
      especificacionesLabel: "HERRAMIENTAS:",
      especificaciones: "SolidWorks & AutoCAD (.SLDPRT, .SLDASM, .DWG, .DXF, .STEP).",
      pieLabel: "ENTREGABLES:",
      pieValor: "MODELOS 3D Y PLANOS DE FABRICACIÓN"
    },
    {
      id: "programacion-cam",
      codigo: "[SRV-03 // CAM]",
      tag: "PROGRAMACIÓN",
      titulo: "PROGRAMACIÓN CAM AVANZADA",
      descripcion: "Generación de trayectorias con Mastercam y BobCAD-CAM para componentes de alta exigencia, matrices, moldes y piezas complejas.",
      especificacionesLabel: "SOFTWARE PRINCIPAL:",
      especificaciones: "Mastercam & BobCAD-CAM con simulación cinemática completa.",
      pieLabel: "SEGURIDAD:",
      pieValor: "VERIFICACIÓN CERO COLISIONES"
    },
    {
      id: "optimizacion-gcode",
      codigo: "[SRV-04 // G-CODE]",
      tag: "POSTPROCESADORES",
      titulo: "OPTIMIZACIÓN DE CÓDIGO G",
      descripcion: "Depuración de programas CNC existentes, macros personalizadas, adaptación de postprocesadores y reducción drástica de tiempos de ciclo.",
      especificacionesLabel: "COMPATIBILIDAD CNC:",
      especificaciones: "Fanuc, Haas, Siemens Sinumerik, Heidenhain, Mach3.",
      pieLabel: "RESULTADO:",
      pieValor: "HASTA 35% MENOR TIEMPO DE CICLO"
    },
    {
      id: "acompanamiento-talleres",
      codigo: "[SRV-05 // CONSULTORÍA]",
      tag: "ACOMPAÑAMIENTO INDUSTRIAL",
      titulo: "ACOMPAÑAMIENTO A EMPRESAS Y TALLERES",
      descripcion: "Capacitación técnica a operadores y programadores, estandarización de procesos de maquinado e integración de soluciones CAD/CAM en planta para mejorar la rentabilidad de su operación.",
      especificacionesLabel: "COBERTURA PRESENCIAL:",
      especificaciones: "Visitas técnicas en Cali, zona industrial de Yumbo, Jamundí y Palmira.",
      pieLabel: "CONSULTORÍA REMOTA:",
      pieValor: "COLOMBIA Y LATINOAMÉRICA",
      destacado: true
    }
  ],
  metodologia: [
    {
      paso: "01",
      etapa: "ETAPA INICIAL // REQUERIMIENTO",
      titulo: "CONTACTO Y ENVÍO DE INFORMACIÓN",
      descripcion: "Envías tus planos en AutoCAD o SolidWorks (.DWG, .DXF, .STEP), muestras físicas o códigos G actuales por WhatsApp al +57 305 291 2936.",
      tag: "RESPUESTA TÉCNICA RÁPIDA"
    },
    {
      paso: "02",
      etapa: "ETAPA ANALÍTICA // DFM",
      titulo: "DIAGNÓSTICO TÉCNICO Y COTIZACIÓN",
      descripcion: "Evaluación de viabilidad de fabricación, optimización de trayectorias en Mastercam o BobCAD-CAM y cotización formal de honorarios sin sorpresas.",
      tag: "PROPUESTA TÉCNICA CLARA"
    },
    {
      paso: "03",
      etapa: "ETAPA FINAL // IMPLEMENTACIÓN",
      titulo: "ENTREGA Y ACOMPAÑAMIENTO TÉCNICO",
      descripcion: "Entrega de modelos 3D, planos normalizados, programas CNC simulados listos para máquina y acompañamiento en planta o soporte remoto.",
      tag: "SOPORTE Y VALIDACIÓN EN MÁQUINA"
    }
  ],
  testimonios: [
    {
      id: "test-1",
      autor: "Ing. Carlos Montoya",
      cargo: "Jefe de Producción Metalmecánica",
      empresa: "Taller Industrial Yumbo",
      comentario: "El Ing. Nestor nos resolvió una falla crítica en la programación de un centro CNC Leadwell. Optimizó el código G en Mastercam y redujo el tiempo de maquinado un 25%.",
      estrellas: 5,
      verificado: "VERIFICADO GOOGLE / PLANTA"
    },
    {
      id: "test-2",
      autor: "Ing. Mauricio Rendón",
      cargo: "Director de Ingeniería y Matricería",
      empresa: "Mecanizados de Precisión del Valle",
      comentario: "Excelente servicio en modelado paramétrico con SolidWorks y planos en AutoCAD. Nestor diseñó pensando en la facilidad de mecanizado y ensamble en taller.",
      estrellas: 5,
      verificado: "VERIFICADO GOOGLE / PLANTA"
    },
    {
      id: "test-3",
      autor: "Alonso Duarte",
      cargo: "Líder de Taller CNC",
      empresa: "Matrices & Moldes Cali",
      comentario: "Servicio impecable. Programó nuestras matrices con BobCAD-CAM y asistió al operario en taller. No tuvimos ni una sola colisión y las piezas salieron dentro de tolerancia.",
      estrellas: 5,
      verificado: "VERIFICADO GOOGLE / PLANTA"
    }
  ],
  faqs: [
    {
      id: "faq1",
      pregunta: "¿Qué software y formatos de archivo manejan para diseño y mecanizado?",
      respuesta: "Trabajamos con las principales plataformas de la industria: SolidWorks y AutoCAD para diseño mecánico 3D y planos de fabricación 2D normalizados, y Mastercam y BobCAD-CAM para generación de trayectorias CNC y postprocesamiento. Recibimos archivos .SLDPRT, .SLDASM, .DWG, .DXF, .STEP, .IGES o muestras físicas para levantamiento dimensional."
    },
    {
      id: "faq2",
      pregunta: "¿Ofrecen visitas técnicas directas a plantas y talleres en Cali y el Valle?",
      respuesta: "Sí. Prestamos servicio presencial de diagnóstico, auditoría de procesos de maquinado, verificación de herramientas y acompañamiento a operadores en las zonas industriales de Cali, Yumbo, Jamundí y Palmira. Para empresas fuera del departamento, ofrecemos soporte técnico y programación CAM remota."
    },
    {
      id: "faq3",
      pregunta: "¿Cómo funciona el servicio de optimización de código G y reducción de tiempos?",
      respuesta: "Analizamos su programa actual de mecanizado o archivo CAM en Mastercam/BobCAD-CAM. Optimizamos velocidades de corte, avances por diente, estrategias de desbaste dinámico y movimientos en vacío. Esto se traduce en disminuciones comprobadas del 15% al 35% en tiempo de ciclo y un incremento notable en la vida de los insertos."
    },
    {
      id: "faq4",
      pregunta: "¿Garantizan que el código generado no causará colisiones en máquina?",
      respuesta: "Absolutamente. Todo programa generado se somete a simulación cinemática rigurosa con verificación de mordazas, portaherramientas y límites de carrera antes de su entrega. Brindamos soporte continuo hasta que la primera pieza se ejecuta con éxito en su máquina CNC."
    },
    {
      id: "faq5",
      pregunta: "¿Atienden emergencias de paradas de máquina por programación?",
      respuesta: "Sí. Contamos con canal de atención prioritaria vía WhatsApp para resolver inconsistencias de código G, alarmas de controlador o colisiones potenciales en turno de producción."
    }
  ],
  redes: {
    whatsapp: "https://wa.me/573052912936",
    linkedin: "https://www.linkedin.com/in/nestor-gamez",
    maps: "https://maps.google.com/?q=Cali,+Valle+del+Cauca,+Colombia"
  }
};
