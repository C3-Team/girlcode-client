import React, { Component } from "react";

export default class HaveList extends Component {
  render() {
    return (
      <div>
        {this.props.haves.map((have) => (
          <li>
            <a href={`mailto:${have.email}`}>
              {have.name} has {have.tampons} tampons and {have.pads} pads at{" "}
              {have.zipcode}.
            </a>
          </li>
        ))}
      </div>
    );
  }
}
