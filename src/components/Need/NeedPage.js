import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import config from "../../config";
import States from "../States";
import { Link } from "react-router-dom";

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
  handleGoBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1 className="need-title">What do you need?</h1>
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
                <b>email</b>
                <br />
                <span className="required">*</span>
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
                <span className="required">*</span>
              </label>
              <input
                className="field-long"
                type="number"
                name="tampons"
                placeholder="number of tampons"
                required
              />
            </li>
            <br />
            <li>
              <label htmlFor="pads">
                <b>pads</b>
                <br />
                <span className="required">*</span>
              </label>
              <input
                className="field-long"
                type="number"
                name="pads"
                placeholder="number of pads"
                required
              />
            </li>
            <br />

            <label htmlFor="location">
              <b>location</b>
              <span className="required">*</span>
            </label>

            <States />

            <br />
            <button className="btn delete-edit submit" id="submitBtn">
              submit
            </button>
            <button
              className="btn delete-edit"
              onClick={() => this.handleCancel()}
            >
              cancel
            </button>
            <button className="btn delete-edit goback">
              <Link
                style={{ textDecoration: "none" }}
                onClick={this.handleGoBack}
              >
                main page
              </Link>
            </button>
          </ul>
        </form>
      </div>
    );
  }
}
