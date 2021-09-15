import React from "react";
import { Switch } from "react-router";
import {
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../components/navbar";
import Landing from "../home/landing";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
