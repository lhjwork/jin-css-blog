import styled from "styled-components";
import { Link } from "react-router-dom";

//사이드바 전체를 감싸는 div
export const RootContainer = styled.div`
  display: flex;
`;

// 전 page의 위치를 조정하기 위한 Wrap
export const ViewCetnterWrapper = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding: 50px 0;
  margin-left: 13rem;
`;

export const ViewWrapper = styled.div`
  width: 89vw;
  height: 100vh;
  margin-left: 13rem;
`;
