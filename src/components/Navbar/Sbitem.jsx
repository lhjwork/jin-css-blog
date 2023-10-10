import React from "react";
import { SbTitle, SbSub, SbLink } from "./Sb.style";

const SbItem = ({ item, depth = 0 }) => {
  return (
    <div>
      <SbTitle depth={depth}>
        [{depth}]{item.menuNm}
      </SbTitle>
      <SbSub>
        {item.childrens.map((child) => (
          <SbItem item={child} depth={depth + 1} />
        ))}
      </SbSub>
    </div>
  );
};

export default SbItem;
