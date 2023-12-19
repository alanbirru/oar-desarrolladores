import Logo from "./assets/LOGO.png";

import buscaTuCasaLogo from "./assets/Nuestras-Alianzas/busca-tu-casa.png";
import century21Logo from "./assets/Nuestras-Alianzas/century21.png";
import diamondLogo from "./assets/Nuestras-Alianzas/diamond.png";
import inmobiliariaLogo from "./assets/Nuestras-Alianzas/inmobiliaria.png";
import kwelFaro from "./assets/Nuestras-Alianzas/kwel-faro.png";
import mazaryk from "./assets/Nuestras-Alianzas/mazaryk.png";
import rb4n from "./assets/Nuestras-Alianzas/rb4n.png";

import monarcaImg1 from "./assets/Monarca-Imagenes/monarca-img1.jpg";
import monarcaImg2 from "./assets/Monarca-Imagenes/monarca-img2.jpg";
import monarcaImg3 from "./assets/Monarca-Imagenes/monarca-img3.jpg";
import monarcaImg4 from "./assets/Monarca-Imagenes/monarca-img4.jpg";
import monarcaImg5 from "./assets/Monarca-Imagenes/monarca-img5.jpg";
import monarcaImg6 from "./assets/Monarca-Imagenes/monarca-img6.jpg";

import nosotrosImg from "./assets/nosotros-img.png";

const navLinks = [
  { id: "inicio", title: "Inicio" },
  { id: "mis-proyectos", title: "Mis Proyectos" },
  { id: "valor", title: "Valor" },
  { id: "nosotros", title: "Nosotros" },
  { id: "detalles", title: "Detalles" },
  { id: "contacto", title: "Contacto" },
];

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

const misProyectos = [
  {
    span: "proyecto",
    title: "Monarca Residencial",
    content:
      " Las tres colindancias en Mazatlán más importantes de nuestro desarrollo residencial.",
    atracciones: [
      {
        number: "01",
        title: "Parque Aeroespacial",
        content:
          "Los inversionistas del Parque Aeroespacial MZT encontraron el lugar adecuado en México para invertir en la construcción de la infraestructura más avanzada disponible para la industria aeroespacial mundial.",
      },
      {
        number: "02",
        title: "A 9 Min de las Playas Cerritos",
        content:
          "Mazatlán cuenta con varias playas a las que puedes acceder fácilmente, pero si buscas una de paisaje espectácular, Cerritos es perfecta para ti y tu familia.",
      },
      {
        number: "03",
        title: "Centros Comerciales & Urbes.  ",
        content:
          "Podrás encontrar a los alrededores, centros comerciales como Plaza Galerias, Plaza Acaya para poder disfrutar con tu familia un buen fin de semana, tambien urbes vecinas como Real del Valle, Zona Dorada, El Cid y una gran variedad de Hoteles.",
      },
    ],
  },
];

const galeriaMonarcaResidencial = [
  {
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
  },
];
const nosotros = [
  {
    span: "OAR DESARROLLADORES",
    title: "Asegura e incrementa el valor de tu dinero.",
    content:
      "La mejor opción es invertir en un Lote Residencial, ya que además de obtener plusvalía, siempre y cuando sepas elegir bien, asegurarás que tu patrimonio no se pierda o reduzca su valor.",
    points: [
      { icon: "", title: "Mejor Servicio" },
      { icon: "", title: "Monedero Seguro" },
    ],
    images: nosotrosImg,
  },
];

export {
  navLinks,
  inicio,
  nuestrasAlianzas,
  misProyectos,
  galeriaMonarcaResidencial,
};
