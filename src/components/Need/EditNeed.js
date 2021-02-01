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
    // console.log(newNeed);
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
            <label htmlFor="name">
              <b>name</b>
              <br />
              <input type="text" placeholder="Jane Doe" name="name" required />
            </label>
            <br />
            <label htmlFor="email">
              <b>email</b>
              <br />
              <input
                type="email"
                name="email"
                placeholder={"name@gmail.com"}
                required
              />
            </label>
            <br />
            <label htmlFor="tampons">
              <b>tampons</b>
              <br />
              <input
                type="number"
                name="tampons"
                placeholder="number of tampons"
              />
            </label>
            <br />
            <label htmlFor="pads">
              <b>pads</b>
              <br />
              <input type="number" name="pads" placeholder="number of pads" />
            </label>
            <br />
            <label htmlFor="location">
              <b>location</b>
              <br />
              <States />
            </label>
            <br />
            <button id="submitBtn">submit</button>
            <button onClick={() => this.handleCancel()}>cancel</button>
          </div>
        </form>
      </>
    );
  }
}
export default EditNeed;
