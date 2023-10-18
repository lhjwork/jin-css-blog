import React from "react";
import {
  MarginTopBottom20Div,
  ViewCetnterWrapper,
} from "../../components/commons/Common.style";
import styles from "./boxModel.module.css";
import boxModelAllExplain from "./img/content_size.png";
import p_height from "./img/p_height.png";
import radius_100_50 from "./img/100_50.png";
const BoxModel = () => {
  return (
    <ViewCetnterWrapper>
      <p>일반적으로 content는 padding 안쪽의 파란부분을 말한다.</p>
      <img src={boxModelAllExplain} className={styles.boxModelEx} />
      <hr />
      <h3 style={{ marginTop: "50px" }}>
        paragraph의 높이(height)는 않주는게 좋다. 아래 처럼 자연스럽게 되지
        않는다.
      </h3>
      <img src={p_height} className={styles.p_height} />
      <div>
        border, padding, margin -- 1 : 사방, 2 : 상하 좌우, 3: 상 좌우 하, 4 :
        상 우 하 좌
      </div>
      <MarginTopBottom20Div>
        border-radius의 경우 좌상을 기준으로 생각하면 된다.
      </MarginTopBottom20Div>

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
      <MarginTopBottom20Div>
        border-top-right-radius: 100px 50px; 적용시
      </MarginTopBottom20Div>
      <img src={radius_100_50} className={styles.p_height} />

      <hr />
      <div className={styles.circle}>circle</div>

      <div className={styles.circle2}>
        타원 border-radius: 100px (세로선) /50px(가로선)
      </div>
      <hr />
      <div>
        padding은 border 안쪽으로 maring은 바깥쪽으로 적용 됨 확인가능 !!!
        요소의 크기는 border 까지이다!
      </div>
      <div className={styles.boxmodel2}>
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
      <div className={styles.box}>box</div>
      <div className={styles.boxmodel + styles.second}>box</div>
      <div className={styles.box}>box</div>
    </ViewCetnterWrapper>
  );
};

export default BoxModel;
