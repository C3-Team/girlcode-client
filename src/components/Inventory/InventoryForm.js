import React, { Component } from "react";
import config from "../../config";
import { MyContext } from "../Context/Context";
export default class InventoryForm extends Component {
  static contextType = MyContext;
  handleSubmit = (e) => {
    e.preventDefault();
    const inventory = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      location: e.target.location.value,
    };
    console.log(inventory.location);
    //post
    const postOptions = {
      method: "POST",
      body: JSON.stringify(inventory),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    fetch(`${config.API_ENDPOINT}/inventories`, postOptions).then((res) =>
      res.json().then((inventory) => this.context.handleAddInventory(inventory))
    );
  };
  render() {
    return (
      <div>
        <h1>What do you have?</h1>{" "}
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
                put
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

              <select name="location" id="">
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </label>
            <br />
            <button>submit</button>
            <button onClick={() => this.handleCancel()}>cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
