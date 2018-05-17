import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import EateryList from './EateryList';
import base from '../base';

import 'react-bootstrap-typeahead/css/Typeahead.css';

class App extends Component {
  state = {
    eateries: {},
    tags: [],
    eateriesFiltered: []
  };

  componentDidMount() {
    this.refEateries = base.syncState(`eateries`, {
      context: this,
      state: 'eateries'
    });

    this.refTags = base.syncState(`tags`, {
      context: this,
      state: 'tags',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refEateries);
    base.removeBinding(this.refTags);
  }

  filterEateries = selected => {
    let eateriesFiltered = [];
    const eateries = { ...this.state.eateries };
    Object.keys(eateries).map(key => {
      let tags = eateries[key].tags;
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          if (tags[i] === selected[0]) {
            eateriesFiltered.push(eateries[key]);
          }
        }
      }
    });
    this.setState({ eateriesFiltered: eateriesFiltered });
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h1 className="site-logo">Where to lunch!?!</h1>
          </div>
          <div className="col text-right">
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
        <div className="row mb-4">
          <form className="col">
            <div className="row">
              <div className="col col-auto align-self-center">
                <label htmlFor="search" className="mb-0">
                  I'm feeling like...
                </label>
              </div>
              <div className="col">
                <Typeahead
                  options={this.state.tags}
                  onChange={selected => {
                    this.filterEateries(selected);
                  }}
                  id="search"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <EateryList eateries={this.state.eateriesFiltered} />
        </div>
      </div>
    );
  }
}

export default App;
