import styled from "styled-components";
import { Link } from "react-router-dom";

//사이드바 전체를 감싸는 div
export const SbContainer = styled.div`
  width: 13rem;
  height: auto;
  min-height: 100vh;
  font-size: 14px;
  background-color: #f6f6f2;
  /* flex: 1; */
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
`;

// SbItem에서 하위메뉴들을 묶어줄 div
export const SbSub = styled.div`
  overflow: hidden;
`;

// 메뉴명을 보여줄 div
export const SbTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.depth * 20 + "px"};
  padding-top: 10px;

  &:hover {
    background-color: #f1f3f4;
    cursor: pointer;
    border-radius: solid 5px;
  }
`;

//  제일 하위메뉴에서 클릭할 Link
export const SbLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
