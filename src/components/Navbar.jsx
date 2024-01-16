/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaFacebook,
  FaSquareXTwitter,
  FaBars,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone, MdOutlineClose } from "react-icons/md";

import brandLogo from "../assets/Logos_Penna-Project/Brand_Logo.png";
import navbarImage from "../assets/NavBar_Red.png";
import Search from "./Search";
import { navItems } from "../assets/dummy";
import SubscribeModal from "./SubscribeModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 bg-white border-b-0 z-30 ${
          isSticky ? "sticky border-b bg-white duration-300" : ""
        }`}
      >
        <nav>
          <div className="flex items-center justify-between shadow-lg">
            <Link to="/penna-project/" className="flex items-center space-x-3">
              <img
                src={brandLogo}
                alt="Brand Logo"
                className="lg:inline-block w-auto my-4 mx-4 lg:mx-20"
              />
            </Link>
            <div className="flex items-center space-x-8">
              <div className="hidden lg:flex items-center space-x-12">
                <button
                  className="bg-white text-defaultBlue border-2 border-defaultBlue py-2 px-4 transition-all duration-300 rounded-lg hover:bg-defaultBlue hover:text-white"
                  onClick={handleOpen}
                >
                  SUSCRIBIRSE
                </button>
              </div>

              <div>
                <p className="hidden lg:flex items-center justify-center text-defaultBlue font-bold">
                  CONTÁCTENOS
                </p>
                <div className="hidden lg:flex flex-row items-center justify-center my-2 gap-3">
                  <Link to="https://www.faceboock.com/SIME.CU">
                    <FaFacebook className="h-6 w-6 text-defaultBlue" />
                  </Link>
                  <Link to="https://twitter.com/EIRP2017">
                    <FaSquareXTwitter className="h-6 w-6 text-defaultBlue" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex flex-col text-xs">
                <p>
                  <MdOutlineLocalPhone className="h-6 w-6 text-defaultBlue inline" />
                  TELÉFONO:
                </p>
                <p>+53 7 797 47 77 y +53 7 797 79 13</p>
                <p>
                  <CiMail className="h-6 w-6 text-defaultBlue inline" />
                  EMAIL:
                </p>
                <p>peñaempresaindustrial@gmail.com</p>
              </div>
              <div className="hidden lg:flex lg:justify-end">
                <img
                  src={navbarImage}
                  alt="triangulo rojo"
                  className="w-8/12"
                />
              </div>
            </div>
            <div className="lg:hidden flex">
              <button
                onClick={toggleMenu}
                className="text-defaultBlue focus:outline-none focus:text-defaultBlue w-12"
              >
                {isMenuOpen ? (
                  <MdOutlineClose className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`md:flex hidden items-strech justify-end ${
              isSticky ? "sticky top-0 bg-white" : ""
            }`}
          >
            <ul className="lg:flex lg:items-strech lg:justify-between hidden z-20 ">
              {navItems.map(({ link, path }) => (
                <button className="hover:bg-defaultBlue text-defaultBlue hover:text-white transition-all duration-300 ease-in">
                  <Link
                    to={path}
                    key={path}
                    className="block text-xxl  mx-10 first:font-medium"
                  >
                    {link}
                  </Link>
                </button>
              ))}
              <Search />
            </ul>
          </div>
          <div
            className={`lg:hidden px-4 mt-20 text-center py-8 bg-defaultBlue m-2 ${
              isMenuOpen ? "block fixed top-5 right-0 left-0 " : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                className="block text-2xl text-white hover:text-defaultGray hover:bg-defaultBlue first:font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* <SubscribeModal show={isVisible} close={handleClose} /> */}
    </>
  );
};

export default Navbar;
