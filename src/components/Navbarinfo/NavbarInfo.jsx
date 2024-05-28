import React from 'react';

const NavbarInfo = () => {
    return (
        <nav className='bg-[#F4F4F4] py-6 fixed top-0 left-0 w-full z-50'>
            <div className="container mx-auto max-w-[85%]">
                <div className='flex justify-between items-center max-[1440px]:text-xs'>
                    <div className='flex gap-10  flex-1'>
                        <p className='flex items-center '>
                            <img src="/images/Vector (4).png" alt="Location Icon" className="mr-2" />
                            <span>г. Москва, Электролитный проезд 3Б стр 6</span>
                        </p>
                        <p className=' flex items-center '>
                            <img src="/images/Vector (5).png" alt="Phone Icon" className="mr-2" />
                            <span>+7 916 361-30-00</span>
                        </p>
                    </div>
                    <ul className="flex items-center flex-1 justify-between">
                        <li className='relative'>
                            <details>
                                <summary>Каталог</summary>
                                <ul className="ml-4 mt-2 fixed bg-zinc-300 py-10 px-10">
                                    {/* Добавьте элементы каталога здесь */}
                                </ul>
                            </details>
                        </li>
                        <li className='bold-text'>Главная</li>
                        <li>Как купить</li>
                        <li>Доставка</li>
                        <li>О компании</li>
                        <li>Мы в instagram</li>
                        <li>Акции</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarInfo;