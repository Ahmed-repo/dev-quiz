import React, { useState } from "react";
import styled from "styled-components";
import useAuthContext from "../../../hooks/useAuthContext";
import { Menu } from "./Menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "./about" },
  { name: "Contact", href: "./contact" },
];
const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 1em 0 1.1em;
  padding-left: 15%;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;

  border-top: 2px solid transparent;
  transition: all 0.2 ease-in-out;

  & :hover {
    border-top: 1px solid orangered;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    transform: scale(1.2, 1.2);

    transition: all 0.6s ease-in-out;
  }
`;

const Marginer = styled.div`
  height: 2em;
`;
const Alink = styled.a`
  height: 100%;
  padding: 0 1 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 0.2 ease-in-out;

  & :hover {
    border-top: 2px solid orangered;
    color: orangered;
  }
`;
const MobileNav = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  const [isOpen, setOpen] = useState(false);
  return (
    <NavContainer>
      <Menu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {isOpen &&
            navigation.map((item) => (
              <LinkItem>
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              </LinkItem>
            ))}

          <LinkItem>
            {isLoggedIn ? (
              <Link href="/category">Continue</Link>
            ) : (
              <Link href="/auth/login">Sign Up</Link>
            )}
          </LinkItem>

          <Marginer />
        </LinksWrapper>
      )}
    </NavContainer>
  );
};

export default MobileNav;
