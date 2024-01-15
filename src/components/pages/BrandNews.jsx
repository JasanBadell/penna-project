/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import Clients from "../Clients";
import { brandNews, brands, brandimg, brandimg1 } from "../../assets/dummy";

const BrandNews = () => {
  return (
    <>
      <div className="overflow-hidden bg-white mt-52 ml-20 ">
        <div className="text-4xl text-defaultBlue text-left">
          <p className="text-xl md:text-2xl font-extralight leading-snug">
            LA MEJOR FORMA DE ESTAR,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold lg:w-full leading-snug">
            NOTICIAS
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2 -mb-32">
          {brandNews.map(({ port_img, title, autor, fountain, path }) => (
            <div className="w-1/2 m-4">
              <img src={port_img} alt="" className="w-screen" />
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-sm">Autor: {autor}</p>
              <p className="text-sm">Fuente: {fountain}</p>
              <button className="my-4 border border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
                <Link
                  to={path}
                  target="_blank"
                  className="text-xl items-center m-2 space-y-68"
                >
                  Ver noticia
                </Link>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse items-end">
          <img src={brands} alt="img" className="w-1/4" />
        </div>
      </div>
      <div className="bg-defaultBlue flex flex-row items-center">
        <img src={brandimg} alt="img" className="w-1/2" />
        <div className="text-white w-2/6">
          <p className="text-xl md:text-2xl font-extralight leading-snug mb-2">
            VANGUARDIA
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold md:w-full leading-snug mb-4">
            PRESENTES EN LA ESCENA NACIONAL
          </h3>
          <p className="md:text-2xl">
            En el año alcanzamos un surtido de más de 45 tipos de equipos, entre
            sencillos y complejos. Hemos cubierto el 83% de la demanda nacional
            en remolques, semirremolques y aplicaciones.
          </p>
        </div>
      </div>
      <div className="text-defaultBlue mt-10 flex flex-col ml-96 w-1/2 absolute">
        <p className="text-xl md:text-2xl font-extralight leading-snug items-end lg:ml-72">
          CONÓCENOS,
        </p>
        <h3 className="text-3xl md:text-5xl font-extrabold leading-snug lg:ml-72">
          VISITA NUESTRAS INSTALACIONES
        </h3>
      </div>
      <img src={brandimg1} alt="img" className="-mt-36" />
      <Clients />
    </>
  );
};

export default BrandNews;
