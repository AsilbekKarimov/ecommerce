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
  WaysOfDelivery,
  CardInfo,
  NotFound,
} from "./pages/main";
import App from "./App";
import {
  MainPage,
  PaymentCondition,
  DeliveryCondition,
} from "./components/AboutCompany/main";
import Cards from "./components/Cards/Cards";

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
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: "payment",
            element: <PaymentCondition />,
          },
          {
            path: "delivery",
            element: <DeliveryCondition />,
          },
        ],
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
        path: "/info",
        element: <CardInfo />,
        children: [{ path: ":id", element: <CardInfo /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
