import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Team from "./components/pages/Team";
import BrandNews from "./components/pages/BrandNews";

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
