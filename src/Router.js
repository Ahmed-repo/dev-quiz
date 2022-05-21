import { Route, Switch } from "react-router";
import Homepage from "./components/homepage/Homepage";
import Result from "./components/quiz/Result";
import Register from "./components/account/Register";
import LogIn from "./components/account/LogIn";
import { QuestionController } from "./context/QuestionContext";
import { Suspense, lazy } from "react";
const Contact = lazy(() => import("./components/contact/Contact"));
const Categories = lazy(() => import("./components/questions/Categories"));
const Quiz = lazy(() => import("./components/quiz/Quiz"));

const Router = () => {
  return (
    <Route>
      <Switch>
        <QuestionController>
          <Route exact path="/" component={Homepage} />
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path="/category" component={Categories} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path="/quiz" component={Quiz} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path="/contact" component={Contact} />
          </Suspense>
          <Route exact path="/result" component={Result} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={LogIn} />
        </QuestionController>
      </Switch>
    </Route>
  );
};

export default Router;
