/**
 * ============================================================
 *  CONFIGURACIÓN DEL CLIENTE
 *  Todo el contenido editable de la web vive aquí.
 *  Colores y tipografías: src/styles/theme.css
 *  Imágenes: public/images (o cambia las rutas de abajo)
 * ============================================================
 */

export const site = {
  // --- Marca ---------------------------------------------------
  name: 'NOIR',
  tagline: 'Peluquería unisex',
  since: 2012,
  description:
    'Peluquería unisex de autor. Corte, color y estilo sin etiquetas, en blanco y negro.',
  lang: 'es',

  // --- Contacto ------------------------------------------------
  contact: {
    phone: '+34 600 000 000',
    whatsapp: '34600000000', // solo números, con prefijo de país
    whatsappMessage: 'Hola, quiero reservar cita',
    email: 'hola@noir-studio.com',
    address: 'Calle Mayor 12, 28013 Madrid',
    mapsUrl: 'https://maps.google.com/?q=Calle+Mayor+12+Madrid',
    instagram: 'https://instagram.com/',
    instagramHandle: '@noir.studio',
  },

  // --- Navegación ---------------------------------------------
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ],
  ctaLabel: 'Reservar',

  // --- Tipografías (Google Fonts) -----------------------------
  // Si cambias la URL, actualiza también --font-* en theme.css
  fontsUrl:
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Instrument+Serif:ital@0;1&display=swap',

  // --- Hero ----------------------------------------------------
  hero: {
    lines: ['Corta.', 'Cambia.', 'Repite.'],
    subtitle:
      'Un estudio donde el estilo no tiene género. Solo contraste, precisión y carácter.',
    image: '/images/hero.svg',
    badge: 'Desde 2012 • Unisex • Sin prisas • ',
  },

  // --- Marquee (cinta que se desplaza) ------------------------
  marquee: ['Corte', 'Color', 'Barba', 'Peinado', 'Tratamientos', 'Novias'],

  // --- Sobre nosotros -----------------------------------------
  about: {
    title: 'Sin etiquetas. Con intención.',
    text: 'Somos un estudio pequeño con una idea grande: que cada persona salga con un look que la represente. Trabajamos con productos profesionales, tiempo de sobra y una buena dosis de criterio.',
    image: '/images/about.svg',
    stats: [
      { value: '12+', label: 'Años de oficio' },
      { value: '8K', label: 'Clientes felices' },
      { value: '4', label: 'Estilistas' },
    ],
  },

  // --- Servicios ----------------------------------------------
  services: {
    title: 'Servicios',
    items: [
      { name: 'Corte', desc: 'Consulta, lavado, corte y acabado.', price: 'desde 18€' },
      { name: 'Color', desc: 'Global, mechas, balayage y fantasía.', price: 'desde 45€' },
      { name: 'Barba', desc: 'Perfilado, toalla caliente y cuidado.', price: 'desde 12€' },
      { name: 'Peinado', desc: 'Eventos, bodas y sesiones de foto.', price: 'desde 25€' },
      { name: 'Tratamientos', desc: 'Keratina, hidratación y anticaída.', price: 'desde 30€' },
    ],
  },

  // --- Galería -------------------------------------------------
  gallery: {
    title: 'Trabajos',
    images: [
      { src: '/images/gallery-1.svg', alt: 'Corte 1' },
      { src: '/images/gallery-2.svg', alt: 'Corte 2' },
      { src: '/images/gallery-3.svg', alt: 'Corte 3' },
      { src: '/images/gallery-4.svg', alt: 'Corte 4' },
      { src: '/images/gallery-5.svg', alt: 'Corte 5' },
      { src: '/images/gallery-6.svg', alt: 'Corte 6' },
    ],
  },

  // --- Equipo --------------------------------------------------
  team: {
    title: 'El equipo',
    members: [
      { name: 'Lucía Marín', role: 'Directora creativa', image: '/images/team-1.svg' },
      { name: 'Álex Ortega', role: 'Colorista', image: '/images/team-2.svg' },
      { name: 'Sam Rivas', role: 'Barbero', image: '/images/team-3.svg' },
    ],
  },

  // --- Horario -------------------------------------------------
  hours: [
    { days: 'Lunes – Viernes', time: '10:00 – 20:00' },
    { days: 'Sábado', time: '10:00 – 15:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],

  contactSection: {
    title: '¿Hablamos?',
    text: 'Reserva por WhatsApp y te confirmamos en minutos.',
  },
};

export const whatsappUrl = () =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
