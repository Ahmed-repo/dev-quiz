import { Route, Switch } from "react-router";
import HomePage from "./components/Homepage";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Quiz from "./components/quiz/Quiz";
import Result from "./components/quiz/Result";
import Register from "./components/account/Register";
import LogIn from "./components/account/LogIn";
import { QuestionController } from "./context/QuestionContext";
import useAuthContext from "./hooks/useAuthContext";

const Router = () => {
  const {
    user,
    setUser,
    showError,
    setShowError,
    errorMessage,
    setErrorMessage,
    register,
    isLoggedIn,
  } = useAuthContext();

  return (
    <Route>
      <Navbar />
      <Switch>
        <QuestionController>
          <Route exact path="/landingpage" component={Landingpage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={LogIn} />
        </QuestionController>
      </Switch>
    </Route>
  );
};

export default Router;
