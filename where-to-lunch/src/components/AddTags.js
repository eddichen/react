import React, { Component } from "react";

class AddTags extends Component {
  submitTag = event => {
    event.preventDefault();
    const tag = this.tag.value;
    this.props.addTags(tag);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.submitTag}>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            id="tag"
            ref={tag => {
              this.tag = tag;
            }}
          />
          <button type="submit" className="btn btn-primary">
            Add Tag
          </button>
        </div>
      </form>
    );
  }
}

export default AddTags;
