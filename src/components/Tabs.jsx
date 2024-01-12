import { useState } from "react";
import { products } from "../assets/dummy";
import { Card } from "@material-tailwind/react";

const Tabs = () => {
  const itemToShow = products.slice(0, 4);

  const [hoveredCardId, setHoveredCardId] = useState("");

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId("");
  };
  return (
    <>
      <div className="flex justify-center items-start lg:py-8 m-4 lg:mx-20">
        <div className="flex  lg:flex-col gap-y-2 lg:w-full">
          <div className=" lg:flex hidden lg:flex-row  p-2 rounded-xl lg:w-auto">
            {itemToShow.map((item) => (
              <Card
      className={`mx-8 mb-12 rounded-none shadow-2xl ${
        hoveredCardId === item.id ? "relative" : ""
      }`}
      key={item.id}
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col">
        <img src={item.img} alt="" />
        <div className="m-5">
          <h3 className="text-base text-left font-semibold uppercase">
            {item.title}
          </h3>
          <p className="text-sm text-left mt-2">{item.category}</p>
          <p className="text-sm text-left mb-2 text-defaultRed">
            {item.subCategory}
          </p>
          <p className="text-sm text-left">{item.description}</p>
        </div>
      </div>
      {hoveredCardId === item.id && (
        <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <button className="bg-defaultBlue text-white px-4 py-2 rounded-md">
            Ver más
          </button>
        </div>
      )}
    </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
