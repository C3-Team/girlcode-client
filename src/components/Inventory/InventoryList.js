import React, { Component } from "react";
import { MyContext } from "../Context/Context";
export default class NeedList extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        {this.context.inventories.map((inventory) => (
          <li key={inventory.id}>
            {inventory.user_name} has {inventory.tampons} tampons and{" "}
            {inventory.pads} pads at {inventory.zipcode}.
            <button
              onClick={() => this.context.handleDeleteInventory(inventory.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}
