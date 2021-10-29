import axios from "axios";

export const updateUser = async (updateData) => {
  return await axios
    .put("http://localhost:3002/users/score", updateData, {
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
    .get("http://localhost:3002/users/user", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("err", err));
};
