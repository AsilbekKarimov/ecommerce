import React from "react";
import { Link } from "react-router-dom";

const CatalogCard = (props) => {
  return (
    <div className={`relative flex sm:flex-col lg justify-center items-center w-full lg:h-full sm:h-[375px] `}>
      <img src={props.image} className="size-[100%] lg:h-full sm:h-[300px] rounded-[10px]" alt="" />
      <div className={`dropdown dropdown-bottom bg-[#F7D05E] py-[27px] bottom-0 w-full items-center flex justify-center cursor-pointer absolute rounded-b-[10px] px-[${props.px}]`}>
        <div tabIndex={0} role="button" className="m-1 text-white">
          {props.categoryName}
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-[20px] w-full shadow bg-base-100 rounded-box">
          <li>
            <Link to="/page1">Item 1</Link>
          </li>
          <li>
            <Link to="/page2">Item 2</Link>
          </li>
          <li>
            <Link to="/page3">Item 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogCard;
