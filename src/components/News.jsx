import React from "react";
import home from "../assets/newsLetter1.png";
import home1 from "../assets/newsLetter.png";
import Button from "./Button";

const News = () => {
  return (
    <>
      <div className="my-12 flex flex-col ">
        <div className=" flex flex-row justify-between m-8 mx-20">
          <div>
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              NO PIERDAS LA PISTA
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              NOVEDADES
            </h3>
          </div>
          <Button />
        </div>
        <div className="grid grid-cols-2 gap-5 w-100 mb-4 mx-20">
          <div className=" mt-20 flex md:flex-row text-xxl text-black first:font-medium items-center">
            <div className="m-4 rounded-sm w-1/3">
              <img src={home} alt="img" />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-xl">Una novedad</h3>
              <p>Subtitulo</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio pariatur aliquam, laborum nostrum placeat
                consequatur.
              </p>
            </div>
          </div>
          <div className=" mt-20 flex md:flex-row text-xxl text-black first:font-medium items-center">
            <div className="m-4 rounded-sm w-1/3">
              <img src={home1} alt="img" />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-xl">Una novedad</h3>
              <p>Subtitulo</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio pariatur aliquam, laborum nostrum placeat
                consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
