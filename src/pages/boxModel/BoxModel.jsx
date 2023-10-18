import React from "react";
import { ViewCetnterWrapper } from "../../components/commons/Common.style";
import styles from "./boxModel.module.css";
import boxModelAllExplain from "./img/content_size.png";
const BoxModel = () => {
  return (
    <ViewCetnterWrapper>
      <p>일반 적으로 content는 padding 안쪽의 파란부분을 말한다.</p>
      <img src={boxModelAllExplain} className={styles.boxModelEx} />
      <div className={styles.boxmodel}>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
      </div>

      <span>inline element</span>

      <div className={styles.circle}>circle</div>

      <div className={styles.box}>box</div>
      <div className={styles.boxmodel + styles.second}>box</div>
      <div className={styles.box}>box</div>
    </ViewCetnterWrapper>
  );
};

export default BoxModel;
