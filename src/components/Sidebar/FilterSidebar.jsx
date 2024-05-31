import React, { useState } from 'react';

import Button from '../Others/Button';

const Sidebar = ({ maxPrice, minPrice, colors, sizes }) => {
  const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  let titleClassList = ["font-bold", "text-[18px]", "leading-[22px]", "mb-[15px]"]
  let lableClassList = ["text-[#7B7F8D]", "text-[14px]", "leading-[19px]", "mb-[5px]"]
  let disableInputClassList = ["bg-[#F7D05E]", "w-[120px]", "h-[43px]", "text-white", "pl-[15px]"]
  let flexClassList = ["flex", "items-center", 'justify-center']

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value, 10);
    setFilterPrice((prevPrice) => {
      const updatedPrice = [...prevPrice];
      updatedPrice[index] = newValue;
      return updatedPrice;
    });
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(value) ? prev.filter((color) => color !== value) : [...prev, value]
    );
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSelectedSizes((prev) =>
      prev.includes(value) ? prev.filter((size) => size !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setFilterPrice([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  return (
    <>
      <div className={`${flexClassList.join(" ")} w-64 h-[50px] rounded-t-lg bg-[#F7D05E]`}>
        <h3 className="text-xl font-bold text-white">Фильтры</h3>
      </div>
      <div className="p-4 bg-gray-100 w-64">
        <div className="mb-6">
          <h4 className={titleClassList.join(" ")}>Цена</h4>
          <div className={`${flexClassList.join(" ")} gap-[1px]`}>
            <div>
              <p className={`${lableClassList.join(" ")} text-left`}>От</p>
              <input type="text" id="min" className={`${disableInputClassList.join(" ")} rounded-l-lg`} disabled value={filterPrice[0]} />
            </div>
            <div>
              <p className={`${lableClassList.join(" ")} text-right`}>До</p>
              <input type="text" id="max" className={`${disableInputClassList.join(" ")} rounded-r-lg`} disabled value={filterPrice[1]} />
            </div>
          </div>
          <div className="flex items-center my-2">
            <input
              type="range"
              min={minPrice}
              max={filterPrice[1]}
              value={filterPrice[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="range range-primary"
            />
            <input
              type="range"
              min={filterPrice[0]}
              max={maxPrice}
              value={filterPrice[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="range range-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <h4 className={titleClassList.join(" ")}>Цвета</h4>
          {colors.map((color, id) => (
            <div key={id} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={`Оттенки ${color.toLowerCase()}`}
                checked={selectedColors.includes(`Оттенки ${color.toLowerCase()}`)}
                onChange={handleColorChange}
                className="checkbox checkbox-primary"
              />
              <label className="ml-2">{`Оттенки ${color}`}</label>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h4 className={titleClassList.join(" ")}>Размер</h4>
          {sizes.map((size, id) => (
            <div key={id} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={`${size}`}
                checked={selectedSizes.includes(`${size}`)}
                onChange={handleSizeChange}
                className="checkbox checkbox-primary"
              />
              <label className="ml-2">{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={`${flexClassList.join(" ")} w-64 mt-[25px]`}>
        <Button width="w-[217px]" text="Сбросить"/> 
      </div>
    </>
  );
};

export default Sidebar;
