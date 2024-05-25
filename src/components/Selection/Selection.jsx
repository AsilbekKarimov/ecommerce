import React from "react";
import Card from "./SelectionCars";


import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
const cardData = [
  { id: 1, image: image1, title: "Подборка №106" },
  { id: 2, image: image2, title: "Подборка №106" },
  { id: 3, image: image3, title: "Подборка №106" },
  { id: 4, image: image4, title: "Подборка №106" },
  { id: 5, image: image4, title: "Подборка №106" },
];



const Selection = () => {
  return (
    <div className="flex container mx-auto max-w-[73.5%] gap-[20px]">
      {cardData.map((card) => (
        <Card key={card.id} image={card.image} title={card.title}/>
      ))}
    </div>
  );
};

export default Selection;
