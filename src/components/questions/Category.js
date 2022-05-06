import * as React from "react";
import Categories from "../data/Categories";
import difficultyData from "../data/Difficultiy";
import useQuestionContext from "../../hooks/useQuestionContext";
import "./Categorie.css";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svg_js from "../../assets/Js.svg";
const Category = () => {
  const { categorie, setCategorie, dificulty, setDificulty } =
    useQuestionContext();
  const [IndexCategorie, setIndexCategorie] = useState(false);
  const [svgIcon, setSvgIcon] = useState("");
  const handleChangeType = (e) => {
    setCategorie(e.target.value);
  };
  const Delimiter = styled.div`
    display: flex;
    align-self: center;
    height: 1px;
    background: white;
    width: 94%;
    margin-top: 8rem;
    margin-bottom: 6rem;

    @media (max-width: 614px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 80%;
    }
    @media (max-width: 360px) {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      width: 80%;
    }
  `;

  const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 614px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    @media (max-width: 360px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;
  const DifficultyContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 614px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    @media (max-width: 360px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;
  const Difficulty = styled(motion.div)`
    width: 150px;
    height: 75px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 2px solid;
    border-color: whitesmoke;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
      transform: scale(1.2, 1.2);

      transition: all 0.6s ease-in-out;
      -webkit-box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
      box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
    }

    @media (max-width: 614px) {
      height: 40px;
      width: 80%;
      margin: 4px;
    }
    @media (max-width: 360px) {
      height: 35px;
      margin: 2px;
    }
  `;
  const Categoryy = styled(motion.div)`
    width: 200px;
    height: 100px;
    color: white;

    /* background-image: url(${svg_js});
    background-repeat: no-repeat; */

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    border-radius: 15px;
    border: 2px solid;
    border-color: whitesmoke;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: capitalize;

    img {
      height: 70px;
      &:hover {
        transform: rotateY(360deg);
        transition: 800ms linear all;
      }
    }

    &:hover {
      transform: scale(1.2, 1.2);
      transition: all 0.6s ease-in-out;
      -webkit-box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
      box-shadow: 0px 0px 38px 9px rgba(252, 252, 252, 0.51);
    }

    @media (max-width: 614px) {
      height: 40px;
      width: 60%;
      margin: 4px;
      flex-direction: row;
      justify-content: flex-start;

      img {
        height: 30px;
        padding-left: 15%;
        padding-right: 10%;
      }
    }
    @media (max-width: 360px) {
      height: 35px;
      margin: 2px;
    }
  `;
  const filterAfterClick = Categories.filter(
    (cat, index) => cat.index === IndexCategorie
  );
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="categorie_difficulty">
      <CategoryContainer>
        <AnimatePresence>
          {IndexCategorie ? (
            <Categoryy
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, y: -10, x: 0 }}
              transition={{ delay: 0.2, duration: 1, type: "tweet" }}
            >
              <img src={svgIcon}></img>
              {categorie}
            </Categoryy>
          ) : (
            Categories.map((cat, index) => (
              <Categoryy
                initial={{ opacity: 0, y: -150, x: 50 }}
                animate={{ opacity: 1, y: -10, x: 0 }}
                exit={{ opacity: 0, y: -250, x: 150 }}
                transition={{ delay: 0.5, duration: 1.3, type: "tween" }}
                onClick={() =>
                  setCategorie(cat.value) &
                  setIndexCategorie(true) &
                  setSvgIcon(cat.svg)
                }
                value={cat.value}
                key={index}
              >
                <img src={cat.svg}></img>
                {cat.value}
              </Categoryy>
            ))
          )}
        </AnimatePresence>
      </CategoryContainer>
      <Delimiter />

      <DifficultyContainer>
        {dificulty ? (
          <Difficulty
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, y: -10, x: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "tween" }}
          >
            {dificulty}
          </Difficulty>
        ) : (
          IndexCategorie &&
          difficultyData.map((dif) => (
            <Difficulty
              onClick={() => setDificulty(dif.value)}
              value={dif.value}
            >
              {dif.value}
            </Difficulty>
          ))
        )}
      </DifficultyContainer>
      {/* <Box className="box" sx={{ backgroundColor: "#37474f" }}>
        <Typography color="white">Categories:</Typography>
        <BottomNavigation
          sx={{
            maxWidth: "60vh",
            height: 300,
            backgroundColor: "#37474f",
          }}
          showLabels
          label="Select Category"
          value={categorie}
          onChange={(event, newValue) => {
            setCategorie(newValue);
          }}
          variant="outlined"
        >
          {Categories.map((cat) => (
            <BottomNavigationAction
              sx={{
                backgroundColor: "#37474f",
                color: "#ffebee",
                "&:active": {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              key={cat.value}
              label={cat.label}
              value={cat.value}
            >
              {cat.value}
            </BottomNavigationAction>
          ))}
        </BottomNavigation>
      </Box> */}
      {/* <FormControl component="fieldset" className="difficulty">
        <p>Difficulty</p>
        <RadioGroup
          className="radioGroup"
          aria-label="difficulty"
          name="controlled-radio-buttons-group"
          value={dificulty}
          onChange={(e) => setDificulty(e.target.value)}
        >
          <FormControlLabel
            value="easy"
            control={<Radio color="success" />}
            label="Easy"
          />
          <FormControlLabel
            value="medium"
            control={<Radio color="warning" />}
            label="Medium"
          />
          <FormControlLabel
            value="hard"
            control={<Radio color="error" />}
            label="Hard"
          />
        </RadioGroup>
      </FormControl> */}

      {/* <ButtonGroup
          value={categorie}
          onChange={(event, newValue) => {
            setCategorie(newValue);
          }}
        >
          {Categories.map((cat) => (
            <Button
              sx={{
                backgroundColor: "#37474f",
                color: "#ffebee",
                "&:active": {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              key={cat.value}
              label={cat.label}
              value={cat.value}
            >
              {cat.value}
            </Button>
          ))}
        </ButtonGroup> */}
    </div>
  );
};

export default Category;
