import React, { Component } from "react";
import AddEateryForm from "./AddEateryForm";
import base from "../base";

class EateryAdmin extends Component {
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

  addEatery = eatery => {
    const eateries = { ...this.state.eateries };
    eateries[`eatery${Date.now()}`] = eatery;
    this.setState({ eateries: eateries });
  };

  render() {
    return (
      <div className="container">
        <AddEateryForm addEatery={this.addEatery} />
      </div>
    );
  }
}

export default EateryAdmin;
