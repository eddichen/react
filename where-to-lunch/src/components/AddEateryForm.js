import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

class AddEateryForm extends React.Component {
  createEatery = event => {
    event.preventDefault();
    const eatery = {
      name: this.eateryName.value,
      address: this.eateryAddress.value,
      city: this.eateryCity.value,
      postcode: this.eateryPostcode.value,
      latitude: this.eateryLatitude.value,
      longitude: this.eateryLongitude.value,
      site: this.eaterySite.value,
      priceRange: this.eateryPriceRange.value,
      tags: this.eateryTags,
      seating: this.eaterySeating.value
    };
    //pass values to add eatery
    this.props.addEatery(eatery);
    //clear the form
    event.currentTarget.reset();
    this.typeahead.getInstance().clear();
  };

  render() {
    return (
      <form onSubmit={this.createEatery}>
        <div className="form-group">
          <label htmlFor="eateryName">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            id="eateryName"
            ref={eateryName => {
              this.eateryName = eateryName;
            }}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryAddress">Address</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            id="eateryAddress"
            ref={eateryAddress => {
              this.eateryAddress = eateryAddress;
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryCity">City</label>
          <input
            type="text"
            name="city"
            placeholder="city"
            id="eateryCity"
            ref={eateryCity => {
              this.eateryCity = eateryCity;
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryPostcode">Postcode</label>
          <input
            type="text"
            name="postcode"
            placeholder="postcode"
            id="eateryPostcode"
            ref={eateryPostcode => {
              this.eateryPostcode = eateryPostcode;
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryLatitude">Coordinates</label>
          <input
            type="number"
            name="latitude"
            placeholder="latitude"
            id="eateryLatitude"
            ref={eateryLatitude => {
              this.eateryLatitude = eateryLatitude;
            }}
            className="form-control"
          />
          <input
            type="number"
            name="longitude"
            placeholder="longitude"
            id="eateryLongitude"
            ref={eateryLongitude => {
              this.eateryLongitude = eateryLongitude;
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eaterySite">Site</label>
          <input
            type="url"
            name="site"
            placeholder="site"
            id="eaterySite"
            ref={eaterySite => {
              this.eaterySite = eaterySite;
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryPriceRange">Price Range</label>
          <select
            name="price-range"
            id="eateryPriceRange"
            ref={eateryPriceRange => {
              this.eateryPriceRange = eateryPriceRange;
            }}
            className="form-control"
            required
          >
            <option value="">Price Range</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="eateryTags">Tags</label>
          <Typeahead
            name="tags"
            id="eateryTags"
            ref={typeahead => {
              this.typeahead = typeahead;
            }}
            multiple
            onChange={selected => {
              this.eateryTags = selected;
            }}
            options={this.props.tags}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eaterySeating">Seating</label>
          <select
            name="type"
            id="eaterySeating"
            ref={eaterySeating => {
              this.eaterySeating = eaterySeating;
            }}
            className="form-control"
            required
          >
            <option value="">Seating</option>
            <option value="takeaway">Takeaway</option>
            <option value="sit-in">Sit-in</option>
            <option value="either">Sit-in or Takeaway</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddEateryForm;
