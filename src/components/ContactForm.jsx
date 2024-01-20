import React, { useState } from "react";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (nombre.trim().length < 5) {
      errors.nombre = "El nombre debe tener al menos 5 caracteres.";
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      errors.nombre = "El nombre solo debe contener letras.";
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      errors.correo = "El correo no es válido.";
    }

    if (!/^\d{8,11}$/.test(telefono)) {
      errors.telefono = "El teléfono debe tener entre 8 y 11 números.";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Enviar formulario
      console.log("Formulario enviado");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-defaultBlue leading-snug mx-4">
          ¿En qué podemos ayudarle? ¿Necesita de nuestras prestaciones?
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="py-6 px-6 rounded-xl max-w-xl">
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className={`w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                errors.nombre ? "border-red-500" : ""
              }`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
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
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
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
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className={`w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                errors.correo ? "border-red-500" : ""
              }`}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
            )}
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className={`w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                errors.telefono ? "border-red-500" : ""
              }`}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
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
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
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
