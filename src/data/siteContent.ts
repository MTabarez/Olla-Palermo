import heroOllaImg from '../assets/images/hero_palermo_clean_1795166947638.jpg';
import donationMealImg from '../assets/images/donation_shared_meal_1795166328666.jpg';
import helpOllaImg from '../assets/images/work_olla_cooking_1795142491127.jpg';
import helpHandsImg from '../assets/images/help_volunteers_together_1795166328471.jpg';
import helpNetworksImg from '../assets/images/help_neighborhood_meeting_1795166331040.jpg';
import storyTableImg from '../assets/images/story_shared_table_1795166328823.jpg';
import storyPrepImg from '../assets/images/story_volunteers_prep_1795166329239.jpg';
import storyGatheringImg from '../assets/images/work_apoyo_vecinal_1795165430250.jpg';
import storyNetworksImg from '../assets/images/work_redes_barrio_1795165431749.jpg';
import featuredRedesImg from '../assets/images/featured_redes_panoramic_1795166331088.jpg';
import newsOllaImg from '../assets/images/news_olla_jornada_1795166329038.jpg';
import newsEncuentrosImg from '../assets/images/work_asamblea_barrial_1795142491330.jpg';
import newsColaboracionImg from '../assets/images/story_acopio_alimentos_1795142491424.jpg';
import newsActividadesImg from '../assets/images/about_palermo_street_1795142490907.jpg';
import finalCtaImg from '../assets/images/cta_final_panoramic_1795166328296.jpg';

export interface NavItem {
  label: string;
  href: string;
}

export interface WayToHelpItem {
  id: string;
  title: string;
  description: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  presetTopic: string;
}

export interface ActivityItem {
  id: string;
  dateLabel: string;
  dateSubLabel: string;
  category: string;
  title: string;
  description: string;
  location: string;
  details: string[];
}

export interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  category: string;
  body: string[];
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  summary: string;
  body: string[];
}

