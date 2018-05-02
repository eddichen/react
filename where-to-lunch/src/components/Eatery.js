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
      cuisine,
      seating
    } = this.props.details;
    return (
      <li>
        <h2>{name}</h2>
        <p>
          {address} {city} {postcode}
        </p>
        <p>{site}</p>
        <p>price range: {priceRange}</p>
        <p>cuisine: {cuisine}</p>
        <p>seating: {seating}</p>
      </li>
    );
  }
}

export default Eatery;
