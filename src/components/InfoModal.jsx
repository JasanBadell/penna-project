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
      className="z-30 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleCloseClick}
    >
      <div
        className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[80%] overflow-y-auto flex flex-col m-4"
        onClick={handleModalClick}
      >
        <div className="bg-defaultGray text-black p-4 rounded-md flex flex-col">
          <button
            className="text-defaultRed text-xl place-self-end"
            onClick={handleCloseClick}
          >
            X
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Certificaciones Código REEUP:
              </p>
              <p>
                Registro Estatal de Empresas, Unidades Presupuestadas y demás
                entidades estatales; el de cooperativas; y el de entidades no
                estatales.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Registro Central Comercial:
              </p>
              <p>
                El Registro Central Comercial es una entidad adscrita al
                Ministerio del Comercio Interior y emite la Autorización
                Comercial y el Certificado Comercial para operación en divisas.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Cámara de Comercio de la República de Cuba:
              </p>
              <p>
                La Cámara de Comercio de la República de Cuba es una institución
                de derecho internacional público, en la que se agrupan las
                empresas cubanas productoras, comercializadoras, exportadoras,
                importadoras y de servicios.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">ONN:</p>
              <p>
                Oficina Nacional de Normalización. Es el principal órgano de
                inspección y supervisión estatal de la calidad en Cuba.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">OCCPI:</p>
              <p>
                Oficina Cubana de la Propiedad Industrial. Confiere el registro
                de los derechos de Propiedad Industrial en la República de Cuba.
                Contribuye al desarrollo de la ciencia, tecnología e innovación,
                de la inversión nacional y extranjera, y de la industria y el
                comercio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;