import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddEateryForm from "./AddEateryForm";
import Eatery from "./Eatery";
import EditEateryForm from "./EditEateryForm";
import AddTags from "./AddTags";
import base from "../base";

class EateryAdmin extends Component {
  state = {
    eateries: {},
    tags: [],
    modal: false
  };

  selectedKey = "";

  componentDidMount() {
    this.refEateries = base.syncState(`eateries`, {
      context: this,
      state: "eateries"
    });

    this.refTags = base.syncState(`tags`, {
      context: this,
      state: "tags",
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refEateries);
    base.removeBinding(this.refTags);
  }

  addEatery = eatery => {
    const eateries = { ...this.state.eateries };
    eateries[`eatery${Date.now()}`] = eatery;
    this.setState({ eateries });
  };

  updateEatery = (key, updatedEatery) => {
    const eateries = { ...this.state.eateries };
    eateries[key] = updatedEatery;
    this.setState({ eateries });
  };

  addTags = tag => {
    const tags = [...this.state.tags];
    tags.push(tag);
    this.setState({ tags });
  };

  toggle = key => {
    this.setState({ selectedKey: key });
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Where to Lunch Admin</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            {/* <button onClick={this.toggle}>Modal</button> */}
            <ul className="list-unstyled">
              {Object.keys(this.state.eateries).map(key => (
                <EditEateryForm
                  key={key}
                  index={key}
                  details={this.state.eateries[key]}
                  tags={this.state.tags}
                  updateEatery={this.updateEatery}
                />
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h2>Add Eatery</h2>
            <AddEateryForm addEatery={this.addEatery} tags={this.state.tags} />
            <h2>Add Tags</h2>
            <AddTags addTags={this.addTags} />
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          aria-labelledby="ModalHeader"
        >
          <ModalHeader toggle={this.toggle} id="Modal Header">
            Modal heading
          </ModalHeader>
          <ModalBody>
            <p>Modal</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EateryAdmin;
