/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
import React from "react";
import { sections } from "../../assets/dummy";
import Clients from "../Clients";
import Banner from "../Banner";
import "../../App.css";

const Services = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col lg:ml-20">
        <div className="lg:absolute lg:bg-transparent bg-vector-1 lg:mt-64 mt-10 w-screen lg:w-1/3 lg:mx-4 ml-0 z-20">
          <p className="text-2xl lg:text-xl mx-8 lg:ml-20 text-defaultBlue mt-16 lg:mt-10">
            Servicios
          </p>
          <h3 className="text-4xl text-defaultBlue mx-8 lg:ml-20 font-extrabold lg:w-1/2 ">
            POLO PRODUCTIVO INDUSTRIAL
          </h3>
          <p className="text-sm ml-8 lg:ml-20 lg:text-lg w-1/2 lg:w-1/2 mb-12">
            Nuestro equipo de trabajo lo conforman tres unidades empresariales y
            una mipyme
          </p>
        </div>
        <div className="pt-0 lg:pt-36">
          <Banner />
        </div>
        <div className="flex  flex-col lg:place-items-center place-items-start lg:ml-20 mt-10 lg:-mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight mx-8 lg:mx-0 text-defaultBlue leading-snug uppercase">
            OPORTUNIDADES
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug mx-8 lg:ml-20 uppercase">
            NUESTROS SERVICIOS
          </h3>
        </div>
      </div>
      <div className="lg:mx-60 mx-4 lg:my-10 gap-4 flex flex-col lg:grid lg:grid-cols-2">
        <div className="grid gap-4 ">
          <p className="my-4">
            Nuestros clientes pueden beneficiarse de un catálogo de prestaciones
            que incluyen procesos tecnológicos y mecánicos de mantenimiento,
            reparación, corte, soldadura, conformado, pailería y pintura,
            aplicaciones sobre chasis, sustitución de accesorios e instalaciones
            eléctricas.
          </p>
          <p>
            <strong>Ofrecemos</strong>:
          </p>
          <p className="my-4">
            - Producción y comercialización de autotrenes compuestos por
            remolques o semirremolques, camionetas o camiones con carrocerías
            utilitarias, así como recambios, partes, piezas y accesorios.
          </p>
        </div>
        <div>
          <p className="my-4">
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
                  alt=""
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
