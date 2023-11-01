import React from "react";
import { ViewCetnterWrapper } from "../../components/commons/Common.style";
import styles from "./grid.module.css";
const Grid = () => {
  return (
    <ViewCetnterWrapper>
      <div className={styles.container}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </ViewCetnterWrapper>
  );
};

export default Grid;
