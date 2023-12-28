import React from "react";
import services from "../assets/services.png";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import maintenance from "../assets/maintenance.svg";
import painting from "../assets/painting.svg";
import pencil from "../assets/pencil.svg";
import rocket from "../assets/rocket.svg";

const Services = () => {
  return (
    <>
      <div className="overflow-hidden bg-white flex flex-col">
        <img src={services} alt="imagen" className="mt-48" />
      </div>
      <div className="flex md:flex-col justify-around align-middle">
        <div className="flex md:flex-row">
          <img src={services1} alt="img" className="black-diag-top" />
          <div className="black-diag-top-2 mt-20 mr-36 ml-10">
            <h3 className="text-defaultBlue font-extrabold text-5xl">
              REPARACIÓN DE EQUIPOS
            </h3>
            <img src={maintenance} alt="" width={120} />
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
              <a href="#" className="text-2xl items-center m-2 space-y-68">
                Ver mas →
              </a>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row-reverse">
          <img src={services2} alt="img" className="white-diag" />
          <div className="white-diag-2 mt-20 ml-36 mr-10">
            <img src={painting} alt="" width={120} />
            <h3 className="text-defaultBlue font-extrabold text-5xl">
              CORTE CONFORMADO SOLDADURA Y PINTURA
            </h3>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
              <a href="#" className="text-2xl items-center m-2 space-y-68">
                Ver mas →
              </a>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row">
          <img src={services3} alt="img" />
          <div className="mt-20 mr-36 ml-10">
            <img src={pencil} width={100} alt="img" />
            <h3 className="text-defaultBlue font-extrabold text-5xl">
              REPARACIÓN DE EQUIPOS
            </h3>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
              <a href="#" className="text-2xl items-center m-2 space-y-68">
                Ver mas →
              </a>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row-reverse">
          <img src={services4} alt="img" />
          <div className="mt-40 ml-36 mr-10">
            <img src={rocket} alt="img" width={100} />
            <h3 className="text-defaultBlue font-extrabold text-5xl">
              PROYECCIÓN Y DISEÑO
            </h3>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border-spacing-2 border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
              <a href="#" className="text-2xl items-center m-2 space-y-68">
                Ver mas →
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
