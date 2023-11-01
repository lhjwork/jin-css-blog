import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../pages/Root";
import NotFound from "../pages/error/NotFound";
import TestPage from "../pages/test/TestPage";
import Background from "../pages/background/Background";
import ImgReplacement from "../pages/ImgReplacement/ImgReplacement";
import BoxModel from "../pages/boxModel/BoxModel";
import Grid_1 from "../pages/grid/Grid_1";
import Grid_2 from "../pages/grid/Grid_2";
import Grid_3 from "../pages/grid/Grid_3";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "test", element: <TestPage /> },
      { path: "background", element: <Background /> },
      { path: "background2", element: <ImgReplacement /> },
      { path: "boxmodel", element: <BoxModel /> },
    ],
  },
  {
    path: "/grid",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "1", element: <Grid_1 /> },
      { path: "2", element: <Grid_2 /> },
      { path: "3", element: <Grid_3 /> },
    ],
  },
]);
