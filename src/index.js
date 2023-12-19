import Logo from "./assets/LOGO.png";

// imagenes nuestras alianzas
import buscaTuCasaLogo from "./assets/Nuestras-Alianzas/busca-tu-casa.png";
import century21Logo from "./assets/Nuestras-Alianzas/century21.png";
import diamondLogo from "./assets/Nuestras-Alianzas/diamond.png";
import inmobiliariaLogo from "./assets/Nuestras-Alianzas/inmobiliaria.png";
import kwelFaro from "./assets/Nuestras-Alianzas/kwel-faro.png";
import mazaryk from "./assets/Nuestras-Alianzas/mazaryk.png";
import rb4n from "./assets/Nuestras-Alianzas/rb4n.png";

// imagenes acordion de monarca
import monarcaImg1 from "./assets/Monarca-Imagenes/monarca-img1.webp";
import monarcaImg2 from "./assets/Monarca-Imagenes/monarca-img2.webp";
import monarcaImg3 from "./assets/Monarca-Imagenes/monarca-img3.webp";
import monarcaImg4 from "./assets/Monarca-Imagenes/monarca-img4.webp";
import monarcaImg5 from "./assets/Monarca-Imagenes/monarca-img5.webp";
import monarcaImg6 from "./assets/Monarca-Imagenes/monarca-img6.webp";

// imagen de la seccion nosotros
import nosotrosImg from "./assets/nosotros-img.png";

//imagenes acordion de coralina
import coralinaImg1 from "./assets/Coralina-imagenes/coralina-img1.webp";
import coralinaImg2 from "./assets/Coralina-imagenes/coralina-img2.webp";
import coralinaImg3 from "./assets/Coralina-imagenes/coralina-img3.webp";
import coralinaImg4 from "./assets/Coralina-imagenes/coralina-img4.webp";
import coralinaImg5 from "./assets/Coralina-imagenes/coralina-img5.webp";
import coralinaImg6 from "./assets/Coralina-imagenes/coralina-img6.webp";

import engrane from "./assets/icons/setting.png";
import billetera from "./assets/icons/wallet.png";

import listNumber1 from "./assets/icons/List-Number-1.png";
import listNumber2 from "./assets/icons/List-Number-2.png";
import listNumber3 from "./assets/icons/List-Number-3.png";

// icono de reseñas
import quoteMark from "./assets/icons/Quote-Mark.png";

// elementos barra de navegacion
const navLinks = [
  { id: "inicio", title: "Inicio" },
  { id: "mis-proyectos", title: "Mis Proyectos" },
  { id: "valor", title: "Valor" },
  { id: "nosotros", title: "Nosotros" },
  { id: "detalles", title: "Detalles" },
  { id: "contacto", title: "Contacto" },
];

// elementos seccion  inicio
const inicio = {
  id: "inicio",
  title: "EL MEJOR PUERTO DE MÉXICO",
  content:
    "La calidad de vida en Mazatlán es de las mejores del país e ideal para adultos mayores, recién casados y familias con niños.",
  logo: Logo,
};

const nuestrasAlianzas = [
  buscaTuCasaLogo,
  century21Logo,
  diamondLogo,
  inmobiliariaLogo,
  kwelFaro,
  mazaryk,
  rb4n,
];

const misProyectos = {
  span: "proyecto",
  title: "Monarca Residencial",
  content:
    " Las tres colindancias en Mazatlán más importantes de nuestro desarrollo residencial.",
  atracciones: [
    {
      number: listNumber1,
      title: "Parque Aeroespacial",
      content:
        "Los inversionistas del Parque Aeroespacial MZT encontraron el lugar adecuado en México para invertir en la construcción de la infraestructura más avanzada disponible para la industria aeroespacial mundial.",
    },
    {
      number: listNumber2,
      title: "A 9 Min de las Playas Cerritos",
      content:
        "Mazatlán cuenta con varias playas a las que puedes acceder fácilmente, pero si buscas una de paisaje espectácular, Cerritos es perfecta para ti y tu familia.",
    },
    {
      number: listNumber3,
      title: "Centros Comerciales & Urbes.  ",
      content:
        "Podrás encontrar a los alrededores, centros comerciales como Plaza Galerias, Plaza Acaya para poder disfrutar con tu familia un buen fin de semana, tambien urbes vecinas como Real del Valle, Zona Dorada, El Cid y una gran variedad de Hoteles.",
    },
  ],
};

const galeriaMonarcaResidencial = {
  title1: "Nuestro Principal Producto",
  title2: "Monarca Residencial",
  gallery: [
    monarcaImg1,
    monarcaImg2,
    monarcaImg3,
    monarcaImg4,
    monarcaImg5,
    monarcaImg6,
  ],
  button: "¡VISITA NUESTRO SITIO WEB!",
};

const nosotros = {
  span: "OAR DESARROLLADORES",
  title: "Asegura e incrementa el valor de tu dinero.",
  content:
    "La mejor opción es invertir en un Lote Residencial, ya que además de obtener plusvalía, siempre y cuando sepas elegir bien, asegurarás que tu patrimonio no se pierda o reduzca su valor.",
  points: [
    { icon: engrane, title: "Mejor Servicio" },
    { icon: billetera, title: "Monedero Seguro" },
  ],
  image: nosotrosImg,
};

