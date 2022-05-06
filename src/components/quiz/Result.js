import React from "react";
import styled from "styled-components";
import useAuthContext from "../../hooks/useAuthContext";
import useQuestionContext from "../../hooks/useQuestionContext";
import Navbar from "../navbar/Navbar";
const Result = () => {
  const {
    question,
    setQuestion,
    score,
    setScore,
    answers,
    setAnswers,
    currentQuestion,
    categorie,
    setCurrentQuestion,
  } = useQuestionContext();

  const { user } = useAuthContext();

  const Container = styled.div`
    background: var(--secondary-color);
    height: 100%;
    margin: 0;
    color: #555;
    height: 100vh;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Title = styled.h2`
    color: var(--primary-color);
    font-size: 3rem;
    font-weight: 300;
  `;

  const Paragrapf = styled.p`
    color: var(--primary-color);
    font-size: 2rem;
    font-weight: 200;
  `;

  const ProgresBarBackground = styled.div`
    width: 50vw;
    height: 0.5vh;
    background: white;
  `;

  const ProgresBarWrapper = styled.div``;
  const ProgresBarNumber = styled.h4`
    color: white;
  `;
  const checkWith = user.progress + 1;
  const ProgresBar = styled.div`
    width: ${checkWith}vw;
    height: 0.5vh;
    background: var(--main-bg1);
  `;

  return (
    <>
      <Navbar />

      <Container>
        <ProgresBarWrapper>
          <ProgresBarNumber>
            {user.progress}/{question.length}
          </ProgresBarNumber>
          <ProgresBarBackground>
            <ProgresBar />
          </ProgresBarBackground>
        </ProgresBarWrapper>

        <Title>Well done {user.first_name}</Title>
        <Paragrapf>your Current score is {score}</Paragrapf>
        <Paragrapf>Score overall {user.score}</Paragrapf>
        <Paragrapf>
          wrong answered question Overall {user.wrongAnswer}
        </Paragrapf>
        <Paragrapf>
          Correct answered question Overall {user.correctAnswer}
        </Paragrapf>
      </Container>
    </>
  );
};

export default Result;
