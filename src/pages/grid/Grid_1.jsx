import React from "react";
import { ViewCetnterWrapper } from "../../components/commons/Common.style";
import styles from "./grid_1.module.css";
import grid_explain from "./img/grid_1.png";
import gaps_img from "./img/gaps.png";
const Grid_1 = () => {
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
      <div className={styles.gaps_img_box}>
        <img src={grid_explain} className={styles.explain_img} />
        <div className={styles.direction_box}>
          <img src={gaps_img} className={styles.gaps_img} />
          <span>
            gap은 정중앙을 라인을 중심으로 양옆으로 절반 만큼의 간격을 띄어 줌을
            확인 가능하다.
          </span>
        </div>
      </div>
    </ViewCetnterWrapper>
  );
};

export default Grid_1;
