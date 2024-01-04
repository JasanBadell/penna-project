import React from "react";
import home from "../assets/home.jpg";

const News = () => {
  return (
    <>
      <div className="mt-12 flex flex-col ml-20 mr-20">
        <div className=" flex flex-row justify-between m-8">
          <div>
            <p className="text-3xl md:text-5xl font-extralight text-defaultBlue leading-snug">
              NO PIERDAS LA PISTA
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              NOVEDADES
            </h3>
          </div>
          <button className="border rounded-md m-4 border-defaultBlue text-defaultBlue shadow-md hover:text-white hover:bg-defaultBlue transition-all duration-300">
            <a href="/" className="m-4 text-2xl">
              Ver más →
            </a>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 w-100 mb-4">
          <div className=" mt-20 flex md:flex-row text-xxl text-black first:font-medium items-center">
            <div className="m-4 rounded-sm w-1/3">
              <img src={home} alt="img" className="rounded-lg" />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-xl">Una novedad</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio pariatur aliquam, laborum nostrum placeat
                consequatur. Eos molestiae, accusamus tempora autem aliquid
                enim! Necessitatibus officiis, maxime eos repellat iure fugit.
                Vitae.
              </p>
            </div>
          </div>
          <div className=" mt-20 flex md:flex-row text-xxl text-black first:font-medium items-center">
            <div className="m-4 rounded-sm w-1/3">
              <img src={home} alt="img" className="rounded-lg" />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-xl">Una novedad</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio pariatur aliquam, laborum nostrum placeat
                consequatur. Eos molestiae, accusamus tempora autem aliquid
                enim! Necessitatibus officiis, maxime eos repellat iure fugit.
                Vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
