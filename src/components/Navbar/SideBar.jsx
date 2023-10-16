import React from "react";
import SbItem from "./SbItem";
import menuData from "../../Data/menuData.json";
import { SbContainer } from "./Sb.style";

const SideBar = ({ itmes }) => {
  return (
    <SbContainer>
      {menuData.map((subItem, index) => (
        <SbItem
          item={subItem}
          key={index}
          onOpen={subItem.openValue}
          onClick={() => {
            console.log("test");
          }}
        />
      ))}
    </SbContainer>
  );
};

export default SideBar;
