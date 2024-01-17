/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { products } from "../assets/dummy";

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

  return (
    <>
      <div className="flex flex-col lg:mx-20">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div
            key={category}
            className="flex flex-col items-start justify-between"
          >
            <div className="text-2xl font-extralight text-defaultBlue leading-snug">
              <h3 className="uppercase my-4 mx-8">{category}</h3>
            </div>
            <div className="lg:grid lg:grid-cols-4 flex flex-col mx-8">
              {products.map(({ id, img, title, subCategory, description }) => (
                <>
                  <Card
                    className={`mx-2 mb-12 rounded-none shadow-2xl ${
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
                  </Card>
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
