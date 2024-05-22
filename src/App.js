import './App.css';

import MainSwiper from './components/SwiperJS/MainSwiper';
import ClothesSwiper from './components/SwiperJS/ClothesSwiper';

const bannerSlides = [
  {
    image: '/swiper/swiper-img.png',
    title: 'Большая зимняя распродажа от LeoKid',
    description: 'Конверт Leokid Classic подходит для использования в любых колясках, автокреслах и санках. Для прогулок осенью, зимой, весной и даже прохладным летом.',
  },
  {
    image: '/swiper/swiper-img.png',
    title: 'Большая зимняя распродажа от LeoKid',
    description: 'Конверт Leokid Classic подходит для использования в любых колясках, автокреслах и санках. Для прогулок осенью, зимой, весной и даже прохладным летом.',
  },
];

const cardSlides = [
  {
    image: '/swiper/cardswiper.png',
    button: 'Подборка №106',
    price: '1 221р',
  },
  {
    image: '/swiper/cardswiper.png',
    button: 'Подборка №1222',
    price: '9 999р',
  },
];

const clothesSlides = [
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
  {
    image: '/swiper/cardswiper.png',
    name: 'Подборка №106',
  },
]


function App() {
  return (
    <div className="App h-full mx-auto w-[90%] flex flex-col items-center justify-center gap-[20px]">
      <div className='h-full mx-auto w-[90%] flex items-center justify-center gap-[20px]'>
        <MainSwiper width="70%" slides={bannerSlides} delay={3000} />
        <MainSwiper width="20%" slides={cardSlides} delay={1500} />
      </div>
      <ClothesSwiper slides={clothesSlides} width="90%" />
    </div>
  );
}

export default App;
