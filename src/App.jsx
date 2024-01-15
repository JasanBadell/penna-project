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
          <Route path="/penna-project/about" element={<About />} />
          <Route path="/penna-project/products" element={<Products />} />
          <Route path="/penna-project/services" element={<Services />} />
          <Route path="/penna-project/brandnews" element={<BrandNews />} />
          <Route
            path="/penna-project/products/:id"
            component={<ProductSection />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
