import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo_transparent.png";
const LogoWraper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.h2`
  width: 85px;
  height: 85px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-left: 2px;

  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWraper>
      <LogoImg>
        <img src={logo} alt="logo_img" />
      </LogoImg>
      <LogoText>Quiz</LogoText>
    </LogoWraper>
  );
}
