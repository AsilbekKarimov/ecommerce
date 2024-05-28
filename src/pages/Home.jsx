import React from "react";
import CardList from "../components/Selection/Selection";
import GoogleMap from "../components/Map/GoogleMap";
import Catalog from "../components/Catalog/Catalog";
import Cards from "../components/Cards/Cards";
import MainSwiper from "../components/SwiperJS/MainSwiper.js";
import ClothesSwiper from "../components/SwiperJS/ClothesSwiper.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutCompany from "../components/AboutCompany";
import NewsletterAdd from "../components/NewsletterAdd";
import DividerCustom from "../components/Others/Divider/Divider.jsx";

const bannerSlides = [
  {
    image: "/swiper/swiper-img.png",
    title: "Большая зимняя распродажа от LeoKid",
    description:
      "Конверт Leokid Classic подходит для использования в любых колясках, автокреслах и санках. Для прогулок осенью, зимой, весной и даже прохладным летом.",
  },
  {
    image: "/swiper/swiper-img.png",
    title: "Большая зимняя распродажа от LeoKid",
    description:
      "Конверт Leokid Classic подходит для использования в любых колясках, автокреслах и санках. Для прогулок осенью, зимой, весной и даже прохладным летом.",
  },
];

const cardSlides = [
  {
    image: "/swiper/cardswiper.png",
    button: "Подборка №106",
    price: "1 221р",
  },
  {
    image: "/swiper/cardswiper.png",
    button: "Подборка №1222",
    price: "9 999р",
  },
];

const clothesSlides = [
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
  {
    image: "/swiper/cardswiper.png",
    name: "Подборка №106",
  },
];

const Home = () => {
  return (
    <>
      <main>
        <section className="h-full mx-auto flex flex-col items-center justify-center gap-[20px]">
          <div className="h-full mx-auto w-full flex items-center justify-center gap-[20px]">
            <MainSwiper width="70%" slides={bannerSlides} delay={3000} />
            <MainSwiper width="20%" slides={cardSlides} delay={1500} />
          </div>
          <DividerCustom text={"Каталог"}  />
          <Catalog />
          <ClothesSwiper slides={clothesSlides} width="90%" />
        </section>

        <GoogleMap />
        <NewsletterAdd />
        <AboutCompany />
        <Cards />
      </main>
    </>
  );
};

export default Home;
