import React, { useEffect, useState } from "react";
import useQuestionContext from "../../hooks/useQuestionContext";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "./Question";
import "./Quiz.css";
import { Typography } from "@mui/material";
import useAuthContext from "../../hooks/useAuthContext";
import { getUser } from "../../Controller";
const Quiz = () => {
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
    <div>
      {question ? (
        <>
          <div className="quiz_info">
            <Typography>
              Categorie:{" "}
              {categorie ? (
                question[currentQuestion].categorie
              ) : (
                <CircularProgress />
              )}
            </Typography>
            <Typography>
              Difficulty: {question[currentQuestion].difficulty}
            </Typography>
            <Typography>Score: {user.score && user.score}</Typography>
            <Typography> Current Score: {score}</Typography>

            <Typography>
              Total: {currentQuestion}/{question.length}
            </Typography>
          </div>
          <Question />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Quiz;
