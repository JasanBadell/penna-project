/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Clients from "../Clients";
import Button from "../Button";
import ProductSection from "../ProductSection";
import { productions, carruselimg, clientopinion } from "../../assets/dummy";
import { Carousel } from "@material-tailwind/react";
import "../../App.css";
import InfoModal from "../InfoModal";

const Products = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="lg:mt-36">
        <div className="flex flex-row items-center justify-between">
          <div className="mx-20">
            <p className="text-1xl md:text-3xl font-extralight text-defaultBlue leading-snug">
              NUESTRAS
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug">
              PRODUCCIONES
            </h3>
          </div>
          <div onClick={handleOpenModal}>
            <Button />
          </div>
          <div className="w-2/12">
            <img src={productions} alt="" className="mr-0" />
          </div>
        </div>
        <InfoModal isVisible={isModalVisible} onClose={handleCloseModal}/>
        <ProductSection />
        <div className="flex flex-row-reverse mb-20">
          <div className="w-1/3">
            <Carousel className="mt-16 -ml-44 bg-vector-3" autoplay>
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
          ASÍ NOS VALORAN!
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
