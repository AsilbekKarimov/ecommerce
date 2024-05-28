import React from 'react';


const Descriptions = () => {
  return (
    <nav className='bg-[#F4F4F4] py-6 fixed top-0 left-0 w-full z-50'>
      <div className="container mx-auto max-w-[85%]">
        <div className='flex items-center justify-between gap-4'>
          <a href="#about">О компании</a>
          <a href="#news">Новости</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
          <a href="#licenses">Лицензии</a>
        </div>
      </div>
    </nav>
  )
}

export default Descriptions;
