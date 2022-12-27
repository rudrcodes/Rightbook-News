import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import { Cricketschedules } from "../pages/Cricketschedules";
import CricketMatches from "../pages/Cricket/CricketMatches/CricketMatches";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cricket/schedules",
          element: <Cricketschedules />,
        },
        {
          path: "/cricket/",
          element: <CricketMatches />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;