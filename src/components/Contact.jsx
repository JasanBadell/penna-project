import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import navbarImage from "../assets/NavBar_Red.png";
import { mail, phone } from "../assets/dummy";

const Contact = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col text-xs">
        <h3>
          <MdOutlineLocalPhone className="h-6 w-6 text-defaultBlue inline" />
          TELÉFONO:
        </h3>
        <ul className="flex flex-row items-center justify-between">
          {phone.map(({ idPhone, number, ext }) => (
            <p key={idPhone} className="font-medium mx-2">
              {number} ext: {ext}
            </p>
          ))}
        </ul>
        <h3>
          <CiMail className="h-6 w-6 text-defaultBlue inline" />
          EMAIL:
        </h3>
        <ul className="flex flex-row items-center justify-between">
          {mail.map(({ idMail, email }) => (
            <p key={idMail} className="font-medium mx-1 ">
              {email}
            </p>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex lg:justify-end">
        <img src={navbarImage} alt="triangulo rojo" className="w-9/12" />
      </div>
    </>
  );
};

export default Contact;
