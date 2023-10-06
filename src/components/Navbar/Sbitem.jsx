import React from "react";

const Sbitem = ({ item }) => {
  return (
    <div>
      <div>
        {item.menuNm}
        <div>
          {item.childrens.map((child) => (
            <Sbitem item={child} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sbitem;
