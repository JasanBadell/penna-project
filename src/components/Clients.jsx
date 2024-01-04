import React from "react";
import home from "../assets/home.jpg";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-defaultBlue">
        <div className="mt-12">
          <p className="text-3xl md:text-5xl font-extralight text-white leading-snug">
            NUEVAS OPORTUNIDADES
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white md:w-full leading-snug">
            CONOCE A NUESTROS SOCIOS
          </h3>
        </div>
        <div className="flex flex-row mt-8 items-center m-4">
          <p className="text-2xl text-white w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            facilis deleniti distinctio voluptatibus, pariatur iusto doloremque
            dolor voluptatum adipisci reiciendis quidem odio qui ex cumque?
            Soluta necessitatibus fugiat commodi. Cumque.
          </p>
          <img src={home} alt="img" className="w-1/3" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 ">
        <div className="mt-12">
          <p className="text-3xl md:text-5xl font-extralight text-defaultBlue leading-snug">
            DENTRO Y FUERA DE FRONTERA
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue md:w-full leading-snug">
            CLIENTES
          </h3>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <h4 className="font-bold">SavvyCal</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <h4 className="font-bold ">Transistor</h4>
            <p className="text-sm ">
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
            <h4 className="font-bold">SavvyCal</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <h4 className="font-bold">Reform</h4>
            <p className="text-sm ">
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
            <h4 className="font-bold">Tuple</h4>
            <p className="text-sm ">
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
            <h4 className="font-bold">SavvyCal</h4>
            <p className="text-sm ">
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
            <h4 className="font-bold ">Statamic</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <h4 className="font-bold ">Transistor</h4>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
