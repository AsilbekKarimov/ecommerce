import React from "react";
import Button from "../components/Others/Button";
import BlueBadge from "../components/Others/Badges/BlueBadge";

const CardInfo = () => {
  return (
    <div className="mt-[170px]">
      <div className="w-[100%] max-w-[90%] mx-auto">
        <div className="flex lg:flex-row sm:flex-col lg:items-start sm:items-center">
          <div className="flex sm:justify-center lg:justify-start">
            <div>
              <img src="/card-info-images/card-info-swiper 1.png" alt="" />
              <img src="/card-info-images/card-info-swiper 2.png" alt="" />
            </div>
            <img
              src="/card-info-images/card-info-swiper-main.png"
              className="w-[51.7%] object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:items-start sm:justify-center py-[45px] w-[50%]">
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
              <div className="flex items-center gap-[10px] ">
                <div className="rounded-[2px] bg-primary size-[34px] text-white flex items-center justify-center">
                  73
                </div>
                <div className="rounded-[2px] border border-[#33394F] size-[34px] flex items-center justify-center">
                  74
                </div>
                <div className="rounded-[2px] border border-[#33394F] size-[34px] flex items-center justify-center">
                  75
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="pt-[15px] border-t border-full flex gap-[30px] sm:flex-col lg:flex-row">
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
          <div className="flex flex-col gap-[25px]">
            <p className="font-bold text-[36px]">Отзывы</p>
            <p>У данного товара нет отзывов. Станьте первым, кто оставил отзыв об этом товаре!</p>
            <Button text={"ОСТАВИТЬ ОТЗЫВ"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
