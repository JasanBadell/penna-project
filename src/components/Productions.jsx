/* eslint-disable react/jsx-key */
import React from "react";
import services from "../assets/home.jpg";
import { Card, Carousel } from "@material-tailwind/react";

const Productions = () => {
  const products = [
    {
      img: `${services}`,
      title: "Primera",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis aliquid dolorum rem magnam enim eaque ipsa corrupti impedit, incidunt itaque. Et laboriosam officia pariatur sequi optio id dolor quidem.",
    },
    {
      img: `${services}`,
      title: "Segunda",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis aliquid dolorum rem magnam enim eaque ipsa corrupti impedit, incidunt itaque. Et laboriosam officia pariatur sequi optio id dolor quidem.",
    },
    {
      img: `${services}`,
      title: "Tercera",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis aliquid dolorum rem magnam enim eaque ipsa corrupti impedit, incidunt itaque. Et laboriosam officia pariatur sequi optio id dolor quidem.",
    },
    {
      img: `${services}`,
      title: "Cuarta",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis aliquid dolorum rem magnam enim eaque ipsa corrupti impedit, incidunt itaque. Et laboriosam officia pariatur sequi optio id dolor quidem.",
    },
  ];
  return (
    <>
      <div className="bg-defaultGray flex flex-col items-center justify-center">
        <div className="mt-12">
          <p className="text-3xl md:text-5xl font-extralight text-defaultBlue md:w-3/4 leading-snug">
            NUESTRAS
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
            PRODUCCIONES
          </h3>
        </div>
        <Carousel className="h-auto w-3/4">
          {products.map(({ img, title, description }) => (
            <div>
              <Card className="m-8">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <img src={img} alt="image 1" className="" />
                  </div>
                  <div className="bg-white m-5">
                    <h3 className="text-3xl text-center mb-6">{title}</h3>
                    <p className="text-xl text-center">{description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Productions;
