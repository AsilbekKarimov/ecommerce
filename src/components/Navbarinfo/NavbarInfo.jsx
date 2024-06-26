import React from 'react';
import Catalog from '../../components/CatalogLinks/CatalogLinks';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavbarInfo = () => {
    return (
        <nav className='bg-[#F4F4F4] py-6 fixed top-0 left-0 w-full z-50'>
            <div className="container mx-auto max-w-[85%]">
                <div className='flex justify-between items-center text-sm'>
                    <div className='flex gap-10 flex-1'>
                        <p className='flex items-center'>
                            <img src="/images/Vector (4).png" alt="Location Icon" className="mr-2" />
                            <span>г. Москва, Электролитный проезд 3Б стр 6</span>
                        </p>
                        <p className='flex items-center'>
                            <img src="/images/Vector (5).png" alt="Phone Icon" className="mr-2" />
                            <span>+7 916 361-30-00</span>
                        </p>
                    </div>
                    <ul className="flex items-center flex-1 justify-between text-[#33394F6B] font-normal">
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="flex items-center ">Каталог <MdOutlineArrowDropDown />
                                </div>
                                <ul tabIndex={0} className="dropdown-content overflow-y-auto max-h-[450px] flex-1 flex absolute menu p-2 shadow rounded-box w-[1440px] -left-[720px] bg-[#2D3242]">
                                    <Catalog />
                                </ul>
                            </div>
                        </li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/"}>Главная</Link></li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/howtobuy"}>Как купить</Link></li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/delivery"}>Доставка</Link></li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/aboutus"}>О компании</Link></li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/socials"}>Мы в instagram</Link></li>
                        <li className='hover:text-[#33394F] hover:font-bold transition duration-100'><Link to={"/stocks"}>Акции</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarInfo;