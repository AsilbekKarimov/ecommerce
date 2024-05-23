import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-colors">
      <Link to={"/"}>{text}</Link>
    </button>
  );
};

export default Button;
