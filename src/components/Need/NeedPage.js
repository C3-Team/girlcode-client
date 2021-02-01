import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import config from "../../config";
import States from "../States";

export default class Needpage extends Component {
  static contextType = MyContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const need = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      need_location: e.target.location.value,
    };
    //post
    const postOptions = {
      method: "POST",
      body: JSON.stringify(need),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/needs`, postOptions).then((res) =>
      res.json().then((need) => this.context.handleAddNeed(need))
    );
    this.props.history.push("/needlist");
  };
  handleCancel = () => {
    this.props.history.push("/needlist");
  };

  render() {
    return (
      <div>
        <h1>What do you need?</h1>
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
