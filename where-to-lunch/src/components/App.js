import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import EateryAdmin from "./EateryAdmin";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/eatery-admin">Admin</NavLink>
      </div>
    );
  }
}

export default App;
