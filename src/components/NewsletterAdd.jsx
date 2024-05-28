import React from 'react'
import { Link } from 'react-router-dom'

const NewsletterAdd = () => {
  return (
    <div className='bg-[#F4F4F4] text-center py-5'>
      <div className='py-10'>
        <h2 className='text-[#33394F] text-2xl relative -top-5'><b>Подпишитесь на нашу рассылку</b></h2>

        <p className=' text-[#33394F9E] ' >Присоеденитесь к программе LFLF STORE, чтобы получать <br /> постоянные скидки и персональные предложения</p>
      </div>
      <div className='flex justify-center py-5'>
<Link  className='w-[301px] h-[45px] flex justify-center items-center rounded-3xl bg-[#F7D05E] text-white relative -top-8'>оформить подписку</Link>

      </div>
    </div>
  )
}

export default NewsletterAdd