import React, { Component } from "react";
import Eatery from "./Eatery";

class EateryList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {Object.keys(this.props.eateries).map(key => (
          <li>
            <Eatery key={key} details={this.props.eateries[key]} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EateryList;
