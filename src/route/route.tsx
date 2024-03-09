import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllTrend from "../componets/Home/AllTrend";
import About from "../pages/About/About/About";
import Shop from "../pages/Shop/Shop/Shop";
import SingleCard from "../pages/Shop/SingleCard/SingleCard";

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
        path: "/all-trend",
        element: <AllTrend />,
      },
      {
        path: "/shop/:id",
        element: <SingleCard />,
      },
    ],
  },
]);
