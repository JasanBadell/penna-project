import React from "react";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <>
      <div className="bg-Gray py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-white">
            CERTIFICACIONES
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <h4 className="font-bold text-white">Reform</h4>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="text-center">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <h4 className="font-bold text-white">Tuple</h4>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="text-center">
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <h4 className="font-bold text-white">SavvyCal</h4>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="text-center">
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
              <h4 className="font-bold text-white">Statamic</h4>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row bg-defaultBlue items-center justify-between">
        <img src={footer} alt="footer" className="m-0" />
        <div className="text-white m-4 space-y-1">
          <h4 className="text-4xl">CONTACTO</h4>
          <p className="text-sm">COMUNICATE CON NOSOTROS</p>
          <button className="border rounded hover:bg-white transition-all hover:text-defaultBlue hover:border-defaultBlue ease-out duration-300">
            <a href="#" className="text-sm items-center m-2 space-y-68 ">
              VER FORMULARIO →
            </a>
          </button>
        </div>
        <div className="text-white text-2xl m-4 space-y-2">
          <h4 className="text-sm">ADDRESS</h4>
          <p className="text-xs text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="text-white text-2xl m-4 space-y-2">
          <h4 className="text-sm">PHONE AND EMAIL</h4>
          <p className="text-xs text-gray-300">+53 6598 7412</p>
          <p className="text-xs text-gray-300">+53 7 524 89 65</p>
          <p className="text-xs text-gray-300">
            peñaempresaindustrial@gmail.com
          </p>
        </div>
        <div className="text-white text-base text-left m-4 mr-10 space-y-4 ">
          <p>¿Aún no nos sigues, suscríbete a nuestro boletín?</p>
          <p>CONTÁCTANOS</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
