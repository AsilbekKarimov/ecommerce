import React from "react";

import AboutCompany from '../components/AboutCompany';
import NewsletterAdd from '../components/NewsletterAdd';

const Home = () => {
  return (
    <>
      <header></header>
      <main>
      <NewsletterAdd />  
      <AboutCompany/>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
