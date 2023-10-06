import React from "react";
import Sbitem from "./Sbitem";
import menuData from "../../Data/menuData.json";

const SideBar = ({ itmes }) => {
  const nest = (menuData, menuId = "menuId", link = "pmenuId") =>
    menuData
      .filter((item) => item[link] === item[menuId])
      .map((item) => ({ ...item, childrens: nest(menuData, item.menuId) }));

  const tree = nest(menuData);
  console.log("nest", tree);
  return (
    <div>
      {tree.map((subItem, index) => (
        <Sbitem item={subItem} key={index} />
      ))}
    </div>
  );
};

export default SideBar;
