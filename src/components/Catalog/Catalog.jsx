import React from "react";
import CatalogCard from "./CatalogCard";
import DividerCustom from "../Others/Divider/Divider";

const Catalog = () => {
  return (
    <div className="sm:w-full lg:w-[90%] mx-auto">

      <div className="flex gap-[20px] lg:flex-row sm:flex-col">
        <div className="flex-1">
          <CatalogCard image={"/catalog-images/4.png"} categoryName={"АКСЕССУАРЫ"} />
        </div>

        <div className="flex flex-col gap-[20px] flex-1">
          <div flex-1>
            <CatalogCard image={"/catalog-images/3.png"} categoryName={"КОНВЕРТЫ И ПЛЕДЫ"} />
          </div>
          <div className="flex gap-[28px] lg:flex-row sm:flex-col flex-1">
            <CatalogCard image={"/catalog-images/5.png"} categoryName={"ОДЕЖДА"} />
            <CatalogCard image={"/catalog-images/1.png"} categoryName={"ПЕЛЕНКИ"} />
          </div>
        </div>

        <div className="flex-1">
          <CatalogCard image={"/catalog-images/2.png"} categoryName={"ГОТОВЫЕ ПОДБОРКИ"} />
        </div>

        <div>
          <CatalogCard
            image={"/catalog-images/4.png"}
            categoryName={"АКСЕССУАРЫ"}
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          <div>
            <CatalogCard
              image={"/catalog-images/3.png"}
              categoryName={"КОНВЕРТЫ И ПЛЕДЫ"}
            />
          </div>
          <div className="flex gap-[28px] lg:flex-row sm:flex-col">
            <CatalogCard
              image={"/catalog-images/5.png"}
              categoryName={"ОДЕЖДА"}
            />
            <CatalogCard
              image={"/catalog-images/1.png"}
              categoryName={"ПЕЛЕНКИ"}
            />
          </div>
        </div>


        <div>
          <CatalogCard
            image={"/catalog-images/2.png"}
            categoryName={"ГОТОВЫЕ ПОДБОРКИ"}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
