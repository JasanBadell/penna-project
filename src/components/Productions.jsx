/* eslint-disable react/jsx-key */
import React from "react";
import { Card, Carousel } from "@material-tailwind/react";
import { productions, products } from "../assets/dummy";
import Button from "./Button";
import Tabs from "./Tabs";

const Productions = () => {
  return (
    <>
      <div className="bg-defaultGray flex flex-col">
        <div className=" flex flex-col lg:flex-row place-items-start justify-between m-4 lg:mx-20">
          <div className="mt-8 lg:mr-48">
            <p className="text-xl md:text-2xl font-extralight text-defaultBlue ">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue lg:w-full ">
              PRODUCCIONES
            </h3>
          </div>
          <div className="lg:mt-8">
            <Button to="/products" />
          </div>
          <img src={productions} alt="" className="lg:w-1/4 hidden" />
        </div>
        <Tabs />
        <Carousel className="flex h-auto w-full lg:hidden" loop autoplay>
          {products.slice(0, 8).map(({ img, title, description }) => (
            <div className="grid grid-cols-1" key={title}>
              <div className="flex flex-row items-center justify-between">
                <Card className="mx-8 mb-12 rounded-none shadow-2xl">
                  <div className="flex flex-col items-center justify-center hover:">
                    <div className="">
                      <img src={img} alt={title} />
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
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Productions;
