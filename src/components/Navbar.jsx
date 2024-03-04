/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSquareXTwitter,
  FaBars,
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareFacebook,
} from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import brandLogo from "../assets/Logos_Penna-Project/Brand_Logo.png";
import Search from "./Search";
import { navItems } from "../assets/dummy";
import Suscription from "./Suscription";
import Contact from "./Contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleClick = (event) => {
      if (isMenuOpen) {
        handleOutsideClick(event);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navbarRef = useRef(null);

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

  const handleOpenForm = () => {
    setIsVisible(!isVisible);
  };

  const handleCloseForm = () => {
    setIsVisible(isVisible);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos > currentScrollPos;
    setIsSticky(currentScrollPos > 0 && isScrollingUp);
    setPrevScrollPos(currentScrollPos);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 right-0 bg-white border-b-0 z-30 ${
          isSticky ? "sticky border-b bg-white duration-300" : ""
        }`}
      >
        <nav>
          <div className="flex items-center justify-between shadow-lg">
            <Link to="/penna-project/" className="flex items-center space-x-3">
              <img
                src={brandLogo}
                alt="Logo Empresa Industrial Ramon Peña"
                className="lg:inline-block w-auto my-4 mx-4 lg:mx-20"
              />
            </Link>
            <div className="flex items-center space-x-8">
              <div className="hidden lg:flex items-center space-x-12">
                <button
                  className="bg-white text-defaultBlue border-2 border-defaultBlue py-2 px-4 transition-all duration-300 rounded-lg hover:bg-defaultBlue hover:text-white"
                  onClick={handleOpenForm}
                >
                  SUSCRIBIRSE
                </button>
              </div>

              <div>
                <p className="hidden lg:flex items-center justify-center text-defaultBlue font-bold">
                  CONTÁCTENOS
                </p>
                <div className="hidden lg:flex flex-row items-center justify-center my-2 gap-3">
                  <Link to="https://www.facebook.com/ramonpeña">
                    <FaSquareFacebook className="h-6 w-6 text-defaultBlue" />
                  </Link>
                  <Link to="https://twitter.com/ramonpeña">
                    <FaSquareXTwitter className="h-6 w-6 text-defaultBlue" />
                  </Link>
                  <Link to="https://www.youtube.com/@ramonpeña">
                    <FaSquareYoutube className="h-6 w-6 text-defaultBlue" />
                  </Link>
                  <Link to="https://www.instagram.com/ramonpeña/">
                    <FaSquareInstagram className="h-6 w-6 text-defaultBlue" />
                  </Link>
                </div>
              </div>
              <Contact />
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
              {navItems.map(({ id, link, path }) => (
                <button className="hover:bg-defaultBlue text-defaultBlue hover:text-white transition-all duration-300 ease-in">
                  <Link
                    to={path}
                    key={id}
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
              isMenuOpen ? "block fixed top-5 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                className="block text-2xl text-white hover:text-defaultGray hover:bg-defaultBlue first:font-medium"
                onClick={handleLinkClick}
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div>
        <Suscription show={isVisible} close={handleCloseForm} />
      </div>
    </>
  );
};

export default Navbar;
