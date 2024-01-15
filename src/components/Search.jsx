import React, { useState } from "react";
import { products } from "../assets/dummy";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      setActiveSearch([]);
      setSearchOpen(false);
      return;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subCategory.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    setActiveSearch(filteredProducts);
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <form className="lg:flex p-5 bg-defaultBlue">
        <div className="flex flex-col gap-4 relative">
          <div className="flex border rounded-lg">
            <button className="flex w-10 items-center justify-center rounded-xl border-white bg-defaultBlue">
              <AiOutlineSearch color="white" />
            </button>
            <input
              type="search"
              placeholder="Buscar"
              className="w-full max-w-[188px] bg-defaultBlue pl-2 text-base text-white outline-0 rounded-xl"
              onChange={handleSearch}
            />
          </div>
          {activeSearch.length > 0 && searchOpen && (
            <div className="absolute top-14 left-0 right-0 bg-defaultGray text-defaultBlue rounded-xl flex flex-col gap-2">
              {activeSearch.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={handleCloseSearch}
                  className="p-4 border-b hover:bg-gray-300"
                >
                  <div>
                    <span>{product.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;
