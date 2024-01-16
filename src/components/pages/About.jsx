/* eslint-disable react/jsx-key */
import React from "react";
import News from "../News";
import Clients from "../Clients";
import { aboutColumn1, aboutColumn2, services1 } from "../../assets/dummy";
import Banner from "../Banner";

const About = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col ml-20">
        <div className="absolute lg:mt-72 lg:ml-16 z-20">
          <p className="text-xl text-defaultBlue">Conoce a Peña</p>
          <h3 className="text-5xl text-defaultBlue font-extrabold w-1/3 mb-4">
            POLO PRODUCTIVO INDUSTRIAL
          </h3>
          <p className="text-lg lg:w-1/3">
            Nuestro equipo de trabajo lo conforman tres unidades empresariales y
            una mipyme
          </p>
        </div>
        <div className="lg:pt-36">
          <Banner />
        </div>
        <div className="flex  flex-row lg:flex-col place-items-center lg:ml-20 -mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug uppercase">
            Líderes en la fabricación de
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug ml-20 uppercase">
            remolques y semirremolques en Cuba
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-around align-middle">
        <div className="mt-20 mx-4 lg:ml-20">
          <h2 className="font-bold text-2xl lg:mr-60 lg:ml-40">
            Líderes en la fabricación de remolques y semirremolques en Cuba
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-6">
            <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
              {aboutColumn1.map(
                ({ id, title, conten, conten2, conten3, conten4 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold my-4">{title}</h4>
                    <p className="my-2">{conten}</p>
                    <p className="my-2">{conten2}</p>
                    <p className="my-2">{conten3}</p>
                    <p className="my-2">{conten4}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
              {aboutColumn2.map(
                ({ id, title, conten, conten2, conten3, conten4, conten5 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold my-4">{title}</h4>
                    <p className="my-2">{conten}</p>
                    <p className="my-2">{conten2}</p>
                    <p className="my-2">{conten3}</p>
                    <p className="my-2">{conten4}</p>
                    <p className="my-2">{conten5}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:w-full lg:flex md:flex-row-reverse items-center bg-defaultBlue -mb-8">
            <img src={services1} alt="img" className="lg:w-1/2" />
            <div className="mt-10 mx-4 lg:mx-20 ">
              <div className="flex md:flex-col items-left justify-around gap-4">
                <p className="text-2xl text-white">VANGUARDIA</p>
                <h3 className="text-white font-extrabold text-5xl">
                  PRESENTES EN LA ESCENA NACIONAL
                </h3>
                <p className="text-2xl text-white">
                  En el año alcanzamos un surtido de más de 45 tipos de equipos,
                  entre sencillos y complejos. Hemos cubierto el 83% de la
                  demanda nacional en remolques, semirremolques y aplicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <News />
        <Clients />
      </div>
    </>
  );
};

export default About;
