import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rock from "./rockPaper/App";
import Memory from "./memory/App";
import Quiz from "./quiz/App";
import App from "./App";

function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/rock" component={Rock} />
        <Route path="/memory" component={Memory} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default Index;
