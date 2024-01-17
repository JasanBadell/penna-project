import React, { useState } from "react";

const SuscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Restablecer el estado de isValidEmail a true al cambiar el correo electrónico
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    sendWelcomeEmail(email); // Llama a la función para enviar el correo de bienvenida

    close();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendWelcomeEmail = (email) => {
    fetch("https://api.resend.com/emails ", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Correo de bienvenida enviado correctamente");
        } else {
          throw new Error("Error al enviar el correo de bienvenida");
        }
      })
      .catch((error) => {
        console.error("Error al enviar el correo de bienvenida:", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col ">
        <div>
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-defaultBlue focus:border-transparent"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-defaultBlue text-white rounded-md focus:outline-none"
          >
            Suscribirse
          </button>
        </div>
        <div>
          {!isValidEmail && (
            <p className="text-sm text-defaultRed mt-2">
              Por favor, ingresa un correo electrónico válido.
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default SuscribeForm;
