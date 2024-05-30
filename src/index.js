import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  Home,
  AboutUs,
  HowBuy,
  Socials,
  Stocks,
  Saved,
  Cart,
  Login,
  WaysOfDelivery,
  CardInfo,
  NotFound,
} from "./pages/main";
import App from "./App";
import PaymentCondition from "./components/AboutCompany/PaymentCondition";

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
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/howtobuy",
        element: <HowBuy />,
      },
      {
        path: "/delivery",
        element: <WaysOfDelivery />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/payment",
        element: <PaymentCondition />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
