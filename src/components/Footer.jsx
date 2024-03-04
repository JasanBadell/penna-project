import React, { useState } from "react";
import footer from "../assets/Footer_IMG.png";
import { certificated } from "../assets/dummy";
import ProductModal from "./ProductModal";
import Button from "./Button";
import InfoModal from "./InfoModal";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Footer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const handleShowCertifications = () => {
    setShowCertifications(true);
  };

  const handleCloseCertifications = () => {
    setShowCertifications(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="bg-Gray">
        <div className="container mx-auto px-8 pt-10 lg:pt-20 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h3 className="text-2xl md:text-5xl font-extrabold text-white leading-snug">
              CERTIFICACIONES
            </h3>
            <div className="text-white" onClick={handleShowCertifications}>
              <Button />
            </div>
            <InfoModal
              isVisible={showCertifications}
              onClose={handleCloseCertifications}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {certificated.map(({ logo, name, description }) => (
              <div className="text-center mb-10" key={name}>
                <img
                  className="col-span-2 max-h-32 w-full object-contain lg:col-span-1 items-center mb-4"
                  src={logo}
                  alt={`Logotipo de ${name}`}
                />
                <p className="text-sm text-white">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row bg-defaultBlue items-center justify-between">
        <div className="w-full lg:w-1/5">
          <h3 className="mt-8 mx-4 lg:mx-20 hidden lg:block text-white text-5xl">
            CONTACTO
          </h3>
          <div className="w-4/6 lg:hidden ">
            <h3 className="bg-defaultBlue text-white mx-8 mt-10 mb-4 text-sm">
              Sitio web creado por SALYAM SOLUCIONES DIGITALES
            </h3>
          </div>
          <img src={footer} alt="footer" className="m-0 w-auto items-start" />
        </div>
        <div className="flex flex-col lg:flex-row mx-8 lg:mx-10 mt-14 gap-8">
          <div className="text-white text-2xl space-y-1 w-full lg:w-1/2">
            <h4 className="text-sm">DIRECCIÓN:</h4>
            <p className="text-xs text-gray-300 font-bold">
              Peña Empresa Industrial y UEB CEM
            </p>
            <p className="text-xs text-gray-300">
              Vía Blanca No. 4860, entre el Puente del Río Martín Pérez y la
              Rotonda de Guanabacoa, Reparto Vía Blanca, Municipio Guanabacoa.
            </p>
            <p className="text-xs text-gray-300 font-bold pt-2">
              UEB Industrial Guanabo y Mipyme SOLDARAP
            </p>
            <p className="text-xs text-gray-300">
              Vía Blanca Calle 428, Peñas Altas, Guanabo, Municipio Habana del
              Este.
            </p>
            <p className="text-xs text-gray-300 font-bold pt-2">UEB IMECA</p>
            <p className="text-xs text-gray-300">
              Calle 82 # 6901 entre Finca y Avenidad 71, Municipio Güira de
              Melena, Provincia Artemisa.
            </p>
          </div>
          <div className="text-white text-2xl space-y-1 w-full lg:w-1/4">
            <h4 className="text-sm">TELÉFONOS Y CORREOS:</h4>
            <p className="text-xs text-gray-300">
              +53 7 797 47 77 extensión: 100
            </p>
            <p className="text-xs text-gray-300">
              +53 7 797 47 77 extensión: 101
            </p>
            <h5 className="text-sm">Correos:</h5>
            <p className="text-xs text-gray-300">info@cem.cu</p>
            <p className="text-xs text-gray-300">comercial@cem.cu</p>
            <p className="text-sm text pt-2">VISÍTANOS EN:</p>
            <div className="flex flex-row gap-2">
              <Link to="https://www.facebook.com/ramonpeña">
                <FaSquareFacebook />
              </Link>
              <Link to="https://twitter.com/ramonpeña">
                <FaSquareXTwitter />
              </Link>
              <Link to="https://www.youtube.com/@ramonpeña">
                <FaSquareYoutube />
              </Link>
              <Link to="https://www.instagram.com/ramonpeña/">
                <FaSquareInstagram />
              </Link>
            </div>
          </div>

          <div className="text-white text-left space-y-4">
            <p className="text-sm">COMUNÍCATE CON NOSOTROS</p>
            <button className="border rounded hover:bg-white transition-all hover:text-defaultBlue hover:border-defaultBlue ease-out duration-300">
              <a
                className="text-sm items-center m-2 "
                onClick={handleOpenModal}
              >
                VER FORMULARIO →
              </a>
            </button>
          </div>
        </div>
        <h3 className="mt-8 mx-2 -mb-10 text-white lg:hidden text-5xl">
          CONTACTO
        </h3>
        <div className="lg:flex lg:flex-col hidden justify-end lg:absolute lg:self-end lg:ml-96">
          <h3 className="text-white lg:ml-32 lg:mt-10 lg:mb-2 text-sm">
            Sitio web creado por SALYAM SOLUCIONES DIGITALES
          </h3>
        </div>
      </div>
      <ProductModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default Footer;
