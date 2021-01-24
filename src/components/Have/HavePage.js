import React from "react";
import { Link } from "react-router-dom";

const HavePage = () => {
  return (
    <div>
      <h3>Posted Today</h3>
      <select name="category" id="category">
        <option value="zipcode">zipcode</option>
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>

      <p>
        2 hrs ago: Samantha needs 10 tampons at 75080 .
        <a href="./contact-form.html">contact</a>
      </p>

      <p>
        5 hrs ago: Bailey needs 15 pads at 78758.
        <a href="./contact-form.html">contact</a>
      </p>
      <Link to="/haveform">New Inventory</Link>
    </div>
  );
};

export default HavePage;
