import React, { Component } from "react";
import { NeedsContext } from "../Context";
import NeedList from "./NeedList";
import config from "../../config";

export default class Needpage extends Component {
  static contextType = NeedsContext;

  handleClick = () => {
    document.getElementById("showForm").style.display = "block";
    document.getElementById("requestBtn").style.display = "none";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const need = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      zipcode: e.target.zipcode.value,
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
      res.json()
    );

    //show and hide the new request btn
    document.getElementById("requestBtn").style.display = "block";
    document.getElementById("showForm").style.display = "none";
  };

  render() {
    console.log("needs are ", this.context.needs);
    return (
      <div>
        <div id="showForm">
          <h1>What do you need?</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="need">
              <b>name</b>
              <input type="text" placeholder="Jane Doe" name="name" required />
              <b>email</b>
              <input
                type="email"
                name="email"
                placeholder={"name@gmail.com"}
                required
              />
              <b>tampons</b>
              <input
                type="number"
                name="tampons"
                placeholder="number of tampons"
              />
            </label>
            <br />
            <label htmlFor="pads">
              <b>pads</b>
              <input type="number" name="pads" placeholder="number of pads" />
            </label>
            <br />
            <label htmlFor="zip">
              <b>zip code</b>
              <input name="zipcode" type="number" placeholder='e.g., "78758"' />
            </label>
            <button id="submitBtn">submit</button>
          </form>
        </div>
        <button onClick={() => this.handleClick()} id="requestBtn">
          New Request
        </button>
        <NeedList />
        <ul id="need-list"></ul>
      </div>
    );
  }
}
