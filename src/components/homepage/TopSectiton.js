import { useMediaQuery } from "react-responsive";
import React from "react";
import styled from "styled-components";
import bg from "../../assets/bg.svg";
import useAuthContext from "../../hooks/useAuthContext";

import { Logo } from "../logo";
import { DeviceSize } from "../responsive";
import { Menu } from "./navbar/Menu";
import MobileNav from "./navbar/MobileNav";
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

      <Btn>get Started</Btn>
    </TopContainer>
  );
};

export default TopSectiton;

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: #fcfcfc;
  /* background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%; */
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
  color: #222;
  font-size: 18px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
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
    color: white;
    transition-duration: 1s;
  }
`;

const Btn = styled.button`
  background-color: transparent;

  letter-spacing: 0.2rem;
  margin-top: 200px;
  width: 180px;
  height: 3rem;
  border: 1px solid orangered;
  color: orangered;
  border-radius: 2rem;
  cursor: pointer;
  transition: 1s all ease-in-out;
  &:hover {
    background-image: linear-gradient(to right, transparent 0%, orangered 100%);
    color: var(--primary-color);
    transition-duration: 1s;
  }
`;
