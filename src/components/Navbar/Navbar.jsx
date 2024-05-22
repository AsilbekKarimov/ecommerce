import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Lala-logo.png';
import search from '../../images/search.png';
import favorites from '../../images/favorites.png';
import profilePic from '../../images/profile-pic.png';
import shoppingCart from '../../images/shopping-cart.png';

const Navbar = ({ auth }) => {
  // Array containing data for each link
  const links = [
    { to: '/favorites', imgSrc: favorites, alt: 'favorites', text: 'Избранное' },
    { to: '/cart', imgSrc: shoppingCart, alt: 'shopping-cart', text: 'Корзина' },
    { to: '/profile', imgSrc: profilePic, alt: 'profile-pic', text: auth ? 'Войти' : 'Зарегистрироваться' }
  ];

  return (
    <nav className='container mx-auto'>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div>
        <div>
          <img src={search} alt="search" />
        </div>
        <input type="text" placeholder="Начните писать" />
        <button>Найти</button>
      </div>

      <div>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            <img src={link.imgSrc} alt={link.alt} />
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
