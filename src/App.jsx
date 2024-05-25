import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarInfo from "./component/Navbarinfo/NavbarInfo";
import DividerCustom from "./component/other/Divider";

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
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
