import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Emailga logika yozsen bolad !!!
    console.log('Подписан: ', email);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg text-center w-full max-w-2xl mb-10">
        <h2 className="text-2xl mb-6">Подписаться на рассылку</h2>
        <div className="mb-6">
          <label className="block text-left mb-2">Почта</label>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail.com"
              className="border p-3 flex-grow rounded-l-md"
            />
            <button type="submit" className="bg-yellow-500 text-white p-3 rounded-r-full">
              подписаться
            </button>
          </div>
        </div>
      </form>
      <div className="bg-white py-8 w-full text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between mb-6">
            <div className="text-left">
              <h3 className="font-bold mb-2">Главная</h3>
              <Link to="/">Как купить</Link><br />
              <Link to="/">Доставка</Link><br />
              <Link to="/">О компании</Link><br />
              <Link to="/">Мы в Instagram</Link><br />
              <Link to="/">Акции</Link><br />
              <Link to="/">Как купить</Link><br />
            </div>
            <div className="text-left">
              <h3 className="font-bold mb-2">Как купить</h3>
              <Link to="/">Новости</Link><br />
              <Link to="/">Отзывы</Link><br />
              <Link to="/">Контакты</Link><br />
              <Link to="/">Лицензии</Link><br />
              <Link to="/">Оплата и возврат</Link><br />
              <Link to="/">Условия доставки</Link><br />
            </div>
            <div className="text-left">
              <h3 className="font-bold mb-2">Контакты</h3>
              <p>Адрес шоурума: г. Москва, Электролитный проезд 3Б стр 6</p>
              <p>Email: info@lalastore.ru</p>
              <p>Телефон: +7 916 361-30-00</p>
            </div>
          </div>
          <div className="mb-6">
            <img src="path/to/logo.png" alt="" className="mx-auto mb-4" />
            <p>2022 © «lalaSTORE»</p>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <img src="" alt="MIR" />
            <img src="" alt="PayKeeper" />
            <img src="" alt="Visa" />
          </div>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}


export default Footer;