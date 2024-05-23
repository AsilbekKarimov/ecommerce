import React from "react";
import CardList from "../components/Selection/Selection";
import GoogleMap from "../components/Map/GoogleMap";

const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <CardList />
        <GoogleMap/>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
