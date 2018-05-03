import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

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
      ["tags"]: event
    };
    this.props.updateEatery(this.props.index, updateEatery);
  };

  render() {
    return (
      <form>
        <div className="form-group">
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
                type="number"
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
                type="number"
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
          <select
            name="seating"
            id="eaterySeating"
            className="form-control"
            onChange={this.handleChange}
            value={this.props.details.seating}
            required
          >
            <option value="">Seating</option>
            <option value="takeaway">Takeaway</option>
            <option value="sit-in">Sit-in</option>
            <option value="either">Sit-in or Takeaway</option>
          </select>
        </div>
      </form>
    );
  }
}

export default EditEateryForm;
