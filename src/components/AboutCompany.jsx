import React from 'react'
import Watch from '../components/images/Watch.png'
import Star from '../components/images/Star.png'
import Birka from '../components/images/Birka.png'

const AboutCompany = () => {
  return (
    <div className='py-5  text-center'>
      <div className=''>
        <h2 className='text-[#33394F] text-2xl '>
        <b>
        О компании
        </b>
        </h2>
        <p className='text-[#33394F9E] py-5'>  LalaStore - магазин качественной и модной одежды и товаров для новорожденных и малышей до года. <br />
У нас вы подберете стильный комплект на выписку и базовый гардероб на первый год вашего ребенка. <br /> <br />

Качество товаров на высоте, так как мы работаем только с проверенными поставщиками. Все изделия имеют <br /> сертификаты качества. <br /> <br /> 

Нам доверяют, и к нам возвращаются!</p>
        </div>
       <div className='  flex justify-around relative '>
       <div className='py-10'>
            <img className='relative left-16 -top-3' src={Watch} alt="" />
            <h6 className='text-[#33394F]'>
           <b> Быстрая доставка</b>
            </h6>
            <p className='text-[#33394F9E] '>
            Бережно доставляем товары <br />
по России за 24 часа    
            </p>
        </div>
        <div className='py-10'>
            <img className='relative left-16 -top-3' src={Star} alt="" />
            <h6 className='text-[#33394F]'>
           <b> Быстрая доставка</b>
            </h6>
            <p className='text-[#33394F9E] '>
            Бережно доставляем товары <br />
по России за 24 часа
            </p>
        </div>
        <div className='py-10'>
            <img className=' relative left-16 -top-3' src={Birka} alt="" />
            <h6 className='text-[#33394F]'>
           <b> Быстрая доставка</b>
            </h6>
            <p className='text-[#33394F9E] '>
            Бережно доставляем товары <br />
по России за 24 часа
            </p>
        </div>
       </div>
    </div>
  )
}

export default AboutCompany