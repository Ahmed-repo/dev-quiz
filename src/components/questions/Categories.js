import { Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useQuestionContext from "../../hooks/useQuestionContext";
import Category from "./Category";
import SelectMessage from "../quiz/SelectMessage";
import useAuthContext from "../../hooks/useAuthContext";
import "./Categories.css";
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
  console.log(categorie);
  console.log(question);
  console.log(dificulty);
  console.log(user);
  return (
    <div id="container">
      <div>
        {check ? (
          <p>
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
          </p>
        ) : (
          ""
        )}
      </div>
      <div id="categorie">
        <Category />
      </div>
      <div className="startBtn">
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            width: 200,
            height: 70,
            color: "#f57c00",
            backgroundColor: "#424242",
          }}
          onClick={handleClick}
        >
          start
        </Button>
      </div>
    </div>
  );
};

export default Categories;
