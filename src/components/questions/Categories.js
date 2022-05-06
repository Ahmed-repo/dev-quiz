import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import useQuestionContext from "../../hooks/useQuestionContext";
import Category from "./Category";
import SelectMessage from "../quiz/SelectMessage";
import useAuthContext from "../../hooks/useAuthContext";
import "./Categories.css";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

const WelcomeMsg = styled.h1`
  color: white;
  letter-spacing: 2px;
  font-size: 4rem;
  display: flex;

  justify-content: center;

  @media (max-width: 614px) {
    font-size: 1.8rem;
    padding-top: 45px;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
    padding-top: 35px;
  }
`;
const Msgparagrapf = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 614px) {
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

const StartBtn = styled.button`
  color: #fcfcfc;
  width: 185px;
  height: 65px;
  background: var(--main-bg);

  font-family: "Roboto";
  font-size: 1.8rem;
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
    width: 120px;
    height: 45px;
    width: 50%;
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    width: 120px;
    height: 45px;
    width: 50%;
    font-size: 1.2rem;
  }
`;
const Categories = () => {
  const {
    question,
    setQuestion,
    categorie,
    setCategorie,
    dificulty,
    setDificulty,
  } = useQuestionContext();
  const { user } = useAuthContext();
  const [check, setCheck] = useState(false);
  let history = useHistory();
  const handleClick = () => {
    if (!dificulty || !categorie) {
      setCheck(true);
    } else {
      setCheck(false);
      history.push("/quiz");
    }
  };
  useEffect(() => {
    setDificulty();
    setCategorie();
  }, []);
  console.log(categorie);
  console.log(question);
  console.log(dificulty);
  console.log(user);
  return (
    <>
      <Navbar />

      <div id="container">
        <div>
          {user && <WelcomeMsg>Welcome {user.first_name}</WelcomeMsg>}
          {check ? (
            <Msgparagrapf>
              {categorie ? (
                <></>
              ) : (
                <SelectMessage>Please choose Categorie</SelectMessage>
              )}
              {dificulty ? (
                <></>
              ) : (
                <SelectMessage>Please choose Dificulty</SelectMessage>
              )}
            </Msgparagrapf>
          ) : (
            ""
          )}
        </div>

        <div id="categorie">
          <Category />
        </div>
        <div className="startBtn">
          <StartBtn onClick={handleClick}>start</StartBtn>
        </div>
      </div>
    </>
  );
};

export default Categories;
