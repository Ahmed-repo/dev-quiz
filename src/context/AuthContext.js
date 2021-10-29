import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const AuthContext = createContext();

export const AuthController = (props) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [errorMessageLogin, setErrorMessageLogin] = useState(null);
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) getUserWithToken();
  }, []);

  const getUserWithToken = () => {
    axios
      .get("http://localhost:3002/users/user", {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data.user[0]);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log("err", err));
  };

  const login = (loginData) => {
    axios
      .post("http://localhost:3002/auth/login", loginData)
      .then((res) => {
        localStorage.setItem("token", res.headers["auth-token"]);
        getUserWithToken();
        history.push("/");
      })
      .catch((err) => {
        setErrorMessageLogin(err.response);
        setShowErrorLogin(true);
        console.log(err.response);
        console.log(errorMessage);
      });
  };

  const register = (registerData) => {
    axios
      .post("http://localhost:3002/auth/register", registerData)
      .then((res) => {
        localStorage.setItem("token", res.headers["auth-token"]);
        getUserWithToken();
        history.push(`/`);
      })
      .catch((err) => {
        setErrorMessage(err.response);
        setShowError(true);
        console.log(err.response);
        console.log(errorMessage);
      });
  };

  const logout = (logoutdata) => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setErrorMessage(null);
    setErrorMessageLogin(null);
    logoutdata.preventDefault();
    history.push(`/`);
  };

  const value = {
    login,
    user,
    isLoggedIn,
    register,
    logout,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
    errorMessageLogin,
    setErrorMessageLogin,
    setUser,
    getUserWithToken,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
