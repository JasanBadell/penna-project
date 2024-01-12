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
      <div className="pt-26 lg:pt-28 mb-4">
        <div className=" lg:px-14 max-w-screen-2xl mx-auto flex flex-col lg:flex-row ">
          <div className="lg:absolute mt-20 mx-4 lg:ml-36 z-20 ">
            <p className="text-xl text-defaultBlue mt-28">Bievenidos</p>
            <h3 className="text-5xl text-defaultBlue font-extrabold lg:w-1/2 mb-4">
              A NUESTRA EMPRESA
            </h3>
            <p className="text-lg lg:w-1/2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  lg:mt-28">
            <div className="w-screen lg:w-2/4 z-10">
              <img src={homevector} alt="imagen" className="lg:ml-20 " />
            </div>
            <div className="lg:w-11/12 -mt-16 lg:-ml-10">
              <Carousel className="h-auto w-full bg-white" loop autoplay>
                {homecarrusel.map(({ id, img }) => (
                  <div className="flex flex-col lg:flex-row-reverse">
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
