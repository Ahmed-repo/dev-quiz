import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box, FormControlLabel } from "@material-ui/core";
import {
  Button,
  ButtonGroup,
  FormControl,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Categories from "../data/Categories";
import useQuestionContext from "../../hooks/useQuestionContext";
import "./Categorie.css";
const Category = () => {
  const { categorie, setCategorie, dificulty, setDificulty } =
    useQuestionContext();

  const handleChangeType = (e) => {
    setCategorie(e.target.value);
  };
  return (
    <div className="categorie_difficulty">
      <Box className="box" sx={{ backgroundColor: "#37474f" }}>
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
      </Box>
      <FormControl component="fieldset" className="difficulty">
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
      </FormControl>
      <div>
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
    </div>
  );
};

export default Category;
