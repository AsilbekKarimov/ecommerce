import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DividerCustom from "./components/Others/Divider/Divider";
import NavbarInfo from "./components/Navbarinfo/NavbarInfo";

function App() {
  return (
    <div>
      <header>
        <NavbarInfo />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
