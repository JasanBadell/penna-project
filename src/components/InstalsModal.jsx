/* eslint-disable react/prop-types */
import React from "react";
import { empresa } from "../assets/dummy";

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
          <h3 className="text-xl md:text-2xl font-bold text-defaultBlue leading-snug mt-2 mb-4">
            Tres unidades empresariales de base y una mipyme integran a este
            polo productivo de la industria nacional sideromecánica.
          </h3>
          <div>
            {empresa.map(({ id, title, content }) => (
              <div key={id}>
                <p className="text-md font-bold text-defaultBlue mt-2">
                  {title}
                </p>
                <p className="mb-4">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalsModal;
