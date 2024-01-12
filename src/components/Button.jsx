/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to }) => {
  return (
    <div className="m-4">
      <button className="border border-black rounded hover:bg-defaultBlue transition-all hover:text-white hover:border-defaultBlue ease-out duration-300">
        <Link to={to} className="text-2xl items-center m-2 space-y-68">
          Ver más →
        </Link>
      </button>
    </div>
  );
};

export default Button;
