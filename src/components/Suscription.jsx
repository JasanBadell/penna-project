/* eslint-disable react/prop-types */
import React from "react";
import SuscribeForm from "./SuscribeForm";

const Subscription = ({ show, close }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    close();
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-30 "
        onClick={handleCloseClick}
      >
        <div
          className="w-full sm:w-2/5 bg-gray-200 p-4 rounded-md relative"
          onClick={handleModalClick}
        >
          <button
            className="text-defaultRed text-xl absolute top-2 right-2"
            onClick={handleCloseClick}
          >
            X
          </button>
          <div className="flex items-center justify-center">
            <SuscribeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
