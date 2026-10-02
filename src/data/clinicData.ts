export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  stars: number;
  text: string;
  treatment: string;
}

export const CLINIC_INFO = {
  name: 'Lic. Carolina Gala',
  shortName: 'Kine Caro Gala',
  brandTitle: 'Kinesiología y Fisiatría',
  director: 'Lic. Carolina Gala',
  directorTitle: 'Licenciada en Kinesiología y Fisiatría • M.N. / Especialista en Rehabilitación Funcional',
  phoneDisplay: '11 2294-8241',
  phoneRaw: '1122948241',
  whatsappRaw: '5491122948241',
  whatsappUrl: 'https://wa.me/5491122948241?text=Hola%20Lic.%20Carolina%20Gala,%20quisiera%20solicitar%20un%20turno%20de%20consulta%20kinesiol%C3%B3gica%20en%20el%20consultorio%20de%20Sarand%C3%AD%20724.',
  instagramUrl: 'https://www.instagram.com/kine.carogala/',
  instagramHandle: '@kine.carogala',
  instagramFollowers: '+3.500',
  address: 'Sarandí 724, CABA',
  neighborhood: 'Balvanera / San Cristóbal, Ciudad Autónoma de Buenos Aires',
  rating: '5.0',
  reviewCount: '42',
  yearsExperience: '8+',
  hours: 'Lunes a Viernes de 08:30 a 20:00 hs • Turnos coordinados previamente',
  mapsUrl: 'https://www.google.com/search?kgmid=/g/11x61f9_cc&hl=es-419&q=Kinesiolog%C3%ADa+Lic.+Carolina+Gala&shndl=30&shem=lcuae&source=sh/x/loc/osrp/m5/5&kgs=686f2edf4b985833'
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'rehabilitacion-deportiva',
    title: 'Rehabilitación Deportiva & Readaptación',
    subtitle: 'Recuperación de lesiones articulares y vuelta segura al entrenamiento',
    description: 'Protocolos personalizados para esguinces, desgarros, lesiones de rodilla, ligamentos y meniscos. Combinamos terapia manual con ejercicios funcionales progresivos en espaldar sueco para que vuelvas a rendir al 100%.',
    image: '/images/cg-rehab-rodilla.jpg',
    tags: ['Lesiones de Rodilla', 'Readaptación al Entrenamiento', 'Ejercicios Funcionales', 'Espaldar Sueco']
  },
  {
    id: 'kinesiologia-columna',
    title: 'Reeducación Postural & Dolor de Columna',
    subtitle: 'Alivio de contracturas, lumbalgias y sobrecarga en hombros y espalda',
    description: 'Tratamiento específico para eliminar contracturas crónicas, cervicalgias y sensación de pesadez postural provocada por largas jornadas laborales o estrés muscular.',
    image: '/images/cg-hero.jpg',
    tags: ['Alivio de Lumbalgias', 'Cervicalgias & Hombros', 'Cadena Muscular Posterior', 'Postura & Movilidad']
  },
  {
    id: 'fisiatria-traumatologia',
    title: 'Kinesiología Traumatológica & Fisiatría',
    subtitle: 'Equipamiento terapéutico completo para desinflamación y movilidad',
    description: 'Atención kinesiológica integral para postoperatorios, fracturas, tendinitis y procesos inflamatorios agudos o crónicos con agentes de fisioterapia y seguimiento continuo.',
    image: '/images/cg-fisiatria.jpg',
    tags: ['Postoperatorios', 'Tendinopatías', 'Movilidad Articular', 'Atención 1 a 1']
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual & Descarga Miofascial',
    subtitle: 'Técnicas manuales precisas para desbloqueo articular y tejido blando',
    description: 'Maniobras especializadas de movilización vertebral y articular, punción seca si se requiere, masoterapia terapéutica y liberación de puntos gatillo miofasciales.',
    image: '/images/cg-rehab-rodilla.jpg',
    tags: ['Liberación Miofascial', 'Puntos Gatillo', 'Movilización Articular', 'Bienestar Inmediato']
  },
  {
    id: 'evaluacion-biomecanica',
    title: 'Evaluación y Diagnóstico Funcional',
    subtitle: 'Análisis detallado de tu movimiento para encontrar la causa del dolor',
    description: 'Cada paciente cuenta con una primera sesión de evaluación minuciosa para diagramar un plan de rehabilitación individualizado y transparente, sin sesiones de más.',
    image: '/images/cg-hero.jpg',
    tags: ['Evaluación 1 a 1', 'Test Biomecánico', 'Plan a Medida', 'Prevención de Recaídas']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rossi Agustina',
    date: 'Hace 1 semana',
    stars: 5.0,
    text: 'Me atendí con ella por una lesión en la rodilla y la atención fue excelente! Súper amable y atenta! Me recuperé súper rápido y ya estoy entrenando nuevamente! 🙌',
    treatment: 'Rehabilitación de Rodilla & Deporte'
  },
  {
    id: '2',
    name: 'Seba',
    date: 'Hace 1 mes',
    stars: 5.0,
    text: 'Excelente atención! El centro está muy bien equipado y tienen todo para recuperar al 100%. Caro una genia!!',
    treatment: 'Kinesiología & Fisiatría'
  },
  {
    id: '3',
    name: 'Paciente WhatsApp',
    date: 'Hace 2 semanas',
    stars: 5.0,
    text: 'Hola Gala! No sabés lo bien que me siento, ya casi no tengo esas puntadas que tenía y la verdad que durante el día en la espalda casi nada... ya no tengo esa pesadez en los hombros. Genia total!',
    treatment: 'Dolor de Espalda & Postura'
  },
  {
    id: '4',
    name: 'Facundo M.',
    date: 'Hace 3 semanas',
    stars: 5.0,
    text: 'Buen día Caro! Estoy joya 🥳 No siento nada de dolor 🤩 La calidez humana de Caro y la dedicación en cada ejercicio marcan una diferencia enorme.',
    treatment: 'Terapia Manual & Rehabilitación'
  }
];

export const TRUST_POINTS = [
  { value: '5.0 ★', label: 'Google Maps (42 opiniones)' },
  { value: '1 a 1', label: 'Atención Kinesiológica Personalizada' },
  { value: '100%', label: 'Consultorio Totalmente Equipado' },
  { value: 'Sarandí 724', label: 'CABA • Balvanera / San Cristóbal' }
];

export function getWhatsAppUrl(reason?: string): string {
  let text = 'Hola Lic. Carolina Gala! ';
  if (reason) {
    text += `Quisiera coordinar un turno para consulta de *${reason}*.`;
  } else {
    text += 'Quisiera solicitar un turno en el consultorio de Sarandí 724, CABA.';
  }
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
