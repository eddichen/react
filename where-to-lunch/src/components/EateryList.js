import React, { Component } from "react";
import Eatery from "./Eatery";

class EateryList extends Component {
  render() {
    return (
      <ul className="list-unstyled row">
        {Object.keys(this.props.eateries).map(key => (
          <Eatery key={key} details={this.props.eateries[key]} />
        ))}
      </ul>
    );
  }
}

export default EateryList;
