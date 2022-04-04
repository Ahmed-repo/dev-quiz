import React from "react";
import styled from "styled-components";
import bg from "../../assets/wave1.svg";
const MidContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: #fcfcfc;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
`;

const MidSectiton = () => {
  return <MidContainer>mid container</MidContainer>;
};

export default MidSectiton;
