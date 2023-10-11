import React from "react";
import { SbTitle, SbSub, SbLink } from "./Sb.style";
const DethItem = ({ item, depth = 1 }) => {
  return (
    <SbLink to={item.routing}>
      <SbTitle depth={depth}>
        [{depth}]{item.menuTitle}
      </SbTitle>
    </SbLink>
  );
};

export default DethItem;
