/* eslint-disable react/prop-types */
import React from "react";
import { products } from "../assets/dummy";

const MoreInfoProduct = ({ productId }) => {
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return null; // Si no se encuentra el producto con el id proporcionado, no se muestra nada
  }

  const { title, category, subCategory, description, img } = product;

  return (
    <div key={productId}>
      <h3 className="text-defaultBlue text-2xl font-extrabold uppercase">
        {title}
      </h3>
      <p className="text-xl text-defaultBlue text-left uppercase font-extralight ">
        {category}
      </p>
      <div className="flex flex-row m-4">
        <div className="w-1/3 mx-4 rounded-md overflow-hidden">
          <img src={img} alt="" className="bg-blend-color-burn"/>
        </div>
        <div>
          <p className="text-sm text-left mb-2 text-defaultRed">
            <strong>Modalidad:</strong> {subCategory}
          </p>
          <p className="text-sm text-left">
            <strong>Descripción:</strong> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoProduct;
