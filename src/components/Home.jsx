import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden bg-white">
        <div className="pb-80 sm:pb-40 lg:pb-48 lg:pt-40">
          <div className=" md:m-4 mt-10 md:ml-20 md:mr-20 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0 flex flex-col md:flex-row">
              <div className="mt-8 ">
                <p className=" m-4 text-4xl font-medium tracking-tight text-defaultBlue sm:text-3xl">
                  Bienvenidos
                </p>
                <h1 className=" m-4 text-6xl font-bold tracking-tight text-defaultBlue sm:text-6xl">
                  A NUESTRA EMPRESA
                </h1>
                <p className="m-4 mt-4 text-xl text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt exercitationem cumque sint minus ducimus.
                </p>
              </div>
              <div className="md:ml-4">
                <div>
                  <img src={home} alt="" className="md:block mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
