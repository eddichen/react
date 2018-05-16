import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import EateryList from "./EateryList";
import base from "../base";

import "react-bootstrap-typeahead/css/Typeahead.css";

class App extends Component {
  state = {
    eateries: {},
    tags: [],
    eateriesFiltered: []
  };

  componentDidMount() {
    this.refEateries = base.syncState(`eateries`, {
      context: this,
      state: "eateries"
    });

    this.refTags = base.syncState(`tags`, {
      context: this,
      state: "tags",
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refEateries);
    base.removeBinding(this.refTags);
  }

  filterEateries = selected => {
    let eateriesFiltered = [];
    const eateries = { ...this.state.eateries };
    Object.keys(eateries).map(key => {
      let tags = eateries[key].tags;
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          if (tags[i] === selected[0]) {
            eateriesFiltered.push(eateries[key]);
          }
        }
      }
      return false;
    });
    this.setState({ eateriesFiltered: eateriesFiltered });
  };

  render() {
    return (
      <div className="container">
        <NavLink to="/admin">Add Eatery</NavLink>
        <form>
          <div className="form-group">
            <label htmlFor="search">I'm feeling like...</label>
            <Typeahead
              options={this.state.tags}
              onChange={selected => {
                this.filterEateries(selected);
              }}
              id="search"
            />
          </div>
        </form>
        <EateryList eateries={this.state.eateriesFiltered} />
      </div>
    );
  }
}

export default App;
