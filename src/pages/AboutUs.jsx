import React from 'react';

const AboutUs = () => {
  return (
    <nav className='bg-[#F4F4F4] py-6 mt-[174px] w-full z-50'>
      <div className="container mx-auto max-w-[85%]">
        <div className='flex items-center justify-between gap-10 w-full'>
          <ul className="menu lg:menu-horizontal bg-base-200 flex items-center min-w-[100%] justify-center">

            <li className='flex-1 text-center border-l border-r max-[1023]:min-w-[253px]'>
              <details open className='max-[1023px]:min-w-[253px] '>
                <summary className=' flex-1 justify-contant max-[1023px]:w-full max-[1023px]:text-center'>  О компании</summary>

                <ul className='flex-1 max-[1023px]:min-w-[100%]'>
                  <li className=''><a className='max-[1023px]:text-center'>Оплата и возврат</a></li>
                  <li className=''><a className='max-[1023px]:text-center'>Условия доставки</a></li>
                  <li className=''>
                    <details open>
                      <summary>Как купить</summary>

                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li className='flex-1 text-center border-l border-r max-[1023px]:min-w-[253px] '><a className='flex justify-center items-center h-full '>Новости</a></li>
            <li className='flex-1 text-center border-l border-r max-[1023px]:min-w-[253px]'><a className='flex justify-center items-center h-full '>Отзывы</a></li>
            <li className='flex-1 text-center border-l border-r max-[1023px]:min-w-[253px]'><a className='flex justify-center items-center h-full '>Контакты</a></li>
            <li className='flex-1 text-center border-l border-r  max-[1023px]:min-w-[253px]'><a className='flex justify-center items-center h-full '>Лицензии</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AboutUs;
