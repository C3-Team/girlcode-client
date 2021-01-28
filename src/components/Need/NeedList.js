import React, { Component } from "react";
import { NeedsContext } from "../Context";

export default class NeedList extends Component {
  static contextType = NeedsContext;
  render() {
    return (
      <div>
        {this.context.needs.map((need) => (
          <li key={need.id}>
            {need.user_name} needs {need.tampons} tampons and {need.pads} pads
            at {need.zipcode}.<button>Delete</button>
            <button onClick={this.context.handleDeleteNeed(need.id)}>
              Edit
            </button>
          </li>
        ))}
      </div>
    );
  }
}