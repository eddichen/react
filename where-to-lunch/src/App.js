import React, { Component } from 'react';
import AddEateryForm from "./components/AddEateryForm";
import base from './base';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    eateries: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`eateries`, {
      context: this,
      state: 'eateries'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addEatery = eatery => {
    const eateries = {...this.state.eateries};
    eateries[`eatery${Date.now()}`] = eatery;
    this.setState({eateries: eateries});
  }

  render() {
    return (
      <div className="container">
        <AddEateryForm addEatery={this.addEatery}></AddEateryForm>
      </div>
    );
  }
}

export default App;
