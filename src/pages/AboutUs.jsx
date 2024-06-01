import React from 'react';
import PaymentCondition from '../components/AboutCompany/PaymentCondition';
import { Outlet } from 'react-router-dom';
import DeliveryCondition from '../components/AboutCompany/DeliveryCondition';

const AboutUs = () => {
  return(
    <div className=' max-w-[85%] mx-auto  mt-[174px]'>
      <Outlet />
    </div>
  )
}

export default AboutUs
