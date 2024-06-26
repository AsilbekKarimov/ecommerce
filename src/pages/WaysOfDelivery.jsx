import React from 'react';
import Cards from '../components/Cards/Cards';
import TextTitle from '../components/TextTitle/TextTitle';

const WaysOfDelivery = () => {
  return (
    <div className="container  ">
      <div className="py-8 flex flex-col z-40 mt-40">
        <div className="text-center py-2 px-4 mb-6 ">
          <TextTitle text="Доставка" />
          <p className="bg-[#F4F4F4] text-[#33394F9E] w-full inline-block mt-5 py-3 text-start px-24">Главная - Доставка</p>
        </div>
        <div className='max-w-[85%] mx-auto'>
          <TextTitle text="Способы доставки:" />
          <p className="mt-4">Доставка ваших заказов осуществляется по всей России следующими способами:</p>
          <div className="mt-4 space-y-4 ">
            <div>
              <h3 className="font-semibold">1. Курьером до двери (по Москве в пределах МКАД)</h3>
              <p>Стоимость 400 рублей. Удобные для вас дата и время доставки согласовывается с вами заблаговременно. Срочная курьерская доставка (день в день) по Москве в пределах МКАД – 500 руб. (при наличии свободного курьера).</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Компанией СДЭК</h3>
              <p>До пункта выдачи заказов, удобного для вас в вашем городе или до двери – стоимость и срок доставки* зависит от вашего города проживания и размера упаковки вашего заказа.</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Почтой России</h3>
              <p>До удобного вам отделения связи – стоимость и срок доставки* зависит от вашего города проживания и размера упаковки вашего заказа.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">
                *Отправление заказов осуществляется в срок от 1-3 раб. дн. с момента оплаты вами заказа. (Зачастую отправления заказов осуществляются в срок 1-2 дня). Заказы, сделанные в пятницу после 15:00 и в выходные дни - подтверждаются в понедельник и ближайшая доставка по Москве – вторник или среда.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">4. Самовывоз</h3>
              <p>Возможен из шоу-рума (согласно графика работы) по адресу: г. Москва, м.Нагорная, Электролитный проезд 3Б стр 6 (5 мин от метро Нагорная). Предварительно согласовывается наличие товара и время забора заказа.</p>
            </div>  
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default WaysOfDelivery;
