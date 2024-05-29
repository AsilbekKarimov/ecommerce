import React from "react";
import GoogleMap from "../components/Map/GoogleMap";
import Catalog from "../components/Catalog/Catalog";
import Cards from "../components/Cards/Cards";
import MainSwiper from "../components/SwiperJS/MainSwiper.js";
import ClothesSwiper from "../components/SwiperJS/ClothesSwiper.js";
import AboutCompany from "../components/AboutCompany";
import NewsletterAdd from "../components/NewsletterAdd";
import DividerCustom from "../components/Others/Divider/Divider.jsx";
import { bannerSlides } from "../components/SwiperJS/BannerSlides.js";
import { cardSlides } from "../components/SwiperJS/CardSlides.js";
import { clothesSlides } from "../components/SwiperJS/ClothesSlides.js";

const Home = () => {
  return (
    <>
      <main>
        <section className="h-full mx-auto flex flex-col items-center justify-center">
          <div className="h-full mx-auto w-full flex items-center justify-center gap-[20px]">
            <MainSwiper width="70%" slides={bannerSlides} delay={3000} />
            <MainSwiper width="20%" slides={cardSlides} delay={1500} />
          </div>
          <DividerCustom text={"Каталог"} />
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
