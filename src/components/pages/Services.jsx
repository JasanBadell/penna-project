/* eslint-disable react/jsx-key */
import React from "react";
import { sections } from "../../assets/dummy";
import Clients from "../Clients";
import Banner from "../Banner";
import Button from "../Button";
import "../../App.css";

const Services = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col ml-20">
        <div className="absolute lg:mt-80 lg:ml-16 z-20">
          <p className="text-xl text-defaultBlue">Servicios</p>
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
        <div className="flex flex-col place-items-center ml-20 -mt-8 mb-8">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            OPORTUNIDADES,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug ml-40">
            NUESTROS SERVICIOS
          </h3>
        </div>
      </div>
      <div className="flex md:flex-col justify-around align-middle">
        {sections.map(({ id, title, img, conten, logo, clasN }) => (
          <div className={clasN} accessKey={id}>
            <img src={img} alt="img" className="w-1/2" />
            <div className="mt-20 mx-20 z-10">
              <div className="flex flex-row items-center justify-around">
                <h3 className="text-defaultBlue font-extrabold text-5xl">
                  {title}
                </h3>
                <img src={logo} alt="" width={100} className="m-10" />
              </div>
              <p className="text-2xl ">{conten}</p>
              <Button />
            </div>
          </div>
        ))}
        <Clients />
      </div>
    </>
  );
};

export default Services;
