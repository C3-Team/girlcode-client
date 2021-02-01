import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import States from "../States";
import config from "../../config";

export default class Inventorypage extends Component {
  static contextType = MyContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const inventory = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      inventory_location: e.target.location.value,
    };
    //post
    const postOptions = {
      method: "POST",
      body: JSON.stringify(inventory),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/inventories`, postOptions).then((res) =>
      res.json().then((inventory) => this.context.handleAddInventory(inventory))
    );
    this.props.history.push("/havelist");
  };
  handleCancel = () => {
    this.props.history.push("/havelist");
  };
  render() {
    return (
      <div>
        <h1>What do you have?</h1>
        <form onSubmit={this.handleSubmit}>
          <ul className="form-style-1">
            <li>
              <label htmlFor="name">
                <b>Name</b>
                <br />
                <span className="required">*</span>
              </label>
              <input
                className="field-long"
                type="text"
                placeholder="Jane Doe"
                name="name"
                required
              />
            </li>
            <br />
            <li>
              <label htmlFor="email">
                <span className="required">*</span>
                <b>email</b>
                <br />
              </label>
              <input
                className="field-long"
                type="email"
                name="email"
                placeholder={"name@gmail.com"}
                required
              />
            </li>
            <br />
            <li>
              <label htmlFor="tampons">
                <b>tampons</b>
                <br />
              </label>
              <input
                className="field-long"
                type="number"
                name="tampons"
                placeholder="number of tampons"
              />
            </li>
            <br />
            <li>
              <label htmlFor="pads">
                <b>pads</b>
                <br />
              </label>
              <input
                className="field-long"
                type="number"
                name="pads"
                placeholder="number of pads"
              />
            </li>
            <br />

            <label htmlFor="location">
              <b>location</b>
            </label>
            <br />
            <States />

            <br />
            <button id="submitBtn">submit</button>
            <button onClick={() => this.handleCancel()}>cancel</button>
          </ul>
        </form>
      </div>
    );
  }
}
