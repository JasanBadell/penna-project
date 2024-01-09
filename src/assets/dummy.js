// Import IMG
import about from "./about.png";
import about2 from "./about2.png";
import product from "../assets/product1.png";
import productions from "./Productions_IMG.png";
import service from "./Service_IMG.png";
import services1 from "./Services_1.png";
import services2 from "./Services_2.png";
import services3 from "./Services_3.png";
import services4 from "./Services_4.png";
import maintenance from "./maintenance.svg";
import painting from "./painting.svg";
import pencil from "./pencil.svg";
import rocket from "./rocket.svg";
import vector from "./Vector.svg";
import s_vector from "./Services_vector.svg";
import s_vector1 from "./Services_vector_1.svg";
import news from "./newsLetter1.png";
import brands from "./Brand_news_asset.png";
import brandimg from "./brandnews_1.png";
import brandimg1 from "./brandnews_2.png";
import navbar from "./Client_Tag.png";
import clients from "./ClientSection.png";
import ecasa from "./Logos_Penna-Project/ecasa.png";
import azcuba from "./azcuba.jpg";
import minag from "./Logos_Penna-Project/minag.png";
import sc from "./Logos_Penna-Project/comunales.png";
import zdem from "./Logos_Penna-Project/zdem.png";
import homevector from "./Home_vector.svg";
import carruselimg from "./Carrusel_IMG.png";
// Import Const
export const products = [
  {
    img: `${product}`,
    title: "Semirremolques",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Aplicaciones",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Equipos Agrícolas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Reparaciones",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export const array_products = [
  {
    img: `${product}`,
    title: "Semirremolques",
    category: "tradicionales",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Aplicaciones",
    category: "tradicionales",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Equipos Agrícolas",
    category: "tradicionales",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Alquiler",
    category: "otras",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Reparaciones",
    category: "tradicionales",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    img: `${product}`,
    title: "Restauraciones",
    category: "otras",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export const aboutColumn1 = [
  {
    id: "1",
    title: "¿Quiénes somos?",
    conten:
      "Durante más de una década, Peña Empresa Industrial ha garantizado la producción de equipos e implementos de transporte, el diseño y la recuperación de partes y piezas de repuesto destinados a la zafra azucarera, la agricultura, la construcción y la higiene comunal.",
    conten2:
      " La fabricación de una gama especializada de autotrenes, compuestos por remolques y semirremolques de distintas capacidades, constituye nuestra línea fundamental de producción.",
    conten3:
      "Peña Empresa Industrial está conformada por tres unidades empresariales de base y una mipyme estatal. Se distingue por un equipo de trabajo innovador, eficiente, con alto nivel de experiencia y comprometido, que apuesta por la calidad y sostenibilidad de sus producciones, hoy presentes en toda la geografía del país.",
  },
  {
    id: "2",
    title: "¿Cómo surge?",
    conten:
      "Tras la fusión de la Empresa Constructora de Equipos Mecánicos (CEM) y la Empresa Industrial Guanabo en el 2012, emerge este actor económico en el mercado nacional bajo el nombre Ramón Peña.",
    conten2:
      "Más adelante, en el 2018, se suma a este grupo de aliados la Unidad Empresarial Básica Industria Mecánica Caribe (IMECA) con lo que se amplía y consolida la actividad metalúrgica y metalmecánica de esta rama industrial.",
    conten3:
      "Peña Empresa Industrial está integrada al Grupo Empresarial de la Industria Sidero Mecánica (GESIME), representado por el Ministerio de Industrias.",
    conten4:
      "En la actualidad, también la conforma la mipyme estatal SOLDARAP, el primer actor económico de esta forma de gestión y desarrollo empresarial constituido en GESIME.",
  },
];
export const aboutColumn2 = [
  {
    id: "1",
    title: "¿Por qué Ramón Peña?",
    conten:
      "El nombre de la empresa es elegido como homenaje a uno de los combatientes y mártires de Playa Girón. Se trata del joven Ramón Peña Díaz, oriundo de España y quien se unió a las milicias cubanas para luchar por la causa nacional.",
    conten2:
      "Con este representativo se han hecho todas las variaciones institucionales. Primero se identificó como Empresa Ramón Peña, luego, Empresa Constructora de Equipos Mecánicos Ramón Peña y más adelante, Empresa Industrial Ramón Peña.",
    conten3: "En la actualidad su nombre es Peña Empresa Industrial.",
    conten4: "",
    conten5: "",
  },
  {
    id: "2",
    title: "¿Nuestro propósito?",
    conten:
      "Mantener el liderazgo en la producción de arrastres con máxima calidad y resistencia, así como satisfacer las demandas y necesidades del mercado, a tono con las perspectivas del país.",
    conten2: "",
    conten3: "",
    conten4: "",
    conten5: "",
  },
  {
    id: "3",
    title: "¿Qué nos prestigia?",
    conten: "• Fabricaciones de probada calidad y durabilidad.",
    conten2: "• Permite a Cuba la sustitución de importaciones.",
    conten3: "• Tecnologías modernizadas.",
    conten4: "• Alta capacidad de producción.",
    conten5: "",
  },
];

export const sections = [
  {
    id: "1",
    title: "REPARACIÓN DE EQUIPOS",
    img: `${services1}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${maintenance}`,
    clasN: "flex md:flex-row items-center",
  },
  {
    id: "2",
    title: "CORTE, CONFORMADO, SOLDADURA Y PINTURA",
    img: `${services2}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${painting}`,
    clasN: "flex md:flex-row-reverse items-center bg-vector -mt-24",
  },
  {
    id: "3",
    title: "ASESORÍA Y SERVICIOS TÉCNICOS",
    img: `${services3}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${rocket}`,
    clasN: "flex md:flex-row items-center",
  },
  {
    id: "4",
    title: "PROYECCIÓN Y DISEÑO",
    img: `${services4}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${pencil}`,
    clasN: "flex md:flex-row-reverse items-center bg-vector-2 -mt-32 -mb-8",
  },
];

export const brandNews = [
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "/Lorem",
  },
  {
    img: `${news}`,
    title: "Lorem Ipsum",
    subtitle: "Lorem, ipsum dolor sit",
    parraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    resume:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    path: "https://www.cubaplusmagazine.com",
  },
];

export const client = [
  {
    id: "1",
    logo: `${minag}`,
    title: "MINAG",
    description: "Producción y comercialización agropecuaria.",
  },
  {
    id: "2",
    logo: `${ecasa}`,
    title: "ECASA",
    description: "Empresa Cubana de Aeropuertos y Servicios Aeroportuarios.",
  },
  {
    id: "3",
    logo: `${sc}`,
    title: "Servicios Comunales",
    description:
      "Destinada a la higiene ambiental, recogida de desechos y servicios necrológicos.",
  },
  {
    id: "4",
    logo: `${azcuba}`,
    title: "AZCUBA",
    description: "Grupo Azucarero, con más de 500 años de tradición y cultura.",
  },
  {
    id: "5",
    logo: `${zdem}`,
    title: "ZDEM",
    description:
      "Zona Especial de Desarrollo Mariel, la primera de su tipo en Cuba.",
  },
];

export const homecarrusel = [
  { id: "1", img: `${service}` },
  { id: "2", img: `${carruselimg}` },
];

export {
  productions,
  about,
  about2,
  service,
  services1,
  services2,
  services3,
  services4,
  maintenance,
  pencil,
  painting,
  product,
  rocket,
  vector,
  s_vector,
  s_vector1,
  brands,
  brandimg,
  brandimg1,
  clients,
  ecasa,
  azcuba,
  minag,
  sc,
  zdem,
  navbar,
  homevector,
  carruselimg,
};
