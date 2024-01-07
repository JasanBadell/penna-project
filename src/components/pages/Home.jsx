import React from "react";
import { Carousel } from "@material-tailwind/react";
import about from "../../assets/about.png";
import services from "../../assets/services.png";
import Clients from "../Clients";
import News from "../News";
import Offerts from "../Offerts";
import Productions from "../Productions";

const Home = () => {
  return (
    <>
      <div className=" lg:mt-44 mb-4">
        <div className=" lg:px-14 max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
          <div className=" w-full">
            <Carousel className="h-auto w-full" loop autoplay>
              
              <div className="flex flex-col md:flex-row-reverse items-stretch ">
                <div>
                  <img src={about} alt="image 1" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-stretch ">
                <div>
                  <img src={services} alt="image 1" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <Offerts />
        <Productions />
        <News />
        <Clients />
      </div>
    </>
  );
};

export default Home;
