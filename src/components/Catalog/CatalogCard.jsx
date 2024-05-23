import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";

const CatalogCard = (props) => {
  return (
    <div className={`relative flex sm:flex-col lg justify-center items-center w-full lg:h-full sm:h-[375px] `}>
      <img src={props.image} className="size-[100%] lg:h-full sm:h-[300px] z-0 rounded-[10px]" alt="" />
      <div className={`dropdown dropdown-bottom bg-primary bottom-0 w-full z-10 items-center flex justify-center cursor-pointer absolute rounded-b-[10px] px-[${props.px}]`}>
        <div tabIndex={0} role="button" className="m-1 text-white w-full justify-center h-full py-[20px] flex items-center font-semibold gap-1">
          {props.categoryName}<BiSolidDownArrow className="text-[10px]"/>
        </div>
        <ul tabIndex={0} className="dropdown-content z-10 menu px-0 py-[10px] bg-white w-full shadow rounded-[5px]">
          <li className="hover:bg-primary hover:font-bold transition duration-300 w-full">
            <Link to="/#"><p>Item 1</p></Link>
          </li>
          <li className="hover:bg-primary hover:font-bold transition duration-300 w-full">
            <Link to="/#"><p>Item 2</p></Link>
          </li>
          <li className="hover:bg-primary hover:font-bold transition duration-300 w-full">
            <Link to="/#"><p>Item 3</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogCard;
