/* eslint-disable react/jsx-key */
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Clients from "../Clients";
import News from "../News";
import Offerts from "../Offerts";
import Productions from "../Productions";
import { homevector, homecarrusel } from "../../assets/dummy";

const Home = () => {
  return (
    <>
      <div className=" lg:mt-44 mb-4">
        <div className=" lg:px-14 max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
          <div className="absolute lg:mt-44 lg:ml-36 z-20">
            <p className="text-xl text-defaultBlue">Bievenidos</p>
            <h3 className="text-5xl text-defaultBlue font-extrabold w-1/2 mb-4">
              A NUESTRA EMPRESA
            </h3>
            <p className="text-lg w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="w-2/4  z-10">
              <img src={homevector} alt="imagen" className="mt-16 ml-20" />
            </div>
            <div className="w-11/12 -ml-10">
              <Carousel className="h-auto w-full" loop autoplay>
                {homecarrusel.map(({ id, img }) => (
                  <div className="flex flex-col md:flex-row-reverse">
                    <div accessKey={id}>
                      <img src={img} alt="image 1" />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <Offerts />
        <Productions />
        <News />
        <Clients />
      </div>
    </>
  );
};

export default Home;
