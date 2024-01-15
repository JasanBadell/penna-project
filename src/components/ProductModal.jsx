/* eslint-disable react/prop-types */
import React from "react";
import ContactForm from "./ContactForm";

const ProductModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div
      className="z-30 fixed w-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center mt-0"
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
