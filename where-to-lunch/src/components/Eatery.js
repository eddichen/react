import React from "react";

class Eatery extends React.Component {
  render() {
    const {
      name,
      address,
      city,
      postcode,
      latitude,
      longitude,
      site,
      priceRange,
      tags,
      seating
    } = this.props.details;
    return (
      <li className="col-12 col-lg-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
          </div>
        </div>
      </li>
    );
  }
}

export default Eatery;
