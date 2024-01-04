import React from "react";
import { Carousel } from "@material-tailwind/react";
import services from "../../assets/home.jpg";
import Clients from "../Clients";
import News from "../News";
import Offerts from "../Offerts";
import Productions from "../Productions";

const Home = () => {
  return (
    <>
      <div className=" lg:mt-44 mb-4">
        <div className=" lg:px-14 max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:mt-10 bg-img">
            <p className="text-2xl font-medium mt-24 ml-20 text-defaultBlue md:w-3/4 leading-snug">
              Bienvenidos
            </p>
            <h1 className="text-5xl font-extrabold mb-4 ml-20 text-defaultBlue md:w-3/4 leading-snug">
              A NUESTRA EMPRESA
            </h1>
            <p className="text-defaultGray text-2xl mb-8 ml-20 mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="lg:w-3/4 w-full">
            <Carousel className="h-auto w-full">
              <div className="flex flex-col md:flex-row-reverse items-stretch ">
                <div>
                  <img src={services} alt="image 1" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-stretch ">
                <div>
                  <img src={services} alt="image 1" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-stretch ">
                <div>
                  <img src={services} alt="image 1" />
                </div>
              </div>
            </Carousel>
            <div className="mt-12 ml-12">
              <p className="text-3xl md:text-5xl font-extralight text-defaultBlue md:w-3/4 leading-snug">
                OPORTUNIDADES,
              </p>
              <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
                NUESTROS SERVICIOS
              </h3>
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
