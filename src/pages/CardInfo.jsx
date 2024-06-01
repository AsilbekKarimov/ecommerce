import React, { useEffect, useState } from "react";
import Button from "../components/Others/Button";
import BlueBadge from "../components/Others/Badges/BlueBadge";
import CardInfoSwiper from "../components/SwiperJS/CardInfoSwiper";
import Cards from "../components/Cards/Cards";

const CardInfo = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState(73); // Default selected size

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

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="mt-[170px]">
      <div className="w-[100%] max-w-[90%] mx-auto">
        <div className="flex lg:flex-row sm:flex-col lg:items-start gap-[20px]">
          <div className="flex sm:justify-center lg:justify-start ">
            <div className="w-[700px] h-[300px]">
              {
                loading
                ?
                <CardInfoSwiper />
                :
                <div className="flex w-[200px] mx-auto">
                  <span className="loading loading-spinner loading-lg h-[400px] "></span>
                </div>  
              }
            </div>  
          </div>
          <div className="flex flex-col lg:items-start py-[45px] w-[50%] relative">
            <div className="flex mb-[15px] gap-[28px] items-center ">
              <p className="font-bold text-[24px]">
                Боди без рукавов "ФРУК-ТИК", розовый
              </p>
              <BlueBadge />
            </div>
            <p className="text-[14px] text-[#7B7F8D] mb-[30px]">
              Код товара: 32978459390
            </p>
            <div className="flex items-center mb-[28px] gap-[48px]">
              <p className="text-[32px] font-bold">349 ₽/шт</p>
              <Button text={"В КОРЗИНУ"} />
            </div>
            <div className="flex items-center gap-[20px] pb-[30px]">
              <p>Размер:</p>
              <div className="flex items-center gap-[10px]">
                {[73, 74, 75].map(size => (
                  <div
                    key={size}
                    className={`button rounded-[2px] size-[34px] flex items-center justify-center cursor-pointer ${selectedSize === size ? 'bg-primary transition duration-150 active:scale-95 text-white' : 'border border-[#33394F]'}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="pt-[15px] border-t border-full flex gap-[30px] flex-wrap">
                <div className="flex gap-[10px]">
                  <div className="bg-[#33394F] px-[14px] size-[66px] items-center justify-center flex rounded-full">
                    <img src="/card-info-images/Vector (3).png" alt="" />
                  </div>
                  <div className="flex flex-col leading-[21.79px]">
                    <p className="font-bold">Доставка в Краснодар</p>
                    <p>Самовывоз — бесплатно</p>
                    <p className="text-[#7B7F8D] underline">
                      Рассчитать доставку
                    </p>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="bg-[#33394F] px-[14px] size-[66px] items-center justify-center flex rounded-full">
                    <img src="/card-info-images/Vector (4).png" alt="" />
                  </div>
                  <div className="flex flex-col leading-[21.79px]">
                    <p className="font-bold">Самовывоз сегодня - бесплатно</p>
                    <p>Доставка завтра - 370 ₽</p>
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-[#7B7F8D]">
                Цена действительна только для интернет-магазина и может
                отличаться от цен в розничных магазинах
              </p>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row ">
          <div className="w-[50%] flex flex-col gap-[25px] pr-[50px]">
            <p className="font-bold text-[36px]">Описание</p>
            <p>
              Боди-майка из мягчайшего интерлока. Прекрасный вариант для жаркого
              лета. Кнопки расположены на плечиках и между ножками, что
              позволяет быстро переодеть малыша или сменить подгузник. Состав:
              100% хлопок
            </p>
          </div>

        </div>
        <Cards/>
      </div>
    </div>
  );
};

export default CardInfo;
