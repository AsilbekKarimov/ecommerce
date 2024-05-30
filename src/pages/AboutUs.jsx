import React from 'react';

const AboutUs = () => {
  return (
    <div className='max-w-[85%] mx-auto mt-[18%] py-5 relative'>
      {/* О компании */}
      <div className="flex flex-col w-full text-start">
        <div className="grid h-11 w-full card rounded-box place-items-center bg-[#F4F4F4] justify-start pl-10">
          <p className='text-[#33394F9E]'>Главная - О компании</p>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center"></div>
      </div>
      {/* место где текст */}
      <p className='text-[#33394F] mt-5'>
        Наш магазин Lalastore.ru существует с 2019 года и всегда рад приветствовать Мам и Пап, своей теплой атмосферой. В нашем магазине, Вы всегда найдете качественную продукцию для Ваших малышей, на любое время года. У нас работают настоящие профессионалы, любящие и знающие свое дело, которые всегда помогут Вам. Покупка товара проста не только на первый взгляд, но так же легка в нашем магазине. Мы ценим каждого покупателя и знаем как осуществить Ваши покупки по самым приятным ценам.
      </p>

      {/* начало таблицы с точками */}
      <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg text-base text-[#33394F] mt-10">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="font-semibold">Название компании:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>ООО "СВВ ГРУПП"</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">ИНН / КПП:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>7713795458 / 771701001</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">ОГРН:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>5147746119220</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">Фактический адрес:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>г. Москва, Электролитный проезд, д. 3Б, строение 6</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">Телефон:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>+7 916 361-30-00</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">e-mail:</span>
            <span className="flex-grow mx-2 border-b border-dotted border-gray-500"></span>
            <span>lalastore.ru@yandex.ru</span>
          </li>
        </ul>
      </div>

      <div className='mt-16'>
        <p className='text-[#33394F]'>
          <b>Lalastore.ru — интернет-магазин товаров для самых маленьких. В нашем магазине вы сможете приобрести <br /> различные товары для новорожденных, такие как:</b>
        </p>
        <p className='mt-6 text-[#7D808E]'>
          1. Нательные комбинезоны<br />
          2. Песочники <br />
          3. Боди <br />
          4. Комбинезоны из футера <br />
          5. Комбинезоны вязаные  <br />
          6. Демисезонные комбинезоны <br />
          7. Комбинезоны-трансформеры <br />
          8. Головные уборы <br />
          9. Носочки <br />
          10. Нагрудники
        </p>
      </div>

      <div className='text-[#33394F] mt-8'>
        <h2 className='text-3xl font-bold'>Клиентский сервис на высоте!</h2>
        <p className='mt-5 text-lg'>
          Наши менеджеры — помощники и консультанты, всегда помогут подобрать необходимые товары для Ваших деток. А также подскажут, как оформить заказ и совершить оплату. Менеджеры отвечают на вопросы в онлайн-чате и через формы обратной связи. 
        </p>
        <p className='mt-10 text-lg font-bold'>
          Учитываем историю покупок и общения, чтобы персонализировать ответы и предложения. Нам важно решить вопрос быстро и качественно. Формирование долгосрочных отношений — одна из главных целей. Понимаем, что проще покупать товары в магазине, где предпочтения уже знают и помогают с выбором.
        </p>
      </div>
      
      <div className='mt-24'>
        <h2 className='text-[#33394F] text-4xl font-bold'>
          Почему стоит выбрать магазин для детей Lalastore.ru?
        </h2>
        <p className='text-lg text-[#33394F] mt-5'>
          Для этого предлагаем комплексный подход — наша команда выполнит все задачи! 
        </p>
        <p className='mt-5 text-[#7D808E]'>
          - Индивидуальный подход к каждому покупателю. <br />
          - Менеджер, который знает детали заказов. <br />
          - Комплексный подход к товарам и услугам. <br />
          - Доставка товаров до квартиры в течение 24 часов. <br />
          - Широкий ассортимент вещей. Мы работаем с большим количеством поставщиков для удовлетворения самых разнообразных потребностей клиента. <br />
          - Мы работаем со всеми регионами России, организовывая оплату и доставку заказов до любого населенного пункта России удобным Вам способом. <br />
          - Качественная продукция от крупнейших поставщиков. <br />
        </p>
        <p className='mt-5 text-[#33394F] text-lg'>
          Сделаем жизнь ярче, уютнее и комфортнее. В интернет-магазине Lalastore.ru найдется товар, который нужен именно Вам и Вашим малышам.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
