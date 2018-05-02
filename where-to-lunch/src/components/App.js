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
        <NavLink to="/eatery-admin">Admin</NavLink>
        <ul>
          {Object.keys(this.state.eateries).map(key => (
            <Eatery key={key} details={this.state.eateries[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
