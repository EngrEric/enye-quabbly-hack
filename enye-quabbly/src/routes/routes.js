import React from "react";
import { Switch } from "react-router";
import {
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import Landing from "../home/landing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
