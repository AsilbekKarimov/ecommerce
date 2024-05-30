import React, { useContext, useEffect, useState } from "react";
import MainCard from "./MainCard";
import { Link } from "react-router-dom";
import TextTitle from "../TextTitle/TextTitle";
import NumberContext from "../../Context/CardContext";

const Cards = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function CardData() {
      try {
        let request = await fetch(
          "https://6651e1d520f4f4c44279069b.mockapi.io/api/v1/Cards"
        );
        let response = await request.json();
        setCard(response);
        setLoading(true);
        console.log(response);
      } catch (error) {
        console.log("Error is caught");
        setLoading(true);
      }
    }
    CardData();
  }, []);

  const truncateDescription = (name, maxLength) =>
    name.length > maxLength ? `${name.substring(0, maxLength - 3)}...` : name;

  const { number, setNumber } = useContext(NumberContext);

  return (
    <div className="px-[99px] mx-auto flex flex-wrap py-[35px] bg-[#F4F4F4] flex-col mt-[170px]">
      <div className="mb-[20px]">
        <TextTitle text={"Ранее вы смотрели"} />
      </div>

      <div className="w-full flex flex-wrap mx-auto justify-center">
        {card.slice(0, 6).map((item, id) => (
          <Link key={id} to={`/info/${item.id}`} onClick={() => setNumber(item.id)}>
            <MainCard
              image={item.image}
              badge={item.badge}
              price={item.price}
              name={truncateDescription(item.name, 38)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
