import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarInfo from "./components/Navbarinfo/NavbarInfo";
import DividerCustom from "./components/other/Divider";
import Descriptions from './components/Descriptions';  // Обновленный путь


function App() {
    return (
        <div>
            <header>
                <NavbarInfo />
                <Navbar />
            </header>
            <DividerCustom text={"Asyol lox"} />
            <main>
                <Outlet />
                <Descriptions />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
