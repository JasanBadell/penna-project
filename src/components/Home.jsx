import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
          <div className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ml-80">
              <div >
                <img src={home} alt="" />
              </div>
              <div className="">
                <h1 className="text-base font-extrabold mb-4 text-defaultBlue md:w-3/4 leading-snug">
                  Bienvenidos A Nuestra Empresa
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
