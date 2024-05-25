import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, width }) => {
  return (
    <button
      className={`${width} "px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-3 bg-primary text-xs text-white font-bold rounded-full hover:bg-secondary active:scale-90 transition duration-100 transition-colors"`}
    >
      <Link to={"/"}>{text}</Link>
    </button>
  );
};

export default Button;
