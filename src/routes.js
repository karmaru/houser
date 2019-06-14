// import components needed for routing
import React from "react";
import { Switch, Route } from "react-router-dom";

//import components we will route to
import House from "./components/House/House";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Wizard from "./components/Wizard/Wizard"



//this exports the routes so other components can call them
export default (
    <Switch>
      <Route component={Dashboard} exact path="/" />
      <Route component={Wizard} path="/wizard" />
    </Switch>
  );