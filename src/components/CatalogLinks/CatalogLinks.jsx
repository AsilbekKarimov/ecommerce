import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  // Массив объектов с информацией о категориях и ссылках
  const categories = [
    {
      title: 'ОДЕЖДА',
      links: [
        { label: 'Изделия из муслина', to: '/clothing/muslin-items' },
        { label: 'Боди', to: '/clothing/bodysuits' },
        { label: 'Песочники', to: '/clothing/rompers' },
        { label: 'Нательные комбинезоны (слипы)', to: '/clothing/slip-vests' },
        { label: 'Комбинезоны из футера', to: '/clothing/fleece-rompers' },
        { label: 'Комбинезоны вязаные', to: '/clothing/knitted-rompers' },
        { label: 'Демисезонные комбинезоны', to: '/clothing/all-season-rompers' },
        { label: 'Комбинезоны-трансформеры', to: '/clothing/transformer-rompers' },
        { label: 'Головные уборы', to: '/clothing/headwear' },
        { label: 'Носочки', to: '/clothing/socks' },
        { label: 'Нагрудники', to: '/clothing/bib-overalls' }
      ]
    },
    {
      title: 'ПЕЛЕНКИ',
      links: [
        { label: 'Пеленальные коконы', to: '/diapers/diaper-cocoons' },
        { label: 'Пеленки из фланели', to: '/diapers/flannel-diapers' },
        { label: 'Пеленки из муслина', to: '/diapers/muslin-diapers' }
      ]
    },
    {
      title: 'КОНВЕРТЫ И ПЛЕДЫ',
      links: [
        { label: 'Конверты в коляску', to: '/converts/stroller-converts' },
        { label: 'Пледы', to: '/converts/blankets' },
        { label: 'Конверты на выписку', to: '/converts/layette-converts' }
      ]
    },
    {
      title: 'АКСЕССУАРЫ',
      links: [
        { label: 'Сумки-органайзеры', to: '/accessories/organizer-bags' },
        { label: 'Муфты-варежки', to: '/accessories/muff-warmers' },
        { label: 'Грызунки', to: '/accessories/teethers' },
        { label: 'Альбомы для фотографий', to: '/accessories/photo-albums' },
        { label: 'Держатели для соски/грузунка', to: '/accessories/pacifier-holders' }
      ]
    }
  ];

  return (
   <>
      {categories.map((category, index) => (
        <div className='flex flex-1 z-[55]'>
          <ul className=''>
            <li key={index} className='flex-1 flex-col'>
              <p className='font-bold text-base text-white'>{category.title}</p>
              {category.links.map((link, linkIndex) => (
                <Link className='text-white' key={linkIndex} to={link.to}>{link.label}</Link>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Catalog;



