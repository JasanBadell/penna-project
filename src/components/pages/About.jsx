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
        <div className="absolute lg:mt-80 lg:ml-16 z-20">
          <p className="text-xl text-defaultBlue">Sobre Nosotros</p>
          <h3 className="text-5xl text-defaultBlue font-extrabold w-1/2 mb-4">
            XX AÑOS DE EXPERIENCIA
          </h3>
          <p className="text-lg w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="pt-40">
          <Banner />
        </div>
        <div className="flex  flex-row lg:flex-col place-items-center lg:ml-20 -mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            MÁS QUE UN COLECTIVO,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug ml-20">
            UNA GRAN FAMILIA
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-around align-middle">
        <div className="mt-20 mx-4 lg:ml-20">
          <h2 className="font-bold text-2xl lg:mr-60 lg:ml-40">
            Líderes en la fabricación de remolques y semirremolques en Cuba.
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
                  XX AÑOS PRESENTES EN LA ESCENA NACIONAL
                </h3>
                <p className="text-2xl text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
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
