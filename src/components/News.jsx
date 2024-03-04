/* eslint-disable react/jsx-key */
import React from "react";
import Button from "./Button";
import { brandNews } from "../assets/dummy";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div className="my-12 flex flex-col ">
        <div className=" flex flex-col lg:flex-row justify-between mx-8 lg:mx-20">
          <div>
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              NO PIERDAS LA PISTA
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              NOVEDADES
            </h3>
          </div>
          <Button to="/brandnews" />
        </div>
        <div className="mx-4 mb-4 lg:mx-20">
          <div className=" mt-4 lg:mt-20 flex flex-col lg:grid lg:grid-cols-4 lg:gap-2 text-xxl first:font-medium items-start lg:items-start justify-evenly">
            {brandNews
              .slice(0, 4)
              .map(({ port_img, title, autor, fountain, path }) => (
                <div className="m-4" key={title}>
                  <img src={port_img} alt={`Imagen para ${title}`} />
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="text-sm">Autor: {autor}</p>
                  <p className="text-sm">Fuente: {fountain}</p>
                  <button className="my-4 border border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
                    <Link
                      to={path}
                      target="_blank"
                      className="text-xl items-center m-2"
                    >
                      Ver noticia
                    </Link>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
