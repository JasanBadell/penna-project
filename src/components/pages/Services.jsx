/* eslint-disable react/jsx-key */
import React from "react";
import { sections } from "../../assets/dummy";
import Clients from "../Clients";
import Banner from "../Banner";
import "../../App.css";

const Services = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col ml-20">
        <div className="absolute lg:mt-72 lg:ml-16 z-20">
          <p className="text-xl text-defaultBlue">Servicios</p>
          <h3 className="text-5xl text-defaultBlue font-extrabold w-1/4 mb-4">
            POLO PRODUCTIVO INDUSTRIAL
          </h3>
          <p className="text-lg w-1/3">
            Nuestro equipo de trabajo lo conforman tres unidades empresariales y
            una mipyme
          </p>
        </div>
        <div className="pt-36">
          <Banner />
        </div>
        <div className="flex flex-col place-items-center ml-20 -mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            OPORTUNIDADES
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug ml-40">
            NUESTROS SERVICIOS
          </h3>
        </div>
      </div>
      <div className="lg:mx-60 mx-4 lg:my-10 gap-4 flex flex-col lg:grid lg:grid-cols-2">
        <div className="grid gap-4 ">
          <p>
            Nuestros clientes pueden beneficiarse de un catálogo de prestaciones
            que incluyen procesos tecnológicos y mecánicos de mantenimiento,
            reparación, corte, soldadura, conformado, pailería y pintura,
            aplicaciones sobre chasis, sustitución de accesorios e instalaciones
            eléctricas.
          </p>
          <p>
            <strong>Ofrecemos</strong>:
          </p>
          <p>
            - Producción y comercialización de autotrenes compuestos por
            remolques o semirremolques, camionetas o camiones con carrocerías
            utilitarias, así como recambios, partes, piezas y accesorios.
          </p>
        </div>
        <div>
          <p>
            - Fabricación de engranes y piezas de repuesto mecanizadas para uso
            automotor e industrial.
          </p>
          <p>- Diseño, mantenimiento y reparación de estructuras metálicas. </p>
          <p>
            - Tratamiento térmico, corte y conformado de metales, granallado de
            superficies metálicas.
          </p>
          <p>
            - Montaje, instalación, puesta en marcha, mantenimiento y reparación
            de las producciones.
          </p>
          <p>
            - Ensamble y soldadura manual o mediante automatización mecánica.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-around align-middle">
        {sections.map(({ id, title, img, logo, clasN }) => (
          <div className={clasN} accessKey={id}>
            <img src={img} alt="img" className="lg:w-1/2 w-2/5" />
            <div className="mt-20 lg:mx-20 z-10">
              <div className="flex flex-row items-center justify-around">
                <h3 className="text-defaultBlue font-extrabold text-2xl lg:text-5xl">
                  {title}
                </h3>
                <img src={logo} alt="" width={100} className="m-10" />
              </div>
            </div>
          </div>
        ))}
        <Clients />
      </div>
    </>
  );
};

export default Services;
