import React from "react";
import Button from "../Others/Button";

const GoogleMap = () => {
  return (
    <div className="container mx-auto mt-[70px]">
      <div className="flex max-w-[73.5%] mx-auto mb-[30px]">
        <p className="font-bold text-4xl text-[rgb(51,57,79)]">Адрес шоурума</p>
      </div>

      <div>
        <div className="p-[18.3px] max-w-md absolute z-10 bg-white text-start left-[200px]">
          <p className="text-[15px] mb-1 text-[#33394F42]">Адрес шоурума:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg max-w-[70%]">
            Адрес шоурума:, г. Москва, Электролитный проезд 3Б стр 6
          </p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Метро:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">Нагорная</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Режим работы:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">
            Вторник-суббота : 9:00-23:00
          </p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Выходной:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">
            Воскресенье, понедельник : выходной
          </p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Телефон:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">+7 916 361-30-00</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Почта:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">
            info@lalastore.ru{" "}
          </p>

          <p className="mb-6 max-w-[70%] text-lg text-[#33394F9E]">
            Пожалуйста, свяжитесь с нами перед посещением, чтобы мы могли
            согласовать время вашего визита и наличие товаров.
          </p>
          <Button text={"Написать нам"} />
        </div>
        <div className="flex relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.916549453145!2d69.1601814!3d41.310679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae893badb3aa93%3A0x9c08c4ace0ae20b2!2z0KLRg9C60LjQvNCw0YfQuCDRg9C70LjRhtCwLCDQotCw0YjQutC10L3RgiwgVG9zaGtlbnQgU2hhaHJp!5e0!3m2!1sru!2s!4v1716468214155!5m2!1sru!2s"
            width="100%"
            height="628"
            className="border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
