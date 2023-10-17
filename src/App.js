import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router/RootRouter";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
