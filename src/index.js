import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  AboutUs,
  Delivery,
  Home,
  HowBuy,
  Socials,
  Stocks,
  Saved,
  Cart,
  Login,
} from "./pages/main";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/howtobuy",
    element: <HowBuy />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/socials",
    element: <Socials />,
  },
  {
    path: "/stocks",
    element: <Stocks />,
  },
  {
    path: "/saved",
    element: <Saved />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
