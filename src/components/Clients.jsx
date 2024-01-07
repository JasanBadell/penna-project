import React from "react";
import ecasa from "../assets/ecasa.jpg";
import azcuba from "../assets/azcuba.jpg";
import minag from "../assets/minag.jpg";
import sc from "../assets/sc.jpg";
import client from "../assets/ClientSection.png";
import navbar from "../assets/Client_Tag.png";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center bg-defaultBlue">
        <div className="flex flex-row mt-8 items-center ">
          <div className="mt-4 mx-20">
            <p className="text-xl md:text-xl font-semibold text-white leading-snug">
              Nuevas oportunidades
            </p>
            <h3 className="text-6xl md:text-5xl font-extrabold text-white md:w-full leading-snug">
              CONOCE A NUESTROS SOCIOS
            </h3>
            <p className="text-2xl text-white w-full mr-4 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img src={client} alt="img" className="w-2/4 mr-12" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 ">
        <div className=" flex flex-row justify-between ml-20">
          <div className="mt-12">
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              DENTRO Y FUERA DE FRONTERA
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              CLIENTES
            </h3>
          </div>
          <img src={navbar} alt="" className="w-1/12" />
        </div>
        <div className="mt-1 mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-40 lg:max-w-none lg:grid-cols-4 mb-10">
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 logo"
              src={minag}
              alt="logo del Ministerio de la agricultura"
            />
            <h4 className="font-bold">Minag</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 logo"
              src={ecasa}
              alt="Logo de la empresa cubana de aereopuertos y servicios aereoportuarios"
            />
            <h4 className="font-bold ">Ecasa</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 logo"
              src={sc}
              alt="Logo de servicios comunales"
            />
            <h4 className="font-bold">SC</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 logo"
              src={azcuba}
              alt="Logo de la organizacion superior de direccion para la agroindustria azucarera"
            />
            <h4 className="font-bold">Azcuba</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
