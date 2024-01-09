/* eslint-disable react/jsx-key */
import React from "react";
import Clients from "../Clients";
import Button from "../Button";
import {
  productions,
  array_products,
  vector,
  carruselimg,
} from "../../assets/dummy";
import { Card, Carousel } from "@material-tailwind/react";
import "../../App.css";

const Products = () => {
  const clientopinion = [
    {
      empName: "MINAG",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, illo hic quasi ratione vitae! Ullam!",
    },
    {
      empName: "ECASA",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, accusamus voluptatem iure molestiae quia consectetur labore autem voluptatibus nisi perspiciatis illo hic quasi ratione vitae! Ullam!",
    },
    {
      empName: "ZDEM",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sit ipsum saepe, accusamus voluptatem iure molestiae quia consectetur labore autem voluptatibus nisi perspiciatis illo hic quasi ratione vitae! Ullam!",
    },
  ];
  return (
    <>
      <div className="lg:mt-48">
        <div className="flex flex-row items-center justify-between">
          <div className="mx-20">
            <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug">
              PRODUCCIONES
            </h3>
          </div>
          <Button />
          <div className="w-2/12">
            <img src={productions} alt="" className="mr-0" />
          </div>
        </div>
        <div className="grid grid-cols-4 mx-28">
          {array_products.map(({ img, title, description, category }) => (
            <div className="flex flex-row items-center justify-between">
              <Card className="mx-8 mb-12 rounded-none shadow-2xl">
                <div className="flex flex-col">
                  <img src={img} alt="" />
                  <div className="m-5">
                    <h3 className="text-base text-left font-semibold uppercase">
                      {title}
                    </h3>
                    <p className="mb-2 text-xs uppercase text-defaultRed">
                      {category}
                    </p>
                    <p className="text-sm text-left">{description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse mb-20">
          <div className="w-1/3">
            <Carousel className="mt-16 -ml-44 bg-vector-3"  autoplay>
              {clientopinion.map(({ empName, opinion }) => (
                <div className="flex flex-col mt-20 mx-20 z-10 absolute m-4">
                  <p className=" mb-4 text-xl">{opinion}</p>
                  <p className="text-right text-sm text-blue-gray-300 font-extrabold">
                    {empName}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-2/3">
            <img src={carruselimg} alt="" className="" />
          </div>
        </div>
        <div className="mx-20 my-20">
          <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
            ESCUCHA A NUESTROS
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug">
            CLIENTES
          </h3>
        </div>
        <Clients />
      </div>
    </>
  );
};

export default Products;
