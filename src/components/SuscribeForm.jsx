import React from "react";
import { parsePath } from "react-router-dom";

const SuscribeForm = () => {
  const home = parsePath("/penna-project/");
  return (
    <>
      <form
        action="https://formsubmit.co/c86893cdf7ab7889803213d0726c3ebe"
        method="POST"
        className="mt-4 flex flex-col "
      >
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="px-4 py-2 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-defaultBlue focus:border-transparent"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-defaultBlue text-white rounded-md focus:outline-none"
          >
            Suscribirse
          </button>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://jasanbadell.github.io/penna-project/"
        />
        <input type="hidden" name="_subject" value="NUEVO SUSCRIPTOR!" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Gracias por suscribirte al boletin de noticias de la Empresa Industrial Ramón Peña. Espera noticias pronto!"
        />
        <input type="hidden" name="_template" value="box" />
        
      </form>
    </>
  );
};

export default SuscribeForm;
