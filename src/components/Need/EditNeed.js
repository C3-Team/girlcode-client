import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import States from "../States";
import config from "../../config";

class EditNeed extends Component {
  static contextType = MyContext;
  handleSubmit = (e) => {
    e.preventDefault();
    const newNeed = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      need_location: e.target.location.value,
    };
    // patch
    const patchOptions = {
      method: "PATCH",
      body: JSON.stringify(newNeed),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(
      `${config.API_ENDPOINT}/needs/${this.props.needId}`,
      patchOptions
    ).then(() => this.context.handleEditNeed(this.props.needId, newNeed));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <ul className="form-style-1">
              <li>
                <label htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  defaultValue={this.props.name}
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
                </label>
                <input
                  defaultValue={this.props.email}
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
                  defaultValue={this.props.tampons}
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
                  defaultValue={this.props.pads}
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

              <States location={this.props.location} />

              <br />
              <button id="submitBtn">submit</button>
            </ul>
          </div>
        </form>
      </>
    );
  }
}
export default EditNeed;
