import React from 'react';

class Eatery extends React.Component {
  renderPriceRange = priceRange => {
    switch (priceRange) {
      case 'low':
        return '$';
        break;
      case 'medium':
        return '$$';
        break;
      case 'high':
        return '$$$';
        break;
      default:
        return;
        break;
    }
  };

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
      type
    } = this.props.details;
    return (
      <li className="col-12 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p>
              {address}, {postcode}
            </p>
            <p>
              {this.renderPriceRange(priceRange)} {type}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Eatery;
