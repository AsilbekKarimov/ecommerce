import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <Catalog/>
        <Cards/>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
