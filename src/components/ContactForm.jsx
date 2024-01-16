import React, { useState } from "react";
import { Resend } from "resend";

const resend = new Resend("re_Ahy2iTnc_DRJ6dWHF9rxUFdd48JACawtM");

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [errores, setErrores] = useState({});

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmpresaChange = (e) => {
    setEmpresa(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const validarFormulario = () => {
    const errores = {};

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      errores.correo = "Ingrese un correo electrónico válido";
    }

    const telefonoRegex = /^\d{7,}$/;
    if (!telefonoRegex.test(telefono)) {
      errores.telefono = "Ingrese un número de teléfono válido";
    }

    return Object.keys(errores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const esFormularioValido = validarFormulario();

    if (esFormularioValido) {
      try {
        const { data, error } = await resend.emails.send({
          from: `${correo}`,
          to: ["jasanbadelldev@gmail.com"],
          subject: "Formulario de contacto",
          html: `<p>${comentario}</p>`,
        });

        if (error) {
          console.error({ error });
        } else {
          console.log({ data });
          setNombre("");
          setEmpresa("");
          setCorreo("");
          setTelefono("");
          setComentario("");
          setErrores({});
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    } else {
      setErrores(errores);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-defaultBlue leading-snug mx-4">
          ¿En qué podemos ayudarle, necesita de nuestras prestaciones?
        </h2>
      </div>
      <form
        id="correos"
        onSubmit={handleSubmit}
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
              value={nombre}
              onChange={handleNombreChange}
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
              value={empresa}
              onChange={handleEmpresaChange}
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
              value={correo}
              onChange={handleCorreoChange}
              required
              className={`w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                errores.correo ? "border-red-500" : ""
              }`}
            />
            {errores.correo && (
              <p className="text-red-500 text-sm">{errores.correo}</p>
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
              value={telefono}
              onChange={handleTelefonoChange}
              required
              className={`w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                errores.telefono ? "border-red-500" : ""
              }`}
            />
            {errores.telefono && (
              <p className="text-red-500 text-sm">{errores.telefono}</p>
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
            value={comentario}
            onChange={handleComentarioChange}
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
        </div>
      </form>
    </>
  );
};

export default Formulario;
