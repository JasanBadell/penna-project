import React from "react";
import { vector, imgCarrusel_1 } from "../assets/dummy";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-0 lg:w-1/3  z-10">
          <img src={vector} alt="imagen" className="lg:mt-16 lg:w-full w-0" />
        </div>
        <div className="w-full lg:w-2/3 -mt-10 lg:-ml-10">
          <img src={imgCarrusel_1} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
