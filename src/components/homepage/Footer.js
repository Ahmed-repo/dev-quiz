import React from "react";
import styled from "styled-components";
import fb from "../../assets/footer-icons/fb.svg";
import inst from "../../assets/footer-icons/inst.svg";
import twiter from "../../assets/footer-icons/twiter.svg";
import github from "../../assets/footer-icons/github.svg";
const FooterContainer = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const TextcontainerWrapper = styled.div`
  display: flex;
  padding-left: 15%;
`;
const TextContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  align-self: center;
  align-content: center;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 32px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    cursor: pointer;
    &:hover {
      transform: scale(1.2, 1.2);

      transition: all 0.6s ease-in-out;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    height: 70px;
  }
`;
const TextWrapper = styled.div`
  padding-left: 25px;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
const TextTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding-top: 35px;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--secondary-color);
  @media (max-width: 950px) {
    font-size: 1.5rem;
    margin-bottom: 8%;
  }
`;
const Text1 = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  color: var(--secondary-color);
  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;
const Text2 = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--black-color);

  @media (max-width: 950px) {
    font-size: 0.6rem;
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  padding-top: 10%;

  img {
    height: 35px;

    padding-left: 5%;
    padding-right: 5%;
    cursor: pointer;

    &:hover {
      transform: rotateY(360deg);

      transition: all 1.1s ease-in-out;
    }
  }
`;

const Rights = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2%;

  p {
    font-weight: 300;
    color: var(--gray-color);
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <TextcontainerWrapper>
        <TextContainer>
          <TextWrapper>
            <Text1>Ready to become an QExpert?</Text1>
            <Text2> Register and start your Journey.</Text2>
          </TextWrapper>
        </TextContainer>
        <TextContainer>
          <TextWrapper>
            <Text1>get Started </Text1>
            <Text2> Learn More</Text2>
          </TextWrapper>
        </TextContainer>
      </TextcontainerWrapper>
      <IconContainer>
        <img src={fb} />
        <img src={inst} />
        <img src={twiter} />
        <img src={github} />
      </IconContainer>
      <Rights>
        <p>© 2022 QExpert. All rights reserved.</p>
      </Rights>
    </FooterContainer>
  );
}
