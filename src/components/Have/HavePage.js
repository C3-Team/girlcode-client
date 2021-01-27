import React, { Component } from "react";

import HaveList from "./HaveList";

export default class Needpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haves: [],
      have: {
        name: "",
        email: "",
        tampons: "",
        pads: "",
        zipcode: "",
      },
    };
  }

  handleClick = () => {
    document.getElementById("showForm").style.display = "block";
    document.getElementById("requestBtn").style.display = "none";
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const have = {
      name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      zipcode: e.target.zipcode.value,
    };

    this.setState({
      haves: [...this.state.haves, have],
    });
  };

  render() {
    console.log("haves are ", this.state.haves);
    return (
      <div>
        <div id="showForm">
          <h1>What do you have?</h1>
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
            <button type="submit">submit</button>
          </form>
        </div>
        <button onClick={() => this.handleClick()} id="requestBtn">
          New Inventory
        </button>
        <HaveList haves={this.state.haves} />
        <ul id="need-list"></ul>
      </div>
    );
  }
}
