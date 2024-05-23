import React from 'react'
import MainCard from './MainCard'

const Cards = () => {
  return (
    <div className='w-[85%] mx-auto flex'>
      <MainCard red name={'Боди без рукавов "ФРУК-ТИК", розовый'} price={"349 ₽/шт"}/>
      <MainCard name={'Боди без рукавов "ФРУК-ТИК", розовый'} price={"349 ₽/шт"}/>
    </div>
  )
}

export default Cards
