/* eslint-disable react/prop-types */
import React from "react";

const InstalsModal = ({ isVisible, onClose }) => {
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
        className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-h-[90%] overflow-y-auto flex flex-col m-4"
        onClick={handleModalClick}
      >
        <div className="bg-defaultGray text-black p-4 rounded-md flex flex-col">
          <button
            className="text-defaultRed text-xl place-self-end"
            onClick={handleCloseClick}
          >
            X
          </button>
          <h3 className="text-xl md:text-2xl font-bold text-defaultBlue leading-snug my-4">
            Tres unidades empresariales de base y una mipyme integran a este
            polo productivo de la industria nacional sideromecánica.{" "}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Unidad Empresarial de Base Constructora de Equipos Mecánicos:
              </p>
              <p>
                Con más de seis décadas de experiencias posee un perfil de
                trabajo especializado en la producción de remolques,
                semirremolques, camas de volteo, camas plataformas, y otras
                producciones similares.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Unidad Empresarial de Base Industrial Guanabo:
              </p>
              <p>
                Fue creada en 1967 y está dirigida a la fabricación de equipos e
                implementos agrícolas, engranes, remolques y semirremolques,
                aplicaciones sobre camión y equipos de transporte de personal.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">
                Unidad Empresarial de Base Industria Mecánica Caribe IMECA:
              </p>
              <p>
                Surgió en 1953 y se especializa en producciones de carretas
                cañeras, silo cosechadoras, hormigoneras portátiles y sobre
                camión, cargadores frontales y otros equipos para la cosecha,
                fertilización y fumigación en la agricultura.
              </p>
            </div>
            <div>
              <p className="text-md font-bold text-defaultBlue">
                MIPYME SOLDARAP:
              </p>
              <p>
                Es la primera micro, pequeña y mediana empresa estatal
                constituida en el Grupo Empresarial de la Industria
                Sideromecánica (GESIME). Brinda servicios de fabricación,
                reparación y modernización de equipos de soldar, tanto, máquinas
                automáticas, semiautomáticas como convencionales, de cualquier
                tipo, fabricante y modelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalsModal;
