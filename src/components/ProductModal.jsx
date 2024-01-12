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
      className="z-20 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-end"
      onClick={handleCloseClick}
    >
      <div className="w-[600px] flex flex-col m-4" onClick={handleModalClick}>
        <button
          className="text-white text-xl place-self-end"
          onClick={handleCloseClick}
        >
          X
        </button>
        <div className="bg-white text-black p-2 rounded-md">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
