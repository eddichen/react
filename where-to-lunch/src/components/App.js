import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
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
        <form>
          <div className="form-group">
            <label htmlFor="search">I'm feeling like...</label>
            <input type="text" name="search" id="search" ref="search" />
            {/* <Typeahead onChange={} options={} /> */}
            <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
