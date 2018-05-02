import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import EateryAdmin from "./EateryAdmin";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/eatery-admin" component={EateryAdmin} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
