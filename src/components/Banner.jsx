import React from "react";
import { vector, service } from "../assets/dummy";

const Banner = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/3  z-10">
          <img src={vector} alt="imagen" className="mt-16" />
        </div>
        <div className="w-2/3 -ml-10">
          <img src={service} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
