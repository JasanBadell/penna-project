/* eslint-disable react/prop-types */
import React from "react";
import { products } from "../assets/dummy";

const MoreInfoModal = ({ idP, showModal, closeModal }) => {
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
            {products.map(({ id, category, subCategory, description }) => (
              <div key={id}>
                <p className="text-sm text-left mt-2">
                  <strong>Categoría:</strong>
                  {category}
                </p>
                <p className="text-sm text-left mb-2 text-defaultRed">
                  <strong>Sub-categoría:</strong>
                  {subCategory}
                </p>
                <p className="text-sm text-left">
                  <strong>Descripción:</strong>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoModal;
