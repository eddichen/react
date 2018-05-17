import React from 'react';

class EateryForm extends React.Component {
  render() {
    return (
      <form>
        <h2>{this.props.details.name}</h2>
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
            ref={eateryAddress => {
              this.eateryAddress = eateryAddress;
            }}
            className="form-control"
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
                ref={eateryCity => {
                  this.eateryCity = eateryCity;
                }}
                className="form-control"
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
                ref={eateryPostcode => {
                  this.eateryPostcode = eateryPostcode;
                }}
                className="form-control"
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
                ref={eateryLatitude => {
                  this.eateryLatitude = eateryLatitude;
                }}
                className="form-control"
                value={this.props.details.latitude}
              />
            </div>
            <div className="col">
              <input
                type="number"
                name="longitude"
                placeholder="longitude"
                id="eateryLongitude"
                ref={eateryLongitude => {
                  this.eateryLongitude = eateryLongitude;
                }}
                className="form-control"
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
            ref={eaterySite => {
              this.eaterySite = eaterySite;
            }}
            className="form-control"
            value={this.props.details.site}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eateryPriceRange">Price Range</label>
          <select
            name="priceRange"
            id="eateryPriceRange"
            ref={eateryPriceRange => {
              this.eateryPriceRange = eateryPriceRange;
            }}
            className="form-control"
            required
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
            ref={typeahead => {
              this.typeahead = typeahead;
            }}
            multiple
            defaultSelected={this.props.details.tags}
            options={this.props.tags}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eaterySeating">Seating Type</label>
          <select
            name="seating"
            id="eaterySeating"
            ref={eaterySeating => {
              this.eaterySeating = eaterySeating;
            }}
            className="form-control"
            value={this.props.details.seating}
            required
          >
            <option value="">Seating</option>
            <option value="takeaway">Takeaway</option>
            <option value="sit-in">Sit-in</option>
            <option value="either">Sit-in or Takeaway</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default EateryForm;
