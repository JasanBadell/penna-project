/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  products,
  aboutColumn1,
  aboutColumn2,
  sections,
  brandNews,
  client,
  homecarrusel,
  certificated,
  navItems,
} from "../assets/dummy";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setActiveSearch([]);
      setIsSearchOpen(false);
      return;
    }

    const filteredResults = [
      ...products.filter((w) => w.toString().includes(searchTerm)).slice(0, 8),
      ...aboutColumn1
        .filter((w) => w.toString().includes(searchTerm))
        .slice(0, 8),
      ...aboutColumn2
        .filter((w) => w.toString().includes(searchTerm))
        .slice(0, 8),
      ...sections.filter((w) => w.toString().includes(searchTerm)).slice(0, 8),
      ...brandNews.filter((w) => w.toString().includes(searchTerm)).slice(0, 8),
      ...client.filter((w) => w.toString().includes(searchTerm)).slice(0, 8),
      ...homecarrusel
        .filter((w) => w.toString().includes(searchTerm))
        .slice(0, 8),
      ...certificated
        .filter((w) => w.toString().includes(searchTerm))
        .slice(0, 8),
      ...navItems.filter((w) => w.toString().includes(searchTerm)).slice(0, 8),
    ];

    setActiveSearch(filteredResults);
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <form className="lg:flex p-5 bg-defaultBlue">
        <div className="rounded-md">
          <div className="flex border">
            <button
              type="submit"
              className="flex w-10 items-center justify-center rounded-lg border-white bg-defaultBlue"
              onClick={(e) => e.preventDefault()}
            >
              <AiOutlineSearch color="white" />
            </button>
            <input
              type="text"
              className="w-full max-w-[160px] bg-defaultBlue pl-2 text-base text-white outline-0"
              onChange={handleSearch}
              placeholder="Buscar"
            />
          </div>
          {isSearchOpen && activeSearch.length > 0 && (
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-defaultBlue bg-opacity-70 z-50">
              <div className="max-w-[600px] w-11/12 bg-white p-4 rounded-md">
                <button
                  className="absolute top-4 right-4 text-gray-500"
                  onClick={handleCloseSearch}
                >
                  Cerrar
                </button>
                <ul className="space-y-2">
                  {activeSearch.map((s, index) => (
                    <li key={index}>
                      <Link
                        href={`#${s}`}
                        className="text-blue-500 hover:underline"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;
