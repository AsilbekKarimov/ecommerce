import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "../Others/Button";

const GoogleMap = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-[70px] px-4">
      <div className="flex max-w-[90%] lg:max-w-[73.5%] mx-auto mb-[30px]">
        <p className="font-bold text-2xl lg:text-4xl text-[rgb(51,57,79)]">
          Адрес магазина
        </p>
      </div>

      <div className="relative">
        <div className="p-[32px] max-w-md absolute z-10 bg-white text-start left-[50%] transform -translate-x-1/2 lg:left-[200px] lg:transform-none lg:max-w-lg">
          <p className="mb-1 text-black font-semibold">Адрес магазина:</p>
          <p className="mb-[16px] text-[#33394F9E] text-lg lg:text-xl max-w-[70%]">
            Tosheknt shaxri, Uchtepa tumani, Xurshid maxalla, Toqimachi 14 uy
          </p>

          <p className="mb-1 text-black font-semibold">Transport:</p>
          <p className="mb-[16px] text-[#33394F9E] text-lg lg:text-xl">
            46, 8T, 453
          </p>

          <p className="mb-1 text-black font-semibold">Режим работы:</p>
          <p className="mb-[16px] text-[#33394F9E] text-lg lg:text-xl">
            Dushanba-Yakshanba: 9:00-23:00
          </p>

          <p className="mb-1 text-black font-semibold">Телефон:</p>
          <p className="mb-[16px] text-[#33394F9E] text-lg lg:text-xl">
            +998 50 589-31-31
          </p>

          <p className="mb-1 text-black font-semibold">Почта:</p>
          <p className="mb-[16px] text-[#33394F9E] text-lg lg:text-xl">
            info@lalastore.ru
          </p>

          <p className="mb-6 max-w-[70%] text-lg lg:text-xl text-[#33394F9E]">
            Пожалуйста, свяжитесь с нами перед посещением, чтобы мы могли
            согласовать время вашего визита и наличие товаров.
          </p>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <Button text={"Написать нам"} />
          </button>
        </div>
        <div className="flex relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.916549453145!2d69.1601814!3d41.310679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae893badb3aa93%3A0x9c08c4ace0ae20b2!2z0KLRg9C60LjQvNCw0YfQuCDRg9C70LjRhtCwLCDQotCw0YjQutC10L3RgiwgVG9zaGtlbnQgU2hhaHJp!5e0!3m2!1sru!2s!4v1716468214155!5m2!1sru!2s"
            width="100%"
            height="628"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 lg:p-8 rounded-lg max-w-md w-full mx-4 relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
              Задать вопрос
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  className="w-full px-3 py-2 border rounded outline-none input"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  Телефон
                </label>
                <input
                  className="w-full px-3 py-2 border rounded outline-none input"
                  id="phone"
                  type="text"
                  placeholder="Your mobile phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full px-3 py-2 border rounded outline-none input"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="question"
                >
                  Вопрос
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded outline-none input"
                  id="question"
                  placeholder="Your question"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Сохранить изменения
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GoogleMap;
