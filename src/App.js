import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import NavbarInfo from "./component/Navbarinfo/NavbarInfo";
import Descriptions from "./component/descriptions";
=======
import DividerCustom from "./components/Others/Divider/Divider";
import NavbarInfo from "./components/Navbarinfo/NavbarInfo";
>>>>>>> c5ee5c9019f45c23272a8fa8cd04b0c5866cedec

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
