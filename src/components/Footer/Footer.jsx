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
      <form onSubmit={handleSubmit} className="bg-white rounded-lg text-center w-full max-w-2xl my-[70px] p-10">
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
            <button type="submit" className="bg-yellow-500 text-lg font-semibold hover:text-yellow-500 hover:bg-black duration-700 text-white py-3 px-8 rounded-r-full">
              Подписаться
            </button>
          </div>
        </div>
      </form>
      <div className="bg-white py-8 w-full text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between mb-6">
            <div className="text-left">
              <h3 className="font-bold mb-2">Главная</h3>
              <Link to="/how">Как купить</Link><br />
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
            <div className='flex flex-col gap-10 items-center'>
              <div className="text-left">
                <h3 className="font-bold mb-2">Контакты</h3>
                <div className='flex items-center mb-4'>
                  <img src="https://img.icons8.com/?size=100&id=61845&format=png&color=000000" alt="Address" className="w-10 h-10 mr-2" />
                  <p>Адрес магазина:</p>
                </div>
                <div className='flex items-center mb-4'>
                  <img src="https://logowik.com/content/uploads/images/513_email.jpg" alt="Email" className="w-10 h-10 mr-2" />
                  <p>Gmail</p>
                </div>
                <div className='flex items-center'>
                  <img src="https://img.icons8.com/?size=100&id=Z5qxNghl0fPa&format=png&color=000000" alt="Phone" className="w-10 h-10 mr-2" />
                  <p>Телефон:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <p>2024© «lalaSTORE»</p>
        </div>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
}

export default Footer;
