/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brandNews, brands, brandimg, brandimg1 } from "../../assets/dummy";
import Button from "../Button";
import InstalsModal from "../InstalsModal";

const BrandNews = () => {
  const [showCertifications, setShowCertifications] = useState(false);

  const handleShowCertifications = () => {
    setShowCertifications(true);
  };

  const handleCloseCertifications = () => {
    setShowCertifications(false);
  };

  return (
    <>
      <div className="overflow-hidden bg-white mt-32 lg:mt-52 ml-0 lg:ml-20 ">
        <div className="flex  flex-col place-items-start ml-0 mb-8">
          <p className="text-1xl lg:text-3xl font-extralight mx-8 lg:mx-0 text-defaultBlue leading-snug uppercase">
            LA MEJOR FORMA DE ESTAR,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug lg:mx-0 mx-8 uppercase">
            NOTICIAS
          </h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 ml-4 mr-8 lg:mx-8 lg:-mb-32">
          {brandNews.map(({ port_img, title, autor, fountain, path }) => (
            <div className="w-full lg:w-1/2 m-4">
              <img src={port_img} alt={title} />
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-sm">Autor: {autor}</p>
              <p className="text-sm">Fuente: {fountain}</p>
              <button className="my-4 border border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
                <Link
                  to={path}
                  target="_blank"
                  className="text-sm items-center m-2 space-y-68"
                >
                  Ver noticia
                </Link>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse items-start lg:items-end">
          <img src={brands} alt="img" className="lg:w-1/4 w-0" />
        </div>
      </div>
      <div className="bg-defaultBlue flex flex-col lg:flex-row-reverse items-center">
        <div className="text-white w-screen lg:w-3/6 my-8">
          <p className="text-xl md:text-2xl font-extralight mx-8 leading-snug mb-2">
            VANGUARDIA
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold lg:w-5/6 mx-8 leading-snug mb-4">
            PRESENTES EN LA ESCENA NACIONAL
          </h3>
          <p className="md:text-2xl mx-8">
            En el año alcanzamos un surtido de más de 45 tipos de equipos, entre
            sencillos y complejos. Hemos cubierto el 83% de la demanda nacional
            en remolques, semirremolques y aplicaciones.
          </p>
        </div>
        <img
          src={brandimg}
          alt="Imagen de remolque rojo"
          className="w-full lg:w-1/2"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="text-defaultBlue mt-10 flex flex-col items-start mx-8 lg:mx-20">
          <p className="text-xl md:text-2xl font-extralight leading-snug ">
            CONÓCENOS,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-snug">
            VISITA NUESTRAS INSTALACIONES
          </h3>
          <div onClick={handleShowCertifications}>
            <Button />
          </div>
          <InstalsModal
            isVisible={showCertifications}
            onClose={handleCloseCertifications}
          />
        </div>
        <div></div>
        <img
          src={brandimg1}
          alt="Imagen de un ranchon"
          className="w-full lg:w-1/2"
        />
      </div>
    </>
  );
};

export default BrandNews;
