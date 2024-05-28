import React from 'react'
import { Link } from 'react-router-dom'

const NewsletterAdd = () => {
  return (
    <div className='bg-[#F4F4F4] '>
      <div className='py-10'>
        <h2 className='text-[#33394F] text-2xl w-[700] py-6 ml-[56vh]'><b>Подпишитесь на нашу рассылку</b></h2>

        <p className=' text-[#33394F9E] relative -top-4 ml-[55vh]' >Присоеденитесь к программе LFLF STORE, чтобы получать <br /> постоянные скидки и персональные предложения</p>
      </div>
      <div className='flex justify-center'>
        <Link className='w-[301px] h-[45px] flex justify-center items-center rounded-3xl bg-[#F7D05E] text-white relative -top-8'>оформить подписку</Link>

      </div>
    </div>
  )
}

export default NewsletterAdd