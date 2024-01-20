import React, { useState } from "react";

const ContactForm = () => {

  return (
    <>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-defaultBlue leading-snug mx-4">
          ¿En qué podemos ayudarle, necesita de nuestras prestaciones?
        </h2>
      </div>
      <form
        action="https://formsubmit.co/c86893cdf7ab7889803213d0726c3ebe"
        method="POST"
        className="py-6 px-6 rounded-xl max-w-xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="empresa"
              className="block text-gray-700 font-bold mb-2"
            >
              Empresa:
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              required
              className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              required
              className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-gray-700 font-bold mb-2"
            >
              Teléfono:
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            htmlFor="comentario"
            className="block text-gray-700 font-bold mb-2"
          >
            Comentario:
          </label>
          <textarea
            id="comentario"
            name="comentario"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-defaultBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
          <input
            type="hidden"
            name="_next"
            value={`https://jasanbadell.github.io/penna-project`}
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Formulario de contacto!"
          />
          <input type="hidden" name="_template" value="box" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
