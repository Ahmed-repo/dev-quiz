import { useMediaQuery } from "react-responsive";
import React from "react";
import styled from "styled-components";
import useAuthContext from "../../hooks/useAuthContext";
import bg1 from "../../assets/Component17.svg";
import { Logo } from "../logo";
import { DeviceSize } from "../responsive";
import MobileNav from "./navbar/MobileNav";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "./about" },
  { name: "Contact", href: "./contact" },
];

const TopSectiton = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  const isSize = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <TopContainer>
      <NavBarContainer>
        <LeftNav>
          <Logo />
        </LeftNav>
        {!isSize && (
          <RightNav>
            {navigation.map((item) => (
              <Alink key={item.name} href={item.href}>
                {item.name}
              </Alink>
            ))}
            {isLoggedIn && !isSize ? (
              <Secondlink href="/category">Continue</Secondlink>
            ) : (
              <Secondlink href="/auth/login">Sign Up</Secondlink>
            )}
          </RightNav>
        )}
        {isSize && <MobileNav />}
      </NavBarContainer>
      <TextBtnContainer>
        <TextContainer>
          <Text>
            A fun learning platform <Span>where anyone can contribute</Span>
          </Text>
        </TextContainer>
        {isLoggedIn ? (
          <Link to="/category">
            <Btn>get Started</Btn>
          </Link>
        ) : (
          <Link to="/auth/login">
            <Btn>get Started</Btn>
          </Link>
        )}
      </TextBtnContainer>
    </TopContainer>
  );
};

export default TopSectiton;

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;

  // background-image: linear-gradient(to bottom, #26547c, #bdc3c7);

  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 2000px) {
    background-position: -103px;
  }
`;
const NavBarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const LeftNav = styled.div`
  display: flex;
  flex: 1;
  padding-left: 10%;
`;
const RightNav = styled.div`
  display: flex;
  flex: 2;
  cursor: pointer;
`;

const Alink = styled.a`
  text-decoration: none;
  padding: 0 1.1rem;
  color: var(--gray-color);
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.6;

    transition: all 0.6s ease-in-out;
  }
`;

const Secondlink = styled.a`
  text-decoration: none;
  border: 1px solid;
  border-radius: 20px;
  padding: 0 1.1rem;
  color: rgb(255, 69, 0);
  font-size: 17px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1rem;

  &:hover {
    background-image: linear-gradient(to right, transparent 0%, orangered 100%);
    color: var(--lightGray-color);
    transition-duration: 1s;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  margin-top: 150px;
  width: 170px;
  min-height: 50px;
  border: 1px solid orangered;
  background: var(--main-bg);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border-radius: 2rem;
  cursor: pointer;
  transition: 1s all ease-in-out;
  &:hover {
    background-image: linear-gradient(to right, transparent 0%, orangered 100%);
    color: var(--lightGray-color);

    transition: 1s ease-in-out;
  }

  @media (max-height: 600px) {
    font-size: 2rem;
  }
`;

const TextContainer = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    height: 250px;
    margin-top: 10%;
  }
`;

const Text = styled.p`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  color: var(--secondary-color);
  @media (max-width: 700px) {
    font-size: 3rem;
  }
  @media (max-height: 600px) {
    font-size: 2rem;
  }
`;
const Span = styled.span`
  font-size: 3rem;
  background: #ff0000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff0000,
    #9932cc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: var(
    --gray-color
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @media (max-width: 700px) {
    font-size: 2.2rem;
  }
  @media (max-height: 600px) {
    font-size: 2rem;
  }
`;
const TextBtnContainer = styled.div`
  padding-top: 10%;
  padding-left: 25%;
  height: 550px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
