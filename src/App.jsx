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
        <Route path="/penna-project/" element={<Home />} />
        <Route path="/penna-project/about" element={<About />} />
        <Route path="/penna-project/products" element={<Products />} />
        <Route path="/penna-project/services" element={<Services />} />
        <Route path="/penna-project/brandnews" element={<BrandNews />} />
        <Route path="/penna-project/brandnew/:id" element={<BrandNew />} />
        <Route
          path={`/penna-project/moreinfoproduct/${products.id}`}
          element={<MoreInfoProduct />}
        />
        {/* <Route path={products.path} element={<Products />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
