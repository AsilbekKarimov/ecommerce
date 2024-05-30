import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarInfo from "./components/Navbarinfo/NavbarInfo";

import DividerCustom from "./components/Others/Divider/Divider";


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
