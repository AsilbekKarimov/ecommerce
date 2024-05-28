import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Lala-logo.png";
import search from "../../images/search.png";
import favorites from "../../images/favorites.png";
import profilePic from "../../images/profile-pic.png";
import shoppingCart from "../../images/shopping-cart.png";

const Navbar = ({ auth }) => {
  // Array containing data for each link
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
    {
      to: "/profile",
      imgSrc: profilePic,
      alt: "profile-pic",
      text: auth ? "Войти" : "Зарегистрироваться",
    },
  ];

  return (
    <nav className="bg-white fixed z-50 w-full top-[69px] left-0">
      <div className="container max-w-[82%] mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative top-8 right-[240px]">
            <img src={search} alt="search" />
          </div>
          <input
            className="pr-[300px] pl-14 text-[16px] py-2 rounded-3xl bg-slate-200 "
            type="search"
            placeholder="Начните писать"
          />
          <button className="bg-yellow-500 hover:bg-slate-700 hover:text-yellow-500 duration-300 px-10 py-2 rounded-e-3xl relative bottom-10 left-[225px] font-bold text-white">
            Найти
          </button>
        </div>

        <div className="flex gap-16 items-center">
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
