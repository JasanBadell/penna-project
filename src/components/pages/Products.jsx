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
      <div className="lg:mt-36">
        <div className="flex flex-row items-center justify-between">
          <div className="mx-20">
            <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug">
              PRODUCCIONES
            </h3>
          </div>
          <div className="w-1/5">
            <img src={productions} alt="" className="mr-0" />
          </div>
        </div>
        <div className="mx-60 my-10 gap-4 grid grid-cols-2">
          <p>
            Nuestra línea de producciones se realiza con alto nivel de
            integración tecnológica y suficiente experiencia del capital humano.
          </p>
          <p>
            En el año alcanzamos un surtido de más de 45 tipos de equipos, desde
            los más sencillos hasta los más complejos.
          </p>
          <p>
            A partir de un proceso inversionista en el 2020, dos de nuestras
            industrias modernizaron su infraestructura tecnológica, permitiendo
            un incremento en las producciones, superior a los dos mil equipos de
            complejidad media, anualmente.
          </p>
          <p>
            En la década de 1980 a 1990 la industria produjo como promedio anual
            mil 700 equipos y se cubrió el 83% de la demanda nacional en
            remolques, semirremolques y aplicaciones.
          </p>
        </div>
        <ProductSection />
        <div className="flex flex-row-reverse mb-20">
          <div className="w-1/3">
            <Carousel
              className="mt-16 -ml-44 bg-vector-3"
              autoplay
              autoplayDelay={9000}
              loop
            >
              {clientopinion.map(({ empName, opinion }) => (
                <div className="flex flex-col mt-20 mx-20 z-10 absolute m-4">
                  <q className=" mb-4 text-xl">{opinion}</q>
                  <p className="text-right text-sm text-blue-gray-300 font-extrabold">
                    {empName}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-2/3">
            <img src={carruselimg} alt="" className="" />
          </div>
        </div>
        <div className="mx-20 my-20">
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
