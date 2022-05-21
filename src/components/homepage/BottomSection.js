import React from "react";
import styled from "styled-components";
import bg1 from "../../assets/Component18.svg";
import login from "../../assets/howItWorks-icons/login.svg";
import category from "../../assets/howItWorks-icons/category.svg";
import flame from "../../assets/howItWorks-icons/flame.svg";
import compare from "../../assets/howItWorks-icons/compare.svg";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextcontainerWrapper = styled.div`
  display: flex;
  padding-left: 15%;
`;
const TextContainer = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
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
    height: 40px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2, 1.2);

      transition: all 0.6s ease-in-out;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    height: 60px;
  }
`;
const TextWrapper = styled.div`
  padding-left: 25px;
`;
const TextTitle = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 35px;
  font-size: 3rem;
  font-weight: 400;
  color: var(--secondary-color);
  @media (max-width: 950px) {
    font-size: 1.5rem;
    margin-bottom: 8%;
  }
`;
const Text1 = styled.h4`
  font-weight: 500;
  color: var(--secondary-color);
  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;
const Text2 = styled.p`
  width: 50%;
  font-weight: 300;
  color: var(--black-color);

  @media (max-width: 950px) {
    font-size: 0.6rem;
    width: 100%;
  }
`;

export default function BottomSection() {
  return (
    <Container>
      <TextTitle>How it works</TextTitle>
      <TextcontainerWrapper>
        <TextContainer>
          <Wrapper>
            <img src={login} />
            <TextWrapper>
              <Text1>Register or login</Text1>
              <Text2>
                Please register or login to your account. Become an Qexpert
                today!
              </Text2>
            </TextWrapper>
          </Wrapper>
          <Wrapper>
            <img id="js" src={category} />
            <TextWrapper>
              <Text1>Choose your desired category</Text1>
              <Text2>
                Qexpert provides their users with many categories. You can
                choose your desired category in order to test yur knowledge.
              </Text2>
            </TextWrapper>
          </Wrapper>
          <Wrapper>
            <img src={flame} />
            <TextWrapper>
              <Text1>Start a single game or compete with other Qexperts</Text1>
              <Text2>
                Qexpert offers their Users a single game option to test their
                knowledge or to prepare for a competition. The Qexperts earn
                points for each completed game.
              </Text2>
            </TextWrapper>
          </Wrapper>
          <Wrapper>
            <img src={compare} />
            <TextWrapper>
              <Text1>Compare yourself with other Qexperts</Text1>
              <Text2>
                Compare yourself on a global leadearboard with other Qexperts.
                Invite your friends to a challenge and play against them in a
                fun competition. (Coming Soon...)
              </Text2>
            </TextWrapper>
          </Wrapper>
        </TextContainer>
      </TextcontainerWrapper>
      <Footer />
    </Container>
  );
}
