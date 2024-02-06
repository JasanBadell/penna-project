/* eslint-disable react/jsx-key */
import React from "react";
import { bannerContent, sections } from "../../assets/dummy";
import Banner from "../Banner";
import Clients from "../Clients";

const Services = () => {
  return (
    <>
      <Banner content={bannerContent[1]} />
      <div className="lg:mx-60 mx-4 lg:my-10 gap-4 flex flex-col lg:grid lg:grid-cols-2">
        <div className="grid gap-4 ">
          <p className="mt-4">
            Los clientes pueden beneficiarse de un catálogo de prestaciones que
            incluyen procesos tecnológicos y mecánicos de mantenimiento,
            reparación, corte, soldadura, conformado, pailería y pintura,
            aplicaciones sobre chasis, sustitución de accesorios e instalaciones
            eléctricas.
          </p>
          <p className="font-extrabold lg:-my-8">Ofrecemos:</p>
          <p className="lg:-mt-10">
            - Producción y comercialización de autotrenes compuestos por
            remolques o semirremolques, camionetas o camiones con carrocerías
            utilitarias, así como recambios, partes, piezas y accesorios.
          </p>
        </div>
        <div>
          <p className="lg:my-4">
            - Fabricación de engranes y piezas de repuesto mecanizadas para uso
            automotor e industrial.
          </p>
          <p className="my-4">
            - Diseño, mantenimiento y reparación de estructuras metálicas.{" "}
          </p>
          <p className="my-4">
            - Tratamiento térmico, corte y conformado de metales, granallado de
            superficies metálicas.
          </p>
          <p className="my-4">
            - Montaje, instalación, puesta en marcha, mantenimiento y reparación
            de las producciones.
          </p>
          <p className="my-4">
            - Ensamble y soldadura manual o mediante automatización mecánica.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-around align-middle mt-20 lg:mt-0">
        {sections.map(({ id, title, img, logo, clasN }) => (
          <div className={clasN} accessKey={id}>
            <img
              src={img}
              alt="img"
              className="lg:w-1/2 w-screen -mt-12 m-0 lg:mt-0"
            />
            <div className="lg:mt-20 mx-8 lg:mx-20 z-10 mb-20">
              <div className="flex flex-row items-center justify-around mb-20 lg:mb-0">
                <h3 className="text-defaultBlue font-extrabold text-2xl lg:text-5xl">
                  {title}
                </h3>
                <img
                  src={logo}
                  alt={title}
                  width={100}
                  className="w-1/4 lg:w-1/4 m-4 lg:m-10"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="-mt-12">
          <Clients />
        </div>
      </div>
    </>
  );
};

export default Services;
