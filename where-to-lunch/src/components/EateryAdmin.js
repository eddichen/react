import React, { Component } from "react";
import AddEateryForm from "./AddEateryForm";
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
        <AddEateryForm addEatery={this.addEatery} tags={this.state.tags} />
      </div>
    );
  }
}

export default EateryAdmin;
