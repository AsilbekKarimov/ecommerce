import React, { useState } from 'react';
import TextTitle from './TextTitle/TextTitle';

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Подписан: ', email);
  };
  return (
    <div className='flex items-center justify-center py-6'>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg text-center w-full max-w-2xl mb-10">
        <div className=" mb-7">

          <TextTitle text={"Подписаться на рассылку"} />
        </div>
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
    </div>
  )
}

export default SubscribeNewsletter;
