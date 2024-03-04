import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import BrandNews from "./components/pages/BrandNews";
import MoreInfoProduct from "./components/MoreInfoProduct";
import { products } from "./assets/dummy";
import BrandNew from "./components/pages/BrandNew";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brandnews" element={<BrandNews />} />
        <Route path="/brandnew/:id" element={<BrandNew />} />
        <Route
          path={`/moreinfoproduct/${products.id}`}
          element={<MoreInfoProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
