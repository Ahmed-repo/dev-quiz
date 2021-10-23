import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export default function () {
  const questionContext = useContext(QuestionContext);

  return questionContext;
}
