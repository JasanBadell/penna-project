import React from "react";
import { Carousel } from "@material-tailwind/react";
import { homevector, homecarrusel, slogan } from "../assets/dummy";

const HomeBanner = () => {
  return (
    <>
      <div className="lg:px-20 xl:px-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start">
        <div className="lg:absolute lg:bg-transparent bg-vector-1 lg:mt-64 mt-10 w-screen lg:w-1/3 lg:mx-4 ml-0 z-20">
          <p className="text-2xl xl:text-3xl mx-8 text-defaultBlue mt-16 lg:mt-0">
            Bienvenidos
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-defaultBlue mx-8 font-extrabold xl:w-1/3 md:w-1/2 mb-12">
            A NUESTRA EMPRESA
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row -mt-40 lg:mt-20 w-full overflow-hidden">
          <div className="w-screen lg:w-2/5 z-10 ">
            <img
              src={homevector}
              alt="Vector gris"
              className="mx-2 lg:mt-16 lg:w-auto w-0"
            />
          </div>
          <div className="w-full lg:w-3/4 lg:-ml-20 mt-28 lg:mt-0">
            <Carousel
              className="h-auto w-full bg-white"
              loop
              navigation={false}
              autoplay
            >
              {homecarrusel.map(({ id, img }) => (
                <div key={id} className="flex items-center justify-center">
                  <img
                    src={img}
                    alt="Imagen de Carrusel"
                    className="carrusel"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 lg:mt-20 md:mx-8 lg:mx-10 xl:mx-20">
        <Carousel
          loop
          autoplay
          navigation={false}
          prevArrow={false}
          nextArrow={false}
          className="w-full lg:w-1/2 2xl:w-1/4 lg:mx-auto lg:-mt-44 lg:ml-96 xl:ml-96 xl:mr-0 text-center"
        >
          {slogan.map(({ opinion }) => (
            <p
              key={opinion}
              className="text-xl xl:text-3xl font-bold lg:font-extralight text-defaultBlue leading-snug"
            >
              {opinion}
            </p>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeBanner;
