/* eslint-disable react/jsx-key */
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Clients from "../Clients";
import News from "../News";
import Offerts from "../Offerts";
import Productions from "../Productions";
import { homevector, homecarrusel, slogan } from "../../assets/dummy";

const Home = () => {
  return (
    <>
      <div className="pt-16 lg:pt-20 mb-4">
        <div className="sm:px-8 md:px-12 lg:px-20 xl:px-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start">
          <div className="lg:absolute mt-72 w-full lg:w-1/3 mx-4 lg:ml-16 z-20">
            <p className="text-xl text-defaultBlue mt-8 lg:mt-0">Bienvenidos</p>
            <h3 className="text-3xl lg:text-5xl text-defaultBlue font-extrabold lg:w-1/2 mb-4">
              A NUESTRA EMPRESA
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-20 w-full overflow-hidden">
            <div className="w-full lg:w-2/5 z-10">
              <img src={homevector} alt="imagen" className="mx-auto lg:mt-16" />
            </div>
            <div className="w-full lg:w-3/4 lg:-ml-20 mt-8 lg:mt-0">
              <Carousel className="h-auto w-full bg-white" loop autoplay>
                {homecarrusel.map(({ id, img }) => (
                  <div key={id} className="flex items-center justify-center">
                    <img src={img} alt={img} className="carrusel" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 md:mt-20 mx-4 md:mx-8 lg:mx-16 xl:mx-20">
          <Carousel
            loop
            autoplay
            navigation={false}
            className="w-1/2 lg:ml-80 lg:-mt-40 text-center"
          >
            {slogan.map(({ opinion }) => (
              <p
                key={opinion}
                className="text-xl md:text-3xl font-extralight text-defaultBlue leading-snug"
              >
                {opinion}
              </p>
            ))}
          </Carousel>
        </div>
        <div className="mx-auto">
          <Offerts />
          <Productions />
          <News />
          <Clients />
        </div>
      </div>
    </>
  );
};

export default Home;
