import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rock from "./rockPaper/App";
import Memory from "./memory/App";
import Quiz from "./quiz/App";
import App from "./App";
import Test from './quiz/Test';

function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/rock" component={Rock} />
        <Route path="/memory" component={Memory} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path='/quiz/test' component={Test} />
      </Switch>
    </Router>
  );
}

export default Index;
