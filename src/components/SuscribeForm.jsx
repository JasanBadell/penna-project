import React, { useState } from "react";

const SuscribeForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Por favor, ingrese su correo electrónico",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Por favor, ingrese un correo electrónico válido",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail();

    // Verifica si hay errores de validación
    if (Object.keys(errors).length === 0) {
      const submittedEmails =
        JSON.parse(localStorage.getItem("submittedEmails")) || [];

      if (submittedEmails.includes(email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Este correo electrónico ya ha sido enviado anteriormente",
        }));
      } else {
        // Agrega el correo electrónico a los enviados previamente
        submittedEmails.push(email);
        localStorage.setItem(
          "submittedEmails",
          JSON.stringify(submittedEmails)
        );

        // Envía el formulario
        e.target.submit();
      }
    }
  };

  return (
    <>
      <form
        action="https://formsubmit.co/c86893cdf7ab7889803213d0726c3ebe"
        method="POST"
        className="my-4 lg:my-4 flex flex-col justify-center"
      >
        <div className="flex flex-col gap-4 items-center">
          <input
            type="email"
            name="email"
            required
            placeholder="Correo electrónico"
            className={`px-8 py-2 border border-gray-300 rounded-md lg:mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-defaultBlue focus:border-transparent ${
              errors.email ? "border-red-500" : ""
            }`}
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <button
            type="submit"
            className="py-2 bg-defaultBlue text-white w-full rounded-md focus:outline-none"
          >
            Suscribirse
          </button>
        </div>
        <input type="hidden" name="_subject" value="NUEVO SUSCRIPTOR!" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Gracias por suscribirte al boletin de noticias de la Empresa Industrial Ramón Peña. Espera noticias pronto!"
        />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          value={`https://jasanbadell.github.io/penna-project/`}
        />
      </form>
    </>
  );
};

export default SuscribeForm;
