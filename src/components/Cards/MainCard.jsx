import React from "react";
import GreenBadge from "../Others/Badges/GreenBadge";
import BlueBadge from "../Others/Badges/BlueBadge";
import RedBadge from "../Others/Badges/RedBadge";

const MainCard = (props) => {
  return (
    <div className="w-1/6 text-center p-[8px]">
      <div className="relative">
        {props.red ? (
          <div className="flex absolute left-[-6px] top-[6px]">
            <RedBadge />
          </div>
        ) : props.blue ? (
          <div className="flex absolute left-[-6px] top-[6px]">
            <BlueBadge />
          </div>
        ) : (
          <div className="flex absolute left-[-6px] top-[6px]">
            <GreenBadge />
          </div>
        )}

        <img src="/catalog-images/card-img.png" className="pb-[12px]" alt="" />
      </div>
      <p className="font-bold pb-[15px]">{props.name}</p>
      <p className="font-bold pb-[21px]">{props.price}</p>
      <button className="w-full bg-primary rounded-full items-center justify-center flex text-white font-bold py-[12px] text-[12px]">
        КУПИТЬ В ОДИН КЛИК
      </button>
    </div>
  );
};

export default MainCard;
