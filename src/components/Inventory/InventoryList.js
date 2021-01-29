import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import Posted from "../TimeAgo/Posted";
export default class NeedList extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="list">
        {this.context.inventories.map((inventory) => (
          <li key={inventory.id}>
            {inventory.user_name} has {inventory.tampons} tampons and{" "}
            {inventory.pads} pads at {inventory.zipcode}.{" "}
            <a href={`mailto:${inventory.email}`}>contact</a>
            {/* <Posted date={Date.now()} /> */}
            {/* <button
              onClick={() => this.context.handleDeleteInventory(inventory.id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </div>
    );
  }
}
