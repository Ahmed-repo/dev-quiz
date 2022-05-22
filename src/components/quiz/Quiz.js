import React, { useEffect, useState } from "react";
import useQuestionContext from "../../hooks/useQuestionContext";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "./Question";
import useAuthContext from "../../hooks/useAuthContext";
import { getUser } from "../../Controller";
import styled from "styled-components";
import { useHistory } from "react-router";
import Navbar from "../navbar/Navbar";

const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #26547c;
`;

const Quizinfo = styled.div`
  display: flex;
  justify-content: space-around;
  color: azure;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 614px) {
    width: 100%;
    height: 10px;
    padding-top: 45px;
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 10px;
  }

  & p {
    font-size: 22px;
    @media (max-width: 614px) {
      font-size: 12px;
      padding-top: 20px;
    }

    @media (min-width: 768px) {
      font-size: 15px;
      padding-top: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 15px;
      padding-top: 60px;
    }
  }
`;

const Quiz = () => {
  let history = useHistory();
  const { question, score, setAnswers, currentQuestion, categorie } =
    useQuestionContext();
  const { user } = useAuthContext();
  useEffect(() => {
    setAnswers(
      question &&
        handleShuffle([
          question[currentQuestion]?.correct_answer,
          ...question[currentQuestion]?.incorect_answers,
        ])
    );
    getUser();
  }, [question, currentQuestion]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  // console.log(question);
  // console.log(answers);
  return (
    <QuizContainer>
      <Navbar />
      {question ? (
        <>
          <Quizinfo>
            <p>
              Categorie:{" "}
              {categorie ? (
                question[currentQuestion].categorie
              ) : (
                <CircularProgress />
              )}
            </p>
            <p>Difficulty: {question[currentQuestion].difficulty}</p>

            <p> Current Score: {score}</p>

            <p>
              Total: {currentQuestion}/{question.length}
            </p>
          </Quizinfo>
          <Question />
        </>
      ) : (
        <CircularProgress />
      )}
    </QuizContainer>
  );
};

export default Quiz;
