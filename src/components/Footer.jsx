import React, { useState } from "react";
import footer from "../assets/Footer_IMG.png";
import { certificated } from "../assets/dummy";
import ProductModal from "./ProductModal";

const Footer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="bg-Gray">
        <div className="lg:mx-20">
          <div className="mx-4 lg:max-w-7xl lg:px-8 pt-20">
            <h2 className="text-center text-3xl lg:text-4xl font-semibold leading-8 text-white">
              CERTIFICACIONES
            </h2>
            <div className="mx-16 mt-10 grid max-w-lg gap-x-8 gap-y-10 sm:max-w-xl grid-cols-1 sm:gap-x-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {certificated.map(({ logo, name, description }) => (
                // eslint-disable-next-line react/jsx-key
                <div className="text-center mb-10">
                  <img
                    className="col-span-2 max-h-32 w-full object-contain lg:col-span-1 items-center  mb-4"
                    src={logo}
                    alt={name}
                  />
                  <p className="text-sm text-white ">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse bg-defaultBlue items-center justify-between ">
        <img
          src={footer}
          alt="footer"
          className=" m-0 sm:-ml-12 w-auto sm:w-full lg:w-1/6 pt-20 items-start"
        />
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-10 mt-20 gap-8">
          <div className="text-white space-y-1 -mt-8">
            <h4 className="text-4xl">CONTACTO</h4>
            <p className="text-sm">COMUNICATE CON NOSOTROS</p>
            <button className="border rounded hover:bg-white transition-all hover:text-defaultBlue hover:border-defaultBlue ease-out duration-300">
              <a
                className="text-sm items-center m-2 "
                onClick={handleOpenModal}
              >
                VER FORMULARIO →
              </a>
            </button>
            <ProductModal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
            />
          </div>
          <div className="text-white text-2xl space-y-1">
            <h4 className="text-sm">ADDRESS</h4>
            <p className="text-xs text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-white text-2xl space-y-1">
            <h4 className="text-sm">PHONE AND EMAIL</h4>
            <p className="text-xs text-gray-300">+53 6598 7412</p>
            <p className="text-xs text-gray-300">+53 7 524 89 65</p>
            <p className="text-xs text-gray-300">
              peñaempresaindustrial@gmail.com
            </p>
          </div>
          <div className="text-white text-base text-left space-y-4">
            <p>¿Aún no nos sigues, suscríbete a nuestro boletín?</p>
            <p>CONTÁCTANOS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
