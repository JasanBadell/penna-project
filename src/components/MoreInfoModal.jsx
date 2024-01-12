/* eslint-disable react/prop-types */
import React from "react";

const MoreInfoModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    closeModal();
  };

  return (
    <>
      <div
        className="z-20 fixed inset-0 bg-opacity-5 flex justify-center items-center"
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
            Hola mundo
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoModal;
