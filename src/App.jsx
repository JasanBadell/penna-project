import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import BrandNews from "./components/BrandNews";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  const NAVIGATION_EVENT = "pushstate";

  function navigate(href) {
    window.history.pushState({}, "", href);
    const navigationEnvent = new Event(NAVIGATION_EVENT);
    window.dispatchEvent(navigationEnvent);
  }
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return (
    <>
      <Navbar />
      {currentPath === "/" && <Home />}
      {currentPath === "/about" && <About />}
      {currentPath === "/services" && <Services />}
      {currentPath === "/product" && <Products />}
      {currentPath === "/team" && <Team />}
      {currentPath === "/brandnews" && <BrandNews />}
      <Footer />
    </>
  );
}

export default App;
