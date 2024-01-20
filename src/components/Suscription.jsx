/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import SuscribeForm from "./SuscribeForm";
import Brand_Logo from "../assets/Logos_Penna-Project/Brand_Logo.png";
import Email_Check from "../assets/Email_Check.png";

const Subscription = ({ show, close }) => {
  const [emailSent, setEmailSent] = useState(false);
  const modalRef = useRef(null);

  const handleCloseClick = () => {
    setEmailSent(false);
    close();
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        handleCloseClick();
      }, 3000);
    }
  }, [emailSent]);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!show) {
    return null;
  }

  if (emailSent) {
    return (
      <>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-30"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className="w-full sm:w-2/5 bg-gray-200 p-4 rounded-md relative"
          >
            <button
              className="text-defaultRed text-xl absolute top-2 right-2"
              onClick={handleCloseClick}
            >
              X
            </button>
            <div className="flex items-center justify-center">
              <p>¡Correo enviado!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img src={Email_Check} alt="" className="w-1/3" />
          <h3 className="text-defaultBlue text-3xl font-bold">¡Listo!</h3>
          <p>Datos enviados correctamente</p>
          <img src={Brand_Logo} alt="" className="my-8" />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-30"
        onClick={handleOutsideClick}
      >
        <div className="bg-suscribe rounded-md flex justify-center w-2/4 items-center">
          <div ref={modalRef} className="m-8 w-1/2 bg-gray-200 p-4 relative">
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-defaultBlue text-lg lg:text-xl font-bold mt-4">
                ¡Bienvenido a Peña Empresa Industrial!
              </h3>
              <p className="text-xs lg:text-sm m-4 ">
                Ya tienes un adelanto de quienes somos y cuáles son nuestros
                horizontes. Si has llegado hasta aquí es porque no quieres
                perder la pista de todo lo que acontece en nuestro entorno
                industrial.
              </p>
              <h2 className="text-defaultBlue text-lg lg:text-xl font-extrabold">
                ¡Suscríbete ya a nuestra agenda informativa!
              </h2>
              <SuscribeForm onEmailSent={handleEmailSent} />
              <p className="text-xs lg:text-sm font-medium w-1/2">
                Gracias por confiar y estar más cerca.
              </p>
              <img src={Brand_Logo} className=" my-2 w-1/3 lg:w-1/2"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
