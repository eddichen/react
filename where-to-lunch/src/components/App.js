import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import base from "../base";
import Eatery from "./Eatery";

class App extends Component {
  state = {
    eateries: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`eateries`, {
      context: this,
      state: "eateries"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="container">
        <NavLink to="/admin">Add Eatery</NavLink>
      </div>
    );
  }
}

export default App;
