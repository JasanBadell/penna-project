import React from "react";
import { Link } from "react-scroll";
import rocket from "../assets/rocket.svg";
import pencil from "../assets/pencil.svg";
import maintenance from "../assets/maintenance.svg";
import painting from "../assets/painting.svg";

const Offerts = () => {
  const service = [
    {
      logo: `${maintenance}`,
      title: "REPARACIÓN DE EQUIPOS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${painting}`,
      title: "CORTE, CONFORMADO, SOLDADURA Y PINTURA",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${rocket}`,
      title: "ASESORÍAS Y SERVICIOS TÉCNICOS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      logo: `${pencil}`,
      title: "PROYECCIÓN Y DISEÑO",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
  ];
  return (
    <>
      <div className="lg:flex lg:flex-row grid grid-cols-2 sm:grid-cols-2 items-start justify-start gap-4 m-4 lg:m-20">
        {service.map(({ logo, title, link }) => (
          <Link
            to={link}
            spy={true}
            offset={-100}
            key={title}
            className="lg:w-1/4 text-center lg:text-start rounded-xl flex flex-col justify-around"
          >
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-start lg:items-start content-center">
              <img src={logo} alt={title} width={60} className="mx-2" />
              <div className="flex flex-col text-center lg:text-start items-start lg:justify-start">
                <h3 className="text-defaultBlue  font-semibold text-sm lg:text-lg lg:w-5/6">
                  {title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Offerts;
