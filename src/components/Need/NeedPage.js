import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Needpage extends Component {
  state = {
    email: "nikadaran@pm.me",
  };
  render() {
    return (
      <div>
        <h3>Posted Today</h3>
        <select name="category" id="category">
          <option value="zipcode">zipcode</option>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
        </select>

        <p>
          2 hrs ago: Annie has 20 tampons at 75080 .
          <a href={"mailto:" + this.state.email}>contact</a>
          {console.log("contact")}
        </p>

        <p>
          Yesterday: Sam has 15 pads at 78758.
          <Link to="/contactform">contact</Link>
        </p>
        <Link to="/needform">New Request</Link>
      </div>
    );
  }
}
