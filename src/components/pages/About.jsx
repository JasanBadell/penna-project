/* eslint-disable react/jsx-key */
import React from "react";
import News from "../News";
import Clients from "../Clients";
import { aboutColumn1, aboutColumn2, services1 } from "../../assets/dummy";
import Banner from "../Banner";

const About = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col ml-0 lg:ml-20">
        <div className="lg:absolute lg:bg-transparent bg-vector-1 lg:mt-64 mt-10 w-screen lg:w-1/3 lg:mx-4 ml-0 z-20">
          <p className="text-2xl lg:text-xl mx-8 lg:ml-20 text-defaultBlue mt-16 lg:mt-10">
            Conoce a Peña
          </p>
          <h3 className="text-4xl text-defaultBlue mx-8 lg:ml-20 font-extrabold lg:w-1/2 ">
            POLO PRODUCTIVO INDUSTRIAL
          </h3>
          <p className="text-sm ml-8 lg:ml-20 lg:text-lg w-4/6 lg:w-1/2 mb-12">
            Nuestro equipo de trabajo lo conforman tres unidades empresariales y
            una mipyme
          </p>
        </div>
        <div className=" pt-0 lg:pt-36">
          <Banner />
        </div>
        <div className="flex  flex-col place-items-start lg:ml-96 mt-10 lg:-mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight mx-8 lg:mx-20 text-defaultBlue leading-snug uppercase">
            Líderes en la fabricación de
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug mx-8 lg:ml-20 uppercase">
            remolques y semirremolques en Cuba
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-around align-middle">
        <div className="mt-4 mx-4 lg:ml-20">
          <div className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-6">
            <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
              {aboutColumn1.map(
                ({ id, title, conten, conten2, conten3, conten4 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold my-4">{title}</h4>
                    <p className="my-4">{conten}</p>
                    <p className="my-4">{conten2}</p>
                    <p className="my-4">{conten3}</p>
                    <p className="my-4">{conten4}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
              {aboutColumn2.map(
                ({ id, title, conten, conten2, conten3, conten4, conten5 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold my-4">{title}</h4>
                    <p className="my-4">{conten}</p>
                    <p className="my-4">{conten2}</p>
                    <p className="my-4">{conten3}</p>
                    <p className="my-4">{conten4}</p>
                    <p className="my-4">{conten5}</p>
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
