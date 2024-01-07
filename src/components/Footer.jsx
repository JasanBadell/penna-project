import React from "react";
import footer from "../assets/Footer_IMG.png";
import transfermovil from "../assets/Logos_Penna-Project/Transfermovil_logo.svg";
import paginasAmarillas from "../assets/Logos_Penna-Project/PáginasAmarillas_logo.svg";
import apknauta from "../assets/Logos_Penna-Project/APKNauta_logo.svg";
import espacio3w from "../assets/Logos_Penna-Project/Espacio3W_logo.png";

const Footer = () => {
  const certificated = [
    {
      logo: `${transfermovil}`,
      name: "Transfermovil",
      description:
        "Descargue la apk Transfermóvil. Aplicación ideal para realizar los pagos en línea.",
    },
    {
      logo: `${paginasAmarillas}`,
      name: "Páginas Amarillas",
      description:
        "20 años con Páginas Amarillas junto a la familia cubana, dándole a conocer.",
    },
    {
      logo: `${apknauta}`,
      name: "APK Nauta",
      description:
        "Descargue APK Nauta. Ideal para conectarse de forma fácil y segura en puntos Wi-Fi.",
    },
    {
      logo: `${espacio3w}`,
      name: "Espacio 3W",
      description:
        "El sitio indicado para solicitar un dominio nat.cu y paquetes de hospedaje web.",
    },
  ];
  return (
    <>
      <div className="bg-Gray">
        <div className="mx-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
            <h2 className="text-center text-4xl font-semibold leading-8 text-white">
              CERTIFICACIONES
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {certificated.map(({ logo, name, description }) => (
                // eslint-disable-next-line react/jsx-key
                <div className="text-center">
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 items-center mb-4"
                    src={logo}
                    alt={name}
                    width="158"
                    height="48"
                  />
                  <h4 className="font-bold text-white mb-4">{name}</h4>
                  <p className="text-sm text-white mb-16">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row bg-defaultBlue items-center justify-between">
        <img src={footer} alt="footer" className="m-0 w-1/6 pt-20" />
        <div className="flex flex-row mx-10 mt-20 gap-8">
          <div className="text-white space-y-1 -mt-8">
            <h4 className="text-4xl">CONTACTO</h4>
            <p className="text-sm">COMUNICATE CON NOSOTROS</p>
            <button className="border rounded hover:bg-white transition-all hover:text-defaultBlue hover:border-defaultBlue ease-out duration-300">
              <a href="#" className="text-sm items-center m-2 ">
                VER FORMULARIO →
              </a>
            </button>
          </div>
          <div className="text-white text-2xl space-y-2">
            <h4 className="text-sm">ADDRESS</h4>
            <p className="text-xs text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-white text-2xl space-y-2">
            <h4 className="text-sm">PHONE AND EMAIL</h4>
            <p className="text-xs text-gray-300">+53 6598 7412</p>
            <p className="text-xs text-gray-300">+53 7 524 89 65</p>
            <p className="text-xs text-gray-300">
              peñaempresaindustrial@gmail.com
            </p>
          </div>
          <div className="text-white text-base text-left mr-10 space-y-4 w-1/4">
            <p>¿Aún no nos sigues, suscríbete a nuestro boletín?</p>
            <p>CONTÁCTANOS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
