import React from "react";
import SbItem from "./SbItem";
import menuData from "../../Data/menuData.json";
import { SbContainer } from "./Sb.style";

const SideBar = ({ itmes }) => {
  const nest = (menuData, menuId = "menuId", link = "pmenuId") =>
    menuData
      .filter((item) => item[link] === item[menuId])
      .map((item) => ({ ...item, childrens: nest(menuData, item.menuId) }));

  const tree = nest(menuData);
  console.log("nest", tree);
  return (
    <SbContainer>
      {tree.map((subItem, index) => (
        <SbItem item={subItem} key={index} />
      ))}
    </SbContainer>
  );
};

export default SideBar;
