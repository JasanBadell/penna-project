// Import IMG

import productions from "./Productions_IMG.png";
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
import brands from "./Brand_news_asset.png";
import brandimg from "./brandnews_1.png";
import brandimg1 from "./brandnews_2.png";
import navbar from "./Client_Tag.png";
import clients from "./ClientSection.png";
import ecasa from "./Logos_Penna-Project/ecasa.png";
import azcuba from "./Logos_Penna-Project/azcuba.jpg";
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
import imgCarrusel_1 from "./Carrusel/img_1.jpg";
import imgCarrusel_2 from "./Carrusel/img_2.jpg";
import imgCarrusel_3 from "./Carrusel/img_3.jpg";
import imgCarrusel_4 from "./Carrusel/img_4.jpg";
import imgCarrusel_5 from "./Carrusel/img_5.jpg";
import imgCarrusel_6 from "./Carrusel/img_6.jpg";
import rc from "./Productos/Remolque_Cannero.jpg";
import cg from "./Productos/Carga_General.jpg";
import ds from "./Productos/Desechos_Solidos.jpg";
import c from "./Productos/Cisterna.jpg";
import pa from "./Productos/Remolque_1.jpg";
import cp from "./Productos/Carretilla.jpg";
import sr from "./Productos/Semi_Remolque.jpg";
import ra from "./Productos/Remolque_Autobasculante.jpg";
import sp from "./Productos/producto_img_13.jpg";
import rg from "./Productos/Remolque_Ganadero.jpg";
import e from "./Productos/Escalotina.jpg";
import hh from "./Productos/Hormigonera_Hidraulica.jpg";
import pn from "./Productos/producto_img_9.jpg";
import cc from "./Productos/Caja_Camion.jpg";
import cA from "./Productos/Caja_Ampirroll.jpg";
import rb from "./Productos/Remolque_Basculante.jpg";
import cCS from "./Productos/Remolque.jpg";
import eQC from "./Productos/Equipo_Construccion_2.jpg";
import jcg from "./Productos/producto_img_21.jpg";
import hp from "./Productos/Remolque_Olimpico.jpg";
import cb from "./Productos/producto_img_11.jpg";
import pcf from "./Productos/Pala_Tractor.jpg";
import imbf from "./Productos/Equipo_Construccion_1.jpg";
import mfrr from "./Productos/Estructura_Remolque.jpg";
import men from "./Productos/producto_img_21.jpg";
import m from "./Productos/Contenedor_Basura.jpg";
import z from "./Productos/Caja_Remolque.jpg";
import news1 from "./BrandNews/img_01.jpg";
import news2 from "./BrandNews/img_02.jpg";
import news3 from "./BrandNews/img_03.jpg";
import news4 from "./BrandNews/img_04.jpg";
import news5 from "./BrandNews/img_05.jpg";
import news6 from "./BrandNews/img_06.jpg";
import news7 from "./BrandNews/img_07.jpg";
import news8 from "./BrandNews/img_08.jpg";

