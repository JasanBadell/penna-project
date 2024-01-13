/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { products } from "../assets/dummy";
import MoreInfoModal from "./MoreInfoModal";

const ProductGrid = () => {
  // Agrupar los productos por categoría
  const groupedProducts = products.reduce((groups, product) => {
    const { category } = product;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  const [hoveredCardId, setHoveredCardId] = useState("");

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId("");
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleOpenModal = (id) => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="flex flex-col lg:mx-20">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div
            key={category}
            className="flex flex-col items-start justify-between"
          >
            <div className="text-1xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              <h3 className="uppercase">{category}</h3>
            </div>
            <div className="grid grid-cols-4">
              {products.map(({ id, img, title, subCategory, description }) => (
                <>
                  <Card
                    className={`mx-8 mb-12 rounded-none shadow-2xl ${
                      hoveredCardId === id ? "relative" : ""
                    }`}
                    key={id}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex flex-col">
                      <img src={img} alt="" />
                      <div className="m-5">
                        <h3 className="text-base text-left font-semibold uppercase">
                          {title}
                        </h3>
                        <p className="text-sm text-left mt-2">{category}</p>
                        <p className="text-sm text-left mb-2 text-defaultRed">
                          {subCategory}
                        </p>
                        <p className="text-sm text-left">{description}</p>
                      </div>
                    </div>
                    {hoveredCardId === id && (
                      <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                        <button
                          className="bg-defaultBlue text-white px-4 py-2 rounded-md "
                          onClick={handleOpenModal}
                        >
                          Ver más
                        </button>
                      </div>
                    )}
                  </Card>
                  <MoreInfoModal
                    showModal={isVisible}
                    closeModal={handleCloseModal}
                    idP={id}
                  />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
