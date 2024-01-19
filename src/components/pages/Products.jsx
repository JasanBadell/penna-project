/* eslint-disable react/jsx-key */
import React from "react";
import Clients from "../Clients";
import ProductSection from "../ProductSection";
import { productions, carruselimg, clientopinion } from "../../assets/dummy";
import { Carousel } from "@material-tailwind/react";
import "../../App.css";

const Products = () => {
  return (
    <>
      <div className="mt-36">
        <div className="flex flex-row items-center justify-between">
          <div className="lg:mx-20">
            <p className="text-1xl md:text-3xl font-extralight mx-8 lg:mx-0 text-defaultBlue leading-snug uppercase">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue lg:mx-0 leading-snug mx-8 uppercase">
              PRODUCCIONES
            </h3>
          </div>
          <div className="w-1/5">
            <img src={productions} alt="" className="mr-0 lg:w-auto w-0" />
          </div>
        </div>
        <div className="mx-8 lg:mx-60 my-10 gap-4 lg:grid lg:grid-cols-2">
          <p className="mt-4">
            Nuestra línea de producciones se realiza con alto nivel de
            integración tecnológica y suficiente experiencia del capital humano.
          </p>
          <p className="mt-4">
            En el año alcanzamos un surtido de más de 45 tipos de equipos, desde
            los más sencillos hasta los más complejos.
          </p>
          <p className="mt-4">
            A partir de un proceso inversionista en el 2020, dos de nuestras
            industrias modernizaron su infraestructura tecnológica, permitiendo
            un incremento en las producciones, superior a los dos mil equipos de
            complejidad media, anualmente.
          </p>
          <p className="mt-4">
            En la década de 1980 a 1990 la industria produjo como promedio anual
            mil 700 equipos y se cubrió el 83% de la demanda nacional en
            remolques, semirremolques y aplicaciones.
          </p>
        </div>
        <ProductSection />
        <div className="flex flex-col lg:hidden mb-64 lg:mb-20">
          <div className="w-full lg:w-2/3">
            <img src={carruselimg} alt="" className="w-full" />
          </div>
          <div className="lg:hidden w-full mt-8">
            <Carousel
              className="lg:bg-vector-3 overflow-x-hidden text-center"
              autoplay
              autoplayDelay={9000}
              loop
              prevArrow={false}
              nextArrow={false}
              navigation={false}
            >
              {clientopinion.map(({ opinion }) => (
                <div className="flex flex-col mb-8">
                  <q className="mb-2 text-lg">{opinion}</q>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="lg:flex hidden lg:flex-row mb-64 lg:mb-20">
          {" "}
          <div className="w-full lg:w-2/3">
            {" "}
            <img src={carruselimg} alt="" className="" />{" "}
          </div>{" "}
          <div className="lg:w-1/3 w-screen">
            {" "}
            <Carousel
              className="mt-2 lg:mt-16 ml-0 lg:-ml-44 bg-vector-3 overflow-x-hidden"
              autoplay
              autoplayDelay={9000}
              loop
              prevArrow={false}
              nextArrow={false}
              navigation={false}
            >
              {clientopinion.map(({ empName, opinion }) => (
                <div className="flex flex-col lg:mt-20 lg:mx-20 z-10 absolute m-4">
                  <q className="mb-4 text-base lg:text-xl">{opinion}</q>
                  <p className="text-right text-sm text-blue-gray-300 font-extrabold">
                    {empName}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="mx-8 lg:mx-20 my-10 lg:my-20">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            ASÍ NOS VALORAN!
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug">
            CLIENTES
          </h3>
        </div>
        <Clients />
      </div>
    </>
  );
};

export default Products;
