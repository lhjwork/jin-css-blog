import React from "react";
import { SbTitle, SbSub } from "./Sb.style";
import DethItem from "./DethItem";

const SbItem = ({ item, depth = 0 }) => {
  return (
    <div>
      <SbTitle depth={depth}>
        [{depth}]{item.menuNm}
      </SbTitle>
      <SbSub>
        {item.childrens.map((child) => {
          return <DethItem item={child} depth={depth + 2} />;
        })}
      </SbSub>
    </div>
  );
};

export default SbItem;
