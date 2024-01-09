import React from "react";
import { Link } from "react-scroll";
import Clients from "../Clients";
import { brandNews, brands, brandimg, brandimg1 } from "../../assets/dummy";

const BrandNews = () => {
  return (
    <>
      <div className="overflow-hidden bg-white mt-52 ml-20 ">
        <div className="text-4xl text-defaultBlue text-left">
          <p className="text-xl md:text-2xl font-extralight leading-snug">
            LA MEJOR FORMA DE ESTAR,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold lg:w-full leading-snug">
            NUESTRAS NOVEDADES
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2 -mb-32">
          {brandNews.map(({ img, title, subtitle, resume, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="mt-10 mr-10 flex md:flex-row items-center"
            >
              <div className="w-2/5">
                <img src={img} alt="img" className="w-auto" />
              </div>
              <div className="w-4/5 mx-4">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-sm">{subtitle}</p>
                <p className="mt-4">{resume}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row-reverse items-end">
          <img src={brands} alt="img" className="w-1/4" />
        </div>
      </div>
      <div className="bg-defaultBlue flex flex-row items-center">
        <img src={brandimg} alt="img" className="w-1/2" />
        <div className="text-white w-2/6">
          <p className="text-xl md:text-2xl font-extralight leading-snug mb-2">
            VANGUARDIA
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold md:w-full leading-snug mb-4">
            XX AÑOS PRESENTES EN LA ESCENA NACIONAL
          </h3>
          <p className="md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
      <div className="text-defaultBlue mt-10 flex flex-col ml-96 w-1/2 absolute">
        <p className="text-xl md:text-2xl font-extralight leading-snug items-end lg:ml-72">
          CONÓCENOS,
        </p>
        <h3 className="text-3xl md:text-5xl font-extrabold leading-snug lg:ml-72">
          VISITA NUESTRAS INSTALACIONES
        </h3>
      </div>
      <img src={brandimg1} alt="img" className="-mt-36" />
      <Clients />
    </>
  );
};

export default BrandNews;