export const SITE_CONTENT = {
  brand: {
    name: 'RED PALERMO',
    tagline: 'Organización comunitaria en el barrio Palermo, Montevideo, Uruguay.',
    email: 'contacto@redpalermo.org',
    location: 'Palermo, Montevideo',
    copyright: '© 2026 Red Palermo. Todos los derechos reservados.',
  },
  announcement: {
    badge: 'NOVEDAD',
    text: 'Estamos construyendo nuevas formas de colaborar en el barrio. Conocé nuestras iniciativas.',
    linkLabel: 'Más información',
    href: '#que-hacemos',
  },
  navigation: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Quiénes somos', href: '#quienes-somos' },
      { label: 'Qué hacemos', href: '#que-hacemos' },
      { label: 'Actividades', href: '#actividades' },
      { label: 'Noticias', href: '#noticias' },
    ] as NavItem[],
    ctaLabel: 'COLABORAR',
  },
  hero: {
    headlineLines: ['El barrio se organiza.', 'La comunidad se sostiene.'],
    supportingText:
      'Desde Palermo, Montevideo, construimos respuestas colectivas a las necesidades del barrio. Nos organizamos, compartimos recursos y trabajamos para que nadie quede afuera.',
    primaryCta: 'Conocé nuestro trabajo',
    secondaryCta: 'Quiero colaborar',
    image: heroOllaImg,
    imageAlt:
      'Vecinos y vecinas del barrio Palermo cocinando y preparando alimentos de forma colectiva en la olla popular',
  },
  mission: {
    statement:
      'Nos une una misma idea: construir un barrio donde el apoyo mutuo sea una realidad cotidiana.',
  },
  about: {
    label: 'QUIÉNES SOMOS',
    paragraphs: [
      'Somos una organización comunitaria nacida en el barrio Palermo, en Montevideo, impulsada por vecinos, vecinas y colaboradores que entendimos que las respuestas más reales se construyen de forma colectiva.',
      'A partir de la olla popular y del trabajo territorial cotidiano, generamos espacios de encuentro, acompañamiento y organización que fortalecen las redes del barrio.',
      'Creemos en la participación abierta, la transparencia y la autonomía comunitaria como base para sostener cada iniciativa.',
    ],
    ctaLabel: 'Conocé nuestra historia',
    modalTitle: 'Nuestra forma de organizarnos en Palermo',
    modalBody: [
      'Red Palermo es un espacio abierto a vecinos, vecinas y colectivos que buscan dar respuestas concretas a las necesidades cotidianas del barrio a través de la acción colectiva.',
      'Cada jornada se planifica de manera horizontal: desde el acopio y clasificación de alimentos hasta la cocina comunitaria, la difusión de actividades y la articulación con otras iniciativas del territorio.',
      'Esta identidad y textos son editables para que el equipo territorial pueda incorporar fechas, puntos de encuentro confirmados y canales propios a medida que se consoliden las próximas etapas.',
    ],
  },
  map: {
    headlineLines: ['Un barrio.', 'Muchas formas de encontrarnos.'],
    supportingText:
      'Cada encuentro, cada comida compartida y cada iniciativa forma parte de una red comunitaria que crece desde el territorio.',
    ctaLabel: 'Conocé nuestras iniciativas',
    ctaHref: '#que-hacemos',
  },
  donation: {
    topHeading: 'Tu colaboración ayuda a sostener el trabajo colectivo.',
    bottomHeading: 'Cada aporte hace la diferencia.',
    panelTitle: 'Elegí cómo querés colaborar',
    panelIntro:
      'Tu aporte nos permite comprar alimentos, reponer insumos y sostener la continuidad de la olla popular y las actividades en Palermo.',
    presets: [200, 500, 1000, 2000],
    customLabel: 'Otro monto',
    materialOptionLabel: 'Prefiero colaborar con alimentos o materiales',
    submitLabel: 'Quiero colaborar',
    reassurance: 'Te contactaremos para coordinar la colaboración.',
    backgroundImage: donationMealImg,
    backgroundAlt: 'Mesa comunitaria compartida al atardecer en el barrio Palermo',
  },
  waysToHelp: {
    heading: 'Hay muchas formas de participar.',
    description:
      'La organización comunitaria se sostiene con el compromiso de personas, familias, vecinos y colectivos que aportan tiempo, recursos y conocimientos desde distintos lugares.',
    cards: [
      {
        id: 'olla',
        title: 'Sumate a la olla',
        description:
          'Colaborá con alimentos, insumos o tiempo para sostener las jornadas de cocina comunitaria.',
        linkLabel: 'Cómo participar',
        image: helpOllaImg,
        imageAlt: 'Preparación colectiva de alimentos en la olla popular de Palermo',
        presetTopic: 'Colaborar con la olla popular (alimentos, insumos o cocina)',
      },
      {
        id: 'manos',
        title: 'Poné manos a la obra',
        description:
          'Participá en las actividades, jornadas y tareas colectivas que se organizan en el barrio.',
        linkLabel: 'Quiero sumarme',
        image: helpHandsImg,
        imageAlt: 'Voluntarios y vecinos organizando una jornada barrial en Montevideo',
        presetTopic: 'Sumarme como voluntario/a en actividades del barrio',
      },
      {
        id: 'redes',
        title: 'Construyamos redes',
        description:
          'Acercá herramientas, conocimientos, propuestas y contactos para fortalecer el trabajo comunitario.',
        linkLabel: 'Conocé cómo ayudar',
        image: helpNetworksImg,
        imageAlt: 'Mesa de diálogo y articulación vecinal en Palermo',
        presetTopic: 'Articular redes, propuestas o recursos con Red Palermo',
      },
    ] as WayToHelpItem[],
  },
  events: {
    heading: 'Próximas actividades',
    categoryLabel: 'Encuentros barriales',
    secondaryAction: 'Ver todas las actividades',
    primaryEvent: {
      id: 'encuentro-palermo',
      dateLabel: 'FECHA',
      dateSubLabel: 'A CONFIRMAR',
      category: 'Encuentros barriales',
      title: 'Encuentro comunitario en Palermo',
      description:
        'Una jornada para encontrarnos, compartir y organizar nuevas iniciativas barriales.',
      location: 'Palermo, Montevideo',
      details: [
        'Espacio abierto a vecinos, vecinas, colaboradores y colectivos interesados en acercarse al trabajo de Red Palermo.',
        'Durante el encuentro compartiremos las necesidades actuales de la olla popular, el calendario tentativo de jornadas y nuevas propuestas de articulación en el barrio.',
        'Dejanos tu contacto para recibir la confirmación de día, horario y punto de encuentro en Palermo.',
      ],
    } as ActivityItem,
    additionalEvents: [
      {
        id: 'jornada-olla',
        dateLabel: 'FECHA',
        dateSubLabel: 'A CONFIRMAR',
        category: 'Olla popular',
        title: 'Jornada de cocina comunitaria',
        description:
          'Preparación colectiva de alimentos y organización de insumos para el barrio.',
        location: 'Palermo, Montevideo',
        details: [
          'Se coordinan turnos para recepción de alimentos, picado de verduras, cocina y limpieza final.',
          'Quienes quieran acercar alimentos secos o frescos pueden coordinar previamente por el formulario de contacto.',
        ],
      },
      {
        id: 'acopio-vecinal',
        dateLabel: 'FECHA',
        dateSubLabel: 'A CONFIRMAR',
        category: 'Colaboración',
        title: 'Recepción de alimentos y materiales',
        description:
          'Punto de encuentro para acercar alimentos no perecederos, verduras e insumos de cocina.',
        location: 'Palermo, Montevideo',
        details: [
          'Recibimos alimentos básicos, aceite, fideos, arroz, legumbres, verduras de estación, garrafas y artículos de higiene para la cocina.',
          'Coordinamos la entrega de forma directa con cada colaborador o comercio del barrio.',
        ],
      },
    ] as ActivityItem[],
  },
  stories: {
    heading: 'Historias del barrio',
    viewAllLabel: 'Ver todas',
    items: [
      {
        id: 'mesa-encuentro',
        title: 'Una mesa que nos encuentra',
        subtitle: 'La olla como espacio de encuentro.',
        image: storyTableImg,
        imageAlt: 'Vecinos y vecinas compartiendo una comida caliente en la olla popular',
        category: 'Olla popular',
        body: [
          'Más allá del plato de comida, la olla popular en Palermo funciona como un punto de encuentro cotidiano donde las personas se reconocen, conversan y comparten lo que atraviesa el barrio.',
          'Sostener este espacio implica organización previa, trabajo en equipo y el cuidado de un trato digno y cercano para todas las personas que participan.',
        ],
      },
      {
        id: 'organizarse-construir',
        title: 'Organizarse es construir',
        subtitle: 'El trabajo colectivo detrás de cada jornada.',
        image: storyPrepImg,
        imageAlt: 'Manos preparando verduras e ingredientes para la cocina comunitaria',
        category: 'Trabajo colectivo',
        body: [
          'Detrás de cada jornada hay horas de coordinación vecinal: conseguir insumos, organizar el acopio, preparar las verduras y cuidar cada etapa del proceso.',
          'Cada tarea compartida multiplica la capacidad del grupo y permite que nadie cargue solo con el esfuerzo de sostener la iniciativa.',
        ],
      },
      {
        id: 'barrio-reune',
        title: 'Cuando el barrio se reúne',
        subtitle: 'Ideas, encuentros y participación.',
        image: storyGatheringImg,
        imageAlt: 'Vecinos conversando y planificando iniciativas comunitarias en Palermo',
        category: 'Participación',
        body: [
          'Los encuentros abiertos permiten escuchar inquietudes concretas del barrio y transformarlas en acciones colectivas posibles.',
          'Desde la circulación de información útil hasta la organización de jornadas solidarias, cada voz aporta a definir las prioridades comunes.',
        ],
      },
      {
        id: 'pequenas-acciones',
        title: 'Pequeñas acciones, grandes redes',
        subtitle: 'La fuerza de colaborar.',
        image: storyNetworksImg,
        imageAlt: 'Red de colaboración vecinal y entrega solidaria de insumos en Montevideo',
        category: 'Redes barriales',
        body: [
          'Un alimento acercado a tiempo, un traslado, una difusión o unas horas de trabajo se enlazan con otros gestos y sostienen el tejido comunitario.',
          'Las redes barriales crecen cuando se construyen con continuidad, transparencia y puertas abiertas a quienes quieran sumarse.',
        ],
      },
    ] as StoryItem[],
  },
  featuredProject: {
    title: 'Redes que sostienen',
    description:
      'Un espacio para compartir recursos, conectar iniciativas y fortalecer los vínculos comunitarios de Palermo.',
    ctaLabel: 'Conocé el proyecto',
    image: featuredRedesImg,
    imageAlt: 'Vista panorámica del barrio Palermo y su actividad comunitaria al atardecer',
    modalBody: [
      'Redes que sostienen es la iniciativa transversal de Red Palermo orientada a articular personas, comercios locales, grupos de trabajo y otras organizaciones sociales del entorno.',
      'Su objetivo es ordenar de manera clara qué insumos se necesitan en cada momento, facilitar el intercambio de saberes y asegurar que ninguna iniciativa barrial trabaje en soledad.',
      'Si representás a un colectivo, comercio del barrio o querés acercar recursos y tiempo, podés coordinar directamente con nuestro equipo.',
    ],
  },
  news: {
    heading: 'Últimas novedades',
    subtitle:
      'Conocé las actividades, encuentros, campañas y avances de nuestro trabajo comunitario.',
    items: [
      {
        id: 'nueva-jornada',
        category: 'OLLA POPULAR',
        title: 'Una nueva jornada de trabajo colectivo',
        dateLabel: 'Fecha a confirmar',
        image: newsOllaImg,
        imageAlt: 'Cocina comunitaria preparando alimentos para el barrio Palermo',
        summary:
          'Seguimos organizando las próximas jornadas de la olla popular junto a vecinos y vecinas de Palermo.',
        body: [
          'Estamos coordinando los equipos de cocina, logística y recepción de insumos para las próximas jornadas de la olla popular en el barrio.',
          'Quienes quieran sumarse con alimentos básicos o con algunas horas de trabajo colectivo pueden escribirnos desde el formulario de colaboración para coordinar.',
        ],
      },
      {
        id: 'organizar-iniciativas',
        category: 'ENCUENTROS',
        title: 'Nos encontramos para organizar nuevas iniciativas',
        dateLabel: 'Fecha a confirmar',
        image: newsEncuentrosImg,
        imageAlt: 'Encuentro vecinal de planificación en el barrio Palermo',
        summary:
          'Abrimos una instancia de encuentro para intercambiar propuestas y fortalecer la organización barrial.',
        body: [
          'Convocamos a vecinos, vecinas y colaboradores a participar de una instancia de diálogo para proyectar las próximas líneas de trabajo de Red Palermo.',
          'El objetivo es ampliar la participación y definir colectivamente nuevas actividades de acompañamiento en el territorio.',
        ],
      },
      {
        id: 'sumamos-recursos',
        category: 'COLABORACIÓN',
        title: 'Sumamos recursos para sostener el trabajo barrial',
        dateLabel: 'Fecha a confirmar',
        image: newsColaboracionImg,
        imageAlt: 'Clasificación de alimentos y provisiones reunidas para la comunidad',
        summary:
          'Cómo acercar alimentos, insumos de cocina o aportes económicos de manera directa y transparente.',
        body: [
          'Mantenemos abiertas distintas vías de colaboración para que cada persona o colectivo pueda aportar según sus posibilidades: alimentos secos, verduras frescas, insumos de cocina o aportes económicos.',
          'Toda colaboración se coordina de forma directa con el equipo de Red Palermo para garantizar un uso claro y ordenado.',
        ],
      },
      {
        id: 'construyendo-palermo',
        category: 'ACTIVIDADES',
        title: 'Lo que estamos construyendo en Palermo',
        dateLabel: 'Fecha a confirmar',
        image: newsActividadesImg,
        imageAlt: 'Calles y arquitectura cotidiana del barrio Palermo en Montevideo',
        summary:
          'Un recorrido por las áreas de trabajo que impulsamos desde el barrio con participación abierta.',
        body: [
          'Desde la olla popular hasta la articulación con otras redes comunitarias, Red Palermo busca consolidar un espacio estable de organización popular en Montevideo.',
          'Esta sección está preparada para actualizarse con crónicas, convocatorias y balances abiertos a toda la comunidad.',
        ],
      },
    ] as NewsItem[],
  },
  finalCta: {
    heading: '¿Querés ser parte de lo que estamos construyendo?',
    body: 'Hay muchas formas de colaborar. Acercate, participá y ayudanos a fortalecer las redes del barrio.',
    ctaLabel: 'Quiero colaborar',
    image: finalCtaImg,
    imageAlt: 'Colaboradora comunitaria sonriendo con un cajón de verduras frescas en Palermo',
  },
  footer: {
    columns: [
      {
        heading: 'SOBRE NOSOTROS',
        links: [
          { label: 'Quiénes somos', href: '#quienes-somos' },
          { label: 'Qué hacemos', href: '#que-hacemos' },
          { label: 'Noticias', href: '#noticias' },
        ],
      },
      {
        heading: 'PARTICIPÁ',
        links: [
          { label: 'Cómo colaborar', href: '#colaborar' },
          { label: 'Sumate como voluntario', action: 'volunteer' as const },
          { label: 'Actividades', href: '#actividades' },
        ],
      },
    ],
  },
};
