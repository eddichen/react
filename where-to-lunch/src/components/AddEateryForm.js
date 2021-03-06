import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';

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
      type: this.eateryType.value
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
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="latitude"
                placeholder="latitude"
                id="eateryLatitude"
                ref={eateryLatitude => {
                  this.eateryLatitude = eateryLatitude;
                }}
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="longitude"
                placeholder="longitude"
                id="eateryLongitude"
                ref={eateryLongitude => {
                  this.eateryLongitude = eateryLongitude;
                }}
                className="form-control"
              />
            </div>
          </div>
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
          <label htmlFor="eateryType">Type</label>
          <select
            name="type"
            id="eaterType"
            ref={eateryType => {
              this.eateryType = eateryType;
            }}
            className="form-control"
            required
          >
            <option value="">Type</option>
            <option value="restaurant">Restaurant</option>
            <option value="street-food-stall">Street-food Stall</option>
            <option value="takeaway-store">Takeaway Store</option>
            <option value="fast-food">Fast Food</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddEateryForm;
