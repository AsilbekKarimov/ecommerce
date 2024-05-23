import React from "react";
import Button from "../Others/Button";

const GoogleMap = () => {
  return (
    <div className="container mx-auto mt-[70px]">
      <div className="flex max-w-[80%] mx-auto mb-[30px]">
        <p className="font-bold text-4xl text-[rgb(51,57,79)]">Адрес шоурума</p>
      </div>

      <div>
        <div className="p-[18.2px] max-w-md absolute z-10 bg-white text-start left-[200px]">
          <p className="text-[15px] mb-1 text-[#33394F42]">Адрес шоурума:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg max-w-[70%]">Адрес шоурума:, г. Москва, Электролитный проезд 3Б стр 6</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Метро:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">Нагорная</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Режим работы:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">Вторник-суббота : 9:00-23:00</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Выходной:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">Воскресенье, понедельник : выходной</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Телефон:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">+7 916 361-30-00</p>

          <p className="text-[15px] mb-1 text-[#33394F42]">Почта:</p>
          <p className="mb-[10px] text-[#33394F9E] text-lg">info@lalastore.ru    </p>

          <p className="mb-6 max-w-[70%] text-lg text-[#33394F9E]">
            Пожалуйста, свяжитесь с нами перед посещением, чтобы мы могли
            согласовать время вашего визита и наличие товаров.
          </p>
          <Button text={"Написать нам"} />
        </div>
        <div className="flex relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d155788.15711309793!2d69.2485558412089!3d41.30466031379187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1714922556892!5m2!1sru!2s"
            width="100%"
            height="628px"
            className="border-0 focus:border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
