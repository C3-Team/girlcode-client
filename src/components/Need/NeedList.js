import React, { Component } from "react";
import { MyContext } from "../Context/Context";
import config from "../../config";
export default class NeedList extends Component {
  static contextType = MyContext;
  handleFilter = (e) => {
    const state = e.target.value;
    console.log(state);
    this.context.handleFilterNeed(state);
  };
  handleShowEdit = (e) => {
    e.preventDefault(e);
    console.log("edit");
    document.getElementById("editForm").style.display = "block";
  };
  handleSubmitEdit = (e) => {
    e.preventDefault();
    const newNeed = {
      user_name: e.target.name.value,
      email: e.target.email.value,
      tampons: e.target.tampons.value,
      pads: e.target.pads.value,
      need_location: e.target.location.value,
    };
    console.log(newNeed);
    //patch
    //patch
    const patchOptions = {
      method: "PATCH",
      body: JSON.stringify(newNeed),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    // fetch(`${config.API_ENDPOINT}/needs/${needId}`, patchOptions).then((res) =>
    //   res.json()
    // );
  };

  render() {
    return (
      <>
        <div className="list">
          {this.context.needs.map((need) => (
            <li key={need.id}>
              {need.user_name} needs {need.tampons} tampons and {need.pads} pads
              in {need.need_location}.
              <a href={`mailto:${need.email}`}>contact</a>
              <button onClick={() => this.context.handleDeleteNeed(need.id)}>
                Delete
              </button>
              <button>Edit</button>
              <div id="editForm">
                <form onSubmit={this.handleSubmitEdit}>
                  <div>
                    <label htmlFor="name">
                      <b>name</b>
                      <br />
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        name="name"
                        required
                      />
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
                      <input
                        type="number"
                        name="pads"
                        placeholder="number of pads"
                      />
                    </label>
                    <br />
                    <label htmlFor="location">
                      <b>location</b>
                      <br />
                      {/* <input
                  name="zipcode"
                  type="number"
                  placeholder='e.g., "78758"'
                /> */}
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
                    <button id="submitBtn">submit</button>
                    <button onClick={() => this.handleCancel()}>cancel</button>
                  </div>
                </form>
              </div>
            </li>
          ))}
        </div>
        <label htmlFor="filer">filter by location</label>

        <select name="state" id="" onChange={this.handleFilter}>
          <option value="">show all</option>
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
      </>
    );
  }
}
