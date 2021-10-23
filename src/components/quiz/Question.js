import { Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useQuestionContext from "../../hooks/useQuestionContext";
import "./Question.css";
import SelectMessage from "./SelectMessage";
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
  const [selected, setSelected] = useState();
  const [skipped, setSkipped] = useState([]);
  const [skip, setSkip] = useState(false);
  const [check, setCheck] = useState(false);
  const rightAnswer = question[currentQuestion]?.correct_answer;
  let history = useHistory();
  const handleSelect = (ans) => {
    if (selected === ans && ans === rightAnswer) {
      return "select";
    } else if (selected === ans && selected !== rightAnswer) {
      return "wrong_answer";
    } else if (ans === rightAnswer) {
      return "select";
    }
  };

  const checkAnswer = (ans) => {
    setSelected(ans);
    if (ans == rightAnswer) setScore(score + 750);
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
        <Button
          variant="contained"
          size="large"
          style={{ width: 185, color: "#f57c00", backgroundColor: "#424242" }}
          onClick={next}
        >
          Next
        </Button>
        <Button
          onClick={skipQuestion}
          variant="contained"
          size="large"
          style={{ width: 185, color: "#f57c00", backgroundColor: "#424242" }}
        >
          Skip
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{ width: 185, color: "#f57c00", backgroundColor: "#424242" }}
          onClick={quit}
        >
          Quit
        </Button>
      </div>
    </div>
  );
};

export default Question;