const galeriaCoralinaResidencial = {
  title1: "El Estilo de Vida que Siempre Soñaste",
  title2: "Coralina Residencial",
  gallery: [
    coralinaImg1,
    coralinaImg2,
    coralinaImg3,
    coralinaImg4,
    coralinaImg5,
    coralinaImg6,
  ],
  button: "¡VISITA NUESTRO SITIO WEB!",
};

const detalles = {
  span1: "Una de las mejores inversiones hoy en día es comprar un terreno.",
  title: "¿Estás listo para invertir en tu futuro?",
  span2:
    "Construye tu hogar justo como lo imaginabas, su valor nunca se pierde.",
  cards: [
    {
      title: "rentabilidad segura",
      content:
        "Es importante que consideres que las inversiones en bienes raíces son inversiones a mediano y largo plazo, pero es por esto que siempre tendrás una rentabilidad segura.",
    },
    {
      title: "Construcción",
      content:
        "Este es uno de los mayores valores de un Lote, ya que te permitirá construir una casa, la cual podrás personalizar, a tu gusto y propio ritmo.",
    },
    {
      title: "Fácil de Mantener",
      content:
        "Puedes despreocuparte del mantenimiento, ya que para su cuidado se requiere poco tiempo y dinero.",
    },
    {
      title: "Un Lote es un Producto Finito",
      content:
        "Eres dueño de un producto limitado y debido al crecimiento demográfico, este puede incrementar su valor, al ser un inmueble de mayor demanda.",
    },
    {
      title: "Activos que Trabajan Por Ti",
      content:
        "Los activos son dinero que se irá incrementando con el tiempo sin mayor esfuerzo.",
    },
    {
      title: "Ahorra",
      content:
        "Los activos son dinero que se irá incrementando con el tiempo sin mayor esfuerzo.",
    },
  ],
};

const visionMision = {
  title1: "Mucho más que una",
  title2: "Desarrolladora",
  valores:
    "Honestidad • Lealtad • Tranparencia • Compromiso • Excelencia • Respeto • Innovación",

  cards: [
    {
      title: "MISIÓN",
      content:
        "El compromiso de nuestra empresa es brindar a nuestros clientes un servicio profesional y de alta calidad en servicios inmobiliarios, una mejor calidad de vida a travez de nuestros desarrollos.",
    },
    {
      title: "VISIÓN",
      content:
        "Ser una empresa líder, numero uno en el ramo de servicios inmobiliario distinguida por el servicio, atención, eficiencia y calidad empresarial ofrecido a todos nuestros clientes.",
    },
    {
      title: "VALORES",
      content:
        "Somos una empresa comprometida con sus clientes, provedores, colaboradores, competidores y la sociedad es por eso que en OAR nos esforzamaos día con día para lograr todos nuestros objetivos.",
    },
  ],
};

const reseñas = {
  span: "Reseñas",
  title1: "Lo que nuestros clientes",
  title2: "Dicen sobre nosotros",
  cards: [
    {
      icon: quoteMark,
      title: "“Definitivamente Recomendado”",
      content:
        "Muy agradable, invertí en un Desarrollo nuevo, todo muy bien esperando que sea un proyecto de éxito.",
      person: "Claudia Ramírez",
    },
    {
      icon: quoteMark,
      title: "“Definitivamente Recomendado”",
      content:
        "Es una empresa sólida, responsable y comprometida con sus clientes",
      person: "Paul Garcia",
    },
    {
      icon: quoteMark,
      title: "“Definitivamente Recomendado”",
      content: "Compre en preventa, todo excelente.",
      person: "Denis Vega",
    },
    {
      icon: quoteMark,
      title: "“Definitivamente Recomendado”",
      content:
        "Me convencio el profesionalismo, conocimiento técnico de la asesoria que fue brindada en OAR.",
      person: "Lourdes Guerrero",
    },
    {
      icon: quoteMark,
      title: "“Definitivamente Recomendado”",
      content:
        "La experiencia, conocimiento y profesionalismo de los asesores es muy notable. Felicidades!!",
      person: "Carlos Monreal",
    },
  ],
};

const contacto = {
  title: "Suscribete a nuestro Newsletter",
  span: "Generamos confianza que trasciende con valor.",
  logo: Logo,
  content:
    "OAR desarrolladora es un equipo profesional que participamos en la comercialización de LOTES RESIDENCIALES.",
  menu: {
    title: "Menú",
    items: ["inicio", "Mis Proyectos", "Valor", "Galeria", "Politicas"],
  },

  contacto: {
    title: "Contacto",
    span: "Oficina Principal",
    number: "Phone: +52 (669) 244 7270",
    email: "oardesarrolladores@gmail.com",
  },
  ubicacion: {
    title: "Ubicación",
    direccion:
      "Av. la Marina No. 2302 L-20 Fracc. La Marina, Mazatlán, Sinaloa, México.",
  },
};

const footer = {
  title1:
    "© OAR Desarrolladores 2022. Todos los derechos reservados. Lee nuestro aviso de privacidad.",
  title2:
    "Las imágenes e información presentadas en esta página son solamente como referencia y no deben ser consideradas como definitivas.",
};

// exportacion de los objetos
export {
  navLinks,
  inicio,
  nuestrasAlianzas,
  misProyectos,
  galeriaMonarcaResidencial,
  nosotros,
  galeriaCoralinaResidencial,
  detalles,
  visionMision,
  reseñas,
  contacto,
  footer,
};
