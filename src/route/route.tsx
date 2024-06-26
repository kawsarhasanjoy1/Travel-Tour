import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllTrend from "../componets/Home/AllTrend";
import About from "../pages/About/About/About";
import Shop from "../pages/Shop/Shop/Shop";
import SingleCard from "../pages/Shop/SingleCard/SingleCard";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-trend",
        element: <AllTrend />,
      },
      {
        path: "/shop/:id",
        element: <SingleCard />,
      },
      {
        path: "/popular/:id",
        element: <SingleCard />,
      },
      {
        path: "/trending/:id",
        element: <SingleCard />,
      },
      {
        path: "/recent/:id",
        element: <SingleCard />,
      },
    ],
  },
]);
