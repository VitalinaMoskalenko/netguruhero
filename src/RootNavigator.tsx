import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddHeroForm from "./pages/AddHeroForm";
import HeroDetails from "./pages/HeroDetails";
import Home from "./pages/Home";
import { AppRouteType } from "./types";

const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route path={AppRouteType.home} component={Home} />
          <Route path={AppRouteType.addHeroForm} component={AddHeroForm} />
          <Route
            path={AppRouteType.heroDetailsWithId}
            component={HeroDetails}
          />
        </Fragment>
      </Switch>
    </Router>
  );
};

export default RootNavigator;
