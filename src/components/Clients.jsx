/* eslint-disable react/jsx-key */
import React from "react";
import { client, navbar, clients } from "../assets/dummy";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center bg-defaultBlue">
        <div className="flex flex-row mt-8 items-center ">
          <div className="mt-4 mx-4 lg:mx-20 ">
            <p className="text-xl md:text-xl font-semibold text-white leading-snug">
              Oportunidades
            </p>
            <h3 className="text-3xl lg:text-5xl font-extrabold text-white md:w-full leading-snug">
              EN EL ESCENARIO DE NEGOCIOS
            </h3>
            <p className="text-2xl text-white w-full mr-4 my-8">
              Suplir las necesidades de nuestros clientes con una visión responsable y eficiente nos mantiene en la mira y a la vanguardia en el panorama nacional.
            </p>
          </div>
          <img src={clients} alt="img" className="lg:w-2/4 lg:mr-12 w-0" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className=" flex flex-row justify-between lg:ml-20">
          <div className="mt-12 mx-4">
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue leading-snug">
             A LO LARGO Y ANCHO DEL PAÍS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              CLIENTES
            </h3>
          </div>
          <img src={navbar} alt="" className="w-1/3 lg:w-1/12" />
        </div>
        <div className="mt-1 mx-auto grid max-w-lg grid-cols-1 sm:grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-40 lg:max-w-none lg:grid-cols-5 mb-10">
          {client.map(({ id, logo, title, description }) => (
            <div className="text-center" accessKey={id}>
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 logo"
                src={logo}
                alt="img"
              />
              <h4 className="font-bold my-2">{title}</h4>
              <p className="text-sm ">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
