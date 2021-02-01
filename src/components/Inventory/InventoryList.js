import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import EditInventory from "./EditInventory";
export default class InventoryList extends Component {
  state = {
    expanded_item: null,
  };
  static contextType = MyContext;
  handleFilter = (e) => {
    let location = e.target.value;
    this.context.handleFilterInventory(location);
  };
  handleEdit = (inventoryId) => {
    if (this.state.expanded_item === inventoryId) {
      this.setState({
        expanded_item: null,
      });
    } else {
      this.setState({
        expanded_item: inventoryId,
      });
    }
  };
  render() {
    let inventories = this.context.inventories;
    if (this.context.filterByStateInventory) {
      inventories = this.context.inventories.filter(
        (inventory) =>
          inventory.inventory_location === this.context.filterByStateInventory
      );
    }
    return (
      <>
        <div>
          <label htmlFor="states">
            Filter by states
            <select name="location" id="states" onChange={this.handleFilter}>
              <option value="">show all</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="DC">DC</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
          </label>
        </div>
        <div className="list">
          {this.context.inventories.map((inventory) => (
            <li key={inventory.id} className="list-item">
              {inventory.user_name} has {inventory.tampons} tampons and{" "}
              {inventory.pads} pads in {inventory.inventory_location}.{" "}
              <div>
                <button
                  className="btn delete-edit edit"
                  onClick={() => this.handleEdit(inventory.id)}
                >
                  Edit
                </button>
                {this.state.expanded_item === inventory.id && (
                  <EditInventory
                    key={inventory.id}
                    name={inventory.user_name}
                    inventoryId={inventory.id}
                  />
                )}
                <a href={`mailto:${inventory.email}`}>
                  <button className="btn delete-edit contact">contact</button>
                </a>
                <button
                  className="btn delete-edit"
                  onClick={() =>
                    this.context.handleDeleteInventory(inventory.id)
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      </>
    );
  }
}
