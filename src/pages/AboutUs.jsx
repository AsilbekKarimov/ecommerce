import React from 'react';

const AboutUs = () => {
  return (
    <nav className='bg-[#F4F4F4] py-6 mt-[174px] w-full z-50'>
      <div className="container mx-auto max-w-[85%]">
        <div className='flex items-center justify-between gap-10 w-full'>
          <ul className="menu lg:menu-horizontal bg-base-200 flex items-center min-w-[100%] justify-center">

            <li className='flex-1 text-center border-l border-r'>
              <details open>
                <summary>  О компании</summary>

                <ul className='flex-1'>
                  <li><a>Оплата и возврат</a></li>
                  <li><a>Условия доставки</a></li>
                  <li>
                    <details open>
                      <summary>Как купить</summary>

                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li className='flex-1 text-center border-l border-r'><a className='flex justify-center items-center h-full'>Новости</a></li>
            <li className='flex-1 text-center border-l border-r'><a className='flex justify-center items-center h-full'>Отзывы</a></li>
            <li className='flex-1 text-center border-l border-r'><a className='flex justify-center items-center h-full'>Контакты</a></li>
            <li className='flex-1 text-center border-l border-r'><a className='flex justify-center items-center h-full'>Лицензии</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AboutUs;
