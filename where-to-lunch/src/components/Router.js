import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import EateryAdmin from "./EateryAdmin";
import EateryList from "./EateryList";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={EateryAdmin} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
