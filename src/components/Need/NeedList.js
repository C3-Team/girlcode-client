import React, { Component } from "react";

export default class NeedList extends Component {
  render() {
    return (
      <div>
        {this.props.needs.map((need) => (
          <li>
            {need.name} needs {need.tampons} tampons and {need.pads} pads at{" "}
            {need.zipcode}.
          </li>
        ))}
      </div>
    );
  }
}
