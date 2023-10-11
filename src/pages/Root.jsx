import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../components/Navbar/SideBar";
import { RootContainer } from "../components/commons/Common.style";
const Root = () => {
  return (
    <RootContainer>
      <SideBar />
      <Outlet />
    </RootContainer>
  );
};

export default Root;
