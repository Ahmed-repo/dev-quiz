import axios from "axios";

export const updateUser = async (updateData) => {
  return await axios
    .put(`https://quizexpert.herokuapp.com/users/score`, updateData, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((res) => {
      getUser();
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const getUser = async () => {
  return await axios
    .get("https://quizexpert.herokuapp.com/users/user", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err", err));
};
