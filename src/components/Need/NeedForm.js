import React, { Component } from "react";
import NeedContextProvider from "../Contexts/NeedContext";
class NeedForm extends Component {
  static contextType = NeedContextProvider;

  handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      tampon: e.target.tampon.value,
      pad: e.target.pad.value,
    };
    // const zipcode =e.target.zipcode.
  };
  render() {
    return (
      <div>
        <h1>What do you need?</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="need">
            <b>name</b>
            <input type="text" placeholder="Jane Doe" name="name" />
            <b>email</b>
            <input type="email" name="email" placeholder={"name@gmail.com"} />
            <b>tampons</b>
            <input
              type="number"
              name="tampon"
              placeholder="number of tampons"
            />
          </label>
          <br />
          <label htmlFor="pads">
            <b>pads</b>
            <input type="number" name="pad" placeholder="number of pads" />
          </label>
          <br />
          <label htmlFor="zip">
            <b>zip code</b>
            <input name="zip" type="number" placeholder='e.g., "78758"' />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default NeedForm;
