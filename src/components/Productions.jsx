/* eslint-disable react/jsx-key */
import React from "react";
import { Card, Carousel } from "@material-tailwind/react";
import { products, productions } from "../assets/dummy";
import Button from "./Button";
import Banner from "./Banner";

const Productions = () => {
  return (
    <>
      <div className="bg-defaultGray flex flex-col">
        <div className=" flex flex-row place-items-start justify-between ml-20">
          <div className="mt-8 mr-48">
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue leading-snug">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
              PRODUCCIONES
            </h3>
          </div>
          <div className="mt-8">
            <Button />
          </div>
          <img src={productions} alt="" className="w-1/4" />
        </div>
        <h3 className="text-defaultBlue text-lg ml-24 mb-8 -mt-40">
          TRADICIONALES
        </h3>
        <Carousel className="h-auto w-full" loop autoplay>
          <div className="grid grid-cols-4 mx-28">
            {products.map(({ img, title, description }) => (
              <div className="flex flex-row items-center justify-between">
                <Card className="mx-8 mb-12 rounded-none shadow-2xl">
                  <div className="flex flex-col items-center justify-center hover:">
                    <div className="">
                      <img src={img} alt="image 1" />
                    </div>
                    <div className="m-5">
                      <h3 className="text-base text-left font-semibold uppercase mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-left">{description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Productions;
