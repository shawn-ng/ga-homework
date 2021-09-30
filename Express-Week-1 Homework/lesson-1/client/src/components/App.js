import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/style.scss";

import Home from "./Home.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
