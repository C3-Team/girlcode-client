import React, { Component } from "react";
import { NeedsContext } from "../Context";
import config from "../../config";
export default class NeedList extends Component {
  static contextType = NeedsContext;

  render() {
    return (
      <div>
        {this.context.needs.map((need) => (
          <li key={need.id}>
            {need.user_name} needs {need.tampons} tampons and {need.pads} pads
            at {need.zipcode}.
            <button onClick={() => this.context.handleDeleteNeed(need.id)}>
              {console.log(need.id)}
              Delete
            </button>
            <button>Edit</button>
          </li>
        ))}
      </div>
    );
  }
}
