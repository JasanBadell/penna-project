/* eslint-disable react/prop-types */
import React from "react";
import { vector, imgCarrusel_1, bannerContent } from "../assets/dummy";

const Banner = ({ content }) => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col lg:ml-20">
        <div className="lg:absolute lg:bg-transparent bg-vector-1 lg:mt-60 mt-10 w-screen lg:w-1/3 lg:mx-4 ml-0 z-20">
          <p className="text-2xl lg:text-xl mx-8 lg:ml-16 text-defaultBlue mt-16 lg:mt-10">
            {content.title}
          </p>
          <h3 className="text-4xl text-defaultBlue mx-8 lg:ml-16 font-extrabold lg:w-1/2 uppercase">
            {content.slogan}
          </h3>
          <p className="text-sm ml-8 lg:ml-16 lg:text-lg w-4/6 lg:w-1/2 mb-12">
            {content.frase}
          </p>
        </div>
        <div className=" pt-0 lg:pt-36">
          <div className="flex flex-col lg:flex-row">
            <div className="w-0 lg:w-1/3  z-10">
              <img
                src={vector}
                alt="imagen"
                className="lg:mt-16 lg:w-full w-0"
              />
            </div>
            <div className="w-full lg:w-2/3 -mt-12 lg:-ml-10">
              <img src={imgCarrusel_1} alt="Imagen de Soldador" />
            </div>
          </div>
        </div>
        <div className="flex  flex-col lg:px-8 place-items-start lg:ml-96 mt-10 lg:-mt-16 mb-8 lg:mb-4">
          <p className="text-md lg:text-3xl font-extralight mx-8 lg:mx-20 text-defaultBlue leading-snug uppercase">
            {content.text}
          </p>
          <h3 className="text-2xl lg:text-5xl font-extrabold text-defaultBlue leading-snug mx-8 lg:ml-20 uppercase">
            {content.text1}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
