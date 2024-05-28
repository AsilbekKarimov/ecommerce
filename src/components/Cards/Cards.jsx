import React from "react";
import MainCard from "./MainCard";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    { badge: "red", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', image: "/catalog-images/card-img.png" },
    { badge: "red", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', image: "/catalog-images/card-img.png" },
    { badge: "blue", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', image: "/catalog-images/card-img.png" },
    { badge: "blue", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', image: "/catalog-images/card-img.png" },
    { badge: "green", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', image: "/catalog-images/card-img.png" },
    { badge: "blue", name: 'Боди без рукавов "ФРУК-ТИК", розовый', price: '349 ₽/шт', discount: '10%', image: "/catalog-images/card-img.png" }
  ];

  const truncateDescription = (name, maxLength) =>
    name.length > maxLength
      ? `${name.substring(0, maxLength - 3)}...`
      : name;
  
  return (
    <div className=" mx-auto flex flex-wrap py-[60px] bg-[#F4F4F4]">
      <div className="w-full max-w-[90%] flex flex-wrap mx-auto justify-center">
      {cardData.map((item, id) => (
        <Link to={'/info'}><MainCard key={id} image={item.image} badge={item.badge} price={item.price} name={truncateDescription(item.name, 38)} /></Link>
      ))}
      </div>
    </div>
  );
};

export default Cards;
