import React from "react";
import GreenBadge from "../Others/Badges/GreenBadge";
import BlueBadge from "../Others/Badges/BlueBadge";
import RedBadge from "../Others/Badges/RedBadge";
import Button from "../Others/Button";

const MainCard = (props) => {
  return (
    <div className="text-center p-[8px] w-[220px]">
      <div className="relative">
        {props.badge === "red" ? (
          <div className="flex absolute left-[-6px] top-[6px]">
            <RedBadge />
          </div>
        ) : props.badge === "blue" ? (
          <div className="flex absolute left-[-6px] top-[6px]">
            <BlueBadge />
          </div>
        ) : (
          <div className="flex absolute left-[-6px] top-[6px]">
            <GreenBadge />
          </div>
        )}

        <img src={props.image} className="pb-[12px]" alt="" />
      </div>
      <p className="font-bold pb-[15px] w-full max-w-[220px] p-2  ">{props.name}</p>
      <p className="font-bold pb-[21px]">{props.price}</p>
      <div className="w-full">
        <Button text={"КУПИТЬ В 1 КЛИК"} width={"w-full"} />
      </div>
    </div>
  );
};

export default MainCard;
