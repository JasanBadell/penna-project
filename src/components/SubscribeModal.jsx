import React from "react";

const SubscribeModal = (show, close) => {
  if (!show) return null;

  const handleShowClick = (e) => {
    e.stopPropagation();
  };

  const handleAnyClick = () => {
    close();
  };
  return (
    <>
      <div
        className="z-20 fixed inset-0 bg-opacity-5 flex justify-center items-center"
        onClick={handleAnyClick}
      >
        <div className="w-[600px] flex flex-col m-4" onClick={handleShowClick}>
          <div className="bg-defaultGray text-black p-2 rounded-md flex flex-col">
            <button
              className="text-defaultRed text-xl place-self-end"
              onClick={handleAnyClick}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeModal;
