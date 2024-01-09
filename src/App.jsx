import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import BrandNews from "./components/pages/BrandNews";
import { EVENTS } from "./const";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);
  return (
    <>
      <Navbar />
      {currentPath === "/" && <Home />}
      {currentPath === "/about" && <About />}
      {currentPath === "/services" && <Services />}
      {currentPath === "/products" && <Products />}
      {currentPath === "/brandnews" && <BrandNews />}
      <Footer />
    </>
  );
}

export default App;
