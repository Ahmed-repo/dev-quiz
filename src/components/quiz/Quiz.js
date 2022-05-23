import React, { useEffect, useState } from "react";
import useQuestionContext from "../../hooks/useQuestionContext";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "./Question";
import useAuthContext from "../../hooks/useAuthContext";
import { getUser } from "../../Controller";
import styled from "styled-components";
import { useHistory } from "react-router";
import Navbar from "../navbar/Navbar";
import cup from "../../assets/level-score/cup.svg";
import volumeUP from "../../assets/sound/volumeUP.svg";
import volumeMute from "../../assets/sound/volumeMute.svg";
const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #26547c;
`;

const Sound = styled.div`
  cursor: pointer;
`;
const CupScore = styled.div`
  display: flex;
  flex-direction: row;
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
  const [volume, setVolume] = useState(true);
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
  const handleVolume = () => {
    if (volume) {
      return volumeUP;
    } else {
      return volumeMute;
    }
  };
  // console.log(question);
  // console.log(answers);
  return (
    <QuizContainer>
      <Navbar />
      {question ? (
        <>
          <Quizinfo>
            {/* <Sound
              onClick={(e) => {
                setVolume(!volume);
              }}
            >
              {volume ? (
                <img src={volumeUP} height="15px" />
              ) : (
                <img src={volumeMute} height="15px" />
              )}
            </Sound>
            <CupScore>
              <img src={cup} height="15px" />
            </CupScore> */}

            {/* <div onClick={setVolume(!volume)}>
              {volume && <img src={volumeUP} height="25px" />}
              {!volume && <img src={volumeMute} height="25px" />}
            </div> */}

            <p>
              Total: {currentQuestion}/{question.length}
            </p>
            <p>score :{score}</p>
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