// Import Const
export const products = [
  {
    id: "1",
    img: `${rc}`,
    title: "Transporte de caña",
    category: "REMOLQUES",
    subCategory: "Fijo, Bascular",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "2",
    img: `${cg}`,
    title: "Transporte de carga general",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "3",
    img: `${ds}`,
    title: "Transporte de desechos sólidos",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "4",
    img: `${c}`,
    title: "Cisterna para transportes líquidos",
    category: "REMOLQUES",
    subCategory: "Fijo",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "5",
    img: `${pa}`,
    title: "Transporte de productos agrícolas",
    category: "REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "6",
    img: `${ds}`,
    title: "Semicompactador para desechos sólidos",
    category: "REMOLQUES",
    subCategory: "Basculante",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "7",
    img: `${cp}`,
    title: "Carretilla Portaequipaje",
    category: "REMOLQUES",
    subCategory: "",
    description: "ENTRE 2 Y 20 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "8",
    img: `${sr}`,
    title: "Transporte de carga general",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "9",
    img: `${ra}`,
    title: "Transporte de sólidos a granel",
    category: "SEMI-REMOLQUES",
    subCategory: "Fijo, Basculante",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "10",
    img: `${sp}`,
    title: "Transporte de sólidos pulverizados",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "11",
    img: `${c}`,
    title: "Cisternas para el transporte de líquidos",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "12",
    img: `${rg}`,
    title: "Transporte de ganado",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "13",
    img: `${e}`,
    title: "Transporte de vehículos automotores",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "14",
    img: `${hh}`,
    title: "Transporte de elementos pre-fabricados de hormigón",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "15",
    img: `${cc}`,
    title: "Transporte de personas hasta 60 pasajeros sentados",
    category: "SEMI-REMOLQUES",
    subCategory: "",
    description: "DE 2.5 Y 5.4 TONELADAS Y ENTRE 2500 Y 25000 LITROS",
  },
  {
    id: "16",
    img: `${cA}`,
    title: "Cajas AMPIROLL para desechos sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "17",
    img: `${cc}`,
    title: "Plataformas sobre camión para carga general",
    category: "CONTENEDORES",
    subCategory: "Con barandas, Sin barandas",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "18",
    img: `${rb}`,
    title: "Cajas con barandas",
    category: "CONTENEDORES",
    subCategory: "Fija, Basculante",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "19",
    img: `${c}`,
    title: "Cisternas para el transporte de líquidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "20",
    img: `${cCS}`,
    title: "Cajas cerradas para el transporte de semi-sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "21",
    img: `${eQC}`,
    title: "Cajas compactadoras para desechos sólidos",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "22",
    img: `${jcg}`,
    title: "Jaulas para cilindros de gases",
    category: "CONTENEDORES",
    subCategory: "",
    description: "HASTA 20 TONELADAS PARA APLICAR SOBRE VEHÍCULOS",
  },
  {
    id: "23",
    img: `${hp}`,
    title: "Hormigoneras portátiles",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "24",
    img: `${cb}`,
    title: "Carretillas barrenadoras",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "25",
    img: `${pcf}`,
    title: "Palas para cargadores frontales",
    category: "EQUIPOS PARA LA CONSTRUCCIÓN",
    subCategory: "",
    description: "",
  },
  {
    id: "26",
    img: `${imbf}`,
    title: "Instalaciones para molido de biofertilizantes",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "27",
    img: `${mfrr}`,
    title: "Máquinas forrajeras",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "28",
    img: `${men}`,
    title: "Máquinas ensiladoras",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "29",
    img: `${m}`,
    title: "Multiarados",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "30",
    img: `${z}`,
    title: "Máquinas surcadora-fertilizadora",
    category: "EQUIPOS AGRÍCOLAS",
    subCategory: "",
    description: "",
  },
  {
    id: "31",
    img: `${pn}`,
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
    conten3: "• Tecnologías modernas.",
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
    clasN: "flex flex-col lg:flex-row items-center",
  },
  {
    id: "2",
    title: "CORTE, CONFORMADO, SOLDADURA Y PINTURA",
    img: `${services2}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${painting}`,
    clasN: "flex flex-col lg:flex-row-reverse items-center bg-vector -mt-24",
  },
  {
    id: "3",
    title: "ASESORÍA Y SERVICIOS TÉCNICOS",
    img: `${services3}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${rocket}`,
    clasN: "flex flex-col lg:flex-row items-center",
  },
  {
    id: "4",
    title: "PROYECCIÓN Y DISEÑO",
    img: `${services4}`,
    conten: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    logo: `${pencil}`,
    clasN:
      "flex flex-col lg:flex-row-reverse items-center bg-vector-2 -mt-32 -mb-8",
  },
];

