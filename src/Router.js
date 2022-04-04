import { Route, Switch } from "react-router";
import Landingpage from "./components/homepage/Landingpage";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./components/quiz/Quiz";
import Result from "./components/quiz/Result";
import Register from "./components/account/Register";
import LogIn from "./components/account/LogIn";
import { QuestionController } from "./context/QuestionContext";
import useAuthContext from "./hooks/useAuthContext";
import Categories from "./components/questions/Categories";

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
      {/* <Navbar /> */}
      <Switch>
        <QuestionController>
          <Route exact path="/landingpage" component={Landingpage} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/category" component={Categories} />
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
