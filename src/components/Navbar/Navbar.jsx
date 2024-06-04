import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../images/Lala-logo.png";
import search from "../../images/search.png";
import favorites from "../../images/favorites.png";
import shoppingCart from "../../images/shopping-cart.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        try {
          const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
          setSuggestions(response.data.products);
        } catch (error) {
          console.error("Error fetching search suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const links = [
    {
      to: "/favorites",
      imgSrc: favorites,
      alt: "favorites",
      text: "Избранное",
    },
    {
      to: "/cart",
      imgSrc: shoppingCart,
      alt: "shopping-cart",
      text: "Корзина",
    },
  ];

  return (
    <nav className="bg-white fixed z-40 w-full top-[69px] left-0">
      <div className="container max-w-[82%] mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col items-center relative">
          <div className="relative top-8 right-[240px]">
            <img src={search} alt="search" />
          </div>
          <input
            className="min-w-[520px] w-full pl-14 text-[16px] py-2 rounded-3xl bg-slate-200 overflow-y-auto"
            type="search"
            placeholder="Начните писать"
            value={query}
            onChange={handleInputChange}
          />
          <button className="bg-yellow-500 hover:bg-slate-700 hover:text-yellow-500 duration-300 px-10 py-2 rounded-e-3xl relative bottom-10 left-[225px] font-bold text-white"
            onClick={handleInputChange}>
            Найти
          </button>
          {suggestions.length > 0 && (
            <div className="absolute top-[100%] mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion.id}
                  to={`/product/${suggestion.id}`}
                  className="flex items-center p-2 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="product flex items-center">
                      <img src={suggestion.thumbnail} alt={suggestion.title} className="w-10 h-10 mr-2" />
                      <span>{suggestion.title}</span>
                    </div>
                    <div className="icon-arrow">
                      <MdOutlineKeyboardArrowRight className="text-xl" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-[55%] items-center">
          {links.map((link, index) => (
            <Link
              className="flex flex-col text-[10px] font-normal text-center items-center gap-2"
              key={index}
              to={link.to}
            >
              <div>
                <img src={link.imgSrc} alt={link.alt} />
              </div>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