export const brandNews = [
  {
    title: "Eficiencia y calidad demostrada",
    port_img: news1,
    autor: "GESIME",
    fountain: "Cuba Plus Magazine",
    path: "https://www.cubaplusmagazine.com/es/negocios/empresa-industrial-ramon-pe%C3%B1a-eficiencia-calidad.html",
  },
  {
    title: "Incrementa cooperación con la industria cubana",
    port_img: news4,
    autor: "Ledys Camacho Casado",
    fountain: "Opciones",
    path: "https://www.opciones.cu/ferias-y-eventos/2016-06-23/incrementa-cooperacion-con-la-industria-cubana",
  },
  {
    title: "Avances en la sustitución de importación y la exportación",
    port_img: news3,
    autor: "Nayaren Rodríguez Socarrás",
    fountain: "Tribuna de La Habana",
    path: "https://www.tribuna.cu/capitalinas/2019-12-17/avances-en-la-sustitucion-de-importacion-y-la-exportacion",
  },
  {
    title: "Avalados por la experiencia",
    port_img: news2,
    autor: "GESIME",
    fountain: "Cuba Plus Magazine",
    path: "https://www.cubaplusmagazine.com/es/cuba-industria/empresa-industrial-ramon-pe%C3%B1a-eficiencia-experiencia.html",
  },
  {
    title: "¡Pensar en Grande!",
    port_img: news5,
    autor: "Redacción Nacional",
    fountain: "Periódico Trabajadores",
    path: "https://www.trabajadores.cu/20141005/pensar-en-grande-2/",
  },
  {
    title: "Industria sideromecánica cubana se moderniza",
    port_img: news6,
    autor: "Redacción ACN",
    fountain: "Periódico Adelante",
    path: "https://www.adelante.cu/index.php/es/noticias/noticias-de-cuba/25375-industria-sideromecanica-cubana-se-moderniza",
  },
  {
    title: "Tras los pasos de la industria cubana",
    port_img: news7,
    autor: "Alina",
    fountain: "Excelencias Cuba",
    path: "https://www.excelenciascuba.com/noticia/tras-los-pasos-de-la-industria-cubana",
  },
  {
    title: "IMECA sigue produciendo",
    port_img: news8,
    autor: "Myrla Pizarro de la Uz",
    fountain: "Diario El Artemiseño",
    path: "https://artemisadiario.cu/2020/01/imeca-sigue-produciendo/",
  },
  {
    brandnewId: "445",
    title: "Esta es una noticia de prueba",
    port_img: news1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam!",
    content1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam!",
    content2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam!",
    content3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum quam asperiores numquam porro doloremque vero, saepe hic, voluptatem dolorum quas atque vel aliquam id obcaecati modi impedit quisquam ipsam!",
    autor: "Julio Jasan Badell Argudin",
    fountain: "SALYAM",
    path: "/penna-project/brandnew/445",
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
  { id: "1", img: `${imgCarrusel_1}` },
  { id: "2", img: `${imgCarrusel_2}` },
  { id: "3", img: `${imgCarrusel_3}` },
  { id: "4", img: `${imgCarrusel_4}` },
  { id: "5", img: `${imgCarrusel_5}` },
  { id: "6", img: `${imgCarrusel_6}` },
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
  { link: "Acerca de nosotros", path: "/penna-project/about" },
  { link: "Servicios", path: "/penna-project/services" },
  { link: "Producciones", path: "/penna-project/products" },
  { link: "Noticias", path: "/penna-project/brandnews" },
];

export const clientopinion = [
  {
    empName: "MINAG",
    opinion:
      "Inmejorable alianza de trabajo. Aportar soluciones técnicas en la confección y reparación de piezas de repuesto en vehículos para el crecimiento agrícola es un mérito digno de reconocer.",
  },
  {
    empName: "ECASA",
    opinion:
      "Excelente servicio y atención al cliente. Incuestionable calidad, terminación y resistencia en los equipos del tipo remolques. Siempre Peña nos ofrece seguridad.",
  },
  {
    empName: "ZDEM",
    opinion:
      "La experiencia de este colectivo siempre se muestra en su quehacer cotidiano. El resultado de sus producciones varias responde, en buena medida, a las necesidades de sectores estratégicos en el país.",
  },
];

export const slogan = [
  {
    opinion: " Líderes en la fabricación de remolques y semirremolques en Cuba",
  },
  {
    opinion: " Con fabricaciones de probada calidad y durabilidad",
  },
  {
    opinion: " Permitimos al país sustitución de importaciones",
  },
  {
    opinion: " Disponemos de tecnologías modernas",
  },
  {
    opinion:
      " Con alta capacidad de producción: más de dos mil al año, entre producciones complejas y sencillas",
  },
  {
    opinion:
      " Nuestro colectivo distingue por su experiencia, compromiso y capacidad innovadora",
  },
];

export const empresa = [
  {
    id: "1",
    title: "Unidad Empresarial de Base Constructora de Equipos Mecánicos:",
    content:
      "Con más de seis décadas de experiencias posee un perfil de trabajo especializado en la producción de remolques, semirremolques, camas de volteo, camas plataformas, y otras producciones similares.",
  },
  {
    id: "2",
    title: "Unidad Empresarial de Base Industrial Guanabo:",
    content:
      "Fue creada en 1967 y está dirigida a la fabricación de equipos e implementos agrícolas, engranes, remolques y semirremolques, aplicaciones sobre camión y equipos de transporte de personal.",
  },
  {
    id: "3",
    title: "Unidad Empresarial de Base Industria Mecánica Caribe IMECA:",
    content:
      "Surgió en 1953 y se especializa en producciones de carretas cañeras, silo cosechadoras, hormigoneras portátiles y sobre camión, cargadores frontales y otros equipos para la cosecha, fertilización y fumigación en la agricultura.",
  },
  {
    id: "4",
    title: "MIPYME SOLDARAP:",
    content:
      "Es la primera micro, pequeña y mediana empresa estatal constituida en el Grupo Empresarial de la Industria Sideromecánica (GESIME). Brinda servicios de fabricación, reparación y modernización de equipos de soldar, tanto, máquinas automáticas, semiautomáticas como convencionales, de cualquier tipo, fabricante y modelo.",
  },
];

export {
  productions,
  services1,
  services2,
  services3,
  services4,
  vector,
  s_vector,
  s_vector1,
  brands,
  brandimg,
  brandimg1,
  clients,
  zdem,
  navbar,
  homevector,
  carruselimg,
  camaraComercio,
  registroComercial,
  propiedadIndustrial,
  imgCarrusel_1,
  FaTelegram,
  FaFacebook,
  FaSquareXTwitter,
  CiMail,
  MdOutlineLocalPhone,
  MdOutlineClose,
  TfiMenu,
};
