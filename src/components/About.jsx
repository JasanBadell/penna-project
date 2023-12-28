import React from "react";
import about from "../assets/About.png";
import about2 from "../assets/about2.png";

const About = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col">
        <img src={about} alt="imagen" className="mt-48" />
        <div className="mt-20 ml-20">
          <h2 className="font-bold text-2xl mr-60 ml-40">
            Líderes en la fabricación de remolques y semirremolques en Cuba.
          </h2>
          <div className="flex md:flex-row justify-between text-xs p-space mr-60 ml-40 mb-6">
            <div className="flex md:flex-col text-xs p-space w-6/12">
              <div>
                <h4 className="font-bold">¿Quiénes somos?</h4>
                <p>
                  Durante más de una década, Peña Empresa Industrial ha
                  garantizado la producción de equipos e implementos de
                  transporte, el diseño y la recuperación de partes y piezas de
                  repuesto destinados a la zafra azucarera, la agricultura, la
                  construcción y la higiene comunal.
                </p>
                <p>
                  La fabricación de una gama especializada de autotrenes,
                  compuestos por remolques y semirremolques de distintas
                  capacidades, constituye nuestra línea fundamental de
                  producción.
                </p>
                <p>
                  Peña Empresa Industrial está conformada por tres unidades
                  empresariales de base y una mipyme estatal. Se distingue por
                  un equipo de trabajo innovador, eficiente, con alto nivel de
                  experiencia y comprometido, que apuesta por la calidad y
                  sostenibilidad de sus producciones, hoy presentes en toda la
                  geografía del país.
                </p>
              </div>
              <div>
                <h4 className="font-bold">¿Cómo surge?</h4>
                <p>
                  Tras la fusión de la Empresa Constructora de Equipos Mecánicos
                  (CEM) y la Empresa Industrial Guanabo en el 2012, emerge este
                  actor económico en el mercado nacional bajo el nombre Ramón
                  Peña.
                </p>
                <p>
                  Más adelante, en el 2018, se suma a este grupo de aliados la
                  Unidad Empresarial Básica Industria Mecánica Caribe (IMECA)
                  con lo que se amplía y consolida la actividad metalúrgica y
                  metalmecánica de esta rama industrial.{" "}
                </p>
                <p>
                  Peña Empresa Industrial está integrada al Grupo Empresarial de
                  la Industria Sidero Mecánica (GESIME), representado por el
                  Ministerio de Industrias.{" "}
                </p>
                <p>
                  En la actualidad, también la conforma la mipyme estatal
                  SOLDARAP, el primer actor económico de esta forma de gestión y
                  desarrollo empresarial constituido en GESIME.
                </p>
              </div>
            </div>
            <div className="flex md:flex-col text-xs p-space w-6/12">
              <div>
                <h4 className="font-bold">¿Por qué Ramón Peña?</h4>
                <p>
                  El nombre de la empresa es elegido como homenaje a uno de los
                  combatientes y mártires de Playa Girón. Se trata del joven
                  Ramón Peña Díaz, oriundo de España y quien se unió a las
                  milicias cubanas para luchar por la causa nacional.
                </p>
                <p>
                  Con este representativo se han hecho todas las variaciones
                  institucionales. Primero se identificó como Empresa Ramón
                  Peña, luego, Empresa Constructora de Equipos Mecánicos Ramón
                  Peña y más adelante, Empresa Industrial Ramón Peña.{" "}
                </p>
                <p>En la actualidad su nombre es Peña Empresa Industrial.</p>
              </div>
              <div>
                <h4 className="font-bold">¿Nuestro propósito?</h4>
                <p>
                  Mantener el liderazgo en la producción de arrastres con máxima
                  calidad y resistencia, así como satisfacer las demandas y
                  necesidades del mercado, a tono con las perspectivas del país.
                </p>
              </div>
              <div>
                <h4 className="font-bold">¿Qué nos prestigia?</h4>
                <p>• Fabricaciones de probada calidad y durabilidad.</p>
                <p>• Permite a Cuba la sustitución de importaciones.</p>
                <p>• Tecnologías modernizadas.</p>
                <p>• Alta capacidad de producción.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={about2} alt="about" className="m-0" />
      </div>
    </>
  );
};

export default About;
