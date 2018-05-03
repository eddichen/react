import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddEateryForm from "./AddEateryForm";
import EateryList from "./EateryList";
import base from "../base";

class EateryAdmin extends Component {
  state = {
    eateries: {},
    tags: [
      "Korean",
      "Italian",
      "Mexican",
      "British",
      "Japanese",
      "Vietnamese",
      "Indian"
    ]
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

  addEatery = eatery => {
    const eateries = { ...this.state.eateries };
    eateries[`eatery${Date.now()}`] = eatery;
    this.setState({ eateries: eateries });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <EateryList eateries={this.state.eateries} />
          </div>
          <div className="col-12 col-md-4">
            <AddEateryForm addEatery={this.addEatery} tags={this.state.tags} />
          </div>
        </div>
      </div>
    );
  }
}

export default EateryAdmin;
