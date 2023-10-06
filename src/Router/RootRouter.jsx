import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../pages/Root";
import NotFound from "../pages/error/NotFound";
import TestPage from "../pages/test/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);
