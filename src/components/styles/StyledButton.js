import React from "react";
import styled from "styled-components";
const StyledButton = ({ children }) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default StyledButton;

const Button = styled.button`
  color: #fcfcfc;
  width: 185px;
  height: 65px;
  background: var(--main-bg);

  font-family: "Roboto";
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 400;
  border: 1px solid whitesmoke;
  border-radius: 15px;
  text-transform: capitalize;

  &:hover {
    transform: scale(1.1, 1.1);
    opacity: 2;

    transition: all 0.6s ease-in-out;
    -webkit-box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
    box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
  }

  @media (max-width: 614px) {
    width: 185px;
    height: 45px;
    width: 90%;
    font-size: 0.7rem;
  }
  @media (max-width: 360px) {
    width: 120px;
    height: 45px;
    width: 90%;
    font-size: 0.8rem;
  }
`;
