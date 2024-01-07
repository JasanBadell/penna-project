import React, { useEffect, useState } from "react";
import brand from "../assets/Logos_Penna-Project/Brand_Logo.png";
import navbar from "../assets/NavBar_Red.png";
import { Link } from "react-scroll";
import { FaTelegram, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone, MdOutlineClose } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Set togle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener(scroll, handleScroll);

    return () => {
      window.removeEventListener(scroll, handleScroll);
    };
  });

  // Navigate items array
  const navItems = [
    { link: "Quienes Somos", path: "about" },
    { link: "Nuestros Servicios", path: "services" },
    { link: "Producciones", path: "products" },
    { link: "Novedades", path: "brandnews" },
  ];

  return (
    <>
      <header className="w-full bg-white bg-transparent fixed  top-0 left-0 right-0">
        <nav
          className={`${
            isSticky
              ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
              : ""
          }`}
        >
          <div>
            <div className="flex flex-row items-center justify-between shadow-lg">
              <a
                href="/"
                className="text-2x1 font-semibold flex items-center space-x-3"
              >
                <img
                  src={brand}
                  alt=""
                  className="inline-block items-center ml-20"
                />
              </a>

              <div className="flex items-center space-x-8 m-0">
                <div className="space-x-12 hidden lg:flex items-center">
                  <button className="bg-white text-defaultBlue border-2 border-defaultBlue py-2 px-4 transition-all duration-300 rounded-lg hover:bg-defaultBlue hover:text-white">
                    SUBSCRIBIRSE
                  </button>
                </div>
                <div>
                  <p className="hidden lg:flex items-center text-defaultBlue font-bold">
                    CONTÁCTENOS
                  </p>
                  <div className="my-6 lg:flex hidden flex-wrap justify-between items-center gap-3">
                    <a href="">
                      <FaTelegram className="h-6 w-6 text-defaultBlue" />
                    </a>
                    <a href="">
                      <FaFacebook className="h-6 w-6 text-defaultBlue" />
                    </a>
                    <a href="">
                      <FaSquareXTwitter className="h-6 w-6 text-defaultBlue" />
                    </a>
                  </div>
                </div>
                <div className="lg:flex flex-col hidden text-xs">
                  <p>
                    <MdOutlineLocalPhone className="h-6 w-6 text-defaultBlue inline" />
                    TELÉFONO:
                  </p>
                  <p>+53 6598 7412 +53 7 524 89 65</p>

                  <p>
                    <CiMail className="h-6 w-6 text-defaultBlue inline" />
                    EMAIL:
                  </p>
                  <p>peñaempresaindustrial@gmail.com</p>
                </div>
                <div className="lg:flex hidden">
                  <img src={navbar} alt="triangulo rojo" className="w-full" />
                </div>
              </div>
              <div className="lg:hidden flex flex-row-reverse gap-8">
                <button
                  onClick={toggleMenu}
                  className="text-defaultBlue focus:outline-none focus:text-defaultBlue w-12"
                >
                  {isMenuOpen ? (
                    <MdOutlineClose className="h-6 w-6 " />
                  ) : (
                    <TfiMenu className="h-6 w-6 " />
                  )}
                </button>
              </div>
            </div>
            <div className="md:flex space-x-12 hidden items-center justify-end my-0">
              <ul className="lg:flex space-x-12 hidden p-5">
                {navItems.map(({ link, path }) => (
                  <Link
                    to={path}
                    spy
                    smooth
                    offset={-100}
                    key={path}
                    className="block text-xxl text-defaultBlue hover:text-white hover:bg-defaultBlue first:font-medium"
                    href={path}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
              <div className="lg:flex  hidden p-5 bg-defaultBlue">
                <div className="rounded-md">
                  <div className="flex border">
                    <div className="flex w-10 items-center justify-center rounded-lg border-white bg-defaultBlue">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="pointer-events-none absolute w-5 fill-white transition"
                      >
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="w-full max-w-[160px] bg-defaultBlue pl-2 text-base text-white  outline-0"
                      placeholder="Buscar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:hidden px-4 mt-16 py-8 bg-defaultBlue m-2 ${
              isMenuOpen ? "block fixed top-5 right-0 left-0 " : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-xxl text-white hover:text-defaultGray hover:bg-defaultBlue first:font-medium"
                href={path}
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
