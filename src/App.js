import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Root from "./pages/Root";
import NotFound from "./pages/error/NotFound";
import { router } from "./Router/RootRouter";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
