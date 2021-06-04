import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppRouteType } from "./types";

const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRouteType.home} component={Home} />
      </Switch>
    </Router>
  );
};

export default RootNavigator;
