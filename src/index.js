import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  Home,
  AboutUs,
  Delivery,
  HowBuy,
  Socials,
  Stocks,
  Saved,
  Cart,
  Login,
  WaysOfDelivery,
} from "./pages/main";
import App from "./App";
import CardInfo from "./pages/CardInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      {
        path: "/info",
        element: <CardInfo />,
      },
    ],
  },
  {
    path: "/se",
    element: <WaysOfDelivery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
