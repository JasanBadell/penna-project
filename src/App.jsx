import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import BrandNews from "./components/pages/BrandNews";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/penna-project/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/brandnews" element={<BrandNews />} />
          <Route path="/products/:id" component={<ProductSection />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
