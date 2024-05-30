import React, { useState } from 'react';

const FilterSidebar = ({ maxPrice, minPrice, colors, sizes, categories }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const [activeColors, setActiveColors] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleActiveColor = (color) => {
    setActiveColors(prevState =>
      prevState.includes(color)
        ? prevState.filter(c => c !== color)
        : [...prevState, color]
    );
  };

  const toggleActiveSize = (size) => {
    setActiveSizes(prevState =>
      prevState.includes(size)
        ? prevState.filter(s => s !== size)
        : [...prevState, size]
    );
  };

  const toggleActiveCategory = (category) => {
    setActiveCategories(prevState =>
      prevState.includes(category)
        ? prevState.filter(c => c !== category)
        : [...prevState, category]
    );
  };

  return (
    <div className="flex flex-col bg-white w-80 h-screen p-4 overflow-y-auto">
      <div className="mb-5">
        <p className="text-lg font-bold">Price</p>
        <div className="flex flex-col mt-3">
          <input type="range" min={minPrice} max={maxPrice} value={min} className="range-warning" onChange={(e) => setMin(e.target.value)}/>
          <input type="range" min={minPrice} max={maxPrice} value={max} className="range-warning" onChange={(e) => setMax(e.target.value)}/>
          <div className="flex justify-between">
            <span>${min}</span>
            <span>${max}</span>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-lg font-bold">Colors</p>
        <div className="flex flex-col mt-3">
          {colors.map((color) => (
            <label key={color} className="label cursor-pointer">
              <span className="label-text">{color}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={activeColors.includes(color)}
                onChange={() => toggleActiveColor(color)}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <p className="text-lg font-bold">Sizes</p>
        <div className="flex flex-col mt-3">
          {sizes.map((size) => (
            <label key={size} className="label cursor-pointer">
              <span className="label-text">{size}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={activeSizes.includes(size)}
                onChange={() => toggleActiveSize(size)}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <p className="text-lg font-bold">Categories</p>
        <div className="flex flex-col mt-3">
          {categories.map((category) => (
            <label key={category} className="label cursor-pointer">
              <span className="label-text">{category}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={activeCategories.includes(category)}
                onChange={() => toggleActiveCategory(category)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
