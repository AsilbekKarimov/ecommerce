import React from 'react';
import Catalog from '../../components/CatalogLinks/CatalogLinks';
import { Link } from 'react-router-dom';


const NavbarInfo = () => {
    return (
        <nav className='bg-[#F4F4F4] py-6 fixed top-0 left-0 w-full z-50'>
            <div className="container mx-auto max-w-[85%]">
                <div className='flex justify-between items-center text-xs'>
                    <div className='flex gap-10 flex-1'>
                        <p className='flex items-center'>
                            <img src="/images/Vector (4).png" alt="Location Icon" className="mr-2" />
                            <span> Uchtepa tumani  xurshid maxalla  toqimachi 14 uy </span>
                        </p>
                        <p className='flex items-center'>
                            <img src="/images/Vector (5).png" alt="Phone Icon" className="mr-2" />
                            <span>50 589 31 31</span>
                        </p>
                    </div>
                    <ul className="flex items-center flex-1 justify-between">
                        <Link to={"/"} className=''>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="">Каталог</div>
                                <ul tabIndex={0} className="dropdown-content overflow-y-auto max-h-[450px] flex-1 flex absolute menu p-2 shadow rounded-box w-[1440px] -left-[720px] bg-[#2D3242]">
                                    <Catalog />
                                </ul>
                            </div>
                        </Link>
                        <Link to={"/"} className=''>Главная</Link>
                        <Link to={"/"}>Как купить</Link>
                        <Link to={"/"}>Доставка</Link>
                        <Link to={"/aboutus"}>О компании</Link>
                        <Link to={"/"}>Мы в instagram</Link>
                        <Link to={"/"}>Акции</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarInfo;