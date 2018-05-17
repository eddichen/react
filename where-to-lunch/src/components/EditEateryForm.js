import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';

class EditEateryForm extends React.Component {
  handleChange = event => {
    const updateEatery = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateEatery(this.props.index, updateEatery);
  };

  handleTags = event => {
    const updateEatery = {
      ...this.props.details,
      ['tags']: event
    };
    this.props.updateEatery(this.props.index, updateEatery);
  };

  render() {
    return (
      <li>
        <form>
          <h2>{this.props.details.name}</h2>
          <div className="form-group">
            <label htmlFor="eateryName">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              id="eateryName"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eateryAddress">Address</label>
            <input
              type="text"
              name="address"
              placeholder="address"
              id="eateryAddress"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.details.address}
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="eateryCity">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="city"
                  id="eateryCity"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.props.details.city}
                />
              </div>
              <div className="col">
                <label htmlFor="eateryPostcode">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="postcode"
                  id="eateryPostcode"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.props.details.postcode}
                />
              </div>
            </div>
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
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.props.details.latitude}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="longitude"
                  placeholder="longitude"
                  id="eateryLongitude"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.props.details.longitude}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="eaterySite">Website</label>
            <input
              type="url"
              name="site"
              placeholder="site"
              id="eaterySite"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.details.site}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eateryPriceRange">Price Range</label>
            <select
              name="priceRange"
              id="eateryPriceRange"
              className="form-control"
              required
              onChange={this.handleChange}
              value={this.props.details.priceRange}
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
              multiple
              defaultSelected={this.props.details.tags}
              options={this.props.tags}
              onChange={this.handleTags}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eateryType">Type</label>
            <select
              name="type"
              id="eateryType"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.details.type}
              required
            >
              <option value="">Type</option>
              <option value="restaurant">Restaurant</option>
              <option value="street-food-stall">Street-food Stall</option>
              <option value="takeaway-store">Takeaway Store</option>
              <option value="fast-food">Fast Food</option>
            </select>
          </div>
        </form>
      </li>
    );
  }
}

export default EditEateryForm;
