import React from "react";
import { services1 } from "../assets/dummy";

const Vanguard = () => {
  return (
    <>
      <div className="lg:w-full lg:flex flex-col md:flex-row items-center bg-defaultBlue -mb-8">
        <div className="mt-10 mx-8 lg:mx-20">
          <div className="flex flex-col items-left justify-around gap-4">
            <p className="text-2xl text-white mt-4">VANGUARDIA</p>
            <h3 className="text-white font-extrabold text-3xl lg:text-5xl">
              PRESENTES EN LA ESCENA NACIONAL
            </h3>
            <p className="lg:text-2xl text-white">
              En el año alcanzamos un surtido de más de 45 tipos de equipos,
              entre sencillos y complejos. Hemos cubierto el 83% de la demanda
              nacional en remolques, semirremolques y aplicaciones.
            </p>
          </div>
        </div>
        <img
          src={services1}
          alt="Imagen de Soldador"
          className="lg:w-2/4 lg:my-0"
        />
      </div>
    </>
  );
};

export default Vanguard;
