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
import camaraComercio from "./Logos_Penna-Project/camara_comercio.png";
import registroComercial from "./Logos_Penna-Project/registro_comerciall.png";
import propiedadIndustrial from "./Logos_Penna-Project/propiedad_industrial.png";
import { FaTelegram, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone, MdOutlineClose } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
// Import Const

export const products = [
  {
    id: "1",
    img: `${product}`,
    title: "Transporte de caña",
    category: "REMOLQUES",
    subCategory: "Fijo, Bascular",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "2",
    img: `${product}`,
    title: "Transporte de carga general",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "3",
    img: `${product}`,
    title: "Transporte de desechos sólidos",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "4",
    img: `${product}`,
    title: "Cisterna para transportes líquidos",
    category: "REMOLQUES",
    subCategory: "Fijo",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "5",
    img: `${product}`,
    title: "Transporte de productos agrícolas",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "6",
    img: `${product}`,
    title: "Semicompactador para desechos sólidos",
    category: "REMOLQUES",
    subCategory: "Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "7",
    img: `${product}`,
    title: "Carretilla Portaequipaje",
    category: "REMOLQUES",
    subCategory: "",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "8",
    img: `${product}`,
    title: "Transporte de carga general",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "9",
    img: `${product}`,
    title: "Transporte de sólidos a granel",
    category: "SEMI-REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "10",
    img: `${product}`,
    title: "Transporte de sólidos pulverizados",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "11",
    img: `${product}`,
    title: "Cisternas para el transporte de líquidos",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "12",
    img: `${product}`,
    title: "Transporte de ganado",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "13",
    img: `${product}`,
    title: "Transporte de vehículos automotores",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "14",
    img: `${product}`,
    title: "Transporte de elementos pre-fabricados de hormigón",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "15",
    img: `${product}`,
    title: "Transporte de personas hasta 60 pasajeros sentados",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "16",
    img: `${product}`,
    title: "Cajas AMPIROLL para desechos sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "17",
    img: `${product}`,
    title: "Plataformas sobre camión para carga general",
    category: "CONTENEDORES",
    subCategory: "Con barandas, Sin barandas",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "18",
    img: `${product}`,
    title: "Cajas con barandas",
    category: "CONTENEDORES",
    subCategory: "Fija, Basculante",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "19",
    img: `${product}`,
    title: "Cisternas para el transporte de líquidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "20",
    img: `${product}`,
    title: "Cajas cerradas para el transporte de semi-sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "21",
    img: `${product}`,
    title: "Cajas compactadoras para desechos sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "22",
    img: `${product}`,
    title: "Jaulas para cilindros de gases",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "23",
    img: `${product}`,
    title: "Hormigoneras portátiles",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "24",
    img: `${product}`,
    title: "Carretillas barrenadoras",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "25",
    img: `${product}`,
    title: "Palas para cargadores frontales",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "26",
    img: `${product}`,
    title: "Instalaciones para molido de biofertilizantes",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "27",
    img: `${product}`,
    title: "Máquinas forrajeras",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "28",
    img: `${product}`,
    title: "Máquinas ensiladoras",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "29",
    img: `${product}`,
    title: "Multiarados",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "30",
    img: `${product}`,
    title: "Máquinas surcadora-fertilizadora",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "31",
    img: `${product}`,
    title: "Limpiadora de playas",
    category: "OTROS EQUIPOS",
    subCategory: "",
    description: "",
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
    title: "Empresa Industrial Ramón Peña",
    subtitle: "Eficiencia y calidad demostrada",
    path: "https://www.cubaplusmagazine.com/es/negocios/empresa-industrial-ramon-pe%C3%B1a-eficiencia-calidad.html",
  },
  {
    title: "Empresa Industrial Ramón Peña",
    subtitle: "Eficiencia avalada por la experiencia",
    path: "https://www.cubaplusmagazine.com/es/cuba-industria/empresa-industrial-ramon-pe%C3%B1a-eficiencia-experiencia.html",
  },
  {
    title: "Avances en la sustitución",
    subtitle: "La importación y la exportación",
    path: "https://www.tribuna.cu/capitalinas/2019-12-17/avances-en-la-sustitucion-de-importacion-y-la-exportacion",
  },
  {
    title: "Incrementa cooperación con la industria cubana",
    subtitle: "Empresa Industrial Ramón Peña",
    path: "https://www.opciones.cu/ferias-y-eventos/2016-06-23/incrementa-cooperacion-con-la-industria-cubana",
  },
  {
    title: "¡Pensar en Grande!",
    subtitle: "",
    path: "https://www.trabajadores.cu/20141005/pensar-en-grande-2/",
  },
  {
    title: "Industria sideromecánica cubana se moderniza",
    subtitle: "",
    path: "https://www.adelante.cu/index.php/es/noticias/noticias-de-cuba/25375-industria-sideromecanica-cubana-se-moderniza",
  },
  {
    title: "Tras los pasos de la industria cubana",
    subtitle: "",
    path: "https://www.excelenciascuba.com/noticia/tras-los-pasos-de-la-industria-cubana",
  },
  {
    title: "Grupo Empresarial de la Industria Sidero Mecánica",
    subtitle: "Desarrollo con soluciones propias (+ Video)",
    path: "https://www.adelante.cu/index.php/es/noticias/noticias-de-cuba/25375-industria-sideromecanica-cubana-se-moderniza",
  },
  {
    title: "IMECA sigue produciendo",
    subtitle: "",
    path: "https://artemisadiario.cu/2020/01/imeca-sigue-produciendo/",
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

export const certificated = [
  {
    logo: `${camaraComercio}`,
    name: "Cámara de Comercio de la república de Cuba",
    description: "",
  },
  {
    logo: `${registroComercial}`,
    name: "Registro Central Comercial",
    description: "",
  },
  {
    logo: `${propiedadIndustrial}`,
    name: "Oficina cubana de la propiedad industrial",
    description: "",
  },
];

export const navItems = [
  { link: "Acerca de nosotros", path: "about" },
  { link: "Servicios", path: "services" },
  { link: "Producciones", path: "products" },
  { link: "Noticias", path: "brandnews" },
];

export const clientopinion = [
  {
    empName: "MINAG",
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, illo hic quasi ratione vitae! Ullam!",
  },
  {
    empName: "ECASA",
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, accusamus voluptatem iure molestiae quia consectetur labore autem voluptatibus nisi perspiciatis illo hic quasi ratione vitae! Ullam!",
  },
  {
    empName: "ZDEM",
    opinion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, accusamus voluptatem iure molestiae quia consectetur labore autem voluptatibus nisi perspiciatis illo hic quasi ratione vitae! Ullam!",
  },
];

export const slogan = [
  {
    opinion:
      " Líderes en la fabricación de remolques y semirremolques en Cuba.",
  },
  {
    opinion: " Con fabricaciones de probada calidad y durabilidad",
  },
  {
    opinion: " Permitimos al país sustitución de importaciones",
  },
  {
    opinion: " Disponemos de tecnologías modernizadas",
  },
  {
    opinion:
      " Con alta capacidad de producción: Más de dos mil al año, entre producciones complejas y sencillas",
  },
  {
    opinion: " En nuestro colectivo: Innovación, Experiencia y Compromiso",
  },
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
  camaraComercio,
  registroComercial,
  propiedadIndustrial,
  FaTelegram,
  FaFacebook,
  FaSquareXTwitter,
  CiMail,
  MdOutlineLocalPhone,
  MdOutlineClose,
  TfiMenu,
};
