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
        <div className="absolute lg:mt-96 lg:ml-16 z-20">
          <p className="text-xl text-defaultBlue">Sobre Nosotros</p>
          <h3 className="text-5xl text-defaultBlue font-extrabold w-1/2 mb-4">
            XX AÑOS DE EXPERIENCIA
          </h3>
          <p className="text-lg w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Banner />
        <div className="flex flex-col place-items-center ml-20 -mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            MÁS QUE UN COLECTIVO,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug ml-20">
            UNA GRAN FAMILIA
          </h3>
        </div>
      </div>
      <div className="flex md:flex-col justify-around align-middle">
        <div className="mt-20 ml-20">
          <h2 className="font-bold text-2xl mr-60 ml-40">
            Líderes en la fabricación de remolques y semirremolques en Cuba.
          </h2>
          <div className="flex md:flex-row justify-between p-space mr-60 ml-40 mb-6">
            <div className="flex md:flex-col text-xxl p-space w-6/12">
              {aboutColumn1.map(
                ({ id, title, conten, conten2, conten3, conten4 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold">{title}</h4>
                    <p>{conten}</p>
                    <p>{conten2}</p>
                    <p>{conten3}</p>
                    <p>{conten4}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex md:flex-col text-xxl p-space w-6/12">
              {aboutColumn2.map(
                ({ id, title, conten, conten2, conten3, conten4, conten5 }) => (
                  <div accessKey={id}>
                    <h4 className="font-bold">{title}</h4>
                    <p>{conten}</p>
                    <p>{conten2}</p>
                    <p>{conten3}</p>
                    <p>{conten4}</p>
                    <p>{conten5}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row-reverse items-center bg-defaultBlue -mt-32 -mb-8">
            <img src={services1} alt="img" className="w-1/2" />
            <div className="mt-10 mx-20 ">
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
