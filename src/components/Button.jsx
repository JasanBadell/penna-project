import React from "react";

const Button = () => {
  return (
    <>
      <div className="m-4">
        <button className=" border border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
          <a href="#" className="text-2xl items-center m-2 space-y-68">
            Ver mas →
          </a>
        </button>
      </div>
    </>
  );
};

export default Button;
