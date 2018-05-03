import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddEateryForm from "./AddEateryForm";
import EateryList from "./EateryList";
import AddTags from "./AddTags";
import base from "../base";

class EateryAdmin extends Component {
  state = {
    eateries: {},
    tags: []
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

  addEatery = eatery => {
    const eateries = { ...this.state.eateries };
    eateries[`eatery${Date.now()}`] = eatery;
    this.setState({ eateries: eateries });
  };

  addTags = tag => {
    const tags = [...this.state.tags];
    tags.push(tag);
    this.setState({ tags: tags });
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
            <AddTags addTags={this.addTags} />
          </div>
        </div>
      </div>
    );
  }
}

export default EateryAdmin;
