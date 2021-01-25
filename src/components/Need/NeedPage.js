import React, { Component } from "react";
import { Link } from "react-router-dom";
import NeedList from "./NeedList";

export default class Needpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: [],
      need: {
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
    const need = {
      name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      zipcode: e.target.zipcode.value,
    };

    this.setState({
      needs: [...this.state.needs, need],
    });
  };

  render() {
    console.log("needs are ", this.state.needs);
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
            <button type="submit">submit</button>
          </form>
        </div>
        <button onClick={() => this.handleClick()} id="requestBtn">
          New Request
        </button>
        <NeedList needs={this.state.needs} />
        <ul id="need-list"></ul>
      </div>
    );
  }
}
