import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../components/Navbar/SideBar";
const Root = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Root;
