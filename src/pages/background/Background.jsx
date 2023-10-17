import React from "react";
import styles from "./background.module.css";
import backgroundPositionExplain from "./img/background_style.png";
import { ViewCetnterWrapper } from "../../components/commons/Common.style";
const Background = () => {
  return (
    <ViewCetnterWrapper>
      <div className={styles.bar}>
        background-image는 텍스트가 아니고 속성값 임으로 text-align: center로는
        가운데 정렬되지 않음. <br />
        아래 이미지는 margin : 0 auto; 가 적용되어 있다.
      </div>
      <div className={styles.bg}></div>
      <div>
        text-align: center는 텍스트를 수평으로 가운데 정렬하며, img 태그의
        경우에는 이미지 자체가 텍스트로 취급되어 이미지를 가운데 정렬 됨.
      </div>
      <img src={backgroundPositionExplain} className={styles.bg2} />
    </ViewCetnterWrapper>
  );
};

export default Background;
