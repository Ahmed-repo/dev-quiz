import { Button } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getUser, updateUser } from "../../Controller";
import useAuthContext from "../../hooks/useAuthContext";
import styled from "styled-components";
import useQuestionContext from "../../hooks/useQuestionContext";
import "./Question.css";
import SelectMessage from "./SelectMessage";
import rightAnswerSound from "../../assets/sound/Right-answer-sound-effect.mp3";
import wrongAnswerSound from "../../assets/sound/failure-sound.mp3";
const queryString = require("query-string");
const Question = () => {
  const {
    question,
    setQuestion,
    score,
    setScore,
    answers,
    setAnswers,
    currentQuestion,
    setCurrentQuestion,
  } = useQuestionContext();
  const { user, setUser, getUserWithToken } = useAuthContext();
  const [selected, setSelected] = useState();
  const [skipped, setSkipped] = useState([]);
  const [skip, setSkip] = useState(false);
  const [check, setCheck] = useState(false);
  const rightAnswer = question[currentQuestion]?.correct_answer;
  let history = useHistory();

  useEffect(() => {
    getUserWithToken();
  }, []);

  const handleSelect = (ans) => {
    if (selected === ans && ans === rightAnswer) {
      return "select";
    } else if (selected === ans && selected !== rightAnswer) {
      return "wrong_answer";
    } else if (ans === rightAnswer) {
      return "select";
    }
  };
  const questionId = question[currentQuestion]?._id;

  const addquestion = questionId
    ? [...user.question, questionId]
    : question[currentQuestion]?._id;

  const calcScore = user.score + score;

  const newData = queryString.stringify({
    _id: user._id,
    question: addquestion,
    score: calcScore,
  });

  const checkAnswer = (ans) => {
    setSelected(ans);
    if (ans !== rightAnswer) {
      document.getElementById("wrong-answer-sound").play();
    }
    if (ans === rightAnswer) {
      document.getElementById("right-answer-sound").play();

      //  update user information
      // score
      setScore(score + 1);
      console.log("currscore" + score);
      console.log("userScore" + calcScore);

      updateUser(newData).then((res) => {
        if (res) {
          // getUser().then((res) => setUser(res));
        } else {
          console.log("no response");
        }
      });
      // update question for this user
      // with question id and user id  set answered to true  on question schema
      // then sort questions depending on answered true or false for the user

      // update user progress get  number of answered==true from questions  /  get all questions.lenght

      if (selected === ans && selected !== rightAnswer) {
        //  update user information
        // wrongAnswer
      }
    }

    setCheck(false);
  };
  const getleght = question.length - 2;
  const next = () => {
    if (currentQuestion > getleght) {
      history.push("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);

      setSelected();
    } else {
      setCheck("Please select one answer");
    }
  };
  const skipQuestion = () => {
    setSkipped([...skipped, currentQuestion]);
    setCurrentQuestion(currentQuestion + 1);
    setSelected();
  };

  const quit = () => {
    setCurrentQuestion(0);
    setQuestion();
    history.push("/");
  };
  console.log("cur question " + currentQuestion);
  console.log("skiped " + skipped);
  console.log(question.length);
  return (
    <div className="questionContainer">
      <Fragment>
        <audio id="right-answer-sound" src={rightAnswerSound}></audio>
        <audio id="wrong-answer-sound" src={wrongAnswerSound}></audio>
      </Fragment>
      <h1>Question {currentQuestion + 1}</h1>
      <div className="singleQuestion">
        <h2>{question[currentQuestion].question}</h2>
      </div>
      <div className="answers">
        {check && <SelectMessage>{check}</SelectMessage>}

        {answers &&
          answers.map((ans) => {
            return (
              <button
                onClick={() => checkAnswer(ans)}
                className={`single_answer ${selected && handleSelect(ans)}`}
                key={ans}
                disabled={selected}
              >
                {ans}
              </button>
            );
          })}
      </div>
      <div className="buttons">
        <Btn onClick={quit}>Quit</Btn>
        <Btn onClick={skipQuestion}>Skip</Btn>

        <Btn onClick={next}>Next</Btn>
      </div>
    </div>
  );
};

export default Question;
const Btn = styled.button`
  color: #fcfcfc;
  width: 185px;
  height: 55px;
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
