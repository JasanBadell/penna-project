/* eslint-disable react/prop-types */
import React from "react";

const InfoModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div
      className="z-20 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-end"
      onClick={handleCloseClick}
    >
      <div className="w-[600px] flex flex-col m-4" onClick={handleModalClick}>
        <div className="bg-defaultGray text-black p-2 rounded-md flex flex-col">
        <button
          className="text-defaultRed text-xl place-self-end"
          onClick={handleCloseClick}
        >
          X
        </button>
          <p className="p-8 text-lg">
            Nuestra línea de producciones se realiza con alto nivel de
            integración tecnológica y suficiente experiencia del capital humano.
            En el año alcanzamos un surtido de más de 45 tipos de equipos, desde
            los más sencillos hasta los más complejos. A partir de un proceso
            inversionista en el 2020, dos de nuestras industrias modernizaron su
            infraestructura tecnológica, permitiendo un incremento en las
            producciones, superior a los dos mil equipos de complejidad media,
            anualmente. En la década de 1980 a 1990 la industria produjo como
            promedio anual mil 700 equipos y se cubrió el 83% de la demanda
            nacional en remolques, semirremolques y aplicaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
