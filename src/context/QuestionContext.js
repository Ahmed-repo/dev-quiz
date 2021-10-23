import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionContext = createContext();

export const QuestionController = (props) => {
  const [question, setQuestion] = useState([]);
  const [loading, setloading] = useState(false);
  const [categorie, setCategorie] = useState("");
  const [dificulty, setDificulty] = useState("");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    getQuestion();
  }, [categorie, dificulty]);

  const getQuestion = async () => {
    await axios
      .get(
        `http://localhost:3000/questions/${categorie && categorie}/${
          dificulty && dificulty
        }`
      )
      .then((response) => setQuestion(response.data));
    setloading(true);
  };
  const value = {
    question,
    setQuestion,
    loading,
    setloading,
    categorie,
    setCategorie,
    dificulty,
    setDificulty,
    score,
    setScore,
    answers,
    setAnswers,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuestionContext.Provider value={value}>
      {loading ? props.children : ""}
    </QuestionContext.Provider>
  );
};
